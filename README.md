# Portfolio — Anderson Soares Martins

Site pessoal construído com [Astro](https://astro.build), TypeScript e Tailwind CSS v4. Sem framework de UI no cliente — apenas ilhas de JavaScript vanilla onde realmente há interatividade (tema, menu, spotlight nos cards, formulário de contato).

## Stack

- **Astro 7** — componentes `.astro`, roteamento por arquivo, i18n nativo (`pt` padrão, `en` em `/en`)
- **Tailwind CSS v4** — tema definido em `src/styles/global.css` via `@theme`
- **TypeScript**
- **Nodemailer** — envio do formulário de contato via `src/pages/api/contact.ts` (rota renderizada sob demanda, resto do site é estático)
- **Vercel adapter** (`@astrojs/vercel`)

## Estrutura

```
src/
  components/         componentes .astro reutilizáveis (Header, Footer, cards, seções)
  components/sections/  Hero, About, Stack, Projects, Experience, Contact
  content/            dicionários de conteúdo pt/en (texto real do site, sem fallback genérico)
  layouts/            BaseLayout com <head>, fontes e script de tema
  pages/              index.astro (pt) e en/index.astro (en)
  scripts/            interações vanilla JS (reveal, spotlight, menu, tema, form)
  styles/             global.css com os design tokens
```

## Desenvolvimento

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # astro check + astro build
pnpm preview
```

### Variáveis de ambiente

O formulário de contato usa Gmail via Nodemailer. Defina localmente em `.env` (não versionado):

```
EMAIL_USER=...
EMAIL_PASS=...
```

## Deploy

Hospedado na Vercel com o adapter oficial (`@astrojs/vercel`). O site é estático por padrão; apenas `src/pages/api/contact.ts` roda como função serverless (`export const prerender = false`).
