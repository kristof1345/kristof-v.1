import React, { useState, useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";

const ScrollToTop = ({ theme }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <button
          className={`back-to-top ${theme === "light" ? "dark" : "light"}`}
          onClick={goToTop}
        >
          <SlArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
