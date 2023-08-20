import { ServicesData } from "@/data/servicesData"
import Link from "next/link"

export const Services = () => {
    return (
        <section className="grid grid-cols-2 w-[100vw] h-[100vh] lg:px-12 px-5 py-8 pt-[100px] z-10">
            <h1 className="lg:leading-[80px] row-start-1">Our<br />Services.</h1>

            <div className="flex flex-col h-1/5">
                {ServicesData.map((item) =>
                    (<Link href="/work" className="text-white text-3xl p-8 border-b-[0.2px] border-b-white hover:after:content-['↗'] " key={item.id}>(0{item.id}) {item.title}</Link>)
                )}
            </div>
        </section>
    )
}
