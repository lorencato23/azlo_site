# AZLO

Site institucional da AZLO: engenharia de IA, infraestrutura e software para fluxos reais — com atuação em sistemas clínicos, automação, dados e tecnologia aplicada à saúde.

## Stack

- Next.js 14 e React 18
- TypeScript
- CSS com tokens do Brand Book AZLO v4
- export estático para `out/`
- Fraunces e Hanken Grotesk self-hosted

## Estrutura

```text
src/
  app/                 # homepage e rotas estáticas
  components/site/     # shell, cards e elementos compartilhados
  data/site.ts         # fonte única de navegação, serviços, projetos e equipe
```

Páginas públicas:

- `/` — posicionamento, serviços, projetos, método e equipe
- `/servicos/` — escopos técnicos
- `/projetos/` — portfólio e estágio de cada iniciativa
- `/sobre/` — método e time
- `/contato/` — contato e orientação de segurança

## Desenvolvimento e verificação

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
python3 -m unittest discover -s tests -v
```

O projeto usa `output: "export"` em `next.config.mjs`. A Vercel executa `npm run build` e publica a saída estática.

## Conteúdo e privacidade

`src/data/site.ts` é a fonte de verdade para conteúdo público. Todo projeto precisa ter estágio e descrição factual; não inclua métricas não verificadas, dados de clientes, tokens, credenciais, IPs privados, endpoints internos ou previews de dados pessoais/clínicos.

O contato usa `mailto:` e não há coleta ou armazenamento de formulário no site.

## Integridade da marca

Os PNGs em `public/logos/azlo-*-real*.png` são os assets visuais aprovados. Vetorizações experimentais permanecem no acervo histórico em `extraido_290626/` e não devem ir para `public/` nem para o deploy.
