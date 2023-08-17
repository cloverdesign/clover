"use client"
import { useRef } from "react";
import { Button } from "./globals/button"
import { useScroll, useTransform, motion } from "framer-motion";
import * as Icon from "react-icons/hi";

export const Who = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    return (
        <motion.section
            className="w-[100vw] h-[100vh] text-black bg-green-500 z-20 lg:rounded-t-[100px] rounded-t-[30px]"
        >
            <motion.div
                ref={targetRef}
                className="flex flex-col items-center justify-center space-y-8 relative h-full"
            >
                <h2 className="lg:w-3/5 w-2/3 text-center">A diverse design agency passionate about creating digital experiences.</h2>
                <div className="flex items-center gap-4">
                    who we are.
                    <Button icon={<Icon.HiArrowRight />} iconOnly variant="primary-black" />
                </div>
            </motion.div>
        </motion.section>
    )
}