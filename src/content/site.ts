export const site = {
  name: "Anderson Soares Martins",
  email: "andersonsoaresmartins@gmail.com",
  phone: "+55 48 99608-4908",
  phoneDisplay: "(48) 99608-4908",
  location: "Palhoça, SC, Brasil",
  linkedin: "https://www.linkedin.com/in/anderson-soares-martins-a3b5b21aa",
  github: "https://github.com/Anderson-Soares-Martins",
  resumePt: "/Anderson-Soares-Martins-Curriculo.pdf",
  resumeEn: "/Anderson-Soares-Martins-Resume.pdf",
  url: "https://andersoaresmartins.com.br"
} as const;

export const meta = {
  pt: {
    title: "Anderson Soares Martins | Full Stack Developer & Product Builder",
    description:
      "Desenvolvedor full stack com visão de produto. Construo apps, dashboards e integrações de ponta a ponta, com IA como parte real do meu processo de engenharia."
  },
  en: {
    title: "Anderson Soares Martins | Full Stack Developer & Product Builder",
    description:
      "Full stack developer with a product mindset. I build apps, dashboards and integrations end-to-end, with AI as a real part of my engineering process."
  }
} as const;

export const nav = {
  pt: [
    { href: "#about", label: "Sobre" },
    { href: "#stack", label: "Stack" },
    { href: "#projects", label: "Projetos" },
    { href: "#experience", label: "Experiência" },
    { href: "#contact", label: "Contato" }
  ],
  en: [
    { href: "#about", label: "About" },
    { href: "#stack", label: "Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" }
  ]
} as const;

export const misc = {
  pt: {
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    themeToggle: "Alternar tema",
    langSwitch: "EN",
    skipToContent: "Pular para o conteúdo"
  },
  en: {
    menuOpen: "Open menu",
    menuClose: "Close menu",
    themeToggle: "Toggle theme",
    langSwitch: "PT",
    skipToContent: "Skip to content"
  }
} as const;
