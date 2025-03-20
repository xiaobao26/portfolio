"use client"
import React from 'react'
import Image from 'next/image'
import { easeInOut, motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="w-full h-full flex justify-center items-center pl-20 mt-10 z-[200] text-white"
        >
            <div className="flex flex-col w-full h-full gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="welcome-box px-4 border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-2.5 h-5 w-5" />
                    <h1 className="welcome-text text-xl">
                        Fullstack Developer Portfolio
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.6)}
                    className='flex flex-col text-5xl font-bold'
                >
                    <span>
                    Providing
                    <span 
                        className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
                    project experience
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromRight(0.8)}
                    className='text-2xl text-gray-400  my-5'
                >
                    I&apos;m a Fullstack developer with experience in website, 
                    and software development. Check out my projects and skills.
                </motion.p>

                <motion.a
                    variants={slideInFromLeft(1.1)}
                    className='py-2 text-center cursor-pointer rounded-lg border border-[#7042f88b] max-w-[200px] font-bold'
                >
                    Learn More!
                </motion.a>
            </div>

            <motion.div
                    variants={slideInFromRight(0.8)}
                    animate={{
                        opacity: 0.8,
                        y: [0, -10, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: easeInOut
                    }}
                    className='w-full h-full flex justify-center items-center'
                >
                <Image src="/mainIconsdark.svg" alt="work icon" height={800} width={800}/>
            </motion.div>

        </motion.div>
    )
}

export default HeroContent
