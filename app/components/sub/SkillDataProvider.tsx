import React, { useRef } from 'react'
import { easeInOut, motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height, index} : Props ) => {
    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })

    const animationDelay = 0.3

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 10}}
            animate={isInView ? { opacity: 1, y:0 } : {}}
            custom={index}
            transition={{delay: index * animationDelay}}
            className='flex flex-col justify-center items-center '
        >
            <motion.div
                animate={{opacity: 1, y:[0, -10, 0]}}
                transition={{delay: index * animationDelay, duration:3, repeat:Infinity, ease: easeInOut, repeatType:"reverse"}}
                >
                <Image src={src} alt="skill tool image" width={width} height={height}/>
            </motion.div>
            
        </motion.div>
    )
}

export default SkillDataProvider
