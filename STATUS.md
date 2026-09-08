# Status — AZLO site

State: ACTIVE — REFINAMENTO EM VALIDAÇÃO

## Objetivo

Site institucional da AZLO, focado em engenharia de IA, infraestrutura, automação, software, dados e tecnologia aplicada à saúde.

## Estado do refinamento

- Homepage condensada para posicionamento, problemas, trabalho selecionado, método, equipe e contato.
- LogosMed ganhou tratamento de projeto principal, com ciclo adaptativo e CTA externo.
- Projetos com conteúdo público suficiente ganharam cases estáticos em `/projetos/<slug>/`.
- Serviços reorganizados por fricção operacional, intervenção e próximo passo.
- Navegação mobile mantém fallback nativo e adiciona foco/Escape como progressive enhancement.
- Posições futuras não usam nomes fictícios.
- Branch de recuperação do estado anterior: `backup/pre-azlo-rework-20260908` (`779a873`).
- Branch de recuperação do início desta passada: `backup/pre-azlo-refinement-20260908`.

## Gate antes de produção

1. Lint, typecheck, testes e build devem passar.
2. Navegação, cases, links externos, mobile e desktop devem ser verificados em navegador.
3. Staging deve ser revisado para ausência de segredos e artefatos gerados.
4. A branch de refinamento deve ser enviada ao GitHub e o deploy de produção deve ser validado em `https://azlo.com.br`.

## Não fazer

Não publicar conteúdos de clientes, dados clínicos/pessoais, credenciais, endpoints internos ou vetores experimentais da marca.
