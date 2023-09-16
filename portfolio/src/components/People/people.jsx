import React, {Component} from "react";
import css from "./people.module.scss";
import { motion } from "framer-motion";
import { staggerChildren } from "../../utils/motion";
import Slider from "react-slick";

const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className={`paddings ${css.wrapper}`}>
      <div className={`yPaddings innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">People talk about us</span>
          <p style={{ marginTop: "2rem" }}>
            I got a job that was in accordance with the salary and field of work
          </p>
          <p>The process of submitting an application was quite cosy</p>
        </div>

        {/* Carousel section for slide */}
        <div className={css.comments}>
          <Slider {...sliderSettings} className={css.slider}>
            {
              // Vid coi tới 2.00.38
            }
          </Slider>
        </div>
      </div>
    </motion.section>
  );
};

export default People;
