# AZLO

Site institucional da AZLO: saúde, tecnologia, educação e ciência conectadas por clareza, critério e construção.

## Stack

- Next.js 14 e React 18
- TypeScript
- Tailwind CSS
- export estático para `out/`
- Fraunces e Hanken Grotesk self-hosted

## Desenvolvimento

```bash
npm install
npm run dev
```

Verificação de produção:

```bash
npm run generate-assets
npm run lint
npx tsc --noEmit
npm run build
```

## Estrutura

- `src/app/` — layout, metadata, fontes e estilos globais
- `src/components/experience/` — experiência pública da homepage
- `public/logos/` — assinaturas raster aprovadas
- `scripts/generate-assets.mjs` — favicons e Open Graph derivados dos PNGs aprovados

## Integridade da marca

Os arquivos `public/logos/azlo-*-real*.png` são a fonte visual aprovada. Reconstruções experimentais `*100vetorial.svg` não são assets oficiais, são ignoradas pelo Git e não devem ser publicadas como vetores da marca.

## Deploy

O projeto usa `output: "export"` em `next.config.mjs`. A Vercel executa `npm run build` e publica a saída estática. Não há variáveis de ambiente obrigatórias nem analytics de terceiros.
