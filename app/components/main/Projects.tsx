"use client"
import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import { easeInOut, motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/16/solid'

const Projects = () => {
    return (
        <div id="projects"
            className='flex flex-col items-center w-full h-min-h-screen mb-20 relative'>
            <motion.div 
                animate={{ opacity:1, y:[0, -20, 0]}}
                transition={{delay: 0.3, duration: 2, repeat: Infinity, ease: easeInOut, repeatType:"reverse"}}
                className='flex flex-col items-center justify-center w-full py-14'>
                <h1 className='text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-5'>
                                My Projects
                </h1>
                <div className='flex welcome-box px-4 border border-[#7042f88b] opacity-[0.9]'>
                    <SparklesIcon className="text-[#b49bff] mr-2.5 h-5 w-5" />
                    <h1 className='welcome-text'>Click the image go to the website!</h1>
                </div>
            </motion.div>

            <div className='w-full h-full flex gap-2'>
                <ProjectCard 
                    src='/innovatefuture.png'
                    title='Saas Platform'
                    description='React + .Net8 + RabbitMQ + JWT'
                    webUrl="https://dev.innovatefuture.foundation/"
                />
                <ProjectCard 
                    src='/portfolio.png'
                    title='Modern Next.js Protfolio'
                    description='Next.js 15 + animation'
                    webUrl="https://icy-forest-058908500.6.azurestaticapps.net"

                />
                <ProjectCard 
                    src='/AI-chatRoom.png'
                    title='Azure AI Translator + SignalR'
                    description='Azure AI Translator + SignalR(Website socket) + Shadcn UI Framework'
                    webUrl="https://brave-rock-070c6bd00.6.azurestaticapps.net"
                />
            </div>
        </div>
    )
}

export default Projects
