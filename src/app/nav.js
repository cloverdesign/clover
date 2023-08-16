import { useMediaQuery } from "@/hooks/useMediaQuery"
import { useEffect, useState } from "react"
import * as Icon from 'react-icons/hi'
import { motion } from 'framer-motion'
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
            color: "#97FF80",
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


    const smallNav =
        <motion.nav
            initial="closed"
            animate={showMenu ? "opened" : "closed"}
            className="flex justify-between items-center p-[20px] w-full h-[70px] fixed z-50 "
        >

            <svg className="fill-white w-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 904.01 856.44"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon points="785.53 743.9 686.53 662.94 733.85 780.08 624.94 856.44 452 569.75 279.07 856.44 170.15 780.08 217.47 662.94 118.48 743.9 0 660.88 124.29 456.48 268.78 427.92 128.64 400.93 7.5 186.61 124.89 109.88 216.5 184.43 184.91 70.55 292.74 0 452 284.27 611.26 0 719.09 70.55 687.5 184.43 779.11 109.88 896.5 186.61 775.24 400.93 635.22 427.92 779.72 456.48 904 660.88 785.53 743.9" /></g></g></svg>
            <Icon.HiMenuAlt4 size={24} onClick={handleToggleNav} className="hover:cursor-pointer" />

            <motion.aside variants={mobileMenuVariant} className={`h-[100vh] w-[100vw] bg-green-500 absolute top-0 right-0 flex items-center justify-center`}>
                <Icon.HiOutlineX color="#000000" size={24} onClick={handleToggleNav} className="absolute right-0 top-0 m-[20px]" />
                <motion.ul variants={ulVariant} className="flex-col text-black text-3xl space-y-8 font-semibold font-display">
                    {navItems.map((item) => (<motion.li variants={navItemsVariants} className="hover:font-normal hover:cursor-pointer uppercase" key={item.id}><Link href={`${item.path}`}>{item.name}</Link></motion.li>))}
                </motion.ul>
            </motion.aside>
        </motion.nav>

    const bigNav =
        <nav
            className="flex justify-between items-center w-full h-[70px] p-[20px] fixed z-50 mix-blend-difference">
            <svg className="fill-white w-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 904.01 856.44"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon points="785.53 743.9 686.53 662.94 733.85 780.08 624.94 856.44 452 569.75 279.07 856.44 170.15 780.08 217.47 662.94 118.48 743.9 0 660.88 124.29 456.48 268.78 427.92 128.64 400.93 7.5 186.61 124.89 109.88 216.5 184.43 184.91 70.55 292.74 0 452 284.27 611.26 0 719.09 70.55 687.5 184.43 779.11 109.88 896.5 186.61 775.24 400.93 635.22 427.92 779.72 456.48 904 660.88 785.53 743.9" /></g></g></svg>
            <ul className="flex gap-6 font-display">
                {navItems.map((item) => {
                    const isActive = pathname === item.path
                    return (<motion.li variants={navItemsVariants} whileHover="hovered" className={`hover:font-normal hover:cursor-pointer uppercase`} key={item.id}><Link href={`${item.path}`} className={`${isActive ? 'text-green-500' : ''}`} >{item.name}</Link></motion.li>)
                })
                }
            </ul>
        </nav>


    return (
        <>
            {/* NavBar */}
            {isMobile ? smallNav : bigNav}
        </>
    )
}