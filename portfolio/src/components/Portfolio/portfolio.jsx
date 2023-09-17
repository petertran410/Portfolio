import React from "react";
import css from "./portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Lastest Work</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>

          <span className="secondaryText">Explore More Works</span>
        </div>

        {/* Image */}
        <div className={`flexCenter ${css.showCase}`}>
          <motion.div
            className="img_1"
            variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <motion.img
              src="./showCase1.png"
              alt=""
            />
          </motion.div>
          <motion.div
            className="img_1"
            variants={fadeIn("up", "tween", 0.6, 0.7)}>
            <motion.img
              src="./showCase2.png"
              alt=""
            />
          </motion.div>
          <motion.div
            className="img_1"
            variants={fadeIn("up", "tween", 0.7, 0.8)}>
            <motion.img
              src="./showCase3.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
