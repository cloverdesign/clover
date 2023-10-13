import { useLayoutEffect, useRef } from "react";
import { ServicesData } from "../../data/servicesdata"
import { Link } from "react-router-dom"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


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
        <section className="flex flex-row w-[100vw] lg:h-screen h-fit lg:px-12 px-5 items-center overflow-x-hidden relative" ref={component}>
            <h1 className="lg:leading-[80px] lg:p-8 header top-[100px]">Our<br />Services.</h1>
            <div className="flex flex-row gap-8 w-[1500px] relative" ref={slider}>
                {ServicesData.map((item) =>
                (
                    <ServiceCard key={item.id} id={item.id} title={item.title} />
                )
                )}
            </div>
        </section>
    )
}

export const ServiceCard = ({ id, title }) => {
    return (
        <div className="bg-green-500 w-[300px] h-[300px] text-black p-10 rounded-xl hover:h-[400px] transiton ease-in-out duration-300">
            <h1>{id}</h1>
            <h3>{title}</h3>
        </div>
    )
}
