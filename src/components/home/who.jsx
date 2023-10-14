import { useLayoutEffect, useRef } from "react";
import { Links } from "../global/links";
import * as Icon from "react-icons/hi";
import meet from '../../assets/meet.png'
import gsap from "gsap";

export const Who = () => {

    const main = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            gsap.fromTo(main.current,
                {
                    backgroundColor: "#000",
                    color: "#fff"
                },

                {
                    backgroundColor: "#97FF80",
                    color: "#000",
                    duration: 1,
                    ease: "ease.out",
                    scrollTrigger: {
                        trigger: main.current,
                        start: "30% center",
                        end: "50% center",
                        scrub: 1,
                    }
                })
        }, main)

        return () => ctx.revert();
    }, [])

    return (
        <section
            className="h-[150vh] text-black bg-green-500 flex flex-col items-center justify-center gap-8"
            ref={main}
        >
            <h1 className="leading-none text-center">A diverse design agency passionate about creating digital experiences.</h1>
            <Links icon={<Icon.HiArrowRight />} variant="primary-black" children={'who we are.'} />
        </section>
    )
}