import React, { useState } from "react";
import css from "./header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(0);
  const headerShadow = useHeaderShadow();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Hello. My name is Nhân</div>

        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}>
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

        {/* This only for small and medium screen */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={"30px"} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
