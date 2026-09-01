import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import ChessCanvas from "./ChessCanvas";
import "./hero.css";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section className="hero" id="top">
      <ChessCanvas />
      <div className="hero__content container">
        <motion.p className="eyebrow" {...rise(0.1)}>
          {t("hero.eyebrow")}
        </motion.p>
        <motion.h1 className="hero__title" {...rise(0.22)}>
          {t("hero.title")}
        </motion.h1>
        <motion.p className="hero__lead" {...rise(0.36)}>
          {t("hero.lead")}
        </motion.p>
        <motion.div className="hero__actions" {...rise(0.48)}>
          <a className="hero__cta hero__cta--solid" href="#projetos">
            {t("hero.cta_projects")}
          </a>
          <a className="hero__cta hero__cta--ghost" href="#contato">
            {t("hero.cta_contact")}
          </a>
        </motion.div>
      </div>
      <motion.div className="hero__status container mono" {...rise(0.62)}>
        <span className="hero__status-dot" aria-hidden="true" />
        <span>{t("hero.status")}</span>
        <span className="hero__status-sep" aria-hidden="true">
          —
        </span>
        <span className="hero__status-loc">{t("hero.location")}</span>
      </motion.div>
    </section>
  );
}
