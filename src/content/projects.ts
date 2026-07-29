import bannerPagueSafe from "../assets/banner-pague-safe.png";
import bannerConvertText from "../assets/banner-covert-text.png";
import bannerHandyman from "../assets/banner-handyman.png";

export const projectsMeta = [
  {
    id: "pague-safe",
    image: bannerPagueSafe,
    demoUrl: null,
    tech: ["Next.js", "Tailwind CSS", "Vercel"]
  },
  {
    id: "convert-text",
    image: bannerConvertText,
    demoUrl: "https://webappazul.andersoaresmartins.com.br/",
    tech: ["React", "Next.js", "Automação de arquivos"]
  },
  {
    id: "handyman",
    image: bannerHandyman,
    demoUrl: null,
    tech: ["Next.js", "Tailwind CSS"]
  }
] as const;

export const projects = {
  pt: {
    eyebrow: "projetos",
    heading: "Estudos de caso, não só telas bonitas.",
    sub: "Projetos reais, com problema, decisão técnica e resultado, inclusive os mais simples, que ainda dizem muito sobre como eu trabalho.",
    caseStudyBadge: "Estudo de caso",
    liveBadge: "No ar",
    demoLabel: "Ver ao vivo →",
    problemLabel: "Problema",
    solutionLabel: "Solução",
    items: {
      "pague-safe": {
        title: "Pague Safe",
        tagline: "Landing page para gateway de pagamento",
        problem:
          "O cliente precisava de uma página de vendas que transmitisse confiança imediata. Em produto financeiro, qualquer hesitação custa conversão.",
        solution:
          "Desenvolvi a landing page do zero: hierarquia visual focada em conversão, copy objetiva e performance otimizada para carregar rápido em qualquer conexão.",
        note: "Estudo de caso: ambiente original sem hospedagem ativa no momento."
      },
      "convert-text": {
        title: "Conversor de Texto Automatizado",
        tagline: "Ferramenta interna de automação de dados",
        problem:
          "Processo manual repetitivo: transformar textos de um arquivo para outro formato a partir de uma planilha, trabalho operacional que não deveria ocupar tempo de gente.",
        solution:
          "Construí uma aplicação web que automatiza a leitura da planilha e a conversão do conteúdo, eliminando o retrabalho manual do processo.",
        note: "Em uso: ferramenta ativa que o cliente acessa para rodar a automação sob demanda."
      },
      handyman: {
        title: "Serviços de Manutenção Residencial",
        tagline: "Landing page institucional para profissional autônomo",
        problem:
          "Profissional autônomo sem presença digital, perdendo indicações por não ter para onde direcionar clientes em potencial.",
        solution:
          "Site institucional enxuto: apresentação dos serviços, prova social e canal direto de contato via telefone e WhatsApp.",
        note: "Estudo de caso: domínio original fora do ar atualmente."
      }
    }
  },
  en: {
    eyebrow: "projects",
    heading: "Case studies, not just pretty screens.",
    sub: "Real projects, with a problem, a technical decision and an outcome. Even the simpler ones still say a lot about how I work.",
    caseStudyBadge: "Case study",
    liveBadge: "Live",
    demoLabel: "View live →",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    items: {
      "pague-safe": {
        title: "Pague Safe",
        tagline: "Landing page for a payment gateway",
        problem:
          "The client needed a sales page that conveyed immediate trust. For a financial product, any hesitation costs a conversion.",
        solution:
          "Built the landing page from scratch: visual hierarchy focused on conversion, tight copy, and performance tuned to load fast on any connection.",
        note: "Case study: original environment has no active hosting right now."
      },
      "convert-text": {
        title: "Automated Text Converter",
        tagline: "Internal data-automation tool",
        problem:
          "A repetitive manual process: turning text from one file into another format based on a spreadsheet, operational work that shouldn't take up a person's time.",
        solution:
          "Built a web app that automates reading the spreadsheet and converting the content, removing the manual rework from the process.",
        note: "In use: an active tool the client accesses to run the automation on demand."
      },
      handyman: {
        title: "Home Maintenance Services",
        tagline: "Institutional landing page for an independent contractor",
        problem:
          "A self-employed professional with no digital presence, losing referrals for lack of anywhere to send potential clients.",
        solution:
          "A lean institutional site: service overview, social proof, and a direct contact channel via phone and WhatsApp.",
        note: "Case study: the original domain is currently offline."
      }
    }
  }
} as const;
