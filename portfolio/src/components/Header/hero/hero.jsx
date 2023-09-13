import React from "react";
import css from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        <div className={css.upperElements}>
          <span>
            Hey there, <br />I am Nhan
          </span>
          <span>
            I design beautiful simple
            <br />
            things, And I love what I do
          </span>
        </div>

        <div className={css.person}>
          <img src="./person.png" alt="" />
        </div>

        <a className={css.email} href="mailto:nhantran4102002@gmail.com" target="_blank">
          nhantran4102002@gmail.com
        </a>

        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Expriences</div>
            </div>
          </div>
          <div className={css.certification}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>UI/UX DESIGNER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
