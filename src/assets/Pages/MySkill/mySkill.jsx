import React from "react";
import css from "./mySKill.module.scss";

const MySkill = () => {
  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <div className={css.heading}>
          <span className="primaryText">My Skill</span>
          <span className="secondaryText"></span>
        </div>
      </div>
    </section>
  );
};

export default MySkill;
