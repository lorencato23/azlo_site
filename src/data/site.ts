export type ProjectStatus = "CLOSED BETA" | "OPEN SOURCE" | "R&D" | "RELEASE CANDIDATE";
export type WorkType = "PRODUCT" | "ENGINEERING" | "R&D" | "OPEN SOURCE";
export type ProductSlug = "mnemusa" | "thoth" | "logos" | "odin" | "anubis" | "hermes" | "atlas";
export type ProductStatus = "INCUBATING" | "FOUNDATION" | "CLOSED BETA" | "R&D" | "CONCEPT";

export type Service = {
  index: string;
  module: string;
  title: string;
  problem: string;
  intervention: string;
  capabilities: string[];
  nextStep: string;
};

export type ProjectCase = {
  problem: string;
  intervention: string;
  architecture: string[];
  statusDetail: string;
  boundary?: string;
};

export type Project = {
  slug: string;
  aliases?: string[];
  category: WorkType;
  workType: WorkType;
  status: ProjectStatus;
  title: string;
  summary: string;
  tags: string[];
  externalUrl?: string;
  caseStudy?: ProjectCase;
  featured?: boolean;
};

export type LabProduct = {
  slug: ProductSlug;
  name: string;
  title: string;
  domain: string;
  status: ProductStatus;
  distribution?: "OPEN SOURCE";
  description: string;
  shortDescription: string;
  version?: string;
  problem: string;
  system: string;
  architecture: string[];
  currentState?: { version: string; label: string }[];
  roadmap?: string[];
  related: ProductSlug[];
};

export type TeamMember = {
  name: string;
  role: string;
  expertise: string[];
  initials: string;
  linkedin?: string;
};

export const site = {
  name: "AZLO",
  description: "Engenharia de sistemas, IA, software e infraestrutura para operações reais.",
  email: "contato@azlo.com.br",
  url: "https://azlo.com.br",
};

export const navigation = [
  { href: "/servicos", label: "Engenharia", shortLabel: "Engenharia" },
  { href: "/labs", label: "Labs", shortLabel: "Labs" },
  { href: "/projetos", label: "Projetos", shortLabel: "Projetos" },
  { href: "/sobre#method", label: "Método", shortLabel: "Método" },
];

export const services: Service[] = [
  {
    index: "01",
    module: "SISTEMAS & SAÚDE",
    title: "Sistemas clínicos que travam a operação",
    problem: "HIS, integrações e rotinas internas que concentram retrabalho, perda de contexto ou manutenção difícil.",
    intervention: "Diagnóstico técnico, evolução de fluxos e integração de sistemas para hospitais e clínicas privadas.",
    capabilities: ["HIS e workflows clínicos", "Integrações e automação", "Infraestrutura e sistemas internos"],
    nextStep: "Discutir um sistema clínico",
  },
  {
    index: "02",
    module: "IA & CONHECIMENTO",
    title: "Conhecimento disperso e decisões lentas",
    problem: "Informação existe, mas não chega com contexto, permissão e rastreabilidade ao momento de uso.",
    intervention: "IA integrada ao workflow, com modelos, RAG, agentes e bases de conhecimento definidos a partir do ambiente real.",
    capabilities: ["LLMs e agentes", "RAG e bancos vetoriais", "Inferência local e APIs"],
    nextStep: "Discutir uma hipótese de IA",
  },
  {
    index: "03",
    module: "INFRAESTRUTURA & DADOS",
    title: "Infraestrutura que precisa ser operável",
    problem: "Servidores, dados e serviços crescem sem uma camada clara de observação, manutenção e decisão.",
    intervention: "Arquitetura de infraestrutura e dados para VPS, cloud, ambientes privados e hardware pertencente à organização.",
    capabilities: ["VPS e servidores privados", "Dados e observabilidade", "Pipelines e ambientes isolados"],
    nextStep: "Discutir infraestrutura e dados",
  },
  {
    index: "04",
    module: "AUTOMAÇÃO",
    title: "Processos repetitivos sem rastreabilidade",
    problem: "Equipes repetem tarefas, trocam contexto entre ferramentas e dependem de rotinas que não deixam trilha clara.",
    intervention: "Software sob medida, bots e automações desenhados para permissões, integrações e revisão de quem responde pela operação.",
    capabilities: ["Ferramentas internas", "Integrações e automações", "Assistentes empresariais"],
    nextStep: "Discutir uma automação",
  },
];

