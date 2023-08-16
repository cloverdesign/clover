import * as Icon from 'react-icons/hi'
import { Button } from './globals/button'
import { ProjectsData } from '@/data/projects'
import { useRouter } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useRef } from 'react'

export const Projects = () => {
    const router = useRouter()
    const handleNavigateToAllProjects = () => {
        router.push('/works')
    }

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 200]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);

    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false
    });

    const scale = useTransform(scrollY, [0, 0.5], ["100%", "120%"]);

    return (
        <section className="flex flex-col w-[100vw] items-center space-y-[140px] lg:px-12 px-5">
            <div className='flex items-center justify-between w-full'>
                <h2>Our Works</h2>
                <div className="flex items-center gap-4">
                    View All Projects
                    <Button icon={<Icon.HiArrowRight />} iconOnly onClick={handleNavigateToAllProjects} />
                </div>
            </div>

            {ProjectsData.map((project, index) => (
                <div className='flex flex-col w-full space-y-4' key={project.id}>
                    <motion.div
                        style={{
                            backgroundImage: `url(${project.imageUrl})`,
                            backgroundSize: scale,
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