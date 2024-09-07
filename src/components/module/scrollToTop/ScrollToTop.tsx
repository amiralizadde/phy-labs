"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import styles from "@/components/module/scrollToTop/scroll.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleHandler = () => {
      window.scrollY > 120 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleHandler);

    return () => window.removeEventListener("scroll", toggleHandler);
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={isVisible ? styles.scrollTop__active : styles.scrollTop}
      onClick={goTop}
    >
      <MdKeyboardArrowUp />
    </button>
  );
};

export default ScrollToTop;