export const products: LabProduct[] = [
  {
    slug: "mnemusa",
    name: "MNEMUSA",
    title: "Motor de memória para agentes",
    domain: "INFRAESTRUTURA DE AGENTES",
    status: "INCUBATING",
    version: "v0.10.0",
    shortDescription: "Memória para agentes com eventos imutáveis, proveniência e recuperação explicável.",
    description: "A versão alpha v0.10.0 conclui o roadmap principal. A continuação está em experimento local e não faz parte desta versão. O projeto segue em incubação, sem licença definida; não use com dados reais nem em produção.",
    problem: "Agentes precisam recuperar contexto sem perder a origem, o tempo ou a distinção entre um evento e uma afirmação.",
    system: "Mnemusa organiza memória como uma camada rastreável entre operação, conhecimento e agentes. O Hermes é o primeiro consumidor registrado. Esta descrição se limita à versão alpha v0.10.0; trabalho posterior segue em experimento local.",
    architecture: ["Registro imutável de eventos", "Proveniência e tempo bitemporal", "Recuperação lexical, vetorial e por grafo", "Rust · Edition 2024"],
    currentState: [{ version: "v0.10.0", label: "ALPHA · ROADMAP PRINCIPAL CONCLUÍDO" }],
    roadmap: ["v0.10.0 conclui o roadmap principal", "Próximas decisões seguem pendentes; não são escopo aprovado"],
    related: ["hermes", "thoth", "atlas"],
  },
  {
    slug: "thoth",
    name: "THOTH",
    title: "Motor de curadoria do conhecimento",
    domain: "SISTEMAS DE CONHECIMENTO",
    status: "FOUNDATION",
    shortDescription: "Geração, estruturação e curadoria de conhecimento para material educacional e editorial.",
    description: "Sistema auxiliar para geração, edição, curadoria, auditoria e pré-pesagem de material educacional e editorial do Logos.",
    problem: "Conhecimento bruto precisa ganhar estrutura, critérios de revisão e uma trilha clara antes de chegar ao uso.",
    system: "Thoth trabalha na camada de preparação e curadoria, mantendo a revisão humana como fronteira de publicação.",
    architecture: ["Pipelines de geração e edição", "Curadoria e auditoria", "Pré-pesagem editorial", "Revisão humana antes da publicação"],
    related: ["logos", "odin", "mnemusa"],
  },
  {
    slug: "logos",
    name: "LOGOS",
    title: "Sistema de aprendizagem adaptativa",
    domain: "SISTEMAS DE APRENDIZAGEM",
    status: "CLOSED BETA",
    shortDescription: "Plataforma e motor de aprendizado adaptativo para transformar resposta em próximo passo de estudo.",
    description: "O Logos organiza prática, feedback e seleção adaptativa em um sistema de aprendizagem. Logos / Med é sua vertical médica atual.",
    problem: "Volume de questões não basta quando resposta, erro e retorno não formam um percurso individual de prática.",
    system: "A plataforma conecta sessão, feedback, rating e próxima seleção. A vertical pública atual é apresentada como Logos / Med.",
    architecture: ["Sessões de prática", "Feedback e rating", "Seleção adaptativa", "Vertical Logos / Med"],
    related: ["thoth", "hermes"],
  },
  {
    slug: "odin",
    name: "ODIN",
    title: "Motor de recuperação de literatura",
    domain: "INFRAESTRUTURA DE PESQUISA",
    status: "INCUBATING",
    shortDescription: "Aquisição e recuperação de literatura e conhecimento externo por camadas verificáveis.",
    description: "Sistema de aquisição e recuperação de literatura e conhecimento externo, com o workflow técnico preservado em Odintool.",
    problem: "Encontrar literatura não é o mesmo que recuperar texto completo, proveniência e evidência suficiente para uso.",
    system: "Odin organiza o caminho de pesquisa e recuperação; nomes técnicos como odin-cli e odin-core permanecem internos quando necessários.",
    architecture: ["Aquisição por DOI", "Camadas de recuperação", "Proveniência de fontes", "Fallback manual documentado"],
    related: ["thoth", "mnemusa"],
  },
  {
    slug: "anubis",
    name: "ANUBIS",
    title: "Sistema de recuperação de projetos",
    domain: "RECUPERAÇÃO DE PROJETOS",
    status: "CONCEPT",
    shortDescription: "Ferramenta para analisar, recuperar e modernizar projetos abandonados.",
    description: "Sistema de recuperação de projetos: entender o estado deixado, preservar o que existe e orientar uma modernização segura.",
    problem: "Projetos abandonados acumulam cópias, decisões perdidas e dependências que tornam a retomada arriscada.",
    system: "Anubis é uma definição de sistema em estágio conceitual nesta superfície pública; não representa um produto operacional já disponível.",
    architecture: ["Inventário de artefatos", "Reconciliação de estado", "Preservação de rollback", "Modernização por etapas"],
    related: ["atlas", "hermes"],
  },
  {
    slug: "hermes",
    name: "HERMES",
    title: "Framework de integração e agentes",
    domain: "INTEGRAÇÃO / AGENTES",
    status: "FOUNDATION",
    distribution: "OPEN SOURCE",
    shortDescription: "Integração, comunicação, documentos e agentes em um framework operacional.",
    description: "Framework de integração para comunicação, documentos e agentes. A AZLO mantém contribuições documentadas e ferramentas ao redor desse ecossistema.",
    problem: "Agentes e ferramentas perdem valor quando não compartilham contexto, comunicação e limites operacionais claros.",
    system: "Hermes conecta interfaces, documentos e agentes com atenção à autorização, rastreabilidade e operação local quando aplicável.",
    architecture: ["Integração entre agentes", "Comunicação e documentos", "Interfaces operacionais", "Contribuições open source documentadas"],
    related: ["mnemusa", "atlas", "logos"],
  },
  {
    slug: "atlas",
    name: "ATLAS",
    title: "Inteligência de infraestrutura",
    domain: "INFRAESTRUTURA / OPERAÇÕES",
    status: "R&D",
    shortDescription: "Infraestrutura, sistemas, diagnóstico e operação local para ambientes que precisam ser entendidos.",
    description: "Camada de inteligência para infraestrutura, diagnóstico e operação local. O sistema transforma sinais técnicos em investigação e trilha de auditoria.",
    problem: "Troubleshooting dispersa sinais, hipóteses, tentativas e evidências entre ferramentas e pessoas.",
    system: "Atlas organiza investigação e operação assistida, mantendo ações limitadas, aprovação e rechecagem como fronteiras do sistema.",
    architecture: ["Sinais de Linux", "Fatos, hipóteses e linha do tempo", "Ações assistidas com aprovação", "Auditoria local"],
    related: ["anubis", "hermes", "mnemusa"],
  },
];

