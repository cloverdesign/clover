import { useLayoutEffect, useRef } from "react";
import { ServicesData } from "../../data/servicesdata"
import gsap from "gsap";
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
        <section className="flex lg:flex-row flex-col gap-8 w-[100vw] lg:h-screen h-fit lg:px-12 px-5 items-center overflow-x-hidden relative" ref={component}>
            <h1 className="lg:leading-[80px] leading-none lg:p-8 header top-[100px]">Our<br />Services.</h1>
            <div className="flex flex-col gap-8">
                <div className="flex flex-row gap-10 w-[1500px] relative" ref={slider}>
                    {ServicesData.map((item) => (
                        <ServiceCard key={item.id} id={item.id} title={item.title} />)
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

export const ServiceCard = ({ id, title }) => {
    return (
        <div className="bg-green-500 w-[300px] h-[300px] text-black p-10 rounded-xl hover:h-[400px] transiton ease-in-out duration-300 relative">
            <h1 className="text-[70px]">{id}</h1>
            <h3>{title}</h3>

            {/* <span className="bg-green-500 h-[70px] w-[70px] absolute rounded-full flex items-center justify-center border-[4px] border-black -top-10 -right-8">
                <Icon.HiOutlineArrowsExpand />
            </span> */}
        </div>
    )
}
