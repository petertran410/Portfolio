import React, { useState, useEffect } from "react";
import css from "./textAnimation.module.scss";

function TextAnimation() {
  const texts = ["My name is Nhan"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayLetter, setDisplayLetter] = useState("");
  const letterDelay = 150; // Adjust the delay (in milliseconds) between each letter

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const animationInterval = setInterval(() => {
        if (currentIndex < currentText.length) {
        const letter = currentText[currentIndex];
        setDisplayLetter((prevText) => prevText + letter);
        setCurrentIndex(currentIndex + 1);
      } else {
        // If all letters are displayed, reset the animation
        setDisplayLetter("");
        setCurrentIndex(0);

        // Move to the next text (loop back if at the end)
        setCurrentTextIndex((prevIndex) =>
          prevIndex === texts.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, letterDelay);

    return () => {
      clearInterval(animationInterval);
    };
  }, [currentIndex, texts, currentTextIndex]);

  return (
    <div>{displayLetter}</div>
  );
}

export default TextAnimation;
