export const stack = {
  pt: {
    eyebrow: "como eu trabalho",
    heading: "Uma stack pensada para entregar produto inteiro.",
    sub: "Não é uma lista de tecnologias, é o conjunto que eu uso, de verdade, para tirar um produto do zero e colocar em produção.",
    categories: [
      {
        index: "01",
        title: "Frontend & Produto",
        description: "Interfaces rápidas, acessíveis e com atenção ao detalhe.",
        items: ["React", "Next.js", "Astro", "TypeScript", "Tailwind CSS"]
      },
      {
        index: "02",
        title: "Backend & Dados",
        description: "APIs, bancos e regras de negócio que sustentam o produto.",
        items: ["Node.js", "APIs REST/GraphQL", "SQL", "Supabase", "PostgreSQL"]
      },
      {
        index: "03",
        title: "Mobile",
        description: "Apps nativos publicáveis, sem reinventar a base web.",
        items: ["React Native", "Expo"]
      },
      {
        index: "04",
        title: "Integrações & Automação",
        description: "Conectar sistemas que hoje não conversam entre si.",
        items: ["Integrações com CRMs", "Webhooks", "Auth0", "Automação de processos"]
      },
      {
        index: "05",
        title: "Engenharia assistida por IA",
        description: "Copilotos e agentes como parte real do fluxo, não um atalho.",
        items: ["LLMs & copilots", "Agentes de código", "Refatoração e testes assistidos", "Revisão crítica humana"]
      },
      {
        index: "06",
        title: "Hardware & IoT",
        description: "Quando o produto sai da tela e vira dispositivo físico.",
        items: ["ESP32", "Prototipagem embarcada", "Sensores & automação física"]
      }
    ]
  },
  en: {
    eyebrow: "how i work",
    heading: "A stack built to ship the whole product.",
    sub: "Not a list of buzzwords, this is what I actually use to take a product from zero to production.",
    categories: [
      {
        index: "01",
        title: "Frontend & Product",
        description: "Fast, accessible interfaces with real attention to detail.",
        items: ["React", "Next.js", "Astro", "TypeScript", "Tailwind CSS"]
      },
      {
        index: "02",
        title: "Backend & Data",
        description: "APIs, databases and business logic that hold the product up.",
        items: ["Node.js", "REST/GraphQL APIs", "SQL", "Supabase", "PostgreSQL"]
      },
      {
        index: "03",
        title: "Mobile",
        description: "Shippable native apps, without reinventing the web layer.",
        items: ["React Native", "Expo"]
      },
      {
        index: "04",
        title: "Integrations & Automation",
        description: "Connecting systems that don't talk to each other yet.",
        items: ["CRM integrations", "Webhooks", "Auth0", "Process automation"]
      },
      {
        index: "05",
        title: "AI-assisted Engineering",
        description: "Copilots and agents as a real part of the flow, not a shortcut.",
        items: ["LLMs & copilots", "Coding agents", "Assisted refactors & tests", "Human critical review"]
      },
      {
        index: "06",
        title: "Hardware & IoT",
        description: "When the product leaves the screen and becomes a device.",
        items: ["ESP32", "Embedded prototyping", "Sensors & physical automation"]
      }
    ]
  }
} as const;
