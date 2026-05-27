---
theme: seriph
background: /cover.png
title: 12 cosas que tienes que saber si quieres dedicarte al desarrollo de software
info: |
  ## Programación Agéntica en 2026
  Tips & tools para programadores en la era de los agentes de IA.

  Una charla técnica para devs que quieren dominar el nuevo paradigma.
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Poppins'
  serif: 'Poppins'
  mono: 'JetBrains Mono'
  weights: '300,400,500,600,700'
  italic: false
colorSchema: dark
---

<div class="bg-black/55 backdrop-blur-sm rounded-2xl px-12 py-10 inline-block border border-white/10 shadow-2xl">

<div class="text-xs font-mono opacity-60 mb-3 tracking-widest">// CHARLA TÉCNICA · 2026</div>

# 12 cosas que tienes que saber si quieres dedicarte al desarrollo <span class="line-through" style="color:#f87171;-webkit-text-fill-color:#f87171;background:none">web</span> <span style="color:#4ade80;-webkit-text-fill-color:#4ade80;background:none">agéntico</span>

## Tip & tools para programadores

<div class="mt-6 flex items-center justify-center gap-3 text-xs font-mono opacity-70">
  <span class="inline-block w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
  <span>$ ./start-talk.sh</span>
</div>

</div>

<div class="abs-bl m-8 flex items-center gap-3 text-left">
  <div class="w-12 h-12 rounded-full bg-cover bg-center shadow-lg ring-2 ring-white/20" style="background-image: url(./speaker.jpeg)"></div>
  <div>
    <div class="text-sm font-semibold">Victor Aguilar C.</div>
    <div class="text-xs opacity-60 font-mono">// CTO - LLamitAI</div>
  </div>
</div>

<div class="abs-br m-8 text-xs font-mono opacity-50">
  press <kbd class="px-1.5 py-0.5 rounded bg-white/10 border border-white/20">space</kbd> →
</div>

<!--
- Bienvenida. Vamos a hablar de cómo cambió el oficio del dev en los últimos 18 meses.
- Si vienen pensando en una charla de IA: mala noticia, es sobre cómo no morir en el intento.
- Datos para tirar: Cursor cruzó 100k users de pago en 2025. Claude Code creció 10x en 6 meses. >50% de PRs en GitHub ya tienen al menos una línea generada por IA.
- Anécdota: Cognition AI levantó $175M en 2024 con la demo de Devin. Semanas después un YouTuber la acusó de cherry-picked. La industria entera está aprendiendo en público.
- Joke: "Si tu agente te asusta, es porque no le has configurado los hooks."
- Empezamos.
-->

---
layout: center
class: text-center
---

# El paradigma cambió

<div class="text-2xl opacity-80 pt-4">
De <span class="text-red-400 line-through">escribir código</span> a <span class="text-green-400 font-bold">dirigir agentes</span>
</div>

<div class="pt-12 grid grid-cols-3 gap-8 text-left text-sm">
  <div>
    <div class="text-3xl">🧠</div>
    <strong>Pensar como arquitecto</strong>
    <div class="opacity-70">No como mecanógrafo</div>
  </div>
  <div>
    <div class="text-3xl">🤖</div>
    <strong>Orquestar agentes</strong>
    <div class="opacity-70">Paralelos, especializados</div>
  </div>
  <div>
    <div class="text-3xl">🔁</div>
    <strong>Iterar con evals</strong>
    <div class="opacity-70">Medir antes de optimizar</div>
  </div>
</div>

<!--
- 24 meses cambiaron el oficio más que los 24 años anteriores.
- "Ya no es 'no sé programar', ahora es 'mi agente no sabe programar'."
- El dev mediano teclea menos código, revisa más. Más tiempo en PRs, menos en VS Code.
- Anécdota: Karpathy acuñó "vibe coding" en X a inicios de 2025. Su tweet "There's a new kind of coding I call vibe coding..." se hizo viral. Hoy todo el mundo lo usa.
- Tease: 12 reglas que la comunidad (X, Reddit, GitHub, YouTube) aprendió a base de golpes.
-->

---
layout: image-right
image: /tip01-prompting.png
---

# 01 · Un prompt vago genera código vago

El prompt **es el código fuente** de tu agente.

- Da **rol, objetivo, restricciones y formato** de salida.
- Usa ejemplos negativos: *"NO hagas X porque Y"*.
- Pide planes antes de cambios destructivos.
- Itera el prompt como iterarías una función.

<div class="mt-4 p-3 bg-black/30 rounded text-xs">
💡 <strong>Patrón:</strong> Role → Context → Task → Constraints → Output format
</div>

<div class="mt-3 text-xs italic opacity-45 font-mono">
// "hazlo bonito" no es un prompt.
</div>

