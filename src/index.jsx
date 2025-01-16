import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global-styles";
import Menu from "./components/Menu";
import About from "./components/About";
import { theme } from "./styles/theme";
import Tecs from "./components/Tecs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhatsappButton from "./components/WhatsappButton";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Menu />  
        <About />
        <Projects />
        <Services />
        <Tecs />
        <WhatsappButton />
      </>
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(<App />);
