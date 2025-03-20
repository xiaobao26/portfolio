import React from 'react'
import Image from 'next/image';
import { easeInOut, motion } from 'framer-motion';

interface Props {
    src: string;
    description: string;
    title: string;
    webUrl: string;
}

const ProjectCard = ({ src, description, title, webUrl }: Props ) => {
    return (
        <motion.div 
            whileHover={{ y:-20 }}
            transition={{ ease: easeInOut, duration:0.3}}
            className='w-1/3 border border-[#2A0E61] rounded-xl shadow-amber-50'>
            <a href={webUrl}>
                <Image 
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className='w-full rounded-xl'
                />
            </a>
            <div className=' overflow-y-scroll flex flex-col gap-2'>
                <h1 className='font-bold text-white'>{title}</h1>
                <p className='text-xs text-gray-300'>{description}</p>
            </div>
        </motion.div >
    )
}

export default ProjectCard
