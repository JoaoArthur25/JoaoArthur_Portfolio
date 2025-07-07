import React from "react";
import { ProjectsWrapper, ProjectsContent, Card } from "./styles";
import "../../i18";
import { useTranslation } from "react-i18next";
import silvanalp from "../../images/silvanalp.png";
import sandralp from "../../images/sandralp.png";
import acdnexus from "../../images/acdnexus.png";
import fernandalp from "../../images/fernandalp.png";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: t("projects.silvanalp"),
      link: "https://silvanasampaioadv.netlify.app",
      image: silvanalp,
    },
    {
      name: t("projects.sandralp"),
      link: "https://sandrabarbosa.netlify.app",
      image: sandralp,
    },
    {
      name: t("projects.academic_nexus"),
      link: "https://github.com/JoaoArthur25/Academic-Nexus.git",
      image: acdnexus,
    },
    {
      name: t("projects.fernandalp"),
      link: "https://fernandamarvilaadv.com.br",
      image: fernandalp,
    },
  ];

  return (
    <ProjectsWrapper id="projects">
      <h1>{t("projects.title")}</h1>
      <ProjectsContent>
        {projects.map((project, index) => (
          <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }} key={index}>
            <Card image={project.image}>
              <h3>{project.name}</h3>
            </Card>
          </a>
        ))}
      </ProjectsContent>
    </ProjectsWrapper>
  );
};

export default Projects;
