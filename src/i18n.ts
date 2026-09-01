import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      nav: {
        projects: "Projetos",
        services: "Serviços",
        about: "Sobre",
        contact: "Contato",
      },
      hero: {
        eyebrow: "João Arthur Silva — Desenvolvedor Full Stack",
        title: "Software em produção,\nnão em promessa.",
        lead: "Construo sistemas que sustentam a rotina de quem usa: CRM jurídico com WhatsApp integrado, automação de atendimento, landing pages que convertem — e até gestão de torneios de xadrez.",
        status: "disponível para novos projetos",
        location: "Brasil · remoto",
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
          desc: "CRM completo para a operação do escritório: gestão de clientes e casos, atendimento por WhatsApp na API oficial da Meta dentro do próprio sistema, deploy contínuo e backup diário automatizado.",
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
      },
      about: {
        eyebrow: "Quem faz",
        title: "Sobre mim",
        p1: "Sou João Arthur Silva, desenvolvedor full stack. Meu trabalho começa onde o template termina: entendo a rotina do seu negócio e construo o sistema que ela pede — e fico por perto depois do deploy, porque software de verdade é o que continua funcionando na segunda-feira.",
        p2: "Hoje mantenho sistemas em produção para escritórios de advocacia e desenvolvo plataformas próprias, sempre com a mesma régua: código que eu teria orgulho de herdar.",
        cv: "Baixar currículo",
        socials: "Redes",
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
        services: "Services",
        about: "About",
        contact: "Contact",
      },
      hero: {
        eyebrow: "João Arthur Silva — Full Stack Developer",
        title: "Software in production,\nnot in promises.",
        lead: "I build systems that carry their users' daily routine: a legal CRM with WhatsApp built in, service automation, landing pages that convert — and even chess tournament management.",
        status: "available for new projects",
        location: "Brazil · remote",
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
          desc: "A complete CRM for the firm's operation: client and case management, WhatsApp service on Meta's official API inside the system itself, continuous deployment and automated daily backups.",
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
      },
      about: {
        eyebrow: "The person behind it",
        title: "About me",
        p1: "I'm João Arthur Silva, a full stack developer. My work starts where templates end: I learn how your business runs and build the system it calls for — and I stay close after deployment, because real software is the kind that still works on Monday.",
        p2: "Today I maintain production systems for law firms and build my own platforms, always with the same bar: code I'd be proud to inherit.",
        cv: "Download résumé",
        socials: "Social",
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
