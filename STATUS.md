# Status — AZLO site

State: ACTIVE — REWORK EM VALIDAÇÃO

## Objetivo

Site institucional da AZLO, focado em engenharia de IA, infraestrutura, automação, software, dados e tecnologia aplicada à saúde.

## Estado do rework

- Nova arquitetura orientada por `src/data/site.ts`.
- Homepage e páginas de serviços, projetos, método/time e contato implementadas.
- Conteúdo público revisado para não expor dados internos, clientes, credenciais ou métricas não verificadas.
- Branch de recuperação do estado anterior: `backup/pre-azlo-rework-20260908` (`779a873`).
- O deploy anterior pode ser revertido na Vercel pelo deployment histórico, se necessário.

## Gate antes de produção

1. Lint, typecheck, testes e build devem passar.
2. Navegação, links externos, mobile e desktop devem ser verificados em navegador.
3. Staging deve ser revisado para ausência de segredos e artefatos gerados.
4. A branch de rework deve ser enviada ao GitHub e o deploy de produção deve ser validado em `https://azlo.com.br`.

## Não fazer

Não publicar conteúdos de clientes, dados clínicos/pessoais, credenciais, endpoints internos ou vetores experimentais da marca.
