"use client"
import { Button } from "@/components/globals/button"
import * as Icon from "react-icons/hi"
import image from '@/assets/full.svg'
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const Footer = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], ["-80%", "0%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <footer className="w-[100vw] lg:h-[100vh] relative">
            <section className="flex flex-col items-center gap-9 h-fit lg:h-[85%] w-full lg:rounded-b-[100px] rounded-b-[30px] bg-black absolute top-0 z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-9">
                    <h2>Ready to take <br />your brand to <br /> the next level?</h2>
                    <div className="flex items-center gap-4">
                        <p>Let's Collaborate</p>
                        <Button icon={<Icon.HiArrowRight />} iconOnly variant="primary-outline" />
                    </div>
                </div>
                <div className="flex">
                    <div className="footer-contact">
                        <h2>Contact</h2>
                        <a href="tel:+2349010792672">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 9.5C7 8.83696 7.26339 8.20107 7.73223 7.73223C8.20107 7.26339 8.83696 7 9.5 7H19.5C20.163 7 20.7989 7.26339 21.2678 7.73223C21.7366 8.20107 22 8.83696 22 9.5V19.5C22 20.163 21.7366 20.7989 21.2678 21.2678C20.7989 21.7366 20.163 22 19.5 22H9.5C8.83696 22 8.20107 21.7366 7.73223 21.2678C7.26339 20.7989 7 20.163 7 19.5V9.5Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17 7V4.5C17 3.83696 16.7366 3.20107 16.2678 2.73223C15.7989 2.26339 15.163 2 14.5 2H4.5C3.83696 2 3.20107 2.26339 2.73223 2.73223C2.26339 3.20107 2 3.83696 2 4.5V14.5C2 15.163 2.26339 15.7989 2.73223 16.2678C3.20107 16.7366 3.83696 17 4.5 17H7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            cloverdesignhq@gmail.com
                        </a>
                        <a>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0375 16.0752L17.8625 15.7127C17.4892 15.6688 17.1108 15.7102 16.7557 15.8336C16.4006 15.957 16.0782 16.1593 15.8125 16.4252L13.5125 18.7252C9.96398 16.9205 7.07971 14.0362 5.27499 10.4877L7.58749 8.1752C8.12499 7.6377 8.38749 6.8877 8.29999 6.1252L7.93749 2.9752C7.86662 2.36542 7.57398 1.80299 7.11529 1.39501C6.65659 0.98702 6.06387 0.761967 5.44999 0.762697H3.28749C1.87499 0.762697 0.69999 1.9377 0.78749 3.3502C1.44999 14.0252 9.98749 22.5502 20.65 23.2127C22.0625 23.3002 23.2375 22.1252 23.2375 20.7127V18.5502C23.25 17.2877 22.3 16.2252 21.0375 16.0752Z" fill="white" />
                            </svg>
                        </a>
                    </div>

                    <div className="quick-links">
                        <ul>
                            <li><a href="/home.html">HOME</a></li>
                            <li><a href="/work.html">WORK</a></li>
                            <li><a href="/about.html">ABOUT</a></li>
                            <li><a href="/service.html">SERVICES</a></li>
                            <li><a href="/about.html/#team">TEAM</a></li>
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

                <motion.img style={{ y, scale }} src={image.src} alt="" className=" absolute w-full bottom-[-25%]" />
            </motion.div>

        </footer>
    )
}