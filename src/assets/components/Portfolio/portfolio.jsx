import React, { useEffect, useState } from "react";
import css from "./portfolio.module.scss";
// import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { staggerChildren, zoomIn } from "../../../utils/motion";
import { myWorks, sliderSettings } from "../../../utils/data";
import Slider from "react-slick";

const Portfolio = () => {
  const [isMouseActive, setIsMouseActive] = useState(false);
  const [arrowOpacity, setArrowOpacity] = useState(0.3);

  useEffect(() => {
    // const arrowLeft = document.querySelector(".slick-prev");
    let timer;
    if (isMouseActive) {
      // When mouse is over the section or arrows, increase opacity to 0.8 over 10 seconds
      timer = setInterval(() => {
        if (arrowOpacity < 0.8) {
          setArrowOpacity((opacity) => opacity + 0.05);
        }
      }, 1500);
    } else {
      timer = setInterval(() => {
        if (arrowOpacity > 0.3) {
          setArrowOpacity((opacity) => opacity - 0.05);
        }
      }, 3000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isMouseActive, arrowOpacity]);

  // const handleMouseEnter = () => {
  // };

  // const handleMouseLeave = () => {
  //   setIsMouseActive(false);
  // };
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings fontSet-lowerBody ${css.wrapper}`}
      onMouseEnter={() => setIsMouseActive(true)}
      onMouseLeave={() => setIsMouseActive(false)}>
      <a className="anchor" id="portfolio"></a>
      {isMouseActive}

      <motion.div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={zoomIn(0.5, 0.7)}
          className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Works</span>
          </div>

          <span className="secondaryText">Explore More Works</span>
        </motion.div>

        {/* Image */}
        <div className={`yPaddings ${css.showCase}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {myWorks.map((work, i) => {
              return (
                <div key={i} className={`flexCenter ${css.inner_img}`}>
                  <a href={work.link} target="_blank">
                    <img src={work.img} alt="Pictures" />
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Portfolio;
