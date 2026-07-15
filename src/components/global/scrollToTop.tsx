"use client";

import { useRef, useEffect, useState } from "react";
import * as HeroIcons from "react-icons/hi";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollPos = window.pageYOffset;

      // Button is displayed after scrolling for 500 pixels
      if (currentScrollPos > 500 && currentScrollPos > prevScrollPos.current) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [showButton]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton ? (
        <button
          className="bg-green-500 text-black p-4 rounded-lg z-[1000] fixed bottom-14 right-5 animate-bounce"
          onClick={handleScrollToTop}
        >
          <HeroIcons.HiArrowUp />
        </button>
      ) : null}
    </>
  );
};

export default ScrollToTop;
