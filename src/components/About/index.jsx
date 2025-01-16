import React from "react";
import {
  AboutWrapper,
  AboutContent,
  AboutTitle,
  AboutDescription,
  AboutSocialMedia,
  SocialMediaLink,
  AboutSocialMediaText,
  AboutImage,
  AboutDivPai,
  AboutDivContatos,
  CVButton,
} from "./styles";
import "../../i18";
import { useTranslation } from "react-i18next";
import profileImage from "../../images/profile.jpeg";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const About = () => {
  const { t } = useTranslation();

  return (
    <AboutWrapper id="about">
      <AboutContent>
        <AboutTitle>{t("about.title")}</AboutTitle>
        <AboutDescription>{t("about.description")}</AboutDescription>
        <AboutDivPai>
          <AboutDivContatos>
            <AboutSocialMediaText>{t("about.redes_sociais")}</AboutSocialMediaText>
            <AboutSocialMedia>
              <SocialMediaLink
                href="https://www.linkedin.com/in/joaoarthur25/"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
              </SocialMediaLink>
              <SocialMediaLink href="https://github.com/JoaoArthur25" target="_blank" rel="noreferrer">
                <FiGithub />
              </SocialMediaLink>
            </AboutSocialMedia>
          </AboutDivContatos>
          <AboutDivContatos>
            <AboutSocialMediaText>{t("about.cv")}</AboutSocialMediaText>
            <CVButton
             href="/Currículo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Currículo.pdf"
            >
              {t("about.download_cv")}
            </CVButton>
          </AboutDivContatos>
        </AboutDivPai>
      </AboutContent>
      <AboutImage src={profileImage} alt="João Arthur Lima da Silva" />
    </AboutWrapper>
  );
};

export default About;
