# 🐶 JulioStudio.dev.br

![Status](https://img.shields.io/badge/Status-Ativo-brightgreen)
![Hugo](https://img.shields.io/badge/SSG-Hugo-ff69b4?logo=hugo)
![License](https://img.shields.io/badge/License-MIT-blue)

Repositório oficial do **JulioStudio**, um hub de conteúdo focado em Linux, Open Source, Docker e Matemática. O site utiliza o gerador estático Hugo e é otimizado para performance e simplicidade.

---

## 🚀 Estrutura do Projeto

O projeto segue a arquitetura padrão do Hugo, com output configurado para a pasta `docs/` para compatibilidade com hosting.

| Componente | Localização | Função |
| :--- | :--- | :--- |
| **Posts** | `content/blog/` | Conteúdo original em Markdown |
| **Estilos** | `assets/custom.css` | Personalização visual e UI |
| **Layouts** | `layouts/` | Templates HTML (Single, List, Partials) |
| **Imagens** | `static/images/posts/` | Assets de mídia dos artigos |
| **Build** | `docs/` | Pasta de produção (não editar manualmente) |

---

## 🤖 Automação e Sincronização

Diferente de um blog estático comum, o JulioStudio atua como um agregador de conteúdos do ecossistema **Bizumática**.

### Sincronização de Conteúdo
O script `./puxar_bizu.sh` realiza o seguinte fluxo:
1. Clona o repositório legado/base do Bizumática.
2. Filtra posts por categorias (Performance, Linux, Matemática).
3. **Trava de Sobrescrita**: Não altera arquivos que já existem no Studio.
4. **Fix Path**: Corrige automaticamente as URLs de imagens via `sed`.

```bash
chmod +x puxar_bizu.sh
./puxar_bizu.sh

```

---

## 🛠️ Desenvolvimento

### Executando Localmente

Para visualizar as alterações em tempo real (incluindo rascunhos):

```bash
hugo server -D

```

Acesse em: `http://localhost:1313`

### Deploy

O deploy é automatizado via script para garantir que o build reflita no diretório `/docs`:

```bash
./deploy.sh

```

---

## 🎨 Recursos Técnicos

* **KaTeX**: Suporte nativo a fórmulas matemáticas via `layouts/partials/math.html`.
* **Shortcodes**:
* `{{< bizu >}}`: Box para dicas rápidas e macetes.
* `{{< box >}}`: Container de destaque visual.


* **SEO**: Sitemap e Robots.txt gerados automaticamente a cada build.

---

## 📜 Licença

Distribuído sob a licença **MIT**. Veja `LICENSE` para mais informações.

> *"No shell eu me encontro, no código eu me liberto."* — **JulioStudio**