<!--
- Prompt vago = código vago. También = bug que aparece solo en prod.
- Patrón Role → Context → Task → Constraints → Output: lo usan OpenAI cookbook, Anthropic, casi todos los frameworks de agentes.
- Truco oro: pide PLAN antes de cambios destructivos. "No escribas código, dame el plan en bullets."
- Anécdota: Pieter Levels (@levelsio) construye SaaS en vivo en X usando solo Cursor/Claude. Su patrón: prompts cortos pero explícitos sobre constraints. "Hazlo bonito" nunca funcionó para él.
- Joke: "Le dije 'arregla el bug'. Me arregló todos. También los que no eran bugs."
-->

---
layout: image-left
image: /tip02-tools.png
---

# 02 · No te cases con una sola herramienta

El ecosistema agéntico **2026** se mueve cada semana.

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

  <div class="p-3 bg-orange-500/10 rounded flex items-center gap-3">
    <simple-icons-claude class="text-3xl shrink-0 text-orange-400" />
    <div>
      <strong>Claude Code</strong>
      <div class="opacity-70 text-xs">CLI agéntico, hooks, MCP</div>
    </div>
  </div>

  <div class="p-3 bg-slate-500/10 rounded flex items-center gap-3">
    <simple-icons-sst class="text-3xl shrink-0 text-amber-400" />
    <div>
      <strong>OpenCode</strong>
      <div class="opacity-70 text-xs">Terminal AI agent, open-source</div>
    </div>
  </div>

  <div class="p-3 bg-emerald-500/10 rounded flex items-center gap-3">
    <simple-icons-openai class="text-3xl shrink-0 text-emerald-300" />
    <div>
      <strong>Codex</strong>
      <div class="opacity-70 text-xs">OpenAI agent runner</div>
    </div>
  </div>

  <div class="p-3 bg-blue-500/10 rounded flex items-center gap-3">
    <simple-icons-googlegemini class="text-3xl shrink-0 text-blue-400" />
    <div>
      <strong>Antigravity</strong>
      <div class="opacity-70 text-xs">Google's agentic IDE</div>
    </div>
  </div>

</div>

<div class="text-xs mt-3 opacity-70">
Regla: usa la herramienta adecuada al modo (síncrono vs async, local vs cloud).
</div>

<div class="mt-3 text-xs italic opacity-45 font-mono">
// tu IDE favorito de hoy es el legacy de mañana.
</div>

<!--
- 30+ herramientas agénticas serias en 2026. Olvídate de probar todas.
- Cubre 3 ejes: terminal (Aider/Claude Code), IDE (Cursor/Cline), async/cloud (Devin/Codex/Jules).
- Datos: Cursor a $9B valuation, Claude Code 10x en 6 meses, Aider sigue siendo el favorito de los puristas.
- Anécdota: thread famoso en r/cursor: "switched from Copilot to Cursor to Aider in one week". La rotación de herramientas es real, no te ancles a una.
- Joke: "Mi setup ideal: Claude Code para arquitectura, Cursor para refactors largos, vim para llorar."
-->

---
layout: image-left
image: /tip03-context.png
---

# 03 · El contexto importa más que el prompt

> El cuello de botella ya no es el modelo. **Es el contexto que le metes.**

### ❌ Anti-patrones
- Pegar todo el repo "por si acaso"
- Logs sin filtrar de 10k líneas
- Mezclar 3 tareas en un solo turno

### ✅ Best practices
- `CLAUDE.md` / `.cursorrules` curados
- Sub-agentes con contexto aislado
- **Comprimir** outputs grandes antes de leer

<div class="mt-3 p-2 bg-blue-500/10 rounded text-xs">
🔑 El agente es tan bueno como el contexto que recibe.
</div>

<div class="mt-3 text-xs italic opacity-45 font-mono">
// pegar el repo entero no es contexto, es ansiedad.
</div>

<!--
- El modelo dejó de ser el cuello de botella a mediados de 2025.
- Paper "Lost in the middle" (Liu et al, 2024): la precisión cae drásticamente cuando pasas el 50% del context window.
- Si tu agente alucina, pregúntate PRIMERO: "¿qué contexto le di?"
- Anécdota: paper "Lost in the middle" (Liu et al, Stanford 2023) demostró que los modelos olvidan info del medio del contexto. Sigue siendo cierto en 2026 con context windows de millones de tokens.
- Joke: "Pegar el repo entero es como ir al doctor y leerle todo tu diario."
-->

---
layout: image-right
image: /tip04-mcp.png
---

# 04 · Los MCPs son las APIs de los agentes

**Model Context Protocol** estandariza cómo los agentes hablan con tools, datos y APIs.

<div class="text-xs opacity-80 mt-2">Los más usados para desarrollo:</div>

