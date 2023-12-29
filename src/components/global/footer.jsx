import * as Icon from "react-icons/pi"
import * as HeroIcons from "react-icons/hi"
import image from '../../assets/home/full.svg'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Links } from "./links";
import Magnetic from "../../animations/magnetic";

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
            path: "/works",
            name: "our works",
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
            <section className="flex flex-col items-center h-fit lg:h-4/5 w-full bg-black absolute top-0 rounded-b-[114px] z-10">
                <div className="flex flex-col lg:flex-row items-center py-[50px] justify-center gap-9 border-b-[1px] w-full border-white">
                    <h2>Ready to take <br />your brand to <br /> the next level?</h2>
                    <Links icon={<HeroIcons.HiArrowRight />} variant="primary-outline" url="/contact" children={"let's collaborate."} />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-around gap-9 h-full w-full p-8">
                    <div className="flex items-center gap-3 ">
                        <a href="https://twitter.com/cloverdesignhq" target="_blank"><Icon.PiTwitterLogoFill size={36} className="hover:text-green-500" /></a>
                        <a href="https://medium.com/@cloverdesignhq" target="_blank"><Icon.PiMediumLogoFill size={36} className="hover:text-green-500" /></a>
                        <a href="https://www.instagram.com/clover.hq" target="_blank"><Icon.PiInstagramLogoFill size={36} className="hover:text-green-500" /></a>
                        <a href="https://www.linkedin.com/company/clover-designhq" target="_blank"><Icon.PiLinkedinLogoFill size={36} className="hover:text-green-500" /></a>
                    </div>

                    <div>
                        <ul>
                            {navItems.map((item) => (
                                <Magnetic key={item.id}>
                                    <motion.li className="hover:font-normal hover:text-green-500 text-grey hover:cursor-pointer uppercase">
                                        <Link to={`${item.path}`}>{item.name}</Link>
                                    </motion.li>
                                </Magnetic>
                            ))}

                            <Magnetic>
                                <motion.li className="hover:font-normal hover:text-green-500 text-grey hover:cursor-pointer uppercase">
                                    <a href="https://medium.com/@cloverdesignhq" target="_blank">blog</a>
                                </motion.li>
                            </Magnetic>
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

                <motion.img style={{ y, scale }} src={image} alt="" className=" absolute w-full bottom-[-20%]" />
            </motion.div>

        </footer>
    )
}