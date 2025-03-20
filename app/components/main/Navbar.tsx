"use client"
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='w-full h-10 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-101 px-10 text-white'>
            <div className='w-full h-full flex justify-between items-center'>
                <a href="#about-me" className='flex gap-2 items-center'>
                    <Image src="/logo.png" alt="website logo" width={30} height={30}/>
                    <span>Xiaobao Xue</span>
                </a>

                <div className='flex items-center justify-between gap-6 border border-b-blue-50 rounded-2xl px-4'>
                    <a href='#about-me' className='cursor-pointer'>About me</a>
                    <a href='#skills' className='cursor-pointer'>Skills</a>
                    <a href='#projects' className='cursor-pointer'>Projects</a>
                </div>

                <div className='flex items-center justify-between gap-1'>
                    <a href='https://www.linkedin.com/feed/'>
                        <Image src="/linkedin.png" alt="linkedin logo" width={30} height={30}/>
                    </a>
                    <a href='https://github.com/xiaobao26' className='pb-1'>
                        <Image src="/github.svg" alt="github logo" width={20} height={20}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