<div class="grid grid-cols-4 gap-2 mt-2 text-[10px]">

  <div class="p-2 bg-slate-500/10 rounded flex items-center gap-2">
    <simple-icons-github class="text-lg shrink-0" />
    <div>
      <strong>GitHub</strong>
      <div class="opacity-60">PRs, issues, repos</div>
    </div>
  </div>

  <div class="p-2 bg-indigo-500/10 rounded flex items-center gap-2">
    <simple-icons-linear class="text-lg shrink-0 text-indigo-300" />
    <div>
      <strong>Linear</strong>
      <div class="opacity-60">Tickets, sprints</div>
    </div>
  </div>

  <div class="p-2 bg-sky-500/10 rounded flex items-center gap-2">
    <simple-icons-postgresql class="text-lg shrink-0 text-sky-300" />
    <div>
      <strong>Postgres</strong>
      <div class="opacity-60">Queries, schema</div>
    </div>
  </div>

  <div class="p-2 bg-emerald-500/10 rounded flex items-center gap-2">
    <simple-icons-playwright class="text-lg shrink-0 text-emerald-300" />
    <div>
      <strong>Playwright</strong>
      <div class="opacity-60">Browser, e2e</div>
    </div>
  </div>

  <div class="p-2 bg-purple-500/10 rounded flex items-center gap-2">
    <simple-icons-sentry class="text-lg shrink-0 text-purple-300" />
    <div>
      <strong>Sentry</strong>
      <div class="opacity-60">Errores, traces</div>
    </div>
  </div>

  <div class="p-2 bg-pink-500/10 rounded flex items-center gap-2">
    <simple-icons-figma class="text-lg shrink-0 text-pink-300" />
    <div>
      <strong>Figma</strong>
      <div class="opacity-60">Specs de UI</div>
    </div>
  </div>

  <div class="p-2 bg-zinc-500/10 rounded flex items-center gap-2">
    <simple-icons-notion class="text-lg shrink-0" />
    <div>
      <strong>Notion</strong>
      <div class="opacity-60">Docs, RFCs</div>
    </div>
  </div>

  <div class="p-2 bg-teal-500/10 rounded flex items-center gap-2">
    <simple-icons-supabase class="text-lg shrink-0 text-teal-300" />
    <div>
      <strong>Supabase</strong>
      <div class="opacity-60">DB + auth</div>
    </div>
  </div>

</div>

<div class="mt-3 p-2 bg-purple-500/20 rounded text-xs">
🛠️ Escribir un server MCP en TS/Python: <strong>una tarde</strong>. Reusable en Claude, Cursor, Cline, Zed…
</div>

<div class="mt-2 text-xs italic opacity-45 font-mono">
// aprender MCP hoy es como aprender REST en 2010.
</div>

<!--
- MCP es a 2025-26 lo que REST fue a 2010. Spec abierta liberada por Anthropic en noviembre 2024.
- Soportada por Cursor, ChatGPT, Cline, VS Code, Zed, Claude Code... y subiendo.
- MCPs reales hoy: Postgres, Linear, Notion, Figma, GitHub, Sentry, Slack. La lista crece cada semana.
- Truco: 1 MCP server = capacidad reusable en TODOS los clientes. Apalanca tu tiempo de dev.
- Anécdota: Anthropic liberó MCP en noviembre 2024. Cursor lo adoptó, después ChatGPT, después VS Code y Zed. En 6 meses pasó de "proyecto experimental" a estándar de facto.
- Joke: "Aprende MCP hoy y en 2027 pones 'MCP since 2025' en LinkedIn con superpoderes."
-->

---
layout: image-left
image: /tip05-thinking.png
---

# 05 · No delegues el pensamiento crítico

El agente ejecuta el **cómo**. Tú decides el **qué** y el **por qué**.

<div class="grid grid-cols-2 gap-2 mt-3 text-[10px]">

  <div class="p-2 bg-emerald-500/10 rounded">
    <div class="font-semibold mb-1 text-xs">✅ Lo que SÍ delegas</div>
    <ul class="leading-tight space-y-0 list-disc pl-3.5 opacity-90">
      <li>Boilerplate y patrones repetidos</li>
      <li>Migraciones mecánicas</li>
      <li>Búsqueda y exploración del repo</li>
      <li>Hacer pasar tests existentes</li>
      <li>Refactors con scope cerrado</li>
    </ul>
  </div>

  <div class="p-2 bg-red-500/10 rounded">
    <div class="font-semibold mb-1 text-xs">🚫 Lo que NUNCA delegas</div>
    <ul class="leading-tight space-y-0 list-disc pl-3.5 opacity-90">
      <li>Decisiones de arquitectura</li>
      <li>Trade-offs producto vs deuda</li>
      <li>Qué shipear y qué cortar</li>
      <li>Priorización del backlog</li>
      <li><em>"El agente lo decidió"</em> no es justificación</li>
    </ul>
  </div>

