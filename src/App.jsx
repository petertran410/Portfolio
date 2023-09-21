import React from "react";
import Experties from "./assets/components/Experties/experties";
import Header from "./assets/components/Header/header";
import Hero from "./assets/components/Header/Hero/hero";
import Portfolio from "./assets/components/Portfolio/portfolio";
import Works from "../src/assets/components/Works/works";
import css from "./styles/app.module.scss";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Portfolio />
      <Experties />
      <Works />
    </div>
  );
};

export default App;
