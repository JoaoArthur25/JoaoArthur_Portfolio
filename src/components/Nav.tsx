import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./nav.css";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const lang = i18n.resolvedLanguage ?? "pt";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__brand">
          joão arthur<span className="nav__brand-dot">.</span>
        </a>
        <nav className="nav__links" aria-label="Seções">
          <a href="#projetos">{t("nav.projects")}</a>
          <a href="#servicos">{t("nav.services")}</a>
          <a href="#sobre">{t("nav.about")}</a>
          <a href="#contato">{t("nav.contact")}</a>
        </nav>
        <div className="nav__lang mono" role="group" aria-label="Idioma">
          <button
            className={lang.startsWith("pt") ? "is-active" : ""}
            onClick={() => i18n.changeLanguage("pt")}
          >
            PT
          </button>
          <span aria-hidden="true">/</span>
          <button
            className={lang.startsWith("en") ? "is-active" : ""}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
