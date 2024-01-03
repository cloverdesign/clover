import { Link } from "react-router-dom"
import { PictureHeader } from "../components/about/pictureheader"
import { ServicesData as services } from "../data/servicesdata"
import prime1 from '../assets/about/prime1.png'
import prime2 from '../assets/about/prime2.png'
import johan1 from '../assets/about/johan1.png'
import johan2 from '../assets/about/johan2.png'
import subi1 from '../assets/about/subi1.png'
import subi2 from '../assets/about/subi2.png'
import tan1 from '../assets/about/tan1.png'
import tan2 from '../assets/about/tan2.png'
import kayin1 from '../assets/about/kayin1.png'
import kayin2 from '../assets/about/kayin2.png'
import { useState } from "react"

export const About = () => {
    const [primehover, setPrimeHover] = useState(false)
    const [johanhover, setJohanHover] = useState(false)
    const [subihover, setSubiHover] = useState(false)
    const [tanhover, setTanHover] = useState(false)
    const [kayinhover, setKayinHover] = useState(false)

    return (
        <div className="pt-[150px] lg:px-10 p-2">
            {/* Might not add this, need to fix the jitter on the marquee */}
            {/* <PictureHeader /> */}

            <section className="relative w-fit group">
                <a href="#who" className="bg-green-500 group-hover:rotate-[8deg] transition duration-500 ease-in-out text-black p-2 rounded-lg absolute -rotate-[8deg] -top-6">who are we?</a>
                <h1 className="leading-none">Elevating African <br /> brands worldwide.</h1>
            </section>

            <section className="font-thin flex border-[0.8px] border-grey rounded-xl p-10">
                <h2 className="w-1/3">Who?</h2>
                <div className="w-2/3 border-l-[0.8px] px-10 border-grey">
                    <p className="mb-10">
                        Innovation, Creativity, Talent, and a plethora of other distinctive qualities you find flowing through the veins of the typical African entrepreneur. The unmatched zeal and passion with which business is done in Africa results in brands that deserve to be carried beyond the shores of the four bounding seas. Brands that deserve to spread their wings and court unceasing disaster for their competitors on the global stage.
                    </p>

                    <p className="mb-10">But how does a brand walk into a world of diversity in an age of globalisation without a strong sense of identity? The answer is, they don’t. At Clover we’ve made it our duty to be responsible for the identities of African brands who want to step outside the shores of the Sahara and become truly global brands. We believe in creating brands that are strong enough to connect with audiences, provide real experiences, and most importantly compete on a global stage. </p>

                    <p className="mb-10">Since our launch we have taken steps towards our vision, and our work does nothing but put our clients on the map and speak for us anywhere it’s seen. </p>
                </div>
            </section>

            <section className="font-thin flex border-[0.8px] border-grey rounded-xl p-10">
                <h2 className="w-1/3">Services</h2>
                <div className="w-2/3 border-l-[0.8px] px-10 border-grey grid grid-cols-2 gap-10">
                    {services.map((service) => (
                        <div id={service.id}>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Link to="/contact" className="underline hover:text-green-500 text-sm pt-10">Get Started</Link>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-wrap gap-10 text-center">
                <div>
                    <Picture img={primehover ? prime2 : prime1} mouseEnter={() => setPrimeHover(true)} mouseLeave={() => setPrimeHover(false)} classNames="mb-4" />
                    <h4 className="font-display">Oluwabamise Ojuko</h4>
                    <p className="font-thin text-sm text-grey">Founder, Graphics Designer</p>
                </div>
                <div>
                    <Picture img={johanhover ? johan2 : johan1} mouseEnter={() => setJohanHover(true)} mouseLeave={() => setJohanHover(false)} classNames="mb-4" />
                    <h4 className="font-display">Johaan Martins</h4>
                    <p className="font-thin text-sm text-grey">Digital Illustrator</p>
                </div>
                <div>
                    <Picture img={subihover ? subi2 : subi1} mouseEnter={() => setSubiHover(true)} mouseLeave={() => setSubiHover(false)} classNames="mb-4" />
                    <h4 className="font-display">Oluwabusolami Onigbinde</h4>
                    <p className="font-thin text-sm text-grey">Social Media Manager</p>
                </div>
                <div>
                    <Picture img={tanhover ? tan2 : tan1} mouseEnter={() => setTanHover(true)} mouseLeave={() => setTanHover(false)} classNames="mb-4" />
                    <h4 className="font-display">Tanyalouise Ekekwe</h4>
                    <p className="font-thin text-sm text-grey">Visual Designer</p>
                </div>
                <div>
                    <Picture img={kayinhover ? kayin2 : kayin1} mouseEnter={() => setKayinHover(true)} mouseLeave={() => setKayinHover(false)} classNames="mb-4" />
                    <h4 className="font-display">Kanyinsola Owolabi</h4>
                    <p className="font-thin text-sm text-grey">Head of Strategy</p>
                </div>
                <div>

                </div>
            </section>
        </div >
    )
}

const Picture = ({ img, classNames, mouseEnter, mouseLeave }) => {
    return (
        <div className={`w-[300px] h-fit rounded-xl overflow-hidden ${classNames}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <img src={img} alt="" className="w-[120%]" />
        </div>
    )
}