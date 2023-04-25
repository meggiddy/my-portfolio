import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-10 right-10">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-white-300 hover:animate-bounce text-white font-bold py-2 px-4 rounded-full"
        >
          <FaArrowCircleUp className="text-4xl" />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