</div>

<div class="mt-4 p-2 bg-yellow-500/10 rounded text-xs">
🧭 Si cerraste un PR sin saber <strong>por qué</strong> tomaste cada decisión, ya delegaste demasiado.
</div>

<div class="mt-3 text-xs italic opacity-45 font-mono">
// el agente no firma el postmortem. Tú sí.
</div>

<!--
- El agente es brutal ejecutando el CÓMO. El QUÉ y el POR QUÉ siguen siendo tuyos.
- Delega lo mecánico (boilerplate, refactors guiados, hacer pasar tests). Reserva criterio: arquitectura, trade-offs, priorización.
- "El agente lo decidió" no es excusa en un postmortem. La firma sigue siendo tuya.
- Diferencia con Tip 12: aquí hablamos de decisiones UPSTREAM (qué construir). Tip 12 es DOWNSTREAM (verificar lo construido).
- Anécdota: equipos que dejaron al agente decidir arquitectura de microservicios en 2025 reportaron en r/ExperiencedDevs costos 3x mayores 6 meses después. El modelo optimiza local; tú optimizas global.
- Joke: "Le pregunté al agente si valía la pena ese refactor. Dijo que sí. También dice que sí a todo."
-->

---
layout: image-left
image: /tip06-git.png
---

# 06 · Los agentes viven en branches, no en main

El agente **vive en branches**, no en tu main.

- 🌳 **Worktrees** → un agente por feature en paralelo
- 🔀 Branch por tarea, commit atómico
- 🤖 Auto-commits con mensajes generados (revisados)
- 📝 PRs como contrato: descripción + test plan
- 🚫 Nunca `--force` ni `--no-verify` sin pensar

<div class="mt-4 p-2 bg-green-500/10 rounded text-xs">
💡 <code>git worktree add ../feature-x</code> + agente dedicado = paralelismo sin merge hell.
</div>

<div class="mt-3 text-xs italic opacity-45 font-mono">
// el día que un agente toque main sin permiso, llora.
</div>

<!--
- Worktrees = kill feature para paralelizar agentes. Aprendelo si no lo tienes en el repertorio.
- `git worktree add ../feat-x` → tienes 5 carpetas, 5 agentes, 0 conflictos de merge.
- Reglas: 1 agente = 1 branch, PRs cortos, merges manuales tuyos.
- Anécdota: caso conocido de Replit (2024): un agente borró la DB de producción durante un despliegue. Costoso recordatorio de que los agentes NUNCA deben tocar main directamente.
- Joke: "El día que un agente haga force-push a main, llora. Y dale una cerveza a tu DevOps."
-->

---
layout: default
---

# 07 · El prompt te da demos, el tooling productos

## Hooks, slash commands y skills son tus superpoderes

Tu agente debe **adaptarse a tu repo**, no al revés.

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 bg-orange-500/10 rounded">

### 🪝 Hooks
Eventos del ciclo: `PreToolUse`, `PostToolUse`, `Stop`.

*Ej:* bloquear `rm -rf`, lint automático.

</div>

<div class="p-3 bg-blue-500/10 rounded">

### ⚡ Slash commands
Workflows reusables: `/review`, `/deploy`, `/ship`.

*Ej:* `/test` corre suite + reporta cobertura.

</div>

<div class="p-3 bg-purple-500/10 rounded">

### 🧠 Skills/Agents
Capacidades específicas con sus propias tools.

*Ej:* `code-reviewer`, `migration-auditor`.

</div>

</div>

<div class="mt-4 p-2 bg-teal-500/10 rounded text-[11px]">
<strong>🔗 Dónde sacar configs listas:</strong>
<div class="grid grid-cols-2 gap-x-3 gap-y-1 mt-1 opacity-90">

  <div>· <a href="https://claudemarketplaces.com" class="text-teal-300 underline">claudemarketplaces.com</a> — marketplace directorio</div>
  <div>· <a href="https://awesome-skills.com" class="text-teal-300 underline">awesome-skills.com</a> — skills + plugins curados</div>
  <div>· <a href="https://github.com/claude-market/marketplace" class="text-teal-300 underline">claude-market/marketplace</a> — open source</div>
  <div>· <a href="https://skills.sh" class="text-teal-300 underline">skills.sh</a> — directorio de skills</div>
  <div>· <a href="https://www.autoskills.sh" class="text-teal-300 underline">autoskills.sh</a> — skills auto-generadas</div>
  <div>· <a href="https://aitmpl.com" class="text-teal-300 underline">aitmpl.com</a> — templates AI listos</div>
</div>
</div>

<div class="mt-2 text-xs italic opacity-45 font-mono">
// el dev sin hooks repite el mismo prompt 40 veces al día.
</div>

