import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import profile from "../assets/profile.jpg";
import "./about.css";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joaoarthur25/" },
  { label: "GitHub", href: "https://github.com/JoaoArthur25" },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about" id="sobre">
      <div className="container about__grid">
        <Reveal className="about__text">
          <p className="eyebrow">{t("about.eyebrow")}</p>
          <h2 className="section-title">{t("about.title")}</h2>
          <p className="about__p">{t("about.p1")}</p>
          <p className="about__p">{t("about.p2")}</p>

          <div className="recruiters">
            <p className="recruiters__label mono">{t("about.recruiters")}</p>
            <p className="recruiters__text">{t("about.recruiters_text")}</p>
            <p className="recruiters__note">{t("about.citizenship")}</p>
            <div className="recruiters__actions">
              <a
                className="about__cv"
                href={t("about.cv_file")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("about.cv")} ↓
              </a>
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="about__social-link"
                >
                  {l.label} ↗
                </a>
              ))}
              <a
                href="https://www.instagram.com/jarthur_lp/"
                target="_blank"
                rel="noreferrer"
                className="about__social-link about__social-link--quiet"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="about__portrait-wrap">
          <div className="about__portrait">
            <img src={profile} alt="João Arthur Lima da Silva" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
