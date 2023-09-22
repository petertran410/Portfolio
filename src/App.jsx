import React from "react";
import Experties from "./assets/Pages/Experties/experties";
import Header from "./assets/components/Header/header";
import Hero from "./assets/components/Header/Hero/hero";
import Portfolio from "./assets/Pages/Portfolio/portfolio";
import Works from "../src/assets/Pages/Works/works";
import css from "./styles/app.module.scss";
import MySkill from "./assets/Pages/MySkill/mySkill";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Works />
      <Portfolio />
      <Experties />
      <MySkill />
    </div>
  );
};

export default App;
