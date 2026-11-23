import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import "./techband.css";

export default function TechBand() {
  const { t } = useTranslation();

  const groups = [
    {
      label: t("tech.interface"),
      items: ["React", "TypeScript", "styled-components", "Tailwind CSS"],
    },
    {
      label: t("tech.server"),
      items: ["Node.js", "NestJS", "Python", "FastAPI", "PostgreSQL", "Prisma", "Java"],
    },
    {
      label: t("tech.ops"),
      items: ["Docker", "Git", "GitHub Actions", "Netlify", "Backups B2"],
    },
    {
      label: t("tech.ai"),
      items: ["RAG", "LLMs", t("tech.kg")],
    },
  ];

  return (
    <section className="techband">
      <div className="container">
        <Reveal>
          <div className="techband__inner">
            <span className="techband__title mono">{t("tech.title")}</span>
            {groups.map((group) => (
              <div className="techband__group" key={group.label}>
                <span className="techband__label mono">{group.label}</span>
                <span className="techband__items">
                  {group.items.join(" · ")}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
