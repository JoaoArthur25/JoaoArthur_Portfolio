import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import "./services.css";

const keys = ["s1", "s2", "s3", "s4"] as const;

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="services" id="servicos">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t("services.eyebrow")}</p>
          <h2 className="section-title">{t("services.title")}</h2>
        </Reveal>
        <div className="services__grid">
          {keys.map((key, idx) => (
            <Reveal key={key} delay={idx * 0.08} className="service">
              <h3 className="service__name">{t(`services.${key}.name`)}</h3>
              <p className="service__desc">{t(`services.${key}.desc`)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
