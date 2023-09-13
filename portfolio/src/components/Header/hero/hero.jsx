import React from "react";
import css from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        <div className={css.upperElements}>
          <span>
            Hey there, <br/>I am Nhan
          </span>
          <span>
            I design beautiful simple
            <br/>
          </span>
        </div>
        <div className={css.lowerElements}></div>
      </div>
    </section>
  );
};

export default Hero;
