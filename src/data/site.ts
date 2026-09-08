export type ProjectStatus = "Produto em evolução" | "Consultoria e engenharia" | "Contribuição em fork" | "Conceito operacional" | "Sistemas sob medida" | "MVP funcional";

export type Service = {
  index: string;
  title: string;
  summary: string;
  deliverables: string[];
};

export type Project = {
  slug: string;
  category: string;
  status: ProjectStatus;
  title: string;
  summary: string;
  detail: string;
  tags: string[];
  href?: string;
  external?: boolean;
  note?: string;
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
  description: "Engenharia de IA, infraestrutura e software para fluxos reais.",
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
    title: "Sistemas clínicos e HIS",
    summary:
      "Diagnóstico, desenvolvimento e otimização de sistemas que sustentam a operação de hospitais e clínicas privadas.",
    deliverables: [
      "Fluxos hospitalares e integrações",
      "Automação de processos internos",
      "Otimização de infraestrutura e sistemas",
    ],
  },
  {
    index: "02",
    title: "IA integrada ao ambiente real",
    summary:
      "Instalação e adaptação de LLMs, agentes e bases de conhecimento ao fluxo, às permissões e à infraestrutura de cada organização.",
    deliverables: [
      "RAG, bancos vetoriais e pipelines",
      "Inferência local, APIs e agentes",
      "VPS, servidores privados e hardware próprio",
    ],
  },
  {
    index: "03",
    title: "Software, dados e automação",
    summary:
      "Produtos internos e sistemas sob medida para reduzir atrito operacional sem substituir o julgamento de quem executa o trabalho.",
    deliverables: [
      "Bots e assistentes internos",
      "Integrações e automações auditáveis",
      "Arquitetura de dados e observabilidade",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "logosmed",
    category: "Produto · aprendizagem adaptativa",
    status: "Produto em evolução",
    title: "LogosMed",
    summary: "Sistema de aprendizado adaptativo para transformar estudo em percurso estruturado.",
    detail:
      "Uma plataforma orientada a aprendizado adaptativo, com foco em prática deliberada, organização de conteúdo e progressão individual.",
    tags: ["Aprendizagem adaptativa", "Produto educacional", "Sistemas de estudo"],
    href: "https://pj.azlo.com.br",
    external: true,
    featured: true,
  },
  {
    slug: "his",
    category: "Healthcare systems · engenharia",
    status: "Consultoria e engenharia",
    title: "Otimização de HIS e sistemas clínicos",
    summary: "Tecnologia aplicada a hospitais, clínicas e workflows que não podem parar.",
    detail:
      "Atuação em diagnóstico técnico, integração, automação e evolução de sistemas internos, com foco em eficiência operacional e clareza de fluxo.",
    tags: ["HIS", "Clínicas", "Integração", "Infraestrutura"],
    featured: true,
  },
  {
    slug: "hermes-agent",
    category: "Open source · eficiência",
    status: "Contribuição em fork",
    title: "Hermes Agent",
    summary: "Patches documentados para tornar a busca de sessões mais eficiente e verificável.",
    detail:
      "Contribuições em um fork do Hermes Agent para busca de sessões com FTS5: paginação em duas fases e testes de equivalência para filtros, paginação, ordenação temporal e rota CJK. Sem alegação de merge no repositório oficial.",
    tags: ["FTS5", "Busca", "Performance", "Testes"],
    note: "Trabalho documentado em fork; não apresentado como recurso incorporado ao projeto oficial.",
    featured: true,
  },
  {
    slug: "ana",
    category: "Infraestrutura · agentes",
    status: "Conceito operacional",
    title: "Atlas Nano Agent · ANA",
    summary: "Harness de IA para estruturar troubleshooting de VPS e servidores Linux.",
    detail:
      "Um agente voltado a diagnóstico de infraestrutura, investigação de erros, preparação de ambientes e automação operacional. O foco é organizar sinais, hipóteses e ações assistidas com limites claros de execução.",
    tags: ["Linux", "VPS", "Troubleshooting", "Operações"],
    note: "Conceito em evolução. Automação não substitui revisão humana em mudanças de infraestrutura.",
    featured: true,
  },
  {
    slug: "agentes-personalizados",
    category: "Automação · sistemas internos",
    status: "Sistemas sob medida",
    title: "Bots e agentes personalizados",
    summary: "Assistentes internos desenhados para a rotina, os dados e as permissões de cada empresa.",
    detail:
      "Criação de bots, agentes e integrações para executar tarefas operacionais, organizar solicitações e conectar sistemas. Casos reais são tratados de forma confidencial, sem exposição de contas, endpoints ou dados de clientes.",
    tags: ["Agentes", "Automação", "Integrações", "Sistemas internos"],
  },
  {
    slug: "hermes-office-next",
    category: "Produtividade · IA local",
    status: "MVP funcional",
    title: "Hermes Office Next",
    summary: "Produtividade local-first com documentos reais, IA assistiva e aprovação humana.",
    detail:
      "Aplicativo que combina LibreOffice e assistência de IA para ajudar a revisar documentos. A pessoa controla o contexto, revisa propostas e aprova alterações antes da aplicação em cópia.",
    tags: ["Local-first", "LibreOffice", "IA assistiva", "Documentos"],
    note: "MVP funcional; publicação e distribuição ampla dependem de validações adicionais.",
  },
];

export const team: TeamMember[] = [
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
  {
    name: "Fulana",
    role: "Product Manager",
    expertise: ["Product Strategy", "Product Discovery", "Roadmap & Delivery"],
    initials: "PM",
    future: true,
  },
  {
    name: "Ciclano",
    role: "Backend Developer",
    expertise: ["APIs & Distributed Systems", "Backend Architecture", "Integrations & Automation"],
    initials: "BE",
    future: true,
  },
  {
    name: "Beltrano",
    role: "Frontend UI/UX Developer",
    expertise: ["Frontend Engineering", "UI/UX Design", "Design Systems"],
    initials: "UX",
    future: true,
  },
];

export const principles = [
  {
    number: "01",
    title: "Contexto antes de ferramenta",
    text: "A tecnologia começa pelo trabalho que já existe: pessoas, decisões, dados, restrições e risco operacional.",
  },
  {
    number: "02",
    title: "Arquitetura que pode ser operada",
    text: "Projetamos sistemas que cabem no ambiente real: infraestrutura disponível, controle de acesso, manutenção e continuidade.",
  },
  {
    number: "03",
    title: "Automação com responsabilidade",
    text: "Toda automação precisa deixar claro o que executa, o que registra e onde a revisão humana continua indispensável.",
  },
];
