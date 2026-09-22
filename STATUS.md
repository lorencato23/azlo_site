# Status — AZLO site

State: ACTIVE — CONSOLIDAÇÃO ENGINEERING / LABS EM VALIDAÇÃO E PUBLICAÇÃO

## Objetivo

Transformar o site institucional da AZLO em uma organização de engenharia com duas faces complementares: AZLO / Engineering e AZLO / Labs, preservando identidade, URLs e o conteúdo público verificável.

## Reforma consolidada

- Home organizada em hero, operation topology conectada, Engineering, Labs, Work, método, equipe e contato.
- CTA principal do hero direciona para `Descrever um problema`; Labs permanece como exploração secundária.
- Linguagem visual dark-first com tokens de superfície, borda, texto, accent, estados e motion.
- Topologia operacional com fluxo explícito `OPERATION → SIGNAL → CONTEXT → INTERVENTION → FEEDBACK`, incluindo recomposição vertical no mobile.
- Sete sigils SVG compartilhando a mesma gramática geométrica.
- `/labs/` criado com matriz de produtos e `/labs/<slug>/` com template reutilizável.
- Logos formalizado como `LOGOS`; a vertical médica pública aparece como `LOGOS / MED`.
- Odin aparece como `ODIN`; o nome técnico Odintool permanece apenas na descrição de proveniência.
- Work distingue produtos, Engineering, R&D e Open Source, com contexto e estado atual nos cards.
- Hierarquia pública consolidada para `ATLAS / ANA`, `HERMES / AGENT` e `HERMES / OFFICE`.
- `/sobre/` mantém a equipe atual em primeiro plano e substitui pseudo-vagas por uma nota de expansão seletiva.
- `/contato/` ganhou formulário local que prepara uma mensagem `mailto:` sem backend, armazenamento ou coleta automática.
- As URLs antigas `/servicos/` e `/projetos/` permanecem canônicas para Engineering e Work, sem criar aliases que o export estático não consiga servir como redirect HTTP.
- Sitemap estático e gerado, manifest e metadata permanecem alinhados ao domínio `azlo.com.br`.
- Registro do estado anterior preservado em `docs/audits/2026-09-22-pre-reform.md`.

## Auditoria de produção

- Produção em `https://azlo.com.br` foi reaberta antes da edição.
- HTML inicial contém a arquitetura semântica: Engineering, Labs, MNEMUSA, THOTH, LOGOS, ODIN, ANUBIS, HERMES e ATLAS.
- Rotas públicas, canonical, sitemap, robots, headers e console foram verificados.
- O deployment publicado correspondeu ao conteúdo novo; o fetch externo com navegação antiga foi classificado como snapshot/cache anterior, não como ausência de SSR.
- O HTML entregue contém o conteúdo essencial sem depender de interação client-side.

## Validação local

- `npm run lint`: passou.
- `npx tsc --noEmit`: passou.
- `python3 -m unittest discover -s tests -v`: 19 testes passaram.
- `npm run build`: passou; 21 páginas estáticas geradas.
- QA browser com Chromium do sistema: rotas públicas, overflow desktop/mobile, H1 dentro do viewport, console/page errors e foco do menu mobile passaram.
- QA do formulário de contato: validação nativa, campos obrigatórios, overflow mobile e console passaram.
- HTML server-rendered local: arquitetura essencial e campos do formulário presentes no export.
- Auditoria visual desktop/mobile executada sobre screenshots da versão consolidada.

## Deploy

A versão publicada anteriormente continua em produção enquanto esta segunda passada aguarda novo deploy explícito. O commit da consolidação deve ser criado antes da publicação para preservar rollback e rastreabilidade.

## Não fazer

Não publicar conteúdos de clientes, dados clínicos/pessoais, credenciais, endpoints internos ou vetores experimentais da marca. Não inventar métricas, clientes, funcionalidades, versões ou milestones.
