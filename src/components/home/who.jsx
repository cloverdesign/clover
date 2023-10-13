import { useRef } from "react";
import { Links } from "../global/links";
import { useScroll, useTransform, motion } from "framer-motion";
import * as Icon from "react-icons/hi";

export const Who = () => {

    return (
        <section
            className="h-[100vh] text-black bg-green-500 lg:rounded-[100px] rounded-[30px] lg:mx-10 mx-2"
        >
            <div
                className="flex flex-col items-center justify-center space-y-8 relative h-full"
            >
                <h2 className="lg:w-3/5 w-2/3 text-center">A diverse design agency passionate about creating digital experiences.</h2>
                <Links icon={<Icon.HiArrowRight />} variant="primary-black" children={'who we are.'} />
            </div>
        </section>
    )
}