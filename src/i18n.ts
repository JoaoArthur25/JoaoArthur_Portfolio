import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      nav: {
        projects: "Projetos",
        research: "Pesquisa",
        services: "Serviços",
        about: "Sobre",
        contact: "Contato",
      },
      hero: {
        eyebrow: "João Arthur Lima da Silva — Desenvolvedor Full Stack",
        title: "Software em produção,\nnão em promessa.",
        lead: "Construo sistemas que sustentam a rotina de quem usa: CRM jurídico com WhatsApp integrado, automação de atendimento, landing pages que convertem — e até gestão de torneios de xadrez.",
        research: "Também pesquiso IA na UDESC: RAG e grafos de conhecimento.",
        status: "disponível para projetos freelance e estágio (jan/2027)",
        location: "Joinville/SC · remoto",
        cta_projects: "Ver projetos",
        cta_contact: "Falar comigo",
      },
      projects: {
        eyebrow: "Casos reais",
        title: "Projetos",
        in_production: "em produção",
        internal: "projeto privado",
        visit: "Visitar site",
        crm: {
          name: "CRM Jurídico",
          client: "escritório de advocacia · cliente real",
          desc: "CRM completo para a operação do escritório, em produção desde agosto de 2026: gestão de clientes e casos, atendimento por WhatsApp na API oficial da Meta dentro do próprio sistema, deploy contínuo e backup diário automatizado. Feito com React, TypeScript, Node.js/Express, Prisma e PostgreSQL.",
        },
        chess: {
          name: "Chess Admin",
          client: "torneios de xadrez",
          desc: "Plataforma de administração de torneios: inscrições, emparceiramento suíço via bbpPairings, lançamento de resultados e classificação atualizada rodada a rodada.",
        },
        bot: {
          name: "Bot de WhatsApp",
          client: "atendimento automatizado",
          desc: "Automação sobre a WhatsApp Cloud API oficial: triagem de leads, respostas fora do horário e transbordo para atendimento humano — no mesmo número do escritório.",
        },
        lps: {
          name: "Landing pages para advocacia",
          client: "direito bancário · superendividamento",
          desc: "Páginas de captação para advogados, com SEO, carregamento rápido e conversão direta para o WhatsApp. Publicadas e gerando contato todos os dias.",
        },
      },
      research: {
        eyebrow: "Na universidade e fora dela",
        title: "Pesquisa e IA",
        ic: {
          name: "Iniciação científica: grafo de conhecimento e RAG",
          badge: "UDESC · grupo BDES · 2026–2027",
          desc: "Pesquisa em grafo de conhecimento e RAG autocorretivo para respostas explicáveis: o sistema mostra de onde tirou cada resposta e reconhece quando não sabe. Participo de um artigo em preparação sobre o pipeline de RAG do grupo.",
        },
        llm: {
          name: "Serviço de IA com LLM local e remoto",
          badge: "projeto pessoal",
          desc: "Serviço em Python/FastAPI que integra LLM local e remoto com fallback automático, faz RAG sobre uma base própria com embeddings e mede o custo de cada chamada.",
        },
        tag_kg: "grafos de conhecimento",
      },
      services: {
        eyebrow: "O que eu faço",
        title: "Serviços",
        s1: {
          name: "Sistemas sob medida",
          desc: "Aplicações web completas — CRMs, painéis administrativos, plataformas internas — do banco de dados ao deploy.",
        },
        s2: {
          name: "Landing pages de alta conversão",
          desc: "Design responsivo, SEO e mensagem clara para transformar visita em contato no WhatsApp.",
        },
        s3: {
          name: "Automação de WhatsApp",
          desc: "Bots e integrações na API oficial da Meta: atendimento 24 horas sem perder o toque humano.",
        },
        s4: {
          name: "Integrações e APIs",
          desc: "Conecto seu sistema a serviços externos: pagamentos, mensageria e APIs REST de terceiros.",
        },
      },
      tech: {
        title: "Stack",
        interface: "interface",
        server: "servidor",
        ops: "operação",
        ai: "IA",
        kg: "grafos de conhecimento",
      },
      about: {
        eyebrow: "Quem faz",
        title: "Sobre mim",
        p1: "Sou João Arthur Lima da Silva, desenvolvedor full stack e estudante de Ciência da Computação na UDESC, em Joinville/SC. Meu trabalho começa onde o template termina: entendo a rotina do seu negócio e construo o sistema que ela pede, e fico por perto depois do deploy, porque software de verdade é o que continua funcionando na segunda-feira.",
        p2: "Hoje mantenho sistemas em produção para escritórios de advocacia e sou bolsista de iniciação científica em IA. Antes disso, fui gerente de projetos na Konvex Jr., empresa júnior de computação da UDESC, onde vencemos o Hackathon Reuni e o Problem Solving do CONCEJ. Em tudo, a mesma régua: código que eu teria orgulho de herdar.",
        cv: "Baixar currículo",
        cv_file: "/curriculo-joao-arthur-pt.pdf",
        recruiters: "Para recrutadores",
        recruiters_text: "Buscando estágio em desenvolvimento de software ou engenharia de IA a partir de janeiro de 2027.",
        citizenship: "Cidadania brasileira e portuguesa: posso trabalhar na União Europeia sem visto.",
      },
      contact: {
        eyebrow: "Contato",
        title: "Vamos tirar seu projeto do papel?",
        lead: "Me chama no WhatsApp ou manda um e-mail. Respondo rápido — atendimento é o meu produto.",
        whatsapp: "Chamar no WhatsApp",
        email: "Enviar e-mail",
        rights: "Feito à mão, sem template.",
      },
    },
  },
  en: {
    translation: {
      nav: {
        projects: "Projects",
        research: "Research",
        services: "Services",
        about: "About",
        contact: "Contact",
      },
      hero: {
        eyebrow: "João Arthur Lima da Silva — Full Stack Developer",
        title: "Software in production,\nnot in promises.",
        lead: "I build systems that carry their users' daily routine: a legal CRM with WhatsApp built in, service automation, landing pages that convert — and even chess tournament management.",
        research: "I also do AI research at UDESC: RAG and knowledge graphs.",
        status: "available for freelance projects and internships (Jan 2027)",
        location: "Joinville, Brazil · remote",
        cta_projects: "See projects",
        cta_contact: "Get in touch",
      },
      projects: {
        eyebrow: "Real cases",
        title: "Projects",
        in_production: "in production",
        internal: "private project",
        visit: "Visit site",
        crm: {
          name: "Legal CRM",
          client: "law firm · real client",
          desc: "A complete CRM for the firm's operation, in production since August 2026: client and case management, WhatsApp service on Meta's official API inside the system itself, continuous deployment and automated daily backups. Built with React, TypeScript, Node.js/Express, Prisma and PostgreSQL.",
        },
        chess: {
          name: "Chess Admin",
          client: "chess tournaments",
          desc: "Tournament administration platform: registrations, Swiss pairings via bbpPairings, result entry and standings updated round by round.",
        },
        bot: {
          name: "WhatsApp Bot",
          client: "automated service",
          desc: "Automation on the official WhatsApp Cloud API: lead triage, after-hours replies and handoff to a human agent — on the firm's own number.",
        },
        lps: {
          name: "Landing pages for law firms",
          client: "banking law · debt relief",
          desc: "Lead-generation pages for lawyers, with SEO, fast loading and direct conversion to WhatsApp. Live and generating contacts every day.",
        },
      },
      research: {
        eyebrow: "In and out of university",
        title: "Research & AI",
        ic: {
          name: "Undergraduate research: knowledge graphs and RAG",
          badge: "UDESC · BDES group · 2026–2027",
          desc: "Research on knowledge graphs and self-corrective RAG for explainable answers: the system shows where each answer came from and recognizes when it doesn't know. I'm contributing to a paper in preparation on the group's RAG pipeline.",
        },
        llm: {
          name: "AI service with local and remote LLMs",
          badge: "personal project",
          desc: "Python/FastAPI service that integrates local and remote LLMs with automatic fallback, runs RAG over a custom knowledge base with embeddings and tracks the cost of every call.",
        },
        tag_kg: "knowledge graphs",
      },
      services: {
        eyebrow: "What I do",
        title: "Services",
        s1: {
          name: "Custom systems",
          desc: "Complete web applications — CRMs, admin panels, internal platforms — from database to deployment.",
        },
        s2: {
          name: "High-conversion landing pages",
          desc: "Responsive design, SEO and a clear message to turn visits into WhatsApp conversations.",
        },
        s3: {
          name: "WhatsApp automation",
          desc: "Bots and integrations on Meta's official API: round-the-clock service without losing the human touch.",
        },
        s4: {
          name: "Integrations & APIs",
          desc: "I connect your system to external services: payments, messaging and third-party REST APIs.",
        },
      },
      tech: {
        title: "Stack",
        interface: "interface",
        server: "server",
        ops: "operations",
        ai: "AI",
        kg: "knowledge graphs",
      },
      about: {
        eyebrow: "The person behind it",
        title: "About me",
        p1: "I'm João Arthur Lima da Silva, a full-stack developer and Computer Science student at UDESC in Joinville, Brazil. My work starts where templates end: I learn how your business runs and build the system it calls for, and I stay close after deployment, because real software is the kind that still works on Monday.",
        p2: "Today I maintain production systems for law firms and hold an undergraduate research fellowship in AI. Before that, I was a project manager at Konvex Jr., UDESC's computing junior enterprise, where we won the Reuni Hackathon and the CONCEJ Problem Solving challenge. Same bar everywhere: code I'd be proud to inherit.",
        cv: "Download résumé",
        cv_file: "/resume-joao-arthur-en.pdf",
        recruiters: "For recruiters",
        recruiters_text: "Looking for a software development or AI engineering internship starting January 2027.",
        citizenship: "Brazilian and Portuguese citizen: authorized to work in the EU, no visa sponsorship needed.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Shall we get your project off the ground?",
        lead: "Message me on WhatsApp or send an email. I reply fast — service is my product.",
        whatsapp: "Message on WhatsApp",
        email: "Send email",
        rights: "Handmade, no templates.",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    resources,
    fallbackLng: "pt",
    interpolation: { escapeValue: false },
  });

export default i18n;
