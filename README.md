# AZLO

AZLO é uma marca-mãe em construção para projetos nas interseções entre saúde,
tecnologia, educação e ciência.

Hoje, a AZLO não é uma holding nem uma clínica. O foco atual é desenvolver
soluções, organizar informação, criar ferramentas e colaborar por meio de
assessoria e consultoria. As quatro frentes representam direções de longo prazo,
não quatro empresas em operação.

## Frentes

- **AZLO Health** — soluções, informação e organização de projetos em saúde.
  Não oferece atendimento clínico no estágio atual.
- **AZLO Labs** — pequenos softwares, automações, IA aplicada e ferramentas.
- **AZLO Education** — ensino, videoaulas e materiais educacionais; frente em formação.
- **AZLO Science** — pesquisa, escrita e divulgação científica; frente em formação.

## Estrutura do repositório

```text
.
├── .claude/launch.json              # servidor local configurado
├── extraido_290626/
│   ├── site/                        # landing page estática atual
│   ├── brand-assets-safe/           # gerado pelo construtor de ativos
│   ├── _vetorizacao_experimental_nao_aprovada/
│   ├── _substituidos_por_100vetorial/
│   ├── _descartados_antigos/
│   └── documentos .docx             # histórico de marca e publicação
├── tests/                            # verificações automatizadas
└── tools/generate_azlo_full_vector.py
```

## Executar o site

Requisito: Python 3.

Na raiz do projeto:

```bash
python -m http.server 3000 --directory extraido_290626/site
```

Depois, abrir:

```text
http://127.0.0.1:3000/
```

O arquivo `.claude/launch.json` executa esse mesmo comando.

## Testes

```bash
python -m unittest discover -s tests -v
```

As verificações cobrem:

- posicionamento honesto da marca;
- ausência das métricas clínicas fictícias antigas;
- progressive enhancement das animações;
- comportamento acessível do menu;
- referências locais do site;
- geração segura dos ativos de marca;
- configuração de execução do projeto.

## Logo: fonte de verdade

A fonte de verdade visual, por enquanto, são os PNGs aprovados:

```text
extraido_290626/site/assets/azlo-logo-real.png
extraido_290626/site/assets/azlo-logo-real-white.png
extraido_290626/site/assets/azlo-symbol-real.png
extraido_290626/site/assets/azlo-symbol-real-white.png
```

A tentativa anterior de vetorizar a marca por IA alterou a geometria do símbolo
e as letras da wordmark. Esses arquivos foram preservados apenas como histórico em
`extraido_290626/_vetorizacao_experimental_nao_aprovada/` e não devem ser usados
como master.

O script `tools/generate_azlo_full_vector.py` foi mantido por compatibilidade de
nome, mas não inventa mais paths. Ele gera contêineres SVG híbridos fiéis aos PNGs
aprovados e um manifesto explícito de status:

```bash
python tools/generate_azlo_full_vector.py
```

Saída padrão:

```text
extraido_290626/brand-assets-safe/
```

Esses SVGs híbridos preservam a aparência, mas **não são vetores integrais**. Uma
versão 100% vetorial só deve substituir os PNGs quando houver master redesenhado e
aprovado visualmente por um designer.

## Contato

O site mantém `mailto:contato@azlo.com.br` por simplicidade nesta fase. O botão
abre o aplicativo de e-mail do visitante; não há backend, armazenamento ou envio
automático.

Antes de publicar, confirmar:

- funcionamento real da caixa `contato@azlo.com.br`;
- URL canônica e URL absoluta da imagem Open Graph;
- política de privacidade quando houver coleta por backend;
- analytics somente quando existir uma hipótese de medição clara;
- revisão do texto sempre que o estágio das frentes mudar.

## Status atual

- Landing page: funcional e responsiva.
- Health e Labs: campos atuais de construção de soluções.
- Education e Science: horizontes em formação.
- Atendimento médico pela AZLO: não oferecido atualmente.
- Vetor integral aprovado: pendente.
- Formulário com backend: pendente; `mailto` mantido intencionalmente.
