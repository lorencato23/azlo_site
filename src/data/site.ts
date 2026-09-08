export type ProjectStatus = "CLOSED BETA" | "OPEN SOURCE" | "R&D" | "MVP EM REVISÃO";

export type Service = {
  index: string;
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
  category: string;
  status: ProjectStatus;
  title: string;
  summary: string;
  tags: string[];
  externalUrl?: string;
  caseStudy?: ProjectCase;
  featured?: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  expertise: string[];
  initials: string;
  linkedin?: string;
  future?: boolean;
};

export const site = {
  name: "AZLO",
  description: "Engenharia de IA, infraestrutura e software para operações reais.",
  email: "contato@azlo.com.br",
  url: "https://azlo.com.br",
};

export const navigation = [
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Método & time" },
  { href: "/contato", label: "Contato" },
];

export const services: Service[] = [
  {
    index: "01",
    title: "Sistemas clínicos que travam a operação",
    problem: "HIS, integrações e rotinas internas que concentram retrabalho, perda de contexto ou manutenção difícil.",
    intervention: "Diagnóstico técnico, evolução de fluxos e integração de sistemas para hospitais e clínicas privadas.",
    capabilities: ["HIS e workflows clínicos", "Integrações e automação", "Infraestrutura e sistemas internos"],
    nextStep: "Discutir um sistema clínico",
  },
  {
    index: "02",
    title: "Conhecimento disperso e decisões lentas",
    problem: "Informação existe, mas não chega com contexto, permissão e rastreabilidade ao momento de uso.",
    intervention: "IA integrada ao workflow, com modelos, RAG, agentes e bases de conhecimento definidos a partir do ambiente real.",
    capabilities: ["LLMs e agentes", "RAG e bancos vetoriais", "Inferência local e APIs"],
    nextStep: "Discutir uma hipótese de IA",
  },
  {
    index: "03",
    title: "Infraestrutura que precisa ser operável",
    problem: "Servidores, dados e serviços crescem sem uma camada clara de observação, manutenção e decisão.",
    intervention: "Arquitetura de infraestrutura e dados para VPS, cloud, ambientes privados e hardware pertencente à organização.",
    capabilities: ["VPS e servidores privados", "Dados e observabilidade", "Pipelines e ambientes isolados"],
    nextStep: "Discutir infraestrutura e dados",
  },
  {
    index: "04",
    title: "Processos repetitivos sem rastreabilidade",
    problem: "Equipes repetem tarefas, trocam contexto entre ferramentas e dependem de rotinas que não deixam trilha clara.",
    intervention: "Software sob medida, bots e automações desenhados para permissões, integrações e revisão de quem responde pela operação.",
    capabilities: ["Ferramentas internas", "Integrações e automações", "Assistentes empresariais"],
    nextStep: "Discutir uma automação",
  },
];

