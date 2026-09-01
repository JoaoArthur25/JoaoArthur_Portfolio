import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import "./footer.css";

const WHATSAPP = "https://wa.me/5547989293394";
const EMAIL = "mailto:jarthurlsilva25@gmail.com";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contato">
      <div className="container">
        <Reveal className="footer__cta">
          <p className="eyebrow">{t("contact.eyebrow")}</p>
          <h2 className="footer__title">{t("contact.title")}</h2>
          <p className="footer__lead">{t("contact.lead")}</p>
          <div className="footer__actions">
            <a
              className="footer__btn footer__btn--solid"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              {t("contact.whatsapp")}
            </a>
            <a className="footer__btn footer__btn--ghost" href={EMAIL}>
              {t("contact.email")}
            </a>
          </div>
        </Reveal>
        <div className="footer__bottom mono">
          <span>
            © {year} João Arthur Silva — {t("contact.rights")}
          </span>
          <span className="footer__email">jarthurlsilva25@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}
