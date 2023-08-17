'use client'
import * as Icon from 'react-icons/hi'
import { ProjectsData } from '@/data/projects'
import { motion } from 'framer-motion'
import { Button } from './globals/button'

export const Projects = () => {

    return (
        <section className="flex flex-col w-[100vw] items-center space-y-[140px] lg:px-12 px-5">
            <div className='flex items-center justify-between w-full'>
                <h2>Our Works</h2>
                <div className="flex items-center gap-4">
                    View All Projects
                    <Button icon={<Icon.HiArrowRight />} iconOnly variant="primary-outline" />
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
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-4'>
                            <h3 className='bg-black'>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>

                        {project.tags.map((tag, index) => (
                            <span key={index} className='border-[1px] border-white rounded-xl py-1 px-7 uppercase'>{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}