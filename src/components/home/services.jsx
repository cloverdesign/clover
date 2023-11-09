import { useEffect, useLayoutEffect, useRef } from "react";
import { ServicesData } from "../../data/servicesdata"
import gsap from "gsap";
import { motion } from 'framer-motion'
import { ScrollTrigger } from "gsap/all";
import * as Icon from 'react-icons/hi'
import { Link } from "react-router-dom";


export const Services = () => {
    gsap.registerPlugin(ScrollTrigger);

    const component = useRef();
    const slider = useRef(null);

    // const allCarousels = document.getElementsByClassName("carousel");

    // firstCard = document.querySelectorAll(".card")[0];
    // carouselArrows = document.getElementsByClassName("cards-btn");

    // let isDragStart = false, prevPageX, prevScrollLeft;
    // let fistCardWidth = firstCard.clientWidth;

    // function getCarousel(btn) {
    //     for (let item = 0; item < allCarousels.length; item++) {
    //         const carousel = allCarousels[item];

    //         if ((btn.parentNode.parentNode.isEqualNode(carousel.parentNode))) {
    //             return carousel;
    //         } else {
    //             continue;
    //         }
    //     }
    // }

    // for (let item = 0; item < allCarousels.length; item++) {
    //     const carousel = allCarousels[item];

    //     const dragStart = (e) => {
    //         isDragStart = true;
    //         prevPageX = e.pageX;
    //         prevScrollLeft = carousel.scrollLeft;
    //     }

    //     const dragStop = () => {
    //         isDragStart = false;
    //     }

    //     const dragging = (e) => {
    //         if (!isDragStart) return;
    //         e.preventDefault();
    //         let positionDiff = e.pageX - prevPageX;
    //         carousel.scrollLeft = prevScrollLeft - positionDiff;
    //     }

    //     carousel.addEventListener("mousedown", dragStart);
    //     carousel.addEventListener("mousemove", dragging);
    //     carousel.addEventListener("mouseup", dragStop);
    // }

    // const showHideIcons = () => {
    //     carousel
    //     carouselArrows[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"
    // }

    // for (let index = 0; index < carouselArrows.length; index++) {
    //     const btn = carouselArrows[index];

    //     btn.addEventListener("click", () => {
    //         const carousel = getCarousel(btn);
    //         carousel.scrollLeft += btn.id == "left" ? -fistCardWidth : fistCardWidth;
    //     });
    // }

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
            className="bg-green-500 group w-[250px] md:w-[300px] md:h-[300px] pointer-events-none md:pointer-events-auto hover:h-[450px] text-black p-10 rounded-xl transiton ease-in-out duration-300 relative"
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
