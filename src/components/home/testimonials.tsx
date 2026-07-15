"use client";

import { useEffect, useRef } from "react";
import { TestimonialsData } from "@/data/testimonialsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Testimonials = () => {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector!(".card");
      const heading = self.selector!(".header");

      boxes.forEach((box: Element) => {
        gsap.fromTo(
          box,
          {
            x: "-200%",
          },

          {
            x: "0%",
            position: "sticky",
            scrollTrigger: {
              trigger: box,
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: 1 / (boxes.length - 1),
            },
            ease: "power1.inOut",
          },
        );
      });

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
            start: "top center",
            end: "70% center",
            scrub: true,
            snap: 1,
          },
          ease: "power1.inOut",
        },
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="flex flex-col items-center lg:justify-center h-fit py-10"
      ref={container}
    >
      <div className="space-y-3 px-6 lg:w-[50%] text-center header h-[60vh] flex flex-col justify-center">
        <h2 className="text-5xl lg:text-7xl">
          The Talk of <br /> the Town!
        </h2>
        <p className="text-xl font-thin">Hear what our clients say about us.</p>
      </div>

      <div className="space-y-8 flex flex-col items-center justify-center relative gap-8">
        {TestimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            title={testimonial.title}
            company={testimonial.company}
            text={testimonial.text}
          />
        ))}
      </div>
    </section>
  );
};

type TestimonialCardProps = {
  title: string;
  company: string;
  text: string;
};

export const TestimonialCard = ({
  title,
  company,
  text,
}: TestimonialCardProps) => {
  return (
    <div
      className="card top-[200px] flex flex-col gap-1 justify-center w-fit h-[300px] lg:px-20 px-6 py-8 max-w-[600px] mx-8
                        review-card bg-green-500 text-black rounded-xl rotate-2"
    >
      <p className="font-bold">
        {title} - <span className="font-bold">{company}</span>
      </p>
      <p className="text-xs md:text-sm">&quot;{text}&quot;</p>
    </div>
  );
};
