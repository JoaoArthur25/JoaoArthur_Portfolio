import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import profile from "../assets/profile.jpg";
import "./about.css";

const socials = [
  { label: "GitHub", href: "https://github.com/JoaoArthur25" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joaoarthur25/" },
  { label: "Instagram", href: "https://www.instagram.com/jarthur_lp/" },
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
          <div className="about__actions">
            <a
              className="about__cv"
              href="/Currículo.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("about.cv")} ↓
            </a>
            <div className="about__socials">
              <span className="mono about__socials-label">
                {t("about.socials")}
              </span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="about__social-link"
                >
                  {s.label} ↗
                </a>
              ))}
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
