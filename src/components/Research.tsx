import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import "./research.css";

export default function Research() {
  const { t } = useTranslation();
  const items = [
    { key: "ic", tags: ["RAG", "LLMs", t("research.tag_kg")] },
    { key: "llm", tags: ["RAG", "LLMs", "Python", "FastAPI"] },
  ] as const;

  return (
    <section className="research" id="pesquisa">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t("research.eyebrow")}</p>
          <h2 className="section-title">{t("research.title")}</h2>
        </Reveal>
        <div className="research__grid">
          {items.map(({ key, tags }, idx) => (
            <Reveal key={key} delay={idx * 0.1} className="research__cell">
              <article className="research__card">
                <p className="research__badge mono">{t(`research.${key}.badge`)}</p>
                <h3 className="case__name">{t(`research.${key}.name`)}</h3>
                <p className="case__desc">{t(`research.${key}.desc`)}</p>
                <ul className="case__tags mono">
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
