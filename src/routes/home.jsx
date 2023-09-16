import { Hero } from "../components/home/hero"
import { OurWorks } from "../components/home/ourworks"
import { Services } from "../components/home/services"
import { Testimonials } from "../components/home/testimonials"
import { Who } from "../components/home/who"

export const Home = () => {
    return (
        <>
            <Hero />
            <Who />
            <OurWorks />
            <Services />
            <Testimonials />
        </>
    )
}