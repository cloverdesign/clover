import { useLayoutEffect, useRef } from "react";
import { useScroll, useTransform, motion, cubicBezier, stagger } from "framer-motion";
import grid from '../../assets/grid.png'
import gsap from "gsap";
import { Link } from "react-router-dom";

// export const Hero = () => {
//     const targetRef = useRef(null);

//     const { scrollYProgress } = useScroll({
//         target: targetRef,
//         offset: ["end end", "end start"],
//     });

//     const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//     const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
//     const position = useTransform(scrollYProgress, (pos) => {
//         return pos === 1 ? "relative" : "fixed";
//     });

//     const heroContainerVariants = {
//         initial: {
//             opacity: 0,
//         },
//         animate: {
//             opacity: 1,
//             transition: {
//                 ease: cubicBezier(.42, 0, .58, 1),
//                 delayChildren: 1,
//                 staggerChildren: 0.18
//             }
//         }
//     }

//     const headingVariants = {
//         initial: {
//             opacity: 0,
//             y: 100,
//             transition: {
//                 duration: 0.65,
//                 ease: "easeOut"
//             }
//         },

//         animate: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.65,
//                 ease: "easeOut"
//             }
//         }
//     }

//     return (
//         <motion.section
//             ref={targetRef}
//             style={{
//                 opacity,
//             }}
//             className="hero p-[40px] w-[100vw] h-[100vh] relative overflow-hidden"
//         >
//             <motion.div
//                 style={{ position }}
//                 className="h-full right-0 flex flex-col items-center justify-center space-y-8 w-full z-0 "
//             >
//                 <svg
//                     className="absolute my-auto mx-0" width="696" height="624" viewBox="0 0 696 624" fill="none" xmlns="http://www.w3.org/2000/motion.svg">
//                     <path d="M564.52 568.221L481.262 623.462L348.325 414.911L348 414.402L347.675 414.911L214.745 623.462L131.48 568.221L167.787 483.168L168.368 481.805L167.197 482.712L91.2018 541.53L0.529054 481.404L95.9264 332.938L207.008 312.16L207.006 311.403L99.2823 291.769L6.29926 136.092L96.1303 80.5258L166.451 134.68L167.388 135.402L167.055 134.267L142.816 51.5756L225.253 0.534097L347.669 207.315L348 207.874L348.331 207.315L470.747 0.534084L553.184 51.5756L528.945 134.267L528.612 135.402L529.549 134.68L599.87 80.5258L689.701 136.092L596.625 291.769L488.994 311.403L488.992 312.16L600.081 332.938L695.471 481.404L604.806 541.53L528.803 482.712L527.632 481.806L528.213 483.168L564.52 568.221Z" stroke="#97FF80" strokeWidth="0.770026" />
//                 </svg>

//                 <motion.div
//                     style={{ scale }}
//                     variants={heroContainerVariants}
//                     initial="initial"
//                     animate="animate"
//                     className="flex flex-col items-center z-0"
//                 >
//                     <motion.h1
//                         variants={headingVariants}
//                         className='text-center z-0 leading-none font-thin'>Crafting timeless designs,</motion.h1>
//                     <motion.h1
//                         variants={headingVariants}
//                         className='text-center z-0 leading-one font-thin'>one pixel at a time.</motion.h1>
//                 </motion.div>

//             </motion.div>
//         </motion.section >
//     )
// }

export const Hero = () => {

    const container = useRef(null);
    const main = useRef(null);
    const text = useRef(null);
    const circle = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const xTo = gsap.quickTo(circle.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
            const yTo = gsap.quickTo(circle.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const { height, width, left, top } = container.current.getBoundingClientRect();
                const x = clientX - (left + width - 10)
                const y = clientY - (top + height - 10)
                xTo(x);
                yTo(y);

                gsap.to(circle.current, {
                    scale: 3,
                    marginBottom: "0px",
                    ease: "ease.out"
                })

                gsap.to(text.current, {
                    opacity: 1,
                    scale: 3,
                })
            }

            const handleMouseLeave = () => {
                xTo(0);
                yTo(0);

                gsap.to(circle.current, {
                    scale: 1,
                    marginBottom: "40px",
                    ease: "ease.out"
                })

                gsap.to(text.current, {
                    opacity: 0,
                    scale: 1,
                })
            };

            container.current.addEventListener("mousemove", handleMouseMove)
            container.current.addEventListener("mouseleave", handleMouseLeave)

            let reel = self.selector('.reel')
            gsap.fromTo(reel,
                {
                    scale: 0.7,
                },
                {
                    scale: 1,
                    scrollTrigger: {
                        trigger: reel,
                        start: '-70% center',
                        end: 'bottom center',
                        scrub: true,
                    },
                    ease: "ease.inOut"
                }
            )

            return () => {
                container.current.removeEventListener("mousemove", handleMouseMove)
                container.current.removeEventListener("mouseleave", handleMouseLeave)
            }
        }, main);

        return () => ctx.revert();
    }, [])

    return (
        <section className="mt-[70px] flex flex-col items-center min-h-screen lg:px-10 p-2"
            style={{
                backgroundImage: `url(${grid})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            ref={main}
        >
            <div className="flex items-end" ref={container}>
                <Link to="/about" className="font-display text-[23vw] font-bold leading-none hover:[filter]">
                    clover
                </Link>
                <span className="circle h-[40px] w-[40px] bg-green-500 rounded-full hidden md:flex items-center justify-center pointer-events-none" ref={circle}>
                    <span className="font-body uppercase text-[2px] leading-none text-black" ref={text}>Let's <br /> Talk</span>
                </span>
            </div>

            <p className="font-thin text-2xl">crafting timeless designs, one pixel at a time</p>

            <div
                className="reel h-[70vh] w-full text-black bg-green-500 lg:rounded-[100px] rounded-[30px] mt-10"
            >
                <h1 className="m-auto text-center">*reel</h1>
            </div>
        </section>
    )

}