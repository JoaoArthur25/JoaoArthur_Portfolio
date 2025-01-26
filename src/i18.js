// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      menu: {
        about: "About Me",
        tecs: "Technologies",
        services: "Services",
        projects: "Projects",
      },
      services: {
        desenvolvimento_sites: "Website Development",
        title: "Services Realized",
        criacao_landing_pages: "Landing Page Creation",
        otimizacao_seo: "SEO Optimization",
        conexao_rest_apis: "REST API Integration",
        descricao_desenv_sites:
          "I turn your ideas into a professional and attractive website, focused on delivering your message clearly and effectively.",
        descricao_criacao_landing_pages:
          "I develop high-conversion pages, with modern and responsive design, to attract and convert leads.",
        descricao_otimizacao_seo:
          "I increase your site’s visibility on search engines, improving rankings and attracting more visitors.",
        descricao_conexao_rest_apis:
          "I integrate your website with external APIs, allowing information exchange and enhancing the user experience.",
      },
      projects: {
        title: "My Projects",
        priscilalp: "Landing Page - Consumer Law",
        pixelshots: "Landing Page - Pixelshots",
        academic_nexus: "Desktop App - Academic Nexus",
        fernandalp: "Landing Page - Law Firm",
      },
      about: {
        title:
          "Take your digital business to the next level with a top-notch full stack developer!",
        description:
          "Hi! I’m João Arthur Silva, a full stack developer with a passion for creating digital solutions that make a difference. I’m always looking for new challenges and opportunities to grow, so let’s work together and take your business to the next level!",
        redes_sociais: "Social Media",
        cv: "Download CV",
        download_cv: "Curriculum",
      },
      tecs: {
        title: "Technologies",
      },
    },
  },
  pt: {
    translation: {
      menu: {
        about: "Sobre Mim",
        tecs: "Tecnologias",
        services: "Serviços",
        projects: "Projetos",
      },
      services: {
        desenvolvimento_sites: "Desenvolvimento de Sites",
        title: "Serviços Realizados",
        criacao_landing_pages: "Criação de Landing Pages",
        otimizacao_seo: "Otimização de SEO",
        conexao_rest_apis: "Conexão/Consumo de REST APIs",
        descricao_desenv_sites:
          "Transformo suas ideias em um site profissional e atrativo, focado em passar a sua mensagem de forma clara e objetiva.",
        descricao_criacao_landing_pages:
          "Desenvolvo páginas de alta conversão, com design moderno e responsivo, para atrair e converter leads.",
        descricao_otimizacao_seo:
          "Aumento a visibilidade do seu site nos motores de busca, melhorando o ranqueamento e atraindo mais visitantes.",
        descricao_conexao_rest_apis:
          "Integro seu site com APIs externas, permitindo a troca de informações e aprimorando a experiência do usuário.",
      },
      projects: {
        title: "Meus Projetos",
        priscilalp: "Landing Page - Direito do Consumidor",
        pixelshots: "Landing Page - Pixelshots",
        academic_nexus: "Aplicativo - Academic Nexus",
        fernandalp: "Landing Page - Escritório de Advocacia",
      },
      about: {
        title:
          "Eleve seu negócio digital a outro nível com um full stack de qualidade!",
        description:
          "Olá! Sou João Arthur Silva, um desenvolvedor full stack apaixonado por criar soluções digitais que fazem a diferença. Estou sempre em busca de novos desafios e oportunidades para crescer, então vamos trabalhar juntos e levar o seu negócio para o próximo nível!",
        redes_sociais: "Redes Sociais",
        cv: "Baixar Currículo",
        download_cv: "Currículo",
      },
      tecs: {
        title: "Tecnologias",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "querystring"],
      caches: ["localStorage"],
    },
    resources,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
