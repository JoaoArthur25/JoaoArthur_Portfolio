import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import silvanaShot from "../assets/silvanalp.png";
import "./projects.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

function VignetteFrame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="vignette"
      variants={stagger}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="vignette__bar">
        <span className="vignette__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="vignette__title mono">{title}</span>
      </div>
      <div className="vignette__body">{children}</div>
    </motion.div>
  );
}

function CrmVignette() {
  const cols = [
    { title: "Leads", cards: [{ n: "M. Andrade", tag: "WhatsApp" }, { n: "J. Costa", tag: "site" }] },
    { title: "Em atendimento", cards: [{ n: "R. Nunes", tag: "revisional" }] },
    { title: "Fechado", cards: [{ n: "L. Martins", tag: "contrato ✓" }] },
  ];
  return (
    <VignetteFrame title="crm-juridico — funil de atendimento">
      <div className="crm">
        {cols.map((col) => (
          <div className="crm__col" key={col.title}>
            <span className="crm__col-title mono">{col.title}</span>
            {col.cards.map((card) => (
              <motion.div className="crm__card" variants={item} key={card.n}>
                <span className="crm__card-name">{card.n}</span>
                <span className="crm__card-tag mono">{card.tag}</span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </VignetteFrame>
  );
}

function ChessVignette() {
  const rows = [
    { mesa: "01", white: "Almeida", score: "½ – ½", black: "Rocha" },
    { mesa: "02", white: "Pereira", score: "1 – 0", black: "Lima" },
    { mesa: "03", white: "Duarte", score: "0 – 1", black: "Farias" },
  ];
  return (
    <VignetteFrame title="chess-admin — rodada 4 · sistema suíço">
      <div className="chess">
        <div className="chess__head mono">
          <span>mesa</span>
          <span>brancas</span>
          <span>resultado</span>
          <span>pretas</span>
        </div>
        {rows.map((row) => (
          <motion.div className="chess__row" variants={item} key={row.mesa}>
            <span className="mono chess__mesa">{row.mesa}</span>
            <span>{row.white}</span>
            <span className="mono chess__score">{row.score}</span>
            <span>{row.black}</span>
          </motion.div>
        ))}
      </div>
    </VignetteFrame>
  );
}

function BotVignette() {
  return (
    <VignetteFrame title="whatsapp-bot — cloud api oficial">
      <div className="chat">
        <motion.div className="chat__bubble chat__bubble--in" variants={item}>
          Olá! Preciso falar sobre meu processo.
          <span className="chat__time mono">22:47</span>
        </motion.div>
        <motion.div className="chat__bubble chat__bubble--bot" variants={item}>
          Oi! Sou o assistente do escritório. Me conta rapidinho qual é o
          assunto?
          <span className="chat__time mono">22:47 · bot</span>
        </motion.div>
        <motion.div className="chat__handoff mono" variants={item}>
          → transbordo para atendimento humano às 08h
        </motion.div>
      </div>
    </VignetteFrame>
  );
}

function LpVignette() {
  return (
    <VignetteFrame title="silvanasampaio.com.br">
      <motion.div className="lp" variants={item}>
        <img
          src={silvanaShot}
          alt="Landing page de Silvana Sampaio Advocacia"
          loading="lazy"
        />
      </motion.div>
    </VignetteFrame>
  );
}

type CaseDef = {
  key: "crm" | "chess" | "bot" | "lps";
  production: boolean;
  tags: string[];
  link?: { href: string; label: string };
  vignette: React.ReactNode;
};

const cases: CaseDef[] = [
  {
    key: "crm",
    production: true,
    tags: ["React", "Node.js", "PostgreSQL", "WhatsApp Cloud API"],
    vignette: <CrmVignette />,
  },
  {
    key: "chess",
    production: false,
    tags: ["React", "Node.js", "PostgreSQL", "bbpPairings"],
    vignette: <ChessVignette />,
  },
  {
    key: "bot",
    production: true,
    tags: ["Node.js", "Cloud API", "Webhooks"],
    vignette: <BotVignette />,
  },
  {
    key: "lps",
    production: true,
    tags: ["React", "SEO", "Performance"],
    link: { href: "https://silvanasampaio.com.br", label: "silvanasampaio.com.br" },
    vignette: <LpVignette />,
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="projects" id="projetos">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t("projects.eyebrow")}</p>
          <h2 className="section-title">{t("projects.title")}</h2>
        </Reveal>
        <div className="projects__list">
          {cases.map((c, idx) => (
            <article
              className={`case ${idx % 2 === 1 ? "case--flip" : ""}`}
              key={c.key}
            >
              <Reveal className="case__info">
                <p className="case__meta mono">
                  {c.production && (
                    <span className="case__badge">
                      <span className="case__badge-dot" aria-hidden="true" />
                      {t("projects.in_production")}
                    </span>
                  )}
                  <span>{t(`projects.${c.key}.client`)}</span>
                </p>
                <h3 className="case__name">{t(`projects.${c.key}.name`)}</h3>
                <p className="case__desc">{t(`projects.${c.key}.desc`)}</p>
                <ul className="case__tags mono">
                  {c.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {c.link && (
                  <a
                    className="case__link"
                    href={c.link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("projects.visit")} ↗
                  </a>
                )}
              </Reveal>
              <div className="case__media">{c.vignette}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