export const projects: Project[] = [
  {
    slug: "logosmed",
    category: "Produto educacional · saúde",
    status: "CLOSED BETA",
    title: "LogosMed",
    summary: "Treino adaptativo para transformar cada resposta em um próximo passo de estudo.",
    tags: ["Rating", "Seleção adaptativa", "Progresso individual"],
    externalUrl: "https://pj.azlo.com.br",
    featured: true,
    caseStudy: {
      problem: "Estudo por questões costuma acumular volume sem transformar resposta, erro e retorno em um percurso individual de prática.",
      intervention: "Sessões rated conectam questão, feedback, rating e seleção dinâmica do próximo item para tornar a evolução visível ao longo do tempo.",
      architecture: ["Next.js · React · TypeScript", "API server-side", "Supabase · PostgreSQL · Auth · RLS", "Rating global e por grandes áreas"],
      statusDetail: "Closed beta persistente. O produto segue em revisão editorial e rollout progressivo.",
      boundary: "Uso educacional. Não certifica competência nem oferece orientação clínica individual.",
    },
  },
  {
    slug: "hermes-agent",
    category: "Contribuição open source · busca",
    status: "OPEN SOURCE",
    title: "Hermes Agent",
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
    category: "Infraestrutura · agentes locais",
    status: "R&D",
    title: "Atlas Nano Agent · ANA",
    summary: "Harness local para transformar sinais de Linux em investigação, plano assistido e trilha de auditoria.",
    tags: ["Linux", "Incidentes", "Auditoria", "Ações assistidas"],
    featured: true,
    caseStudy: {
      problem: "Troubleshooting de servidores dispersa sinais, hipóteses, tentativas e evidências de recuperação entre ferramentas e pessoas.",
      intervention: "O harness organiza incidentes, fatos, hipóteses e linha do tempo, oferecendo diagnóstico de leitura e ações assistidas com aprovação e rechecagem.",
      architecture: ["Python · daemon · CLI/TUI", "SQLite com WAL", "Sockets Unix", "Broker separado para ação privilegiada limitada"],
      statusDetail: "R&D operacional. A autonomia é limitada e o modo de operação permanece experimental.",
      boundary: "Não é apresentado como remediação autônoma de produção ou monitoramento geral de infraestrutura.",
    },
  },
  {
    slug: "hermes-office-next",
    category: "Produtividade local-first · documentos",
    status: "MVP EM REVISÃO",
    title: "Hermes Office Next",
    summary: "Assistência de IA para documentos reais, com contexto autorizado, diff e aprovação antes da aplicação.",
    tags: ["LibreOffice", "Contexto autorizado", "Diff", "Cópia preservada"],
    caseStudy: {
      problem: "Assistência de IA em documentos perde valor quando invade o contexto, altera o original ou não deixa a pessoa revisar o que será aplicado.",
      intervention: "O documento entra em contexto por autorização; propostas passam por validação e preview, e alterações aprovadas são aplicadas em cópia com Undo do LibreOffice disponível.",
      architecture: ["Electron · React", "Sidecar Python · UNO", "LibreOffice Writer · Calc · Impress", "Gateway Hermes opcional em loopback"],
      statusDetail: "MVP local-first em revisão humana de publicação. A validação exercitada está documentada para Windows e LibreOffice.",
      boundary: "Não é apresentado como distribuição ampla nem como compatível com todos os formatos ou sistemas operacionais.",
    },
  },
];

export const currentTeam = [
  {
    name: "Gabriel Lorençato",
    role: "Projetista",
    expertise: ["Engenharia de Eficiência", "Otimização de Sistemas", "Medicina"],
    initials: "GL",
    linkedin: "https://www.linkedin.com/in/gabriel-lorencato-593b44218",
  },
  {
    name: "Karson Godinho",
    role: "Tech Lead",
    expertise: ["Engenharia de Dados", "Cybersegurança", "Banco Vetorial"],
    initials: "KG",
    linkedin: "https://www.linkedin.com/in/karson-godinho-6b88981b6",
  },
  {
    name: "Alan Lima",
    role: "Sr. Database Admin",
    expertise: ["PostgreSQL", "Oracle", "MongoDB", "Cloud"],
    initials: "AL",
    linkedin: "https://www.linkedin.com/in/alan-lima-7568451a5",
  },
] satisfies TeamMember[];

export const futureRoles = [
  {
    name: "Product Manager",
    role: "Posição em discussão",
    expertise: ["Product Strategy", "Discovery", "Roadmap & Delivery"],
    initials: "PM",
    future: true,
  },
  {
    name: "Backend Developer",
    role: "Posição em discussão",
    expertise: ["APIs", "Backend Architecture", "Integrations & Automation"],
    initials: "BE",
    future: true,
  },
  {
    name: "Frontend / UI/UX",
    role: "Posição em discussão",
    expertise: ["Frontend Engineering", "Product UI", "Design Systems"],
    initials: "UX",
    future: true,
  },
] satisfies TeamMember[];

export const method = [
  { number: "01", title: "Entender", text: "Ler fluxo, restrição, dados e impacto antes de escolher ferramenta." },
  { number: "02", title: "Desenhar", text: "Definir arquitetura, fronteiras de automação e responsabilidades." },
  { number: "03", title: "Construir", text: "Integrar e validar uma intervenção que caiba no ambiente real." },
  { number: "04", title: "Operar", text: "Observar, documentar e evoluir com quem mantém o sistema." },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const caseStudyProjects = projects.filter((project) => project.caseStudy);
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
