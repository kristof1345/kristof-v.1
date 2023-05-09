import React, { useState, useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";

const ScrollToTop = () => {
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
    <div>
      {showTopBtn && (
        <button className="back-to-top" onClick={goToTop}>
          <SlArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
