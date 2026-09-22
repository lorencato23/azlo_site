# AZLO site — estado inicial da reforma

Data: 2026-09-22
Branch: `feat/azlo-engineering-rework`

## Estado Git antes da reforma

Alterações locais preservadas, não criadas por esta reforma:

- `src/data/site.ts`
- `tests/test_site.py`

Não foram executados `reset`, `clean`, checkout forçado, commit ou push.

## Stack e execução

- Next.js 14.2.35 + React 18 + TypeScript
- App Router em `src/app/`
- CSS global em `src/app/globals.css`, com tokens parcialmente formalizados
- componentes reutilizáveis em `src/components/site/`
- conteúdo central em `src/data/site.ts`
- export estático (`output: "export"`) para `out/`
- fontes locais Fraunces e Hanken Grotesk
- assets aprovados em raster preservados em `public/logos/`

## Rotas públicas existentes

- `/`
- `/servicos/`
- `/projetos/`
- `/projetos/<slug>/`
- `/sobre/`
- `/contato/`
- `sitemap.xml` e `robots.txt` gerados pelo App Router/configuração atual

## Componentes reutilizáveis identificados

`SiteHeader`, `MobileNav`, `SiteFooter`, `SectionIntro`, `ServiceCard`, `ProjectCard`, `ProjectCase`, `TeamCard`, `CopyEmailButton` e ícones SVG em `Icons.tsx`.

## Validação inicial

- `npm run lint`: passou, sem warnings ou erros
- `npx tsc --noEmit`: passou
- `python3 -m unittest discover -s tests -v`: 16 testes passaram

## Limites preservados

- Não alterar `node_modules/`, `.next/`, `out/` manualmente.
- Não publicar assets vetoriais experimentais do acervo histórico.
- Não inventar funcionalidades, métricas, versões, clientes ou status.
- Preservar URLs existentes e alterações locais anteriores.
