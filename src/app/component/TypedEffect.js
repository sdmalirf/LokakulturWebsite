"use client";

import { useState, useEffect } from "react";

const TypewriterEffect = ({ text, speed = 200, loop = false }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let timeout;
    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (loop) {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 5000); // 2-second delay before restarting
    }

    return () => clearTimeout(timeout);
  }, [index, text, speed, loop]);

  // Cursor blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Blinking speed

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div>
      {displayedText}
      {cursorVisible && <span className="cursor">|</span>}
    </div>
  );
};

export default TypewriterEffect;
