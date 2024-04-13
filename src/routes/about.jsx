import { Link } from "react-router-dom"
// import { PictureHeader } from "../components/about/pictureheader"
import { ServicesData as services } from "../data/servicesdata"
import { TeamData as team } from "../data/teamData"
import { useState } from "react"

export const About = () => {
    const [primehover, setPrimeHover] = useState(false)
    const [johanhover, setJohanHover] = useState(false)
    const [subihover, setSubiHover] = useState(false)
    const [tanhover, setTanHover] = useState(false)
    const [kayinhover, setKayinHover] = useState(false)

    return (
        <div className="pt-[150px] px-10">
            {/* Might not add this, need to fix the jitter on the marquee */}
            {/* <PictureHeader /> */}

            <section className="relative w-fit group">
                <a href="#who" className="bg-green-500 group-hover:rotate-[8deg] transition duration-500 ease-in-out text-black p-2 rounded-lg absolute -rotate-[8deg] -top-6 text-xs lg:text-base">who are we?</a>
                <h1 className="leading-none">Elevating African <br /> brands worldwide.</h1>
            </section>

            <section className="font-thin flex flex-col lg:flex-row border-[0.8px] border-grey rounded-xl p-10 gap-10">
                <h2 className="lg:w-1/3">Who?</h2>
                <div className="lg:w-2/3 border-t-[0.8px] lg:border-l-[0.8px] lg:border-t-0 py-10 lg:px-10 border-grey">
                    <p className="mb-10">
                        Innovation, Creativity, Talent, and a plethora of other distinctive qualities you find flowing through the veins of the typical African entrepreneur. The unmatched zeal and passion with which business is done in Africa results in brands that deserve to be carried beyond the shores of the four bounding seas. Brands that deserve to spread their wings and court unceasing disaster for their competitors on the global stage.
                    </p>

                    <p className="mb-10">But how does a brand walk into a world of diversity in an age of globalisation without a strong sense of identity? The answer is, they don’t. At Clover we’ve made it our duty to be responsible for the identities of African brands who want to step outside the shores of the Sahara and become truly global brands. We believe in creating brands that are strong enough to connect with audiences, provide real experiences, and most importantly compete on a global stage. </p>

                    <p className="mb-10">Since our launch we have taken steps towards our vision, and our work does nothing but put our clients on the map and speak for us anywhere it’s seen. </p>
                </div>
            </section>

            <section className="font-thin flex flex-col lg:flex-row border-[0.8px] border-grey rounded-xl p-10 gap-10">
                <h2 className="lg:w-1/3">Services</h2>
                <div className="lg:w-2/3 border-t-[0.8px] lg:border-l-[0.8px] lg:border-t-0 py-10 lg:px-10 border-grey grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {services.map((service) => (
                        <div key={service.id} className="space-y-2">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Link to="/contact" className="underline hover:text-green-500 text-sm pt-10">Get Started</Link>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-wrap justify-center gap-10 text-center" id="the-team">
                {
                    team.map((member) => (
                        <div id={member.id}>
                            <Picture img={member.first_pic} hoverImg={member.second_pic} />
                            <h4 className="font-display">{member.name}</h4>
                            <p className="font-thin text-sm text-grey">{member.role}</p>
                        </div>
                    ))
                }
            </section>
        </div >
    )
}

const Picture = ({ img, hoverImg, classNames, mouseEnter, mouseLeave }) => {
    return (
        <div className={`w-[300px] h-[300px] bg-[url('/public${img}')] hover:bg-[url('/public${hoverImg}')] bg-cover rounded-xl ${classNames}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}></div>
    )
}