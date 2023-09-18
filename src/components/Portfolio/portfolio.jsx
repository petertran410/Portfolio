import React from "react";
import css from "./portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { myWorks } from "../../utils/data";

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
            <span className="primaryText">My Works</span>
            {/* <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p> */}
          </div>

          <span className="secondaryText">Explore More Works</span>
        </div>

        {/* Image */}
        <div className={`flexCenter ${css.showCase}`}>
          {myWorks.map((work, i) => {
            return (
              <motion.a href={work.link} target="_blank">
                <motion.div
                  className="img_1"
                  variants={fadeIn("up", "tween", 0.5, 0.6)}>
                  <motion.img src={work.img} alt="" />
                </motion.div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
