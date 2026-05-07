---

### 📂 Contexto de Projeto: Julio_Studio (v2)

**Objetivo:** Website pessoal e engine de Landing Pages focado em alta performance, minimalismo e estética "Terminal/Cyberpunk".

**Stack Tecnológica:**
* **SSG:** Hugo (v0.160.1+ Extended)
* **CSS:** Tailwind CSS v4 (Alpha/Latest) + PostCSS
* **Search:** Pagefind (Grep Style UI)
* **CI/CD:** GitHub Actions (Deploy automático para GitHub Pages com domínio customizado)
* **Estética:** Dark Mode (#050505), Glassmorphism, Font Mono, Destaques em Orange-500.

**Estado Atual:**
1.  **CSS:** Consolidado em `assets/css/main.css` usando `@import "tailwindcss";` e camadas (`@layer`).
2.  **LPs:** Sistema de "Factory" implementado via Script Bash (`new_lp.sh`) e Archetypes, gerando orçamentos semi-automatizados.
3.  **Search:** Modal de busca "Grep" integrado com Pagefind UI, disparado pelo atalho `/`.
4.  **Matemática:** Suporte a KaTeX integrado para renderização de fórmulas científicas.

---

### 🌳 Estrutura de Diretórios (Tree)

```text
.
├── ./assets
│   ├── ./assets/css/main.css  <-- CSS Consolidado (Tailwind v4)
│   └── ./assets/js/main.js
├── ./content
│   ├── ./content/blog/        <-- Artigos Técnicos
│   └── ./content/lp/          <-- Landing Pages de Clientes
├── ./layouts
│   ├── ./layouts/_default/    <-- Baseof e Singles
│   ├── ./layouts/lp/          <-- Templates Single/List p/ Landing Pages
│   ├── ./layouts/partials/    <-- Componentes (head, search, cta_hub)
│   └── ./layouts/shortcodes/  <-- UI Helpers (bizu, box)
├── ./postcss.config.js        <-- Config de plugins (tailwindcss/postcss)
├── ./tailwind.config.js       <-- Config de tema e conteúdo
├── ./package.json             <-- Dependências (Tailwind v4, PostCSS CLI)
├── ./new_lp.sh                <-- Automação de criação de LPs
└── .github/workflows/deploy.yml
```

---

### 🛠️ Guia de Continuidade
* **Domínio:** `juliostudio.dev.br`
* **Repo:** `https://github.com/bizumatica/julio-studio`
* **Foco Próximo:** [Descreva aqui se quer focar em conteúdo, novas funcionalidades de UI ou SEO].

---