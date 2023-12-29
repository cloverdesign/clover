import { Outlet, useParams } from "react-router-dom"
import { WorkData as works } from "../data/worksdata"

export const Works = () => {
    const { id } = useParams()

    let allWorks = <div className="p-10">
        <h1 className="py-10">Our Works</h1>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                works.map((work, index) => (
                    <li key={index} className="space-y-3">
                        <div className="flex flex-col gap-4 rounded-lg group overflow-hidden hover:cursor-pointer"
                            style={{
                                backgroundImage: `url(${work.header})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                height: '200px'
                            }}
                        >
                            <div className="group-hover:opacity-100 absolute top-0 left-0 opacity-0 transition duration-500 ease-in-out text-2xl flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-40 h-full w-full font-display">
                                <p className="text-white text-2xl font-display">See Project</p>
                            </div>
                        </div>
                        <h3 className="text-white">{work.title}</h3>
                        <div className="flex items-center gap-4">
                            {
                                work.categories.map((category, index) => (
                                    <span className="font-thin border-[1px] border-white rounded-lg py-1 px-7 uppercase text-[8px] lg:text-xs" key={index}>{category}</span>))
                            }
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
    return (
        <div className="w-[100vw] pt-10 space-y-8">
            {id ? <Outlet /> : allWorks}
        </div>
    )
}