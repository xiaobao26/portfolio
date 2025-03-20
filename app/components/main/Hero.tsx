import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
    return (
        <div className='flex flex-col relative h-full w-full'>
            <video autoPlay muted loop className='absolute z-[100] w-full h-full object-cover'>
                <source src='/blackhole.mp4' type='video/mp4'/>
            </video>
            <HeroContent />
        </div>
    )
}

export default Hero
