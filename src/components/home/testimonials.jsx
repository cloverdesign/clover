import { useLayoutEffect, useRef } from "react";
import { TestimonialsData } from "../../data/testimonialsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const Testimonials = () => {

    gsap.registerPlugin(ScrollTrigger);
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const boxes = self.selector('.card');
            const heading = self.selector('.header');

            boxes.forEach((box) => {
                gsap.fromTo(box,
                    {
                        x: "-200%",
                    },

                    {
                        x: "0%",
                        position: 'sticky',
                        scrollTrigger: {
                            trigger: box,
                            start: 'top center',
                            end: 'bottom center',
                            scrub: true,
                        },
                    },
                );
            });

            gsap.fromTo(heading,
                {
                    x: "-100%",
                    opacity: 0,
                },

                {
                    x: "0%",
                    opacity: 1,
                    scrollTrigger: {
                        trigger: heading,
                        start: 'top center',
                        end: '70% center',
                        scrub: true,
                    },
                    ease: "power1.inOut",
                },
            )

        }, container); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    return (
        <section className="flex flex-col items-center lg:justify-center h-fit py-10" ref={container}>
            <div className="space-y-3 px-6 lg:w-[50%] text-center header h-screen flex flex-col justify-center">
                <h2 className="text-5xl lg:text-7xl">The Talk of <br /> the Town!</h2>
                <p className="text-xl font-thin">Hear what our clients say about us.</p>
            </div>

            <div className="space-y-8 flex flex-col items-center justify-center relative gap-8">
                {
                    TestimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} title={testimonial.title} company={testimonial.company} text={testimonial.text} />
                    ))
                }
            </div>

        </section >
    )
}

export const TestimonialCard = ({ title, company, text }) => {

    return (
        <div className="card top-[90px] flex flex-col gap-1 justify-center w-fit h-[300px] lg:px-20 px-6 py-8 max-w-[600px] min-w-[250px] 
                        review-card bg-green-500 text-black rounded-xl rotate-2"
        >
            <p className="font-bold">{title} - <span className="font-bold">{company}</span></p>
            <p className="text-sm">"{text}"</p>
        </div>
    )
}