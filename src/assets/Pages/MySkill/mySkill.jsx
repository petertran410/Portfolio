import React from "react";
import css from "./mySKill.module.scss";
import Slider from "react-slick";
import { mySkills, sliderSettingsMySkills } from "../../../utils/data";
import { staggerChildren, zoomIn } from "../../../utils/motion";
import { motion } from "framer-motion";

const MySkill = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className={`fontSet-lowerBody ${css.wrapper}`}>
      <motion.div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
        <motion.div
          variants={zoomIn(0.5, 0.7)}
          className={`flexCenter ${css.heading}`}>
          {/* My Skills */}
          <span className="primaryText">My Skills</span>
        </motion.div>

        {/* Image */}
        <div className={`yPaddings ${css.showSkills}`}>
          <Slider {...sliderSettingsMySkills} class={css.slider}>
            {mySkills.map((skill, i) => {
              return (
                <div key={i} className={`flexCenter ${css.inner_img}`}>
                  <img src={skill.img} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default MySkill;