<!--
- Hooks: scripts antes/después de tool calls. PreToolUse para bloquear (rm -rf, force push), PostToolUse para automatizar (lint, format).
- Slash commands: tus shortcuts. `/review`, `/deploy`, `/test`. Definidos en `.claude/commands/`.
- Skills: capacidades especializadas con tools propias (Claude Code 2.x).
- Setup una vez, recuperas horas cada semana.
- Anécdota: power users de Claude Code reportan en X 30-50% menos repetición de instrucciones después de configurar hooks + skills. ROI directo en horas/semana.
- Joke: "Configura tus hooks una vez. Después vives en la suite con margaritas mientras tu agente hace PRs."
-->

---
layout: image-right
image: /tip08-sandbox.png
---

# 08 · El agente no tiene miedo, y ese es el problema

## Revisa qué permisos le das a tu agente

Un agente con `bash` sin restricciones **es un loaded gun**.

- Define modos: `read-only`, `auto-accept`, `plan-only`
- Whitelist de comandos en vez de blacklist
- Container/VM aislada para auto-ejecución
- Secrets fuera del contexto (`.env` ignorado)
- Nunca permitas `curl | sh` ciego

<div class="mt-3 p-2 bg-red-500/10 rounded text-xs">
⚠️ Casos reales en r/ClaudeAI: agentes borrando <code>node_modules</code>... y un poco más.
</div>

<div class="mt-3 text-xs italic opacity-45 font-mono">
// `rm -rf` no entiende de buenas intenciones.
</div>

<!--
- r/ClaudeAI tiene historias de horror reales: agentes corriendo rm -rf, dropeando tablas, haciendo force push.
- Modos típicos: read-only (safe demo), auto-accept (productivo), plan-only (paranoico).
- Auto-ejecución → Docker o devcontainers. Aísla el blast radius.
- Truco: whitelist > blacklist. Define qué SÍ puede hacer, no qué NO.
- Anécdota: r/ClaudeAI tiene threads donde agentes borraron node_modules + .git (sí, .git), hicieron force-push a main porque "el commit anterior estaba mal", y leakearon API keys en commits. Sin sandbox, no hay vuelta atrás.
- Joke: "rm -rf no es maligno. Es muy eficiente."
-->

---
layout: image-left
image: /tip10-evals.png
---

# 09 · El agente suena convincente… incluso cuando se equivoca

## Debes diseñar tu feedback loop & tests

El agente **siempre va a sonar convincente**. Necesitas algo que no mienta: los tests.

<div class="grid grid-cols-3 gap-2 mt-3">

  <div class="p-2 bg-red-500/10 rounded">
    <div class="text-sm mb-0.5">1️⃣</div>
    <div class="font-semibold text-xs leading-tight">Escribe el test primero</div>
    <div class="opacity-70 text-[10px] leading-tight mt-1">Define qué cuenta como "hecho". Sin esto, el agente decide por ti.</div>
  </div>

  <div class="p-2 bg-yellow-500/10 rounded">
    <div class="text-sm mb-0.5">2️⃣</div>
    <div class="font-semibold text-xs leading-tight">Pásalo como spec</div>
    <div class="opacity-70 text-[10px] leading-tight mt-1">"Implementa hasta que pase este test. No toques nada más."</div>
  </div>

  <div class="p-2 bg-green-500/10 rounded">
    <div class="text-sm mb-0.5">3️⃣</div>
    <div class="font-semibold text-xs leading-tight">Revisa el diff, no cada línea</div>
    <div class="opacity-70 text-[10px] leading-tight mt-1">Si los tests pasan y el diff tiene sentido, listo.</div>
  </div>

</div>

<div class="mt-4 p-2 bg-blue-500/10 rounded text-xs">
✅ Los agentes son <strong>monstruos</strong> haciendo verde un test. Dales el test y suéltalos.
</div>

<div class="mt-3 text-xs italic opacity-45 font-mono">
// sin tests, le diste al agente tarjeta de crédito sin límite.
</div>

<!--
- Los agentes son monstruos haciendo verde un test. Aprovéchalo.
- Patrón: tú escribes el test (o lo defines), el agente lo hace pasar. Tú revisas el diff final.
- Truco crítico: "no toques otros archivos, solo el de implementación".
- Anécdota: Steve Yegge (Sourcegraph) escribió en 2025 que "los tests son la única señal que NO miente al agente". Si pasan, pasaron. Si no, no. Todo lo demás es opinión.
- Joke: "Le pasé un test al agente. Lo hizo pasar. También lo hizo pasar comentándolo. Pequeño detalle."
-->

---
layout: image-left
image: /tip10-single-agent.png
---

# 10 · Más agentes no siempre es mejor

## Empieza con uno. Mide. Solo escala cuando se justifique.

