# 12 cosas que tienes que saber si quieres dedicarte a la programación agéntica

Charla técnica construida con [Slidev](https://sli.dev/).

## Requisitos
- **Node.js >= 20.12.0**
- `pnpm`, `npm`, `yarn` o `bun` (cualquiera vale)

## 1) Instalar dependencias
Desde la carpeta del proyecto:

```bash
cd agentic-programming-talk

# Recomendado
pnpm install

# o
npm install
```

## 2) Levantar el dev server (modo presentación)
```bash
pnpm dev
# alias de: slidev --open
```
Esto abre la presentación en `http://localhost:3030`.

Atajos útiles:
- `f` → pantalla completa
- `o` → vista overview de todos los slides
- `d` → modo dibujo encima del slide
- `p` → modo presenter (notas + timer)
- `→ / ←` o `space` → navegar

## 3) Exportar a PDF / PPTX / PNG
```bash
# PDF (default)
pnpm export

# PPTX (PowerPoint)
pnpm export-pptx

# Imágenes PNG
npx slidev export --format png
```
El primer export instala Playwright/Chromium si no lo tienes.

## 4) Build estático (para subir a Vercel/Netlify/GH Pages)
```bash
pnpm build
# salida en ./dist
```
Luego sirve `dist/` con cualquier static host:
```bash
npx serve dist
```

## 5) Modo presenter remoto
```bash
slidev --remote
```
Te da una URL para controlar los slides desde el móvil.

## Estructura
```
agentic-programming-talk/
├── slides.md          # ← el deck completo (edita aquí)
├── package.json
├── README.md
└── public/            # imágenes locales si las añades
```

## Personalizar
- **Tema**: cambia `theme: seriph` en el frontmatter (`apple-basic`, `default`, `bricks`, etc.).
- **Imágenes**: las URLs apuntan a Unsplash. Para usarlas offline, descárgalas a `public/` y referencia como `/nombre.jpg`.
- **Notas del speaker**: están en los comentarios `<!-- ... -->` al final de cada slide y aparecen en presenter mode (`p`).

## Tips para la charla
1. Practica en presenter mode (`p`) — verás notas y timer.
2. Exporta el PDF de backup por si falla el wifi.
3. Si vas a hacer demo en vivo de Claude Code/Cursor, ten un repo de juguete listo.

---
Hecho con ❤️ y agentes.


-----
1. Tools que tienes que conocer en 2026
2. Cognitive Debt
3. Plan primero ejecucion despues.
