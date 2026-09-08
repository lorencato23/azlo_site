# AZLO

Site institucional da AZLO: engenharia de IA, infraestrutura e software para operações reais — com atuação em sistemas clínicos, automação, dados e tecnologia aplicada à saúde.

## Stack

- Next.js 14 e React 18
- TypeScript
- CSS com tokens do Brand Book AZLO v4
- export estático para `out/`
- Fraunces e Hanken Grotesk self-hosted

## Estrutura

```text
src/
  app/                 # homepage, páginas públicas e cases estáticos
  components/site/     # shell, navegação, cards, fluxos e cases
  data/site.ts         # fonte única de navegação, serviços, projetos e equipe
```

Páginas públicas:

- `/` — posicionamento, problemas, trabalho selecionado, método, equipe e contato
- `/servicos/` — problemas operacionais e escopos de intervenção
- `/projetos/` — portfólio e estágio de cada iniciativa
- `/projetos/<slug>/` — cases com contexto, intervenção, arquitetura e status
- `/sobre/` — método e equipe atual/expansão
- `/contato/` — conversa por e-mail e orientação de segurança

## Desenvolvimento e verificação

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
python3 -m unittest discover -s tests -v
```

O projeto usa `output: "export"` em `next.config.mjs`. A Vercel executa `npm run build` e publica a saída estática. Para inspecionar o export localmente, use um servidor estático, por exemplo:

```bash
python3 -m http.server 3100 --directory out
```

`npm run start` não é o fluxo de preview deste projeto porque o Next.js não inicia servidor de produção com `output: "export"`.

## Conteúdo e privacidade

`src/data/site.ts` é a fonte de verdade para conteúdo público. Todo projeto precisa ter estágio e descrição factual; cases só são gerados quando existe contexto, intervenção, arquitetura e status verificáveis. Não inclua métricas não verificadas, dados de clientes, tokens, credenciais, IPs privados, endpoints internos ou previews de dados pessoais/clínicos.

O contato usa `mailto:` e cópia local do e-mail; não há coleta ou armazenamento de formulário no site.

## Integridade da marca

Os PNGs em `public/logos/azlo-*-real*.png` são os assets visuais aprovados. Vetorizações experimentais permanecem no acervo histórico em `extraido_290626/` e não devem ir para `public/` nem para o deploy.