<div class="mt-2 p-2 bg-purple-500/15 rounded text-xs">
📊 <strong>Princeton NLP (2026):</strong> un solo agente <strong>igualó o superó</strong> a multi-agentes en <strong>64%</strong> de benchmarks con mismas tools y contexto.
</div>

<div class="grid grid-cols-2 gap-2 mt-3 text-[10px]">

  <div class="p-2 bg-red-500/10 rounded">
    <div class="font-semibold mb-1 text-xs">🔥 Por qué fallan</div>
    <ul class="leading-tight space-y-0 list-disc pl-3.5 opacity-90">
      <li>Coordinación: <strong>4–15x</strong> más tokens</li>
      <li>Contexto se pierde en cada handoff</li>
      <li>Debugging exponencial: 5 agentes = 5 logs</li>
      <li>Race conditions y deadlocks reales</li>
      <li>Más superficie de error, no menos</li>
    </ul>
  </div>

  <div class="p-2 bg-emerald-500/10 rounded">
    <div class="font-semibold mb-1 text-xs">✅ Cuándo SÍ multi-agente</div>
    <ul class="leading-tight space-y-0 list-disc pl-3.5 opacity-90">
      <li>Fan-out: tareas independientes, sin orden</li>
      <li>Scope cerrado por agente</li>
      <li>Output no acumulativo</li>
      <li>Roles muy especializados</li>
      <li>Tienes evals que justifican el costo</li>
    </ul>
  </div>

</div>

<div class="mt-3 text-xs italic opacity-45 font-mono">
// si 5 agentes son la solución, talvez el problema es el prompt.
</div>

<!--
- Hype 2024-25: "todo problema se resuelve con más agentes". Cierto a veces, falso a menudo.
- Princeton NLP (2026): paper canónico que rompió el mito. 64% de benchmarks: single agent ≥ multi-agent con mismas tools y contexto.
- Costo real: 4-15x más tokens por coordinación, context loss en handoffs, debugging exponencial (5 agentes = 5 logs cruzados).
- Cuándo SÍ paralelizar: fan-out (búsquedas independientes), tareas con scope cerrado, output no acumulativo. NO en cualquier tarea compleja.
- Heurística: empieza con un agente + buenos tools. Mide. Solo escala a multi-agente cuando una métrica (latencia, throughput, calidad) lo pide.
- Anécdota: muchos equipos en 2025 montaron arquitecturas multi-agente elaboradas para tareas que un Claude Code con sub-agentes ad-hoc resolvía igual o mejor.
- Diferencia con Tip 03 (contexto): aquí hablamos de ARQUITECTURA del sistema, no del prompt.
- Joke: "Cinco agentes con poco contexto no equivalen a uno con contexto bien curado. Lo cobra Anthropic al final del mes."
-->

---
layout: image-right
image: /tip11-cognitive-debt.png
---

# 11 · El código funciona… pero nadie sabe por qué

## La deuda cognitiva también se paga

Cada línea que mergeaste sin entender es una **mina enterrada**.

<div class="grid grid-cols-2 gap-2 mt-3 text-[10px]">

  <div class="p-2 bg-red-500/10 rounded">
    <div class="font-semibold mb-1 text-xs">🕳️ Síntomas</div>
    <ul class="leading-tight space-y-0 list-disc pl-3.5 opacity-90">
      <li>PRs gigantes que nadie puede explicar</li>
      <li><em>"Funciona, pero no toques"</em> en el código</li>
      <li>Bug en prod → nadie sabe dónde empezar</li>
      <li>Devs nuevos no logran onboardearse</li>
      <li>El agente es el único que "lo entiende"</li>
    </ul>
  </div>

  <div class="p-2 bg-emerald-500/10 rounded">
    <div class="font-semibold mb-1 text-xs">🧱 Cómo pagar la deuda</div>
    <ul class="leading-tight space-y-0 list-disc pl-3.5 opacity-90">
      <li>Lee el diff hasta poder explicarlo</li>
      <li>Documenta el <strong>por qué</strong> en el PR</li>
      <li>PRs pequeños, scope cerrado</li>
      <li>Code review como aprendizaje, no trámite</li>
      <li>Pide al agente que te explique lo que generó</li>
    </ul>
  </div>

</div>

<div class="mt-4 p-2 bg-yellow-500/10 rounded text-xs">
📉 Velocidad alta + comprensión cero = colapso en 6 meses.
</div>

<div class="mt-3 text-xs italic opacity-45 font-mono">
// si tu repo lo entiende solo el agente, ya no es tu repo.
</div>

