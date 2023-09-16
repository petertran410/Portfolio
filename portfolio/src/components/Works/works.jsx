import React from "react";
import css from "./work.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import { workExp } from "../../utils/data";

const getColor = (index) => {
  const colors = ["#286FC6", "#F2704E", "#EEC048"];
  return colors[index % colors.length];
};

// const generateCircles = () => {
//   const circles = [];
//   workExp.forEach((exp, index) => {
//     circles.push(
//       <div>
//         <div
//           className={css.circle}
//           style={{ backgroundColor: getColor(index) }}></div>
//       </div>
//     );
//   });
//   return circles;
// };

function YourComponent() {
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
      <div className={`flexCenter ${css.container}`}>
        <span className="primaryText yPaddings">My Work Experience</span>

        <div className={`flexCenter ${css.experiences}`}>
          {workExp.map((exp, i) => {
            return (
              <motion.div
                variants={textVariant2}
                className={`flexCenter ${css.exp}`}
                key={i}>
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>

                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })}

          {/* <motion.div variants={zoomIn(1, 1)} className={css.processBar}>
            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
            <div>
              <div
                className={css.circle}
                style={{ backgroundColor: "#286FC6" }}></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ backgroundColor: "#F2704E" }}></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ backgroundColor: "#EEC048" }}></div>
            </div>
          </motion.div> */}

          <motion.div variants={zoomIn(1, 1)} className={css.processBar}>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className={css.line}></motion.div>
            {YourComponent()}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Works;
