"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const main = useRef<HTMLElement>(null);
  const text = useRef<HTMLSpanElement>(null);
  const circle = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const xTo = gsap.quickTo(circle.current, "x", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      const yTo = gsap.quickTo(circle.current, "y", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (!container.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          container.current.getBoundingClientRect();
        const x = clientX - (left + width - 10);
        const y = clientY - (top + height - 10);
        xTo(x);
        yTo(y);

        gsap.to(circle.current, {
          scale: 3,
          marginBottom: "0px",
          ease: "power2.out",
        });

        gsap.to(text.current, {
          opacity: 1,
          scale: 3,
        });
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);

        gsap.to(circle.current, {
          scale: 1,
          marginBottom: "40px",
          ease: "power2.out",
        });

        gsap.to(text.current, {
          opacity: 0,
          scale: 1,
        });
      };

      const el = container.current;
      el?.addEventListener("mousemove", handleMouseMove);
      el?.addEventListener("mouseleave", handleMouseLeave);

      const reel = self.selector!(".reel");
      gsap.fromTo(
        reel,
        {
          scale: 0.75,
        },
        {
          scale: 1,
          scrollTrigger: {
            trigger: reel,
            start: "-70% center",
            end: "bottom center",
            scrub: true,
          },
          ease: "power2.inOut",
        },
      );

      gsap.to(reel, {
        scrollTrigger: {
          pin: true,
          trigger: reel,
          start: "top 22%",
          end: "bottom 22%",
          scrub: true,
        },
        ease: "power2.inOut",
      });

      return () => {
        el?.removeEventListener("mousemove", handleMouseMove);
        el?.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="mt-[70px] flex flex-col items-center h-[50vh] md:h-[200vh] lg:px-10 p-2 relative"
      style={{
        backgroundImage: `url(/grid.png)`,
        backgroundSize: "100%",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      ref={main}
    >
      <div className="flex flex-col items-center">
        <div className="flex items-end" ref={container}>
          <Link
            href="/contact"
            className="font-display text-[23vw] font-bold leading-none"
          >
            clover
          </Link>
          <span
            className="circle h-[40px] w-[40px] mb-10 bg-green-500 rounded-full hidden md:flex items-center justify-center pointer-events-none"
            ref={circle}
          >
            <span
              className="font-body uppercase opacity-0 text-[2px] leading-none text-black"
              ref={text}
            >
              Let&apos;s <br /> Talk
            </span>
          </span>
        </div>
        <p className="font-thin lg:text-2xl text-sm lg:w-5/5 w-3/5 text-center">
          elevating african businesses into timeless brands.
        </p>
      </div>

      <div className="reel lg:h-[80vh] h-fit w-full lg:rounded-[100px] rounded-[30px] mt-4 md:mt-10 overflow-hidden relative border-y-[1px] border-y-grey">
        <video className="h-full w-full object-cover" autoPlay loop muted>
          <source src="/showreel.mp4" />
        </video>
      </div>
    </section>
  );
};
