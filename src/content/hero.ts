export const hero = {
  pt: {
    eyebrow: "full stack · produto · engenharia com IA",
    currentRole: "atualmente construindo IA para vendas na Salesbud",
    headline: { pre: "Do problema ao ", accent: "produto", post: " em produção." },
    subheadline:
      "Sou desenvolvedor full stack com visão de produto: penso em banco de dados, API, automações e experiência do usuário como uma coisa só. Uso IA de forma intencional em cada etapa, da arquitetura ao deploy, sem terceirizar o julgamento técnico.",
    ctaPrimary: "Ver projetos",
    ctaSecondary: "Falar comigo",
    terminal: {
      prompt: "anderson@portfolio ~ %",
      caption: "stdin: aberto para visitantes",
      placeholder: "digite 'help' e aperte enter",
      intro: "sessão iniciada. digite 'help' para ver os comandos.",
      notFound: "comando não encontrado. digite 'help'.",
      projectNotFound: "projeto não encontrado. tente: pague-safe, convert-text, handyman",
      commands: {
        help: [
          "comandos disponíveis:",
          "  whoami            quem eu sou",
          "  stack             tecnologias que uso",
          "  projects          lista de projetos",
          "  projects <slug>   abre um estudo de caso",
          "  experience        histórico profissional",
          "  contact           formas de contato",
          "  clear             limpa o terminal"
        ],
        whoami: [
          "Anderson Soares Martins",
          "Full Stack Developer @ Salesbud",
          "full stack · produto · integrações · IA aplicada"
        ],
        stack: ["React, Next.js, Astro, Node, Supabase, React Native, ESP32...", "abrindo a seção stack ↓"],
        projects: ["pague-safe · convert-text · handyman", "digite: projects <slug> para abrir um deles"],
        experience: ["Deepen → Resleeve → Plathanus → Salesbud", "abrindo a seção experiência ↓"],
        contact: ["andersonsoaresmartins@gmail.com", "abrindo a seção contato ↓"]
      }
    }
  },
  en: {
    eyebrow: "full stack · product · AI-native engineering",
    currentRole: "currently building AI for sales at Salesbud",
    headline: { pre: "From problem to ", accent: "product", post: " in production." },
    subheadline:
      "I'm a full stack developer with a product mindset: database, API, automations and user experience, treated as one connected system. I use AI with intent at every step, from architecture to deploy, without outsourcing the technical judgment.",
    ctaPrimary: "See projects",
    ctaSecondary: "Get in touch",
    terminal: {
      prompt: "anderson@portfolio ~ %",
      caption: "stdin: open to visitors",
      placeholder: "type 'help' and hit enter",
      intro: "session started. type 'help' to see the available commands.",
      notFound: "command not found. type 'help'.",
      projectNotFound: "project not found. try: pague-safe, convert-text, handyman",
      commands: {
        help: [
          "available commands:",
          "  whoami            who I am",
          "  stack             the tech I use",
          "  projects          list of projects",
          "  projects <slug>   open a case study",
          "  experience        work history",
          "  contact           ways to reach me",
          "  clear             clear the terminal"
        ],
        whoami: [
          "Anderson Soares Martins",
          "Full Stack Developer @ Salesbud",
          "full stack · product · integrations · applied AI"
        ],
        stack: ["React, Next.js, Astro, Node, Supabase, React Native, ESP32...", "opening the stack section ↓"],
        projects: ["pague-safe · convert-text · handyman", "type: projects <slug> to open one of them"],
        experience: ["Deepen → Resleeve → Plathanus → Salesbud", "opening the experience section ↓"],
        contact: ["andersonsoaresmartins@gmail.com", "opening the contact section ↓"]
      }
    }
  }
} as const;
