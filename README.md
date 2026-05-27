<div align="center">

# 🤖 12 cosas que tienes que saber si quieres dedicarte a la programación agéntica

> Una charla sobre cómo dejar de pelearte con tus agentes y empezar a producir con ellos.

[![Slidev](https://img.shields.io/badge/built%20with-Slidev-3AB9D4?style=flat-square&logo=vue.js&logoColor=white)](https://sli.dev/)
[![Node](https://img.shields.io/badge/node-%3E%3D20.12-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Docker](https://img.shields.io/badge/docker-ready-2496ED?style=flat-square&logo=docker&logoColor=white)](./Dockerfile)
[![GHCR](https://img.shields.io/badge/image-ghcr.io-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/victoraguilarc/agentic-programming/pkgs/container/agentic-programming)

</div>

---

## ✨ ¿De qué va esto?

Un deck en **[Slidev](https://sli.dev/)** con las 12 ideas que —después de mucho ensayo y error— me parecen no-negociables si vas a vivir de la programación agéntica en 2026.

No es teoría. Son cosas que ojalá alguien me hubiera dicho antes.

---

## 🚀 Quick start

```bash
pnpm install      # instala dependencias
pnpm dev          # abre la presentación en http://localhost:3030
```

> 💡 ¿No tienes `pnpm`? Cualquier gestor sirve: `npm`, `yarn` o `bun install` también funcionan.

---

## 🧰 Requisitos

| Herramienta | Versión |
|---|---|
| **Node.js** | `>= 20.12.0` |
| **pnpm** *(recomendado)* | `>= 9` |
| **Docker** *(opcional, para deploy)* | `>= 24` |

---

## 🎬 Scripts disponibles

| Comando | Qué hace |
|---|---|
| `pnpm dev` | Levanta el dev server con hot-reload (`slidev --open`) |
| `pnpm build` | Compila el deck estático a `./dist` |
| `pnpm export` | Exporta a **PDF** |
| `pnpm export-pptx` | Exporta a **PowerPoint** |
| `pnpm gen-image` | Genera imágenes con el script de `scripts/` |

> El primer `export` instala Playwright/Chromium si no lo tienes. Es normal, déjalo hacer.

---

## ⌨️ Atajos durante la presentación

| Tecla | Acción |
|:---:|---|
| <kbd>F</kbd> | Pantalla completa |
| <kbd>O</kbd> | Vista *overview* de todos los slides |
| <kbd>D</kbd> | Modo dibujo encima del slide |
| <kbd>P</kbd> | Modo **presenter** (notas + timer) |
| <kbd>→</kbd> <kbd>←</kbd> <kbd>Space</kbd> | Navegar |

> Para controlar los slides desde el móvil: `slidev --remote` y abre la URL que te imprime.

---

## 🐳 Deploy con Docker

Hay un `Dockerfile` multi-stage (build con Node, runtime con nginx) listo para producción.

```bash
# Build & run local
docker compose up -d --build

# Visita http://localhost:8080
```

### 📦 Imagen pre-construida (vía GitHub Actions)

Cada push a `main` publica automáticamente en GHCR:

```bash
docker pull ghcr.io/victoraguilarc/agentic-programming:latest
```

### 🌀 Deploy en Portainer

1. *Stacks* → *Add stack* → **Web editor**
2. Pega el contenido de [`docker-compose.yml`](./docker-compose.yml)
3. *Deploy the stack* ✅

El stack viene endurecido por defecto: `read_only`, `no-new-privileges`, capabilities mínimas, healthcheck y límites de CPU/memoria.

---

## 📂 Estructura del repo

```
agentic-programming/
├── slides.md                       # ← el deck completo (edita aquí)
├── public/                         # imágenes locales y assets
├── scripts/
│   └── gen-image.ts                # generador de imágenes
├── Dockerfile                      # multi-stage, nginx + non-root
├── nginx.conf                      # SPA fallback + headers de seguridad
├── docker-compose.yml              # stack hardened para Portainer
└── .github/workflows/
    └── docker-publish.yml          # CI/CD a GHCR (multi-arch)
```

---

## 🎨 Personalización

- **Tema** → cambia `theme:` en el frontmatter del `slides.md` (`seriph`, `apple-basic`, `default`, `bricks`, …)
- **Imágenes** → mételas en `public/` y referencia como `/mi-imagen.jpg`
- **Notas del speaker** → los `<!-- ... -->` al final de cada slide aparecen en *presenter mode*

---

## 🎤 Tips para el día de la charla

> [!TIP]
> 1. Practica en **presenter mode** (<kbd>P</kbd>) — verás notas y timer.
> 2. Exporta un **PDF de backup** por si el wifi te traiciona.
> 3. Si vas a hacer demo en vivo de Claude Code / Cursor, ten un **repo de juguete** listo.
> 4. Llega 15 min antes a probar el HDMI. Siempre. Sin excepción.

---

<div align="center">

**Hecho con ❤️ y agentes.**

</div>
