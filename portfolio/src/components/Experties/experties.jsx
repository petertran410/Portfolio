import React from "react";
import css from "./experties.module.scss";

const Experties = () => {
  return (
    <section className={css.wrapper}>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
        <div className={css.leftSide}>Ngọc Nhân</div>
        <div className={css.rightSide}>Ngọc Nhân</div>
      </div>
    </section>
  );
};

export default Experties;