export const projects: Project[] = [
  {
    slug: "logosmed",
    aliases: ["LogosMed"],
    category: "PRODUCT",
    workType: "PRODUCT",
    status: "CLOSED BETA",
    title: "LOGOS / MED",
    summary: "Treino adaptativo para transformar cada resposta em um próximo passo de estudo.",
    tags: ["Rating", "Seleção adaptativa", "Progresso individual"],
    externalUrl: "https://logos-med.azlo.com.br",
    featured: true,
    caseStudy: {
      problem: "Estudo por questões costuma acumular volume sem transformar resposta, erro e retorno em um percurso individual de prática.",
      intervention: "Sessões rated conectam questão, feedback, rating e seleção dinâmica do próximo item para tornar a evolução visível ao longo do tempo.",
      architecture: ["Next.js · React · TypeScript", "API server-side", "Supabase · PostgreSQL · Auth · RLS", "Rating global e por grandes áreas"],
      statusDetail: "Beta fechada persistente em produção. A abertura progressiva ainda depende de decisão de rollout.",
      boundary: "Uso educacional. Não certifica competência nem oferece orientação clínica individual.",
    },
  },
  {
    slug: "hermes-agent",
    category: "OPEN SOURCE",
    workType: "OPEN SOURCE",
    status: "OPEN SOURCE",
    title: "HERMES / AGENT",
    summary: "Otimização documentada de busca de sessões FTS5 em um fork do Hermes Agent.",
    tags: ["FTS5", "Paginação", "Equivalência", "Testes"],
    caseStudy: {
      problem: "Busca ordenada por recência pode fazer trabalho de snippet antes de saber quais resultados realmente entram na página.",
      intervention: "Patches implementam paginação em duas fases para a rota de busca, mantendo equivalência de filtros e ordenação e cobrindo a rota CJK com testes.",
      architecture: ["FTS5", "Consulta em duas fases", "Ordenação temporal", "Testes de filtros e paginação"],
      statusDetail: "Contribuição documentada em fork. Não é apresentada como alteração incorporada ao repositório oficial.",
    },
  },
  {
    slug: "ana",
    aliases: ["Atlas Nano Agent · ANA"],
    category: "R&D",
    workType: "R&D",
    status: "R&D",
    title: "ATLAS / ANA",
    summary: "Atlas Nano Agent: harness local para transformar sinais de Linux em investigação, plano assistido e trilha de auditoria.",
    tags: ["Linux", "Incidentes", "Auditoria", "Ações assistidas"],
    featured: true,
    caseStudy: {
      problem: "Troubleshooting de servidores dispersa sinais, hipóteses, tentativas e evidências de recuperação entre ferramentas e pessoas.",
      intervention: "O harness organiza incidentes, fatos, hipóteses e linha do tempo, oferecendo diagnóstico de leitura e ações assistidas com aprovação e rechecagem.",
      architecture: ["Python · daemon · CLI/TUI", "SQLite com WAL", "Sockets Unix", "Broker separado para ação privilegiada limitada"],
      statusDetail: "P&D operacional. A autonomia é limitada e o modo de operação permanece experimental.",
      boundary: "Não é apresentado como remediação autônoma de produção ou monitoramento geral de infraestrutura.",
    },
  },
  {
    slug: "hermes-office-next",
    aliases: ["Hermes Office Next"],
    category: "ENGINEERING",
    workType: "ENGINEERING",
    status: "RELEASE CANDIDATE",
    title: "HERMES / OFFICE",
    summary: "Assistência de IA para documentos reais, com contexto autorizado, diff e aprovação antes da aplicação.",
    tags: ["LibreOffice", "Contexto autorizado", "Diff", "Cópia preservada"],
    caseStudy: {
      problem: "Assistência de IA em documentos perde valor quando invade o contexto, altera o original ou não deixa a pessoa revisar o que será aplicado.",
      intervention: "O documento entra em contexto por autorização; propostas passam por validação e preview, e alterações aprovadas são aplicadas em cópia com Undo do LibreOffice disponível.",
      architecture: ["Electron · React", "Sidecar Python · UNO", "LibreOffice Writer · Calc · Impress", "Gateway Hermes opcional em loopback"],
      statusDetail: "Release candidate 1.0.0-rc.1. A instalação limpa numa máquina Windows de teste e a aprovação humana explícita ainda são necessárias antes da publicação.",
      boundary: "Não é apresentado como distribuição ampla nem como compatível com todos os formatos ou sistemas operacionais.",
    },
  },
];

