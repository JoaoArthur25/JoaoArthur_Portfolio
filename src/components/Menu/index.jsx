import React from "react";
import {
  MenuWrapper,
  MenuList,
  MenuItem,
  MenuLink,
  LanguageButton,
} from "./styles";
import "../../i18";
import { useTranslation } from "react-i18next";
import brazilFlag from "../../images/brazil.png";
import usaFlag from "../../images/united-states.png";

const Menu = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <MenuWrapper>
      <MenuList>
        <MenuItem>
          <MenuLink href="#about">{t("menu.about")}</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#projects">{t("menu.projects")}</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#services">{t("menu.services")}</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#tecs">{t("menu.tecs")}</MenuLink>
        </MenuItem>
      </MenuList>
      <LanguageButton
        onClick={() => changeLanguage(i18n.language === "pt" ? "en" : "pt")}
        className="language-toggle-button"
      >
        <img
          src={i18n.language === "pt" ? usaFlag : brazilFlag}
          alt={
            i18n.language === "pt" ? "Bandeira dos EUA" : "Bandeira do Brasil"
          }
          style={{
            width: "20px",
            height: "20px",
            filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)",
          }}
        />
      </LanguageButton>
    </MenuWrapper>
  );
};

export default Menu;
