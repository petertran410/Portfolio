import React from "react";
import css from "./experties.module.scss";
import { projectExperience } from "../../utils/data";

const Experties = () => {
  return (
    <section className={css.wrapper}>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
                <div className="flexCenter">
                  <exp.icon size={25} color="red" />
                </div>

                <div>
                  <span>{exp.name}</span>
                  <span>{exp.projects}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={css.rightSide}>right side</div>
      </div>
    </section>
  );
};

export default Experties;
