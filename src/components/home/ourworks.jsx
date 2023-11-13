import * as Icon from 'react-icons/hi'
import { WorksData } from '../../data/worksdata'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Links } from '../global/links'
import { useRef } from 'react'

export const OurWorks = () => {
    const targetRef = useRef(null);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "start start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-50%", "220%"]);

    return (
        <section className="flex flex-col w-[100vw] items-center lg:space-y-[140px] pt-[50px] lg:pt-0 space-y-9 relative top-0">
            <motion.h2 className='absolute text-5xl lg:text-9xl'
                style={{ y }}
                ref={targetRef}
            >
                Our Works.
            </motion.h2>

            <motion.div className='bg-black h-full w-full' />

            <div className='w-full z-[2] flex flex-col gap-10' ref={containerRef}>
                {WorksData.map((project) => (
                    <div className='flex flex-col w-full lg:px-12 px-5 space-y-4' key={project.id}>
                        <div className='lg:h-[500px] h-[200px] lg:rounded-[60px] rounded-[30px] overflow-hidden'>
                            {project.type === "pic" ?
                                <motion.div
                                    style={{
                                        backgroundImage: `url(${project.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.02, transition: { duration: 0.1, bounce: 1 } }}
                                    className='w-full h-full hover:cursor-pointer group overflow-hidden'
                                >
                                    <span className='group-hover:opacity-100 opacity-0 transition duration-500 ease-in-out text-2xl flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-40 h-full w-full font-display'>
                                        <p className='text-white'>More about {project.title}</p>
                                    </span>
                                </motion.div> :
                                <motion.div className='w-full h-full hover:cursor-pointer flex items-center justify-center relative group overflow-hidden'
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
                                >
                                    <video
                                        src={project.vid}
                                        autoPlay
                                        loop
                                        muted
                                        className='w-full h-auto'
                                    />
                                    <span className='group-hover:opacity-100 absolute top-0 left-0 opacity-0 transition duration-500 ease-in-out text-2xl flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-40 h-full w-full font-display'>
                                        <p className='text-white'>More about {project.title}</p>
                                    </span>
                                </motion.div>
                            }
                        </div>
                        <div className='flex flex-wrap items-center justify-between w-full lg:px-12 px-5 gap-2'>
                            <div className='flex items-center gap-4'>
                                <h3 className='bg-black'>{project.title}</h3>
                                <p className='lg:text-base text-xs'>{project.description}</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2'>
                                {project.tags.map((tag, index) => (
                                    <span key={index} className='border-[1px] border-white rounded-lg py-1 px-7 uppercase text-[8px] lg:text-xs'>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Links icon={<Icon.HiArrowRight className='lg:text-base text-[8px]' />} variant="primary-outline" children={"view all projects."} />
        </section>
    )
}