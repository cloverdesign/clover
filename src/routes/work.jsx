import { Link, useParams } from "react-router-dom";
import { WorkData as works } from "../data/worksdata";
import Magnetic from "../animations/magnetic";
import * as HeroIcons from "react-icons/hi"

export const Work = () => {

    const { id } = useParams();

    let pictures = [];
    let currentProject = {};


    works.map((work) => {
        if (work.workTitle === id) {
            pictures = work.pictures.map((picture, index) => {
                let item = picture.includes('.mp4') ?
                    <video
                        src={picture}
                        alt={work.title}
                        autoPlay
                        loop
                        muted
                        className="h-full w-full object-cover"
                    /> : <img
                        lazy="true"
                        src={picture}
                        alt={work.title}
                        className="h-full w-full object-cover"
                    />;

                return (
                    <li key={index} className="rounded-lg overflow-hidden">
                        {item}
                    </li>
                );
            })
            currentProject = work;
        }
    });

    let nextProject = works[currentProject.id + 1];
    console.log(currentProject.id, works[currentProject.id + 1])

    return (
        <section className="w-[100vw] pt-[50px] lg:pt-0 space-y-8 relative">
            <div className="w-full"
                style={{
                    backgroundImage: `url(${currentProject.header})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '400px'
                }}
            >
            </div>
            <div className="w-full p-10 flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8">
                <div className="flex flex-col gap-4">
                    <h1>{currentProject.title}</h1>
                    <ul className="text-xl text-grey">
                        {
                            currentProject.categories.map((category, index) => (
                                <li className="hover:text-green-500" key={index}>{category}</li>))
                        }
                    </ul>
                </div>
                <p className="lg:text-2xl font-thin text-grey">{currentProject.description}</p>
            </div>
            <ul className="grid grid-cols-2 gap-3">
                {pictures}
            </ul>
            <div className="p-2 bg-black sticky bottom-0 text-white flex justify-between items-center">
                <Magnetic>
                    <Link className="flex gap-2 items-center" to={'/works'}><HeroIcons.HiArrowLeft /> our works</Link>
                </Magnetic>
                <h3>{currentProject.title}</h3>
                {nextProject ? <Magnetic>
                    <Link className="flex gap-2 items-center" to={'/works/' + nextProject.workTitle}>next project <HeroIcons.HiArrowRight /> </Link>
                </Magnetic> : null}
            </div>
        </section>
    );
};
