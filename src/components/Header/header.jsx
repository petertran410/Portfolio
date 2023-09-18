import React, { useEffect, useRef, useState } from "react";
import css from "./header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}>
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Trần Ngọc Nhân</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#experties">About</a>
          </li>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <div className={css.line}></div>
          <li>
            <a href="https://www.facebook.com/">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/trần-ngọc-nhân-76b7b7273/">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/petertran410">
              <BsGithub />
            </a>
          </li>
        </ul>

        

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