export const currentTeam: TeamMember[] = [
  {
    name: "Gabriel Lorençato",
    role: "Projetista",
    expertise: ["Engenharia de Eficiência", "Otimização de Sistemas", "Medicina"],
    initials: "GL",
    linkedin: "https://www.linkedin.com/in/gabriel-lorencato-593b44218",
  },
  {
    name: "Karson Godinho",
    role: "Líder técnico",
    expertise: ["Engenharia de Dados", "Cybersegurança", "Banco Vetorial"],
    initials: "KG",
    linkedin: "https://www.linkedin.com/in/karson-godinho-6b88981b6",
  },
  {
    name: "Alan Lima",
    role: "Administrador sênior de bancos de dados",
    expertise: ["PostgreSQL", "Oracle", "MongoDB", "Cloud"],
    initials: "AL",
    linkedin: "https://www.linkedin.com/in/alan-lima-7568451a5",
  },
];

export const method = [
  { number: "01", title: "Entender", label: "ENTENDER", text: "Ler fluxo, restrição, dados e impacto antes de escolher ferramenta." },
  { number: "02", title: "Desenhar", label: "DESENHAR", text: "Definir arquitetura, fronteiras de automação e responsabilidades." },
  { number: "03", title: "Construir", label: "CONSTRUIR", text: "Integrar e validar uma intervenção que caiba no ambiente real." },
  { number: "04", title: "Operar", label: "OPERAR", text: "Observar, documentar e evoluir com quem mantém o sistema." },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const caseStudyProjects = projects.filter((project) => project.caseStudy);
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
export const getProduct = (slug: string) => products.find((product) => product.slug === slug);

export const productStatusLabel = (status: ProductStatus): string => ({
  INCUBATING: "EM INCUBAÇÃO",
  FOUNDATION: "EM ESTRUTURAÇÃO",
  "CLOSED BETA": "BETA FECHADA",
  "R&D": "P&D",
  CONCEPT: "CONCEITO",
})[status];

export const projectStatusLabel = (status: ProjectStatus): string => ({
  "CLOSED BETA": "BETA FECHADA",
  "OPEN SOURCE": "CÓDIGO ABERTO",
  "R&D": "P&D",
  "RELEASE CANDIDATE": "CANDIDATO A LANÇAMENTO",
})[status];

export const workTypeLabel = (workType: WorkType): string => ({
  PRODUCT: "PRODUTO",
  ENGINEERING: "ENGENHARIA",
  "R&D": "P&D",
  "OPEN SOURCE": "CÓDIGO ABERTO",
})[workType];
