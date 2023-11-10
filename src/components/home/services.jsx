import { useRef } from "react";
import { ServicesData } from "../../data/servicesdata"
import { motion } from 'framer-motion'
import { ScrollTrigger } from "gsap/all";
import * as Icon from 'react-icons/hi'


export const Services = () => {

    const component = useRef();
    const slider = useRef(null);

    const prev = () => {
        const scrollLeft = slider.current.scrollLeft;
        const itemWidth = parseInt(
            getComputedStyle(slider.current.children[0]).width
        );
        slider.current.scrollLeft = scrollLeft - itemWidth;
    }

    const next = () => {
        const scrollLeft = slider.current.scrollLeft;
        const itemWidth = parseInt(
            getComputedStyle(slider.current.children[0]).width
        );
        slider.current.scrollLeft = scrollLeft + itemWidth;
    }

    return (
        <section className="w-[100vw] lg:h-screen h-fit relative space-y-4" ref={component}>
            <div className="flex lg:flex-row flex-col lg:px-12 px-5 items-center h-[75%] w-full gap-8">
                <div className="bg-black h-full w-[35%] flex items-center justify-center">
                    <h1 className="lg:leading-[80px] leading-none header top-[100px]">Our<br />Services.</h1>
                </div>
                <div className="flex md:flex-row flex-col items-center overflow-x-scroll gap-10 w-[65%] h-full scroll-smooth" ref={slider}>
                    {ServicesData.map((item) => (
                        <ServiceCard key={item.id} id={item.id} title={item.title} desc={item.description} />)
                    )}
                </div>
            </div>
            <div className="space-x-8 w-full hidden items-center justify-center md:flex">
                <button className="border-[1px] border-white text-white hover:border-green-500 hover:bg-green-500 hover:text-black p-[10px] w-fit rounded-lg"
                    onClick={prev}
                >
                    <Icon.HiArrowLeft />
                </button>
                <button className="border-[1px] border-white text-white hover:border-green-500 hover:bg-green-500 hover:text-black p-[10px] w-fit rounded-lg"
                    onClick={next}
                >
                    <Icon.HiArrowRight />
                </button>
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
        <motion.a
            className="bg-green-500 group w-[250px] md:min-w-[300px] md:h-[300px] pointer-events-none md:pointer-events-auto hover:h-[450px] text-black p-10 rounded-xl transiton ease-in-out duration-300 relative"
            variants={parentVariants}
            initial="variantA"
            whileHover="variantB"
            href="/about"
        >
            <h1 className="text-[70px]">{id}</h1>
            <h3>{title}</h3>

            <motion.span className="mt-6 block"
                variants={textVariants}
            >
                <p className="text-sm">{desc}</p>
            </motion.span>

            <a className="lg:hidden block underline font-extralight" href="/about">see more</a>

            <motion.span
                className="bg-green-500 h-[70px] w-[70px] absolute rounded-full flex items-center justify-center border-[4px] border-black text-black  -top-10 -right-8"
                variants={arrowVariants}
            >
                <p>↗</p>
            </motion.span>
        </motion.a>
    )
}
