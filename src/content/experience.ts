// Sourced directly from Anderson's current résumé (confirmed 2026-07-28).
export const experience = {
  pt: {
    eyebrow: "experiência",
    heading: "Trajetória, resumida sem inflar.",
    items: [
      {
        now: false,
        role: "Frontend Developer",
        org: "Deepen",
        period: "jan 2023 — jan 2025",
        bullets: [
          "Desenvolvimento e manutenção de aplicação web com React e Leaflet para visualização de mapas interativos e dados geoespaciais.",
          "Criação de app social cross-platform com React Native — feed, mensagens em tempo real e push notifications.",
          "Integração direta com o time de back-end na definição e consumo de APIs REST, com participação ativa nas cerimônias ágeis do time."
        ]
      },
      {
        now: false,
        role: "Frontend Developer",
        org: "Resleeve",
        period: "abr — mai 2024",
        bullets: [
          "Implementação de fluxos de autenticação seguros com Auth0.",
          "Construção de aplicação em Next.js com rotas dinâmicas, otimização de performance e renderização no servidor (SSR).",
          "Integração de observabilidade (Sentry) e analytics de produto (Amplitude, Segment) para embasar decisões com dados reais."
        ]
      },
      {
        now: false,
        role: "Full Stack Developer",
        org: "Plathanus",
        period: "jan 2025 — jan 2026",
        bullets: [
          "Desenvolvimento de aplicações web com Next.js (App Router), SSR e SSG, integradas a APIs em Python — dashboards administrativos, visualização de dados geoespaciais com Leaflet e fluxos de autenticação seguros.",
          "Entrega de apps cross-platform com React Native: push notifications, feed em tempo real, integração com APIs REST e persistência local de dados.",
          "Colaboração direta com o time de back-end na definição de APIs em Python, participando de code review, refinamento de backlog e entrega contínua."
        ]
      },
      {
        now: true,
        role: "Full Stack Developer",
        org: "Salesbud",
        period: "jan 2026 — atual",
        bullets: [
          "Atuo na Salesbud, plataforma de IA que grava, transcreve e analisa reuniões de vendas para gerar insights que ajudam times a fechar mais negócios — do refinamento de backlog à entrega em produção.",
          "Construo e mantenho integrações entre a plataforma e CRMs e sistemas de VoIP dos clientes.",
          "Aplico boas práticas de qualidade, escalabilidade e performance, com flexibilidade para adaptar prioridades no meio da sprint e comunicação clara de progresso e impedimentos."
        ]
      }
    ]
  },
  en: {
    eyebrow: "experience",
    heading: "A track record, kept honest.",
    items: [
      {
        now: false,
        role: "Frontend Developer",
        org: "Deepen",
        period: "jan 2023 — jan 2025",
        bullets: [
          "Built and maintained a web app using React and Leaflet for interactive maps and geospatial data visualization.",
          "Shipped a cross-platform social app with React Native — feed, real-time messaging and push notifications.",
          "Worked directly with the backend team to define and consume REST APIs, actively taking part in the team's agile ceremonies."
        ]
      },
      {
        now: false,
        role: "Frontend Developer",
        org: "Resleeve",
        period: "apr — may 2024",
        bullets: [
          "Implemented secure authentication flows with Auth0.",
          "Built a Next.js application with dynamic routing, performance tuning and server-side rendering (SSR).",
          "Integrated observability (Sentry) and product analytics (Amplitude, Segment) to back decisions with real data."
        ]
      },
      {
        now: false,
        role: "Full Stack Developer",
        org: "Plathanus",
        period: "jan 2025 — jan 2026",
        bullets: [
          "Built web applications with Next.js (App Router), SSR and SSG, integrated with Python-based APIs — admin dashboards, geospatial data visualization with Leaflet, and secure authentication flows.",
          "Shipped cross-platform apps with React Native: push notifications, real-time feeds, REST API integration and local data persistence.",
          "Worked directly with the backend team defining Python APIs, taking part in code review, backlog refinement and continuous delivery."
        ]
      },
      {
        now: true,
        role: "Full Stack Developer",
        org: "Salesbud",
        period: "jan 2026 — present",
        bullets: [
          "Working at Salesbud, an AI platform that records, transcribes and analyzes sales meetings to generate insights that help teams close more deals — from backlog refinement to production delivery.",
          "Building and maintaining integrations between the platform and clients' CRMs and VoIP systems.",
          "Applying best practices for code quality, scalability and performance, adapting priorities mid-sprint and communicating progress and blockers clearly."
        ]
      }
    ]
  }
} as const;
