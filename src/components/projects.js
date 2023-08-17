'use client'
import * as Icon from 'react-icons/hi'
import { ProjectsData } from '@/data/projects'
import { motion } from 'framer-motion'
import { Button } from './globals/button'

export const Projects = () => {

    return (
        <section className="flex flex-col w-[100vw] items-center lg:space-y-[140px] space-y-9 pt-[100px]">
            <div className='flex flex-col lg:flex-row  lg:items-center justify-between w-full lg:px-12 px-5'>
                <h2>Our Works</h2>
                <div className="flex items-center gap-4 z-10">
                    View All Projects
                    <Button icon={<Icon.HiArrowRight className='lg:text-base text-[8px]' />} iconOnly variant="primary-outline" />
                </div>
            </div>

            {ProjectsData.map((project, index) => (
                <div className='flex flex-col w-full space-y-4' key={project.id}>
                    <motion.div
                        style={{
                            backgroundImage: `url(${project.imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                        className='w-full lg:h-[500px] h-[200px]'
                    >
                    </motion.div>
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
        </section>
    )
}