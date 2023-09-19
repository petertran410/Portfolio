import React, { useEffect, useState } from "react";
import css from "./portfolio.module.scss";
// import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { staggerChildren } from "../../utils/motion";
import { myWorks, sliderSettings } from "../../utils/data";
import Slider from "react-slick";

// const CustomPrevArrow = (props) => (
//   <button {...props} className={css.customPrevArrow}>
//     {/* Add your custom arrow content here */}
//     {/* Prev */}
//     <BiCaretLeft />
//   </button>
// );

// const CustomNextArrow = (props) => (
//   <button {...props} className={css.customNextArrow}>
//     {/* Add your custom arrow content here */}
//     {/* Next */}
//     <BiCaretRight />
//   </button>
// );

const Portfolio = () => {
  const [isMouseInside, setIsMouseInside] = useState(false);

  useEffect(() => {
    const portfolioSection = document.querySelector(".portfolio-section");

    const handleMouseEnter = () => {
      setIsMouseInside(true);

      // After 10 seconds, reduce opacity slowly to 0.3
      setTimeout(() => {
        setIsMouseInside(false);
      }, 10000);
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
    };

    portfolioSection.addEventListener("mouseenter", handleMouseEnter);
    portfolioSection.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      // Remove event listeners when the component unmounts
      portfolioSection.removeEventListener("mouseenter", handleMouseEnter);
      portfolioSection.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }} className={`portfolio-section paddings ${css.wrapper}`}>
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Works</span>
          </div>

          <span className="secondaryText">Explore More Works</span>
        </div>

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
      </div>
    </motion.section>
  );
};

export default Portfolio;
