import React from "react";
import css from "./hero.module.scss";
import TextAnimation from "./TextAnimation/textAnimation";
import SecondaryTextAnimation from "./TextAnimation/secondTextAnimation";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth fontSet-upperBody ${css.container}`}>
        <a className="anchor" id="home"></a>

        <motion.div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText">
            <TextAnimation />
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}>
            {/* <TextAnimation text="For Website designer, I love designing beautiful websites" /> */}
            <SecondaryTextAnimation />
          </motion.span>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}>
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./My-face.png"
            alt=""
          />
        </motion.div>

        {/* <motion.a
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={css.email}
          href="mailto:nhantran4102002@gmail.com"
          target="_blank">
          nhantran4102002@gmail.com
        </motion.a> */}

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}>
            {/* <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Expriences</div>
            </div> */}
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certification}>
            {/* <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>UI/UX DESIGNER</span> */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

