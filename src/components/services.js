import { ServicesData } from "@/data/servicesData"
import Link from "next/link"

export const Services = () => {
    return (
        <section className="grid lg:grid-cols-2 grid-cols-1 w-[100vw] lg:h-[100vh] h-fit lg:px-12 px-5 py-[100px] z-10 content-center relative">
            <h1 className="lg:leading-[80px] self-center lg:p-8">Our<br />Services.</h1>
            <div className="flex flex-col h-1/5">
                {ServicesData.map((item) =>
                    (<Link href="/work" className="text-white lg:text-3xl p-8 lg:mr-8 border-b-[0.2px] border-b-white hover:after:content-['↗'] " key={item.id}>(0{item.id}) {item.title}</Link>)
                )}
            </div>
        </section>
    )
}
