import React from "react";
import { TecsWrapper, TecsContent, Card, Icon } from "./styles";
import "../../i18";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { SiNestjs, SiStyledcomponents, SiPostgresql, SiTypescript } from "react-icons/si";

const Tecs = () => {
  const { t } = useTranslation();

  const tecs = [
    { icon: <FaReact /> },
    { icon: <FaJs /> },
    { icon: <FaJava /> },
    { icon: <FaDocker /> },
    { icon: <SiTypescript /> },
    { icon: <FaHtml5 /> },
    { icon: <FaCss3Alt /> },
    { icon: <SiStyledcomponents /> },
    { icon: <FaBootstrap /> },
    { icon: <FaNodeJs /> },
    { icon: <SiNestjs /> },
    { icon: <SiPostgresql /> },
    { icon: <FaGitAlt /> },
  ];

  const settings = {
    dots: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            },
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            },
        },
        ],
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false
  };

  return (
    <TecsWrapper id="tecs">
      <h1>{t("tecs.title")}</h1>
      <TecsContent>
        <Slider {...settings}>
          {tecs.map((tec, index) => (
            <Card key={index}>
              <Icon>{tec.icon}</Icon>
            </Card>
          ))}
        </Slider>
      </TecsContent>
    </TecsWrapper>
  );
};

export default Tecs;
