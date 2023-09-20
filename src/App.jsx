import React from "react";
import Experties from "./components/Experties/experties";
import Header from "./components/Header/header";
import Hero from "./components/Header/Hero/hero";
import Portfolio from "./components/Portfolio/portfolio";
import Works from "../src/components/Works/works";
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
