import React from "react";
import css from "./work.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import { workExp } from "../../utils/data";

const getColor = (index) => {
  const colors = ["#286FC6", "#F2704E", "#EEC048"];
  return colors[index % colors.length];
};

function TheComponent() {
  const circles = [];

  workExp.forEach((exp, index) => {
    circles.push(
      <div>
        <div
          className={css.circle}
          style={{ backgroundColor: getColor(index) }}></div>
      </div>
    );
  });

  return <motion.div className={css.processBar}>{circles}</motion.div>;
}

const Works = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="work"></a>

      <div className={`flexCenter ${css.container}`}>
        <span className="primaryText yPaddings">My Projects</span>

        <div className={`flexCenter ${css.experiences}`}>
          {workExp.map((exp, i) => {
            return (
              <div className={`flexCenter ${css.exp}`} key={i}>
                <motion.div
                  variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                  className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </motion.div>

                <motion.div
                  variants={fadeIn("left", "tween", (i + 1) * 0.2, 1)}
                  className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </motion.div>
              </div>
            );
          })}

          <motion.div variants={zoomIn(1, 1)} className={css.processBar}>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className={css.line}></motion.div>
            {TheComponent()}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Works;