<!--
- La deuda técnica se paga en refactors. La deuda cognitiva se paga en pánico durante el incidente.
- Aceptar PRs sin entenderlos te da velocidad HOY y te quita capacidad de reaccionar MAÑANA.
- Síntoma claro: cuando algo se rompe en prod, nadie sabe por dónde empezar porque "lo escribió el agente".
- Antídoto: si no puedes explicar el diff línea por línea, no lo mergees. Pide al agente que te lo explique antes de aprobarlo.
- Anécdota: thread en r/ExperiencedDevs (2025) — equipo que shippeó 200 PRs generados con agentes en un trimestre. Mes 7: incidente en prod, ningún dev podía explicar el módulo afectado. Tuvieron que pedirle al agente que lo re-explicara desde cero.
- Joke: "El código se autodocumenta. El agente también. El problema es que ninguno de los dos contesta a las 3am."
-->

---
layout: image-right
image: /tip12-trust.png
---

# 12 · Tu agente confía. Tú no deberías.

## La cadena de suministro ahora pasa por tu agente

En 2026, el agente **fetcha, instala y ejecuta** — sin paranoia, sin contexto.

<div class="grid grid-cols-2 gap-2 mt-3 text-[10px]">

  <div class="p-2 bg-red-500/10 rounded">
    <div class="font-semibold mb-1 text-xs">🕷️ Vectores reales</div>
    <ul class="leading-tight space-y-0 list-disc pl-3.5 opacity-90">
      <li>Paquetes npm/pip hijackeados</li>
      <li>MCP servers con backdoors</li>
      <li>Prompt injection en READMEs / issues</li>
      <li>Typosquatting de deps alucinadas</li>
      <li>Docs fetcheadas como vector</li>
    </ul>
  </div>

  <div class="p-2 bg-emerald-500/10 rounded">
    <div class="font-semibold mb-1 text-xs">🛡️ Defensa objetiva</div>
    <ul class="leading-tight space-y-0 list-disc pl-3.5 opacity-90">
      <li>Pin versiones · lockfiles obligatorios</li>
      <li>Audita código del MCP antes de conectar</li>
      <li><code>install</code> solo con tu aprobación</li>
      <li>Fetch externo en sandbox aislado</li>
      <li>Trata todo input externo como hostil</li>
    </ul>
  </div>

</div>

<div class="mt-3 p-2 bg-yellow-500/10 rounded text-xs">
⚠️ Casos 2025-26: xz utils, npm rugpulls, MCP servers filtrando tokens, prompt injection vía GitHub issues.
</div>

<div class="mt-3 text-xs italic opacity-45 font-mono">
// el agente no distingue un README útil de uno envenenado.
</div>

<!--
- 2026 = el año en que los atacantes entendieron que el agente es el target ideal: confía por default, ejecuta lo que se le diga.
- Vectores reales: xz utils (backdoor en utilidad de compresión, 2024), paquetes npm con post-install scripts maliciosos, MCP servers que filtran .env, prompt injection vía issues de GitHub.
- Typosquatting agéntico: el agente "alucina" un nombre de paquete → atacante registra ese nombre → cuando el agente lo sugiere, ya estás comprometido.
- Defensa NO es "no uses MCPs". Es "audita el código del MCP como auditarías una dependencia crítica de producción".
- Diferencia con Tip 08: Tip 08 = agente haciendo daño accidental (rm -rf). Tip 12 = actores externos atacándote VÍA el agente.
- Anécdota 2025: thread viral en HN mostró cómo un agente instaló un paquete typosquatted que filtró .env del repo. 4 minutos de "ayúdame con esto" a leak total.
- Joke: "El agente confía. El atacante también — sabe exactamente lo que hace. Solo tú deberías dudar."
-->

---
layout: center
class: text-center
---

# FDSE: El rol que convierte promesas en producto

## Forward Deployed Software Engineer

<div class="text-sm opacity-85 pt-2 max-w-3xl mx-auto">
Vive con el cliente, traduce su realidad a sistemas, y cierra el gap entre <em>"la demo funciona"</em> y <em>"está en producción generando valor"</em>.
</div>

<div class="text-xs opacity-70 pt-4 uppercase tracking-widest">Lo que tiene que aprender</div>

