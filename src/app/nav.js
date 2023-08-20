import { useMediaQuery } from "@/hooks/useMediaQuery"
import { useEffect, useRef, useState } from "react"
import * as Icon from 'react-icons/hi'
import { AnimatePresence, motion } from 'framer-motion'
import Link from "next/link"
import { usePathname } from 'next/navigation'

export const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)
    const pathname = usePathname();

    let isMobile = useMediaQuery('(max-width: 768px)')

    const handleToggleNav = () => {
        setShowMenu(prev => !prev)
    }

    const mobileMenuVariant = {
        opened: {
            y: "0%",
            transition: {
                delay: 0.15,
                duration: 1.1,
                ease: [0.74, 0, 0.19, 1.02]
            }
        },
        closed: {
            y: "-100%",
            transition: {
                delay: 0.35,
                duration: 0.63,
                ease: [0.74, 0, 0.19, 1.02]
            }
        }
    }

    const navItemsVariants = {
        opened: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.65,
                ease: "easeOut"
            }
        },

        closed: {
            opacity: 0,
            y: "100%",
            transition: {
                duration: 0.25,
                ease: "easeInOut"
            }
        },

        hovered: {
            content: '"↗"',
            color: "#fff"
        }
    }

    const ulVariant = {
        opened: {
            transition: {
                delayChildren: 1,
                staggerChildren: 0.18
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.06,
                staggerDirection: -1
            }
        }
    }

    const hamburgerVariant = {
        topOpened: {
            d: 'M3.06061 2.99999L20 21',
        },

        topClosed: {
            d: "M3.75 6.5L20 6.5"
        },

        bottomOpened: {
            d: "M3.00006 21.060L20 3.06064"
        },

        bottomClosed: {
            d: "M3.75 14.5L20 14.5"
        },
    }

    const navItems = [
        {
            id: 1,
            path: "/",
            name: "home",
        },
        {
            id: 2,
            path: "/work",
            name: "our work",
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


    const nav =
        <motion.nav
            initial="closed"
            animate={showMenu ? "opened" : "closed"}
            className="flex justify-between items-center p-[20px] w-full h-[70px] fixed z-50 bg-black top-0"
        >

            <div className="z-50 grid lg:grid-cols-3 grid-cols-2 items-center w-full mix-blend-difference">
                <svg className="fill-white w-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 904.01 856.44"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon points="785.53 743.9 686.53 662.94 733.85 780.08 624.94 856.44 452 569.75 279.07 856.44 170.15 780.08 217.47 662.94 118.48 743.9 0 660.88 124.29 456.48 268.78 427.92 128.64 400.93 7.5 186.61 124.89 109.88 216.5 184.43 184.91 70.55 292.74 0 452 284.27 611.26 0 719.09 70.55 687.5 184.43 779.11 109.88 896.5 186.61 775.24 400.93 635.22 427.92 779.72 456.48 904 660.88 785.53 743.9" /></g></g></svg>

                {/* Hamburger Menu Button Animated with Framer Motion */}
                <AnimatePresence>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer lg:justify-self-center justify-self-end" onClick={handleToggleNav}>
                        <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial="closed"
                            animate={showMenu ? "topOpened" : "topClosed"}
                            variants={hamburgerVariant}
                            d="M3.75 6.5L20 6.5"
                        />
                        <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            animate={showMenu ? "bottomOpened" : "bottomClosed"}
                            variants={hamburgerVariant}
                            d="M3.75 14.5L20 14.5"
                        />
                    </svg>
                </AnimatePresence>

                <Link href="/contact" className="font-display uppercase justify-self-end hidden lg:block hover:text-green-500">Contact</Link>
            </div>

            <motion.aside variants={mobileMenuVariant} className={`h-[100vh] w-[100vw] bg-green-500 absolute top-0 right-0 flex items-center justify-center`}>
                <motion.ul variants={ulVariant} className="flex-col text-black lg:text-6xl text-3xl space-y-8 font-semibold font-display w-full">
                    {navItems.map((item) => (<motion.li variants={navItemsVariants} whileHover="hovered" className="hover:cursor-pointer uppercase flex items-center justify-center text-left w-full" key={item.id}><Link href={`${item.path}`}>{item.name}</Link></motion.li>))}
                </motion.ul>
            </motion.aside>

        </motion.nav>


    return (
        <>
            {/* NavBar */}
            {nav}
        </>
    )
}