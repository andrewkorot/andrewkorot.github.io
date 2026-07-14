export const profile = {
  name: "Andrii Korotaiev",
  title: "Principal Architect — AI | Cloud & Platform Architecture",
  location: "Kyiv, Ukraine",
  email: "andrewkorot@outlook.com",
  telegram: "@topfreelancer424",
  whatsapp: "+380988287789",
  discord: "krypyto424",
  linkedin: "https://www.linkedin.com/in/andrey-korotaev-69552b179",
  headline:
    "Principal Architect with 10+ years of engineering and architecture experience spanning AI systems, cloud platform design, agentic automation, and multi-cloud enterprise integrations.",
  subhead:
    "Hands-on across Agentic AI frameworks, Semantic Kernel, cross-cloud agent-to-agent patterns, hybrid data architectures, AOAI deployment, and semantic search pipelines.",
  stats: [
    { label: "Years in engineering & architecture", value: "10+" },
    { label: "Years leading cloud architecture", value: "7+" },
    { label: "Clouds delivered on", value: "Azure · AWS · GCP" },
    { label: "Focus", value: "Agentic AI & platforms" },
  ],
};

export type Specialty = {
  title: string;
  blurb: string;
  tags: string[];
};

export const specialties: Specialty[] = [
  {
    title: "Agentic AI Architecture",
    blurb:
      "Multi-agent systems, reasoning loops, semantic routing, tool/function calling, and orchestration patterns.",
    tags: ["Semantic Kernel", "MCP", "PromptFlow", "AOAI", "Function calling"],
  },
  {
    title: "AI Search & Intelligence",
    blurb:
      "Vector databases, embeddings, hybrid ranking, and metadata-aware retrieval pipelines.",
    tags: ["Azure AI Search", "Vector DBs", "Embeddings", "Hybrid search"],
  },
  {
    title: "LLM Systems",
    blurb:
      "RAG pipelines, prompt engineering, model evaluation, and end-to-end agent workflows.",
    tags: ["RAG", "PromptFlow", "Evaluation", "Agent workflows"],
  },
  {
    title: "Cloud Platform Architecture",
    blurb:
      "Multi-cloud (Azure + AWS + GCP), hybrid integration, and secure AI runtimes.",
    tags: ["Azure", "AWS", "GCP", "Hybrid", "Secure runtimes"],
  },
  {
    title: "Workflow Automation",
    blurb:
      "Event-driven patterns, API-choreographed workflows, and conversational automation.",
    tags: ["Event-driven", "EventHub", "Service Bus", "Logic Apps"],
  },
  {
    title: "Infrastructure & Platform",
    blurb:
      "Kubernetes (AKS, NKE, OpenShift), Terraform, CI/CD, and DevSecOps practices.",
    tags: ["Kubernetes", "AKS", "Terraform", "ADO", "GitHub", "IaC"],
  },
  {
    title: "Data",
    blurb:
      "Snowflake architectures, multi-region NoSQL + SQL optimization, and streaming pipelines.",
    tags: ["Snowflake", "SQL Server", "MongoDB", "Redis", "Kafka"],
  },
  {
    title: "Security",
    blurb:
      "Model isolation, tenant boundaries, IAM, secrets integration, and network hardening.",
    tags: ["IAM", "RBAC", "Tenant isolation", "Certificate mgmt"],
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
  tags?: string[];
};

export const experience: Role[] = [
  {
    company: "Waites",
    title: "Full-Stack Developer",
    period: "June 2020 – April 2026",
    tags: ["Python", "SQL", "Azure", "AI Search", "PromptFlow", "RAG", "AKS", "Kafka"],
    bullets: [
      "Designed AI-ready Azure infrastructure supporting distributed ML training, inference, and event-driven workloads.",
      "Delivered complex business features under strict deadlines while evolving and maintaining highly coupled legacy systems.",
      "Integrated Azure AI Search + embeddings to enable intelligent discovery and pipeline automation for internal knowledge applications.",
      "Implemented PromptFlow-based RAG pipelines, optimized retrieval, and evaluated agent chaining designs.",
      "Created foundational patterns for agent orchestration using microservices and Azure Functions for downstream automation.",
      "Designed AKS-based Kafka modernization patterns supporting high-throughput ingestion for AI pipelines.",
    ],
  },
  {
    company: "YSBM Group",
    title: "Full-Stack Developer",
    period: "Aug 2019 – June 2020",
    tags: ["Laravel", "Vue.js", "MySQL", "Azure", "Database design", "API architecture"],
    bullets: [
      "Developed full-cycle web applications from scratch using Laravel and Vue.js for ecommerce and business automation systems",
      "Built a spare parts configuration and sales platform with custom checkout workflows and order processing logic.",
      "Integrated third-party services including UPS (shipping), TaxCloud (tax calculation), and Forte (payments) ",
      "Developed a laboratory management system for testing workflows using Laravel, Vue.js, and MySQL .",
      "Contributed to system design, database modeling, and API architecture decisions",
    ],
  },
  {
    company: "ViWeb",
    title: "Senior Software Engineer",
    period: "Oct 2018 – July 2019",
    tags: ["eCommerce", "PHP", "Python", "C#", "React.js", "microservices", "Event-driven"],
    bullets: [
      "Implemented payment, shipping, and admin extension modules within e-commerce platforms",
      "Designed agent-based automation blueprints on event-driven microservices, enabling distributed agent workflows",
      "Guided enterprise customers and Global System Integrators (GSIs) through hybrid-cloud modernization, including tooling, pipelines, and extensibility frameworks.",
    ],
  },
  {
    company: "Bonum Studio",
    title: "Back-end Developer",
    period: "Aug 2018 – Oct 2018",
    tags: ["Multi-cloud", "Serverless", "Kubernetes", "Blockchain", "NoSQL"],
    bullets: [
      "Designed a full multi-cloud SaaS platform for blockchain services featuring serverless APIs, event-driven automation, and real-time orchestration.",
      "Built deep engineering foundations: containerization, CI/CD, Kubernetes, cloud pipelines, NoSQL data design, and secure payments integrations.",
      "Led engineering teams, delivery strategy, architecture governance, and product roadmap.",
    ],
  },
  {
    company: "InStandart",
    title: "Full-Stack Developer",
    period: "June 2017 – July 2018",
    tags: ["cloud", "Microservices", "SQL", "Workflow"],
    bullets: [
      "Built custom frontend and backend features for online stores.",
      "Participated in full-cycle development including feature implementation, bug fixing, and performance optimization.",
      "Led architecture for large-scale payer systems, designing microservices, cloud orchestration, serverless interfaces, and workflow-engine integrations.",
      "Established architecture governance and solution review boards, driving strategic modernization of scalable enterprise systems.",
    ],
  },
];

export type Project = {
  title: string;
  org: string;
  blurb: string;
  highlights: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Knowledge RAG & Agent Orchestration",
    org: "Con Edison",
    blurb:
      "AI-ready Azure platform powering intelligent discovery and pipeline automation across internal knowledge applications.",
    highlights: [
      "Developed a custom data-matching feedback loop engine using RAGLite to shortlist candidates before LLM scoring — cutting LLM calls ~70% and improving match precision by ~35%.",
      "PromptFlow-based RAG with optimized retrieval and agent chaining evaluations.",
      "Azure AI Search + embeddings for semantic discovery over enterprise content.",
      "Agent orchestration patterns on microservices + Azure Functions for downstream automation.",
    ],
    stack: ["Azure OpenAI", "AI Search", "RAGLite", "PromptFlow", "AKS", "Functions"],
  },
  {
    title: "Cross-Cloud Agent-to-Agent Framework",
    org: "Nutanix",
    blurb:
      "Multi-cloud agent interaction patterns spanning Azure and AWS workloads on NKE + OpenShift — foundational to cross-cloud A2A messaging.",
    highlights: [
      "Event-driven agent blueprints with EventHub, Azure Batch, and AWS-connected workloads.",
      "Semantic search + observability pipelines using Prometheus, Grafana, ELK with AI log analysis.",
      "Reference patterns for tenant isolation, container security, and BU workload boundaries.",
    ],
    stack: ["NKE", "OpenShift", "Azure", "AWS", "EventHub", "ELK"],
  },
  {
    title: "Multi-Tenant SaaS Platform Modernization",
    org: "Leidos",
    blurb:
      "Large multi-tenant SaaS platform rearchitected on Azure for resiliency, throughput, and platform standardization.",
    highlights: [
      "API-first microservices on AKS with event-driven workflows and secure s2s communication.",
      "CI/CD via ADO + ADF; HA/DR for AKS, Azure SQL, Databricks, and DataLake.",
      "End-to-end integrations across Logic Apps, Functions, Storage, AKS, and DataLake.",
    ],
    stack: ["Azure", "AKS", "ADO", "ADF", "Databricks", "DataLake"],
  },
  {
    title: "Mercer Benefit Central (MBC2)",
    org: "Mercer",
    blurb:
      "Digital transformation of MBC2 into a scalable, multitenant SaaS platform on AWS for large-scale healthcare operations.",
    highlights: [
      "HA/DR design using EC2, ELB, RDS, VPC for healthcare-grade reliability.",
      "Hybrid identity via on-prem ADFS federation with AWS.",
      "SOA integration and messaging (IBM IIB/MQ) across internal and external systems.",
    ],
    stack: ["AWS", "EC2", "RDS", "ADFS", "IBM IIB/MQ"],
  },
  {
    title: "Dittrex — Blockchain SaaS Platform",
    org: "Dittrex (Co-Founder)",
    blurb:
      "Full multi-cloud SaaS platform for blockchain services with serverless APIs, event-driven automation, and real-time orchestration.",
    highlights: [
      "Serverless APIs with event-driven automation and real-time flows.",
      "Containerization, CI/CD, Kubernetes, and NoSQL data design from the ground up.",
      "Secure payments integrations and platform governance across teams.",
    ],
    stack: ["Multi-cloud", "Kubernetes", "Serverless", "NoSQL"],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Agentic AI",
    items: [
      "Multi-agent orchestration",
      "Semantic routing",
      "Function / tool calling",
      "MCP",
      "PromptFlow",
      "AOAI",
      "RAG pipelines",
      "RAGLite",
    ],
  },
  {
    label: "AI Search",
    items: ["Vector search", "Hybrid ranking", "Azure AI Search", "Embeddings"],
  },
  {
    label: "Cloud",
    items: ["Azure", "AWS", "GCP", "Multi-cloud orchestration", "Hybrid infra"],
  },
  {
    label: "Data",
    items: ["Snowflake", "SQL Server", "Redis", "MongoDB", "Firestore"],
  },
  {
    label: "Containers",
    items: ["Kubernetes", "AKS", "NKE", "OpenShift"],
  },
  {
    label: "Pipelines",
    items: ["Kafka", "RabbitMQ", "Data Factory", "EventHub", "Service Bus"],
  },
  {
    label: "DevSecOps",
    items: ["ADO", "Jenkins", "Terraform", "GitHub", "IaC"],
  },
  {
    label: "Security",
    items: ["IAM", "RBAC", "Certificate mgmt", "Tenant isolation"],
  },
  {
    label: "Languages",
    items: ["C#", "Python", "JavaScript / TypeScript", "SQL", "Bash"],
  },
];

export const education = [
  { degree: "Specialist Degree (equivalent to Master’s level) in Software Engineering", school: "Kherson State University" },
  { degree: "B.S. Computer Science", school: "Kherson State University" },
];

export const certifications = [
  "Agentic AI workflow design & LLM systems training",
];
