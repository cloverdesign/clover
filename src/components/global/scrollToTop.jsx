import { useEffect, useState } from "react";
import * as HeroIcons from "react-icons/hi"

const ScrollToTop = () => {
    const [scrollPos, setScrollPos] = useState();
    const [showButton, setShowButton] = useState(false)

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            right: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            {showButton ? <button className='bg-green-500 text-black p-4 rounded-lg z-[1000] fixed bottom-14 right-5 animate-bounce' onClick={handleScrollToTop}>
                <HeroIcons.HiArrowUp />
            </button> : null}
        </>
    )
}

export default ScrollToTop;
