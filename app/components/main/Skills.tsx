"use client"

import { Frontend_skill, Backend_skill, Deployment,  } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import Image from 'next/image'
import { easeInOut, motion } from 'framer-motion'

const Skills = () => {
    return (
        <section 
            id="skills"
            className='w-full min-h-screen flex flex-col justify-center items-center overflow-hidden'
            >
            <motion.div 
                animate={{ opacity: 1, y: [0, 10, 0]}}
                transition={{repeat:Infinity, duration: 3, ease: easeInOut, repeatType:"reverse"}}
                >
                <Image className='rounded-full' src="/self.jpeg" alt="linkedin logo" width={100} height={30}/>
            </motion.div>
            <div className='flex flex-wrap justify-around items-center gap-2 mb-10'>
            {Frontend_skill.map((skill, index) => (
                <SkillDataProvider 
                    key={index}
                    src={skill.Image}
                    width={skill.width}
                    height={skill.height}
                    index={index}
                    name={skill.skill_name}
                />
            ))}
            </div>

            <div className='flex flex-wrap justify-center items-center gap-2 mb-10'>
            {Backend_skill.map((skill, index) => (
                <SkillDataProvider 
                    key={index}
                    src={skill.Image}
                    width={skill.width}
                    height={skill.height}
                    index={index}
                    name={skill.skill_name}
                />
            ))}
            </div>

            <div className='flex flex-wrap items-center justify-center gap-2'>
                {Deployment.map((skill, index) => (
                    <SkillDataProvider 
                        key={index}
                        src={skill.Image}
                        width={skill.width}
                        height={skill.height}
                        index={index}
                        name={skill.skill_name}
                    />
                ))}
            </div>
        </section>
    )
}

export default Skills
