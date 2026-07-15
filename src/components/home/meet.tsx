"use client";

import * as Icon from "react-icons/hi";
import { Links } from "../global/links";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Meet = () => {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const img = self.selector!(".img");
      const heading = self.selector!(".header");

      gsap.fromTo(
        img,
        {
          x: "200%",
          opacity: 0,
        },

        {
          x: "0%",
          opacity: 1,
          scrollTrigger: {
            trigger: img,
            start: "-50% center",
            end: "30% center",
            scrub: true,
          },
          ease: "power1.inOut",
          duration: 4,
        },
      );

      gsap.fromTo(
        heading,
        {
          x: "-100%",
          opacity: 0,
        },

        {
          x: "0%",
          opacity: 1,
          scrollTrigger: {
            trigger: heading,
            start: "-50% center",
            end: "30% center",
            scrub: true,
          },
          ease: "power1.inOut",
        },
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="lg:px-12 px-5 rounded lg:leading-[80px] flex flex-col lg:flex-row items-center lg:gap-2 gap-8 pt-[100px] overflow-hidden"
      ref={container}
    >
      <div className="header space-y-4 lg:w-[50%]">
        <h1 className="leading-none">
          * who stands behind your{" "}
          <span className="italic text-green-500">amazing</span> designs?
        </h1>
        <Links
          url="/about#the-team"
          icon={<Icon.HiArrowRight className="lg:text-base text-[8px]" />}
          variant="primary-outline"
        >
          meet the team.
        </Links>
      </div>
      <div
        style={{
          backgroundImage: `url(/meet.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="img lg:w-[50%] w-full lg:h-[680px] h-[380px] rounded-xl overflow-hidden"
      ></div>
    </section>
  );
};
