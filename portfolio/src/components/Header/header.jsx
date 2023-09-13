import React from "react";
import css from "./header.module.scss";
import { BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";

const Header = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{once: false, amount: 0.25}}
      className={`paddings ${css.wrapper}`}>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Hello. My name is Nhân</div>

        <ul className={`flexCenter ${css.menu}`}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Porfolio</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+123 456 789</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Header;
