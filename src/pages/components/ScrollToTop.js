import React, { useState, useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";

const ScrollToTop = () => {
  // const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let el = document.querySelector(".back-to-top");
      if (el) {
        if (window.scrollY > 400) {
          el.style.opacity = 1;
        } else {
          el.style.opacity = 0;
        }
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
      {/* {showTopBtn && ( */}
      <button className={`back-to-top`} onClick={goToTop}>
        <SlArrowUp />
      </button>
      {/* )} */}
    </>
  );
};

export default ScrollToTop;
