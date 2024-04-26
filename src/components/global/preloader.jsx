import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import imagesLoaded from "imagesloaded";
import { useState } from "react";

function Preloader() {
  const main = useRef(null);
  const logo = useRef(null);

  const tl = gsap.timeline();

  const content = document.querySelector("div");
  const imgLoad = imagesLoaded(content);

  imgLoad.on("done", (instance) => {
    tl.fromTo(
      logo.current,
      {
        scale: 1,
        // width: "35px"
      },
      {
        scale: 100,
        // width: "100%",
        duration: 0.8,
        ease: "ease.out",
        delay: 1.5,
      },
    );

    tl.to(main.current, {
      duration: 0.4,
      opacity: 0,
      display: "none",
      ease: "power2.inOut",
    });
  });

  return (
    <div>
      <div
        className="bg-green-500 w-[100vw] h-[100vh] fixed preloader flex items-center justify-center top-0 left-0"
        ref={main}
      >
        <svg
          className={`w-[35px] fill-black transition duration-500 ease-in-out `}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 904.01 856.44"
          ref={logo}
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <polygon points="785.53 743.9 686.53 662.94 733.85 780.08 624.94 856.44 452 569.75 279.07 856.44 170.15 780.08 217.47 662.94 118.48 743.9 0 660.88 124.29 456.48 268.78 427.92 128.64 400.93 7.5 186.61 124.89 109.88 216.5 184.43 184.91 70.55 292.74 0 452 284.27 611.26 0 719.09 70.55 687.5 184.43 779.11 109.88 896.5 186.61 775.24 400.93 635.22 427.92 779.72 456.48 904 660.88 785.53 743.9" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Preloader;
