#!/usr/bin/env bun
/**
 * Generador de imágenes con Gemini Nano Banana.
 *
 * Uso:
 *   GEMINI_API_KEY=xxx bun scripts/gen-image.ts "<prompt>" <nombre-archivo> [modelo] [imagen-referencia]
 *
 * Ejemplos:
 *   bun scripts/gen-image.ts "isometric illustration of AI agents collaborating, dark background, neon teal accents, ultra detailed" agents.png
 *   bun scripts/gen-image.ts "abstract neural network, cyan and purple gradient" cover.png
 *   bun scripts/gen-image.ts "..." out.png gemini-3-pro-image-preview public/tip02-tools.png
 *
 * El archivo se guarda en public/<nombre-archivo>.
 * Después referencia la imagen en slides.md como: /nombre-archivo
 */

import { writeFile, mkdir, readFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { existsSync } from "node:fs";

// Bun auto-carga .env del cwd. Si no está, intentamos en directorios padres.
async function loadEnvIfMissing() {
  if (process.env.GEMINI_API_KEY) return;
  const candidates = [
    resolve(import.meta.dir, "..", ".env"),
    resolve(import.meta.dir, "..", "..", ".env"),
    resolve(import.meta.dir, "..", "..", "..", ".env"),
  ];
  for (const path of candidates) {
    if (!existsSync(path)) continue;
    const content = await readFile(path, "utf8");
    for (const line of content.split("\n")) {
      const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/i);
      if (!m) continue;
      const [, k, vRaw] = m;
      const v = vRaw.replace(/^["']|["']$/g, "");
      if (!process.env[k]) process.env[k] = v;
    }
    if (process.env.GEMINI_API_KEY) break;
  }
}
await loadEnvIfMissing();

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("❌ Falta GEMINI_API_KEY. Obtenla en https://aistudio.google.com/apikey");
  process.exit(1);
}

const [, , prompt, filename = "generated.png", modelArg, refImageArg] = process.argv;

if (!prompt) {
  console.error('Uso: bun scripts/gen-image.ts "<prompt>" <archivo.png> [modelo] [imagen-referencia]');
  console.error("Modelos: gemini-2.5-flash-image (default) | gemini-3.1-flash-image-preview | gemini-3-pro-image-preview");
  process.exit(1);
}

const MODEL = modelArg || "gemini-2.5-flash-image";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const parts: Array<{ text?: string; inlineData?: { mimeType: string; data: string } }> = [
  { text: prompt },
];

if (refImageArg) {
  const refPath = resolve(refImageArg);
  if (!existsSync(refPath)) {
    console.error(`❌ Imagen de referencia no encontrada: ${refPath}`);
    process.exit(1);
  }
  const refBuf = await readFile(refPath);
  const ext = refPath.toLowerCase().split(".").pop();
  const mimeType =
    ext === "jpg" || ext === "jpeg" ? "image/jpeg" :
    ext === "webp" ? "image/webp" :
    "image/png";
  parts.push({ inlineData: { mimeType, data: refBuf.toString("base64") } });
  console.log(`📎 Referencia: ${refPath}`);
}

console.log(`🎨 Generando "${filename}" con ${MODEL}...`);
console.log(`   Prompt: ${prompt.slice(0, 100)}${prompt.length > 100 ? "..." : ""}`);

const res = await fetch(`${ENDPOINT}?key=${API_KEY}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    contents: [{ parts }],
    generationConfig: { responseModalities: ["IMAGE"] },
  }),
});

if (!res.ok) {
  const errText = await res.text();
  console.error(`❌ API error ${res.status}:`, errText.slice(0, 500));
  process.exit(1);
}

const data = await res.json() as {
  candidates?: Array<{
    content?: { parts?: Array<{ inlineData?: { mimeType: string; data: string } }> };
  }>;
};

const responseParts = data.candidates?.[0]?.content?.parts ?? [];
const imagePart = responseParts.find((p) => p.inlineData);

if (!imagePart?.inlineData) {
  console.error("❌ No vino imagen en la respuesta.");
  console.error("Respuesta cruda:", JSON.stringify(data).slice(0, 800));
  process.exit(1);
}

const outPath = resolve(import.meta.dir, "..", "public", filename);
await mkdir(dirname(outPath), { recursive: true });
const buf = Buffer.from(imagePart.inlineData.data, "base64");
await writeFile(outPath, buf);

const sizeKB = (buf.length / 1024).toFixed(1);
console.log(`✅ Guardada en public/${filename} (${sizeKB} KB)`);
console.log(`   En slides.md usa: image: /${filename}`);
