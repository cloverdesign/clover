import { TestimonialsData } from "@/data/reviews";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";

export const Reviews = () => {
    const ref = useRef(null);
    const containerRef = useRef(null);

    const { scrollYProgress: ySticky } = useScroll({
        target: ref,
        container: containerRef,
        offset: ["start end", "end end"],
    });

    const position = useTransform(ySticky, (pos) => {
        return pos === 1 ? "relative" : "sticky"
    });

    return (
        <motion.section className="flex flex-col gap-8 w-[100dvw] h-[200dvh] origin-top-right items-center text-black pt-[50px] py-[300px] bg-green-500 relative"
            ref={containerRef}
        >
            <div className="space-y-3 text-center">
                <h2 className="text-5xl lg:text-7xl">The talk of <br /> the town!</h2>
                <p className="text-xl">Hear what our clients say about us.</p>
            </div>

            <div className="space-y-8">
                {
                    TestimonialsData.map((testimonial) => (
                        <motion.div className="flex flex-col justify-center lg:w-[700px] w-[300px] lg:top-[30%] top-[10%] lg:px-20 px-6 py-8 min-h-[300px] review-card bg-black text-white rounded-xl rotate-2"
                            key={testimonial.id}
                            style={{ position }}
                            ref={ref}
                        >
                            <p className="font-bold">{testimonial.title} <span className="font-bold">{testimonial.company}</span></p>
                            <p className="text-sm">"{testimonial.text}"</p>
                        </motion.div>
                    ))
                }
            </div>

        </motion.section >
    )
}