import { Link, Outlet, useParams } from "react-router-dom"
import { WorkData as works } from "../data/worksdata"

export const Works = () => {
    const { id } = useParams()

    let allWorks = <div className="p-10 lg:p-20">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
            <h1 className="text-6xl md:text-7xl lg:text-9xl leading-none">Our <br /> Work.</h1>
            {
                works.map((work, index) => (
                    <li key={index} className="space-y-3">
                        {
                            work.display.includes('.mp4') ?
                                <div className="flex flex-col gap-4 group overflow-hidden hover:cursor-pointer rounded-xl relative h-[200px] lg:h-[500px]">
                                    <video
                                        src={work.display}
                                        alt={work.title}
                                        autoPlay
                                        loop
                                        muted
                                        className="w-full h-full object-cover"
                                    />
                                    <Link to={'/works/' + work.workTitle} className="group-hover:opacity-100 absolute top-0 left-0 opacity-0 transition duration-500 ease-in-out text-2xl flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-40 h-full w-full font-display">
                                        <p className="text-white text-2xl font-display">{work.title}</p>
                                    </Link>
                                </div>
                                :
                                <div className="flex flex-col gap-4 group overflow-hidden hover:cursor-pointer rounded-xl relative h-[200px] lg:h-[500px]"
                                    style={{
                                        backgroundImage: `url(${work.display})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                >
                                    <Link to={'/works/' + work.workTitle} className="group-hover:opacity-100 absolute top-0 left-0 opacity-0 transition duration-500 ease-in-out text-2xl flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-40 h-full w-full font-display">
                                        <p className="text-white text-2xl font-display">{work.title}</p>
                                    </Link>
                                </div>
                        }
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