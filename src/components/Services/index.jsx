import React from "react";
import { ServicesWrapper, ServiceContent, Card } from "./styles";
import "../../i18";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const service = [
    {
      name: t("services.desenvolvimento_sites"),
      description: t("services.descricao_desenv_sites"),
    },
    {
      name: t("services.criacao_landing_pages"),
      description: t("services.descricao_criacao_landing_pages"),
    },
    {
      name: t("services.otimizacao_seo"),
      description: t("services.descricao_otimizacao_seo"),
    },
    {
      name: t("services.conexao_rest_apis"),
      description: t("services.descricao_conexao_rest_apis"),
    },
  ];

  return (
    <ServicesWrapper id="services">
      <h1>{t("services.title")}</h1>
      <ServiceContent>
        {service.map((service, index) => (
          <Card key={index}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </Card>
        ))}
      </ServiceContent>
    </ServicesWrapper>
  );
};

export default Services;
