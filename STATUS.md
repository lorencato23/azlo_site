# Status — AZLO site

State: ACTIVE — REFORMA ENGINEERING / LABS EM VALIDAÇÃO LOCAL

## Objetivo

Transformar o site institucional da AZLO em uma organização de engenharia com duas faces complementares: AZLO / Engineering e AZLO / Labs, preservando identidade, URLs e o conteúdo público verificável.

## Reforma implementada

- Home reorganizada em hero, operation topology, Engineering, Labs, Work, método, equipe e contato.
- Linguagem visual dark-first com tokens de superfície, borda, texto, accent, estados e motion.
- Topologia abstrata de sistema e sete sigils SVG/CSS compartilhando a mesma gramática geométrica.
- `/labs/` criado com matriz de produtos e `/labs/<slug>/` criado com template reutilizável.
- Logos formalizado como `LOGOS`; a vertical médica pública aparece como `LOGOS / MED`.
- Odin aparece como `ODIN`; o nome técnico Odintool permanece apenas na descrição de proveniência.
- `/projetos/` ganhou filtros funcionais para PRODUCT, ENGINEERING, R&D e OPEN SOURCE.
- Engineering, Company, método, equipe atual e posições futuras foram reestruturados sem nomes fictícios.
- Sitemap estático e gerado, manifest e metadata foram atualizados para Labs e produtos.
- Registro do estado anterior preservado em `docs/audits/2026-09-22-pre-reform.md`.

## Validação local

- `npm run lint`: passou.
- `npx tsc --noEmit`: passou.
- `python3 -m unittest discover -s tests -v`: 16 testes passaram.
- `npm run build`: passou; 21 páginas estáticas geradas.
- Servidor local `npm run dev -- --hostname 127.0.0.1` respondeu HTTP 200.
- QA browser com Chromium do sistema: rotas públicas, uma rota de produto, uma rota de case, overflow desktop/mobile, H1 dentro do viewport, console/page errors e foco do menu mobile passaram.
- Auditoria visual desktop/mobile executada sobre screenshots locais.

## Gate antes de produção

1. Revalidar conteúdo/status dos produtos com aprovação humana antes da publicação.
2. Conferir o domínio e o deploy de produção em `https://azlo.com.br`.
3. Fazer revisão humana final de copy, contraste percebido e ordem de navegação.
4. Só então enviar a branch ao GitHub e publicar.

## Não fazer

Não publicar conteúdos de clientes, dados clínicos/pessoais, credenciais, endpoints internos ou vetores experimentais da marca. Não inventar métricas, clientes, funcionalidades, versões ou milestones.
