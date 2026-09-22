# AZLO

Site institucional da AZLO: uma organização de engenharia que projeta sistemas para operações reais e constrói instrumentos próprios em Labs.

## Arquitetura de marca

- **AZLO / ENGINEERING** — sistemas clínicos, IA integrada, infraestrutura & dados e automação.
- **AZLO / LABS** — MNEMUSA, THOTH, LOGOS, ODIN, ANUBIS, HERMES e ATLAS.
- Produtos permanecem subordinados à marca AZLO; páginas públicas usam assinaturas como `AZLO / LABS / MNEMUSA`.

## Stack

- Next.js 14 e React 18
- TypeScript com App Router
- CSS global tokenizado em `src/app/globals.css`
- export estático para `out/`
- Fraunces e Hanken Grotesk self-hosted; a interface usa Hanken como display/body e uma pilha monospace para metadados

## Estrutura

```text
src/
  app/                 # home, Engineering, Labs, Work, Company e rotas de produto/case
  components/site/     # shell, navegação, sigils, cards, filtros e templates
  data/site.ts         # fonte única de marca, serviços, produtos, projetos e equipe
docs/audits/           # registros locais de estado e decisões de reforma
```

## Páginas públicas

- `/` — posicionamento, topologia, Engineering, Labs, Work, método, equipe e contato
- `/servicos/` — módulos AZLO / Engineering
- `/labs/` — matriz de produtos próprios e sistemas experimentais
- `/labs/<slug>/` — template reutilizável de produto
- `/projetos/` — Work com filtros Product, Engineering, R&D e Open Source
- `/projetos/<slug>/` — cases com contexto, intervenção, arquitetura e estado
- `/sobre/` — método, equipe atual e expansão seletiva da capacidade
- `/contato/` — formulário local e conversa por e-mail, com limites de segurança

## Desenvolvimento e verificação

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
python3 -m unittest discover -s tests -v
```

O projeto usa `output: "export"` em `next.config.mjs`. A Vercel executa `npm run build` e publica a saída estática. Para inspecionar o export localmente, use:

```bash
python3 -m http.server 3100 --directory out
```

`npm run start` não é o fluxo de preview deste projeto porque o Next.js não inicia servidor de produção com `output: "export"`.

## Conteúdo, status e proveniência

`src/data/site.ts` é a fonte de verdade para conteúdo público. Cada projeto e produto precisa ter descrição factual, domínio e estado explicitamente delimitados. Versões e milestones só aparecem quando existem no material operacional verificado; o restante é marcado como sem versão pública, incubating ou concept.

O contato usa `mailto:` e cópia local do e-mail; não há coleta ou armazenamento de formulário no site.

## Identidade visual

A interface é dark-first, com superfícies midnight navy, bordas técnicas, grids sutis, azul frio como sinal e verde apenas para estados operacionais positivos. SVG/CSS são usados para topologia e sigils; não há imagens stock, partículas, fake terminal ou efeitos globais.

Os tokens principais vivem em `src/app/globals.css` e são espelhados em `tailwind.config.ts`: `bg`, `surface`, `surfaceElevated`, `border`, `textPrimary`, `textSecondary`, `textMuted`, `accent`, `success`, `warning`, espaçamento, raios e durações.

Os PNGs em `public/logos/azlo-*-real*.png` são os assets visuais aprovados. Vetorizações experimentais permanecem no acervo histórico em `extraido_290626/` e não devem ir para `public/` nem para o deploy.
