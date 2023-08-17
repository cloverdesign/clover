"use client"
import { Button } from "@/components/globals/button"
import * as Icon from "react-icons/hi"
import image from '@/assets/full.svg'
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], ["-80%", "0%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const navItems = [
        {
            id: 1,
            path: "/",
            name: "home",
        },
        {
            id: 2,
            path: "/work",
            name: "work",
        },
        {
            id: 3,
            path: "/about",
            name: "about",
        },
        {
            id: 4,
            path: "/contact",
            name: "contact",
        }
    ]

    return (
        <footer className="w-[100vw] lg:h-[100vh] relative">
            <section className="flex flex-col items-center gap-9 h-fit lg:h-4/5 w-full bg-black absolute top-0 z-10">
                <div className="flex flex-col lg:flex-row items-center py-[100px] justify-center gap-9 border-b-[1px] w-full border-white">
                    <h2>Ready to take <br />your brand to <br /> the next level?</h2>
                    <div className="flex items-center gap-4">
                        <p>Let's Collaborate</p>
                        <Button icon={<Icon.HiArrowRight />} iconOnly variant="primary-outline" />
                    </div>
                </div>
                <div className="flex items-center justify-around w-full p-8">
                    <div className="f">
                        <h2>Contact</h2>
                        <Icon.HiPhone />
                        <Icon.HiMail />
                    </div>

                    <div>
                        <ul>
                            {navItems.map((item) => (<motion.li className="hover:font-normal hover:text-green-500 text-grey hover:cursor-pointer uppercase" key={item.id}><Link href={`${item.path}`}>{item.name}</Link></motion.li>))}
                        </ul>
                    </div>
                </div>
            </section>

            <motion.div
                ref={targetRef}
                style={{ opacity }}
                className="bg-green-500 absolute bottom-0 w-full h-full overflow-hidden z-0"
            >
                <div className="h-full flex items-end px-[64px] py-8">
                    <p className="text-black">© 2023 Clover, All Rights Reserved.</p>
                </div>

                <motion.img style={{ y, scale }} src={image.src} alt="" className=" absolute w-full bottom-[-20%]" />
            </motion.div>

        </footer>
    )
}