import React, { useState, useEffect } from "react";
import css from "./textAnimation.module.scss";

function TextAnimation() {
  const words = ["My", "name", "is", "Nhan"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (currentIndex < words.length) {
      const word = words[currentIndex];
      setDisplayText((prevText) => prevText + word + " ");
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex]);

  return (
    <div className="text-container">
      <p className="animated-text">{displayText}</p>
    </div>
  );
}

export default TextAnimation;