<div class="pt-3 grid grid-cols-4 gap-3 text-left max-w-5xl mx-auto">

  <div class="p-3 bg-teal-500/10 rounded flex items-start gap-2">
    <carbon-chat-bot class="text-xl shrink-0 text-teal-300 mt-0.5" />
    <div>
      <div class="font-semibold text-xs">Prompting & agentes</div>
      <div class="opacity-60 text-[10px] mt-0.5">Dirigir, orquestar, no teclear.</div>
      <div class="text-[9px] text-teal-300/80 font-mono mt-1">Claude Code · Cursor · Codex</div>
    </div>
  </div>

  <div class="p-3 bg-sky-500/10 rounded flex items-start gap-2">
    <carbon-plug class="text-xl shrink-0 text-sky-300 mt-0.5" />
    <div>
      <div class="font-semibold text-xs">MCP & integraciones</div>
      <div class="opacity-60 text-[10px] mt-0.5">Conectar agentes a APIs y datos.</div>
      <div class="text-[9px] text-sky-300/80 font-mono mt-1">MCP · n8n · LangChain</div>
    </div>
  </div>

  <div class="p-3 bg-emerald-500/10 rounded flex items-start gap-2">
    <carbon-chart-line class="text-xl shrink-0 text-emerald-300 mt-0.5" />
    <div>
      <div class="font-semibold text-xs">Evals & métricas</div>
      <div class="opacity-60 text-[10px] mt-0.5">Medir calidad, no solo features.</div>
      <div class="text-[9px] text-emerald-300/80 font-mono mt-1">Braintrust · Langfuse · OTel</div>
    </div>
  </div>

  <div class="p-3 bg-purple-500/10 rounded flex items-start gap-2">
    <carbon-network-3 class="text-xl shrink-0 text-purple-300 mt-0.5" />
    <div>
      <div class="font-semibold text-xs">System design</div>
      <div class="opacity-60 text-[10px] mt-0.5">Arquitectura para producción real.</div>
      <div class="text-[9px] text-purple-300/80 font-mono mt-1">Postgres · Redis · Kafka</div>
    </div>
  </div>

  <div class="p-3 bg-amber-500/10 rounded flex items-start gap-2">
    <carbon-cloud class="text-xl shrink-0 text-amber-300 mt-0.5" />
    <div>
      <div class="font-semibold text-xs">DevOps & deploy</div>
      <div class="opacity-60 text-[10px] mt-0.5">CI/CD, observability, sandboxing.</div>
      <div class="text-[9px] text-amber-300/80 font-mono mt-1">Docker · GH Actions · Terraform</div>
    </div>
  </div>

  <div class="p-3 bg-red-500/10 rounded flex items-start gap-2">
    <carbon-security class="text-xl shrink-0 text-red-300 mt-0.5" />
    <div>
      <div class="font-semibold text-xs">Security & compliance</div>
      <div class="opacity-60 text-[10px] mt-0.5">Datos del cliente, permisos, auditoría.</div>
      <div class="text-[9px] text-red-300/80 font-mono mt-1">Clerk · Snyk · Doppler</div>
    </div>
  </div>

  <div class="p-3 bg-pink-500/10 rounded flex items-start gap-2">
    <carbon-events class="text-xl shrink-0 text-pink-300 mt-0.5" />
    <div>
      <div class="font-semibold text-xs">Domain del cliente</div>
      <div class="opacity-60 text-[10px] mt-0.5">Hablar su negocio, no solo el ticket.</div>
      <div class="text-[9px] text-pink-300/80 font-mono mt-1">Linear · Notion · Loom</div>
    </div>
  </div>

  <div class="p-3 bg-indigo-500/10 rounded flex items-start gap-2">
    <carbon-rocket class="text-xl shrink-0 text-indigo-300 mt-0.5" />
    <div>
      <div class="font-semibold text-xs">Ship velocity</div>
      <div class="opacity-60 text-[10px] mt-0.5">De demo a prod en días, no meses.</div>
      <div class="text-[9px] text-indigo-300/80 font-mono mt-1">Vercel · Railway · Fly.io</div>
    </div>
  </div>

</div>

<div class="pt-5 text-xs italic opacity-50 font-mono">
// el rol más buscado en 2025 era "AI engineer" ahora el que va crediendo es FDSE.
</div>

<!--
- FDSE = Forward Deployed Software Engineer. Rol popularizado por Palantir, hoy adoptado por OpenAI, Anthropic, scale-ups B2B.
- No es un consultor. No es un SRE. Es un dev senior embebido con el cliente que toma el modelo + tooling y lo convierte en producto operando.
- Por qué importa en 2026: los modelos están comoditizados, el cuello de botella es la INTEGRACIÓN con el negocio real.
- Skills: prompting + arquitectura + comunicación con stakeholders no técnicos + velocidad de iteración.
- Anécdota: OpenAI publicó job postings de FDSE con salarios $300-500k base en 2025. Anthropic y Cohere siguieron. Es el rol con mayor crecimiento de demanda en startups AI-first.
- Joke: "El FDSE es el dev que sabe que 'funciona en mi laptop' tampoco funciona en la del cliente."
-->

---
layout: center
class: text-center
---

# Gracias 🙌

<div class="text-lg opacity-90 pt-4">
PD: estos slides los hizo un agente.<br/>
Yo solo aprobé el PR. 🤖✅
</div>

<div class="pt-8 text-sm opacity-70 font-mono">
$ git commit -m "fin de la charla"
</div>

<div class="pt-8 text-xs opacity-50">
¿Preguntas? · Si no sé la respuesta, le pregunto a mi agente.
</div>
