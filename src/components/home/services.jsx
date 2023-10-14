import { useLayoutEffect, useRef } from "react";
import { ServicesData } from "../../data/servicesdata"
import gsap from "gsap";
import { motion } from 'framer-motion'
import { ScrollTrigger } from "gsap/all";
import * as Icon from 'react-icons/hi'


export const Services = () => {
    gsap.registerPlugin(ScrollTrigger);

    const component = useRef();
    const slider = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let cards = gsap.utils.toArray(".card");
            let heading = gsap.utils.toArray(".header");

        }, component);
        return () => ctx.revert();
    });

    return (
        <section className="flex lg:flex-row flex-col gap-8 w-[100vw] lg:h-screen h-fit lg:px-12 px-5 items-center overflow-hidden bg-black relative" ref={component}>
            <div className="bg-black h-full w-full flex items-center justify-center">
                <h1 className="lg:leading-[80px] leading-none lg:p-8 header top-[100px]">Our<br />Services.</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex flex-row gap-10 w-[1500px]" ref={slider}>
                    {ServicesData.map((item) => (
                        <ServiceCard key={item.id} id={item.id} title={item.title} desc={item.description} />)
                    )}
                </div>

                <div className="space-x-8 lg:ml-40 m-auto">
                    <button className="border-[1px] border-white text-white hover:border-green-500 hover:bg-green-500 hover:text-black p-[10px] w-fit rounded-lg">
                        <Icon.HiArrowLeft />
                    </button>
                    <button className="border-[1px] border-white text-white hover:border-green-500 hover:bg-green-500 hover:text-black p-[10px] w-fit rounded-lg">
                        <Icon.HiArrowRight />
                    </button>
                </div>
            </div>
        </section>
    )
}

export const ServiceCard = ({ id, title, desc }) => {
    const parentVariants = {
        variantA: {
            scale: 1
        },
        variantB: {
            scale: 1.003
        },
        transition: {
            when: "beforeChildren",
        }
    }

    const textVariants = {
        variantA: {
            x: "-300%",
            opacity: 0,
            display: "none"
        },
        variantB: {
            x: 0,
            opacity: 1,
            display: "block"
        },
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }

    const arrowVariants = {
        variantA: {
            scale: 0,
            opacity: 0,
        },
        variantB: {
            scale: 1,
            opacity: 1,
        }
    }

    return (
        <motion.div
            className="bg-green-500 group w-[300px] h-[300px] hover:h-[450px] text-black p-10 rounded-xl transiton ease-in-out duration-300 relative"
            variants={parentVariants}
            initial="variantA"
            whileHover="variantB"
        >
            <h1 className="text-[70px]">{id}</h1>
            <h3>{title}</h3>

            <motion.span className="mt-6 block"
                variants={textVariants}
                transition={{

                }}
            >
                <p className="text-sm">{desc}</p>
            </motion.span>

            <motion.span
                className="bg-white h-[70px] w-[70px] absolute rounded-full flex items-center justify-center border-[4px] border-black -top-10 -right-8"
                variants={arrowVariants}
            >
                {/* <Icon.HiOutlineArrowsExpand /> */}
                <p>↗</p>
            </motion.span>
        </motion.div>
    )
}
