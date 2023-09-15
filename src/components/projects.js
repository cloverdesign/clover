'use client'
import * as Icon from 'react-icons/hi'
import { ProjectsData } from '@/data/projects'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './globals/button'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

export const Projects = () => {
    const router = useRouter()

    const targetRef = useRef(null);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "start start"],
    });

    console.log(scrollYProgress)

    const y = useTransform(scrollYProgress, [0, 1], ["-50%", "220%"]);

    return (
        <section className="flex flex-col w-[100vw] items-center lg:space-y-[140px] pt-[50px] lg:pt-0 space-y-9 relative top-0">

            {/* <div className='flex flex-col lg:flex-row  lg:items-center justify-between w-full lg:px-12 px-5'>
                <h2>Our Works</h2>
                <div className="flex items-center gap-4 z-10">
                    View All Projects
                    <Button icon={<Icon.HiArrowRight className='lg:text-base text-[8px]' />} iconOnly variant="primary-outline" />
                </div>
            </div> */}

            <motion.h2 className='absolute text-5xl lg:text-9xl'
                style={{ y }}
                ref={targetRef}
            >
                Our Works.
            </motion.h2>

            <motion.div className='bg-black h-full w-full' />

            <div className='w-full z-[2] flex flex-col gap-8' ref={containerRef}>
                {ProjectsData.map((project) => (
                    <div className='flex flex-col w-full lg:px-12 px-5 space-y-4' key={project.id}>
                        <div className='lg:h-[500px] h-[200px] rounded-xl overflow-hidden'>
                            <motion.div
                                style={{
                                    backgroundImage: `url(${project.imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.03, transition: { duration: 1 } }}
                                className='w-full h-full hover:cursor-pointer'
                                onClick={() => router.push(project?.link)}
                            >
                            </motion.div>
                        </div>
                        <div className='flex items-center justify-between w-full lg:px-12 px-5'>
                            <div className='flex flex-col lg:flex-row lg:items-center items-start lg:gap-4'>
                                <h3 className='bg-black'>{project.title}</h3>
                                <p className='lg:text-base text-xs'>{project.description}</p>
                            </div>
                            {project.tags.map((tag, index) => (
                                <span key={index} className='border-[1px] border-white rounded-xl py-1 px-7 uppercase text-xs lg:text-base'>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-4 z-10">
                View All Projects
                <Button icon={<Icon.HiArrowRight className='lg:text-base text-[8px]' />} iconOnly variant="primary-outline" />
            </div>
        </section>
    )
}