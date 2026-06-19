# ⚡ JulioStudio.dev.br

![Deploy Status](https://img.shields.io/badge/Deploy-GitHub_Pages_Nativo-blue?logo=githubactions&logoColor=white)
![Hugo Version](https://img.shields.io/badge/SSG-Hugo_Extended-ff69b4?logo=hugo&logoColor=white)
![CSS Framework](https://img.shields.io/badge/CSS-Tailwind_v3-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

Repositório oficial do **JulioStudio**, um hub de alta performance focado em Linux, Open Source, Docker e Engenharia Web. O site é gerado estaticamente com Hugo, estilizado de forma híbrida com Tailwind CSS + PostCSS e estruturado com **zero lixo de código**, eliminando branches secundárias desnecessárias.

---

## 🚀 Estrutura Limpa do Projeto

Graças ao pipeline de CI/CD nativo, a pasta de produção é gerada apenas na memória do servidor do GitHub. O repositório local armazena única e exclusivamente o **código-fonte bruto**.

| Componente | Diretório | Função |
| :--- | :--- | :--- |
| **Conteúdo** | `content/` | Arquivos Markdown (`sobre.md`, `termos.md`, blog...) |
| **Estilos** | `assets/css/main.css` | Ponto de entrada do Tailwind CSS + Classes `.markdown-body` |
| **Layouts** | `layouts/` | Templates HTML estruturais e injeções semânticas |
| **Arquivos Estáticos** | `static/` | Mídia fixa, `robots.txt` e chaves de compliance |
| **Compilação (CI)** | `.github/workflows/` | Pipeline de deploy automatizado ultra-rápido |

---

## 🤖 Ingestão Automatizada (Ecossistema Bizumática)

O JulioStudio atua como um agregador inteligente de conteúdos selecionados do ecossistema principal.

### Sincronização de Artigos
O script local `./puxar_bizu.sh` realiza o seguinte fluxo de microsserviço:
1. Clona temporariamente o repositório legado/base.
2. Filtra posts por tags específicas (Performance, Linux, Desenvolvimento).
3. **Trava de Sobrescrita Ativa**: Não altera arquivos modificados manualmente no Studio.
4. **Fix Path**: Corrige em tempo de execução os caminhos internos de imagens via comandos `sed`.

```bash
chmod +x puxar_bizu.sh
./puxar_bizu.sh

```

---

## 🛠️ Ambiente de Desenvolvimento

### Executando Localmente

Para rodar o servidor de desenvolvimento com live-reload e compilação do Tailwind em tempo real:

```bash
hugo server -D

```

* Acesse o terminal local em: `http://localhost:1313`

### 🚀 Deploy Ultra-Fast (CI/CD Automático)

Não existem scripts manuais de deploy ou pastas clonadas como `/docs`. O deploy agora é **100% nativo**. Sempre que um push é efetuado na branch principal, o GitHub Actions assume o controle:

```bash
git add .
git commit -m "feat: seu commit aqui"
git push origin main

```

O container executa um clone raso (`fetch-depth: 1`), injeta o runtime do Node para o PostCSS, compila o HTML limpo com `hugo --gc --minify --cleanDestinationDir` e joga o artefato direto na API do GitHub Pages. **Tempo estimado de build: < 15 segundos.**

---

## 🎨 Recursos Técnicos e Otimizações

* **Tailwind Semântico**: Estilização do Markdown de páginas internas feita diretamente via `@apply` na classe `.markdown-body`, evitando o overhead de plugins de tipografia pesados.
* **KaTeX**: Suporte nativo e ultra-leve para equações e fórmulas matemáticas via `layouts/partials/math.html`.
* **Shortcodes Customizados**:
* `{{< bizu >}}`: Box de destaque para dicas e hacks rápidos de terminal.
* `{{< box >}}`: Container para alertas de arquitetura.


* **SEO & Ads Ready**: Estrutura preparada para indexação cirúrgica com geração automatizada de meta-tags.

---

## 📜 Licença

Distribuído sob a licença **MIT**. Veja o arquivo `LICENSE` para detalhes.

> *"No shell eu me encontro, no código eu me liberto."* — **JulioStudio**

```
