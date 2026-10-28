import React from 'react'
import Navbar from './Navbar'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <div id='home' className='min-h-screen relative overflow-x-hidden overflow-y-clip text-center pb-12 md:pb-16 lg:pb-0'>
      <Navbar />
      <img
        className='absolute inset-0 h-full w-full object-cover object-top -z-50 pointer-events-none select-none'
        src='/hero.jpg'
        alt=''
      />

      <div className='flex flex-col items-center'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-navy max-w-4xl leading-[1.2] md:leading-[1.15] mt-6 md:mt-10 lg:mt-14 mb-3 md:mb-5 px-6 md:px-10'>
          Bring your projects, people, and{' '}
          <span className='text-primary font-dm-serif-display italic font-normal'>
            and progress into one orbit.
          </span>
        </h1>
        <p className='text-sm md:text-base lg:text-lg text-[#475569] max-w-xl md:max-w-2xl leading-relaxed mb-6 md:mb-8 px-6 md:px-10 font-normal'>
          Plan projects, coordinate tasks, and keep your team aligned in one beautifully organized workspace. Orbita brings every moving piece together.
        </p>
        <a
          href='#pricing'
          className='group orbita-jelly mb-8 md:mb-12 lg:mb-14 inline-flex items-center gap-3 rounded-full bg-linear-to-b from-primary to-blue-400 py-1.5 pl-5 pr-1.5 text-sm md:text-base font-medium text-white shadow-sm transition-all duration-200 hover:brightness-105 active:scale-[0.97]'
        >
          Get Started
          <span className='flex size-9 md:size-10 shrink-0 items-center justify-center rounded-full bg-white text-gray-700'>
            <FaArrowRight className='text-sm md:text-base transition-transform duration-200 group-hover:translate-x-0.5' />
          </span>
        </a>

        {/* Dashboard Preview: Responsive crop on small screens, full composition on desktop */}
        <div className='w-full max-w-5xl px-4 md:px-8 lg:px-0 mx-auto flex justify-center'>
          <img
            className='w-full h-52 md:h-80 lg:h-auto max-w-5xl rounded-xl border block md:hidden lg:hidden xl:hidden border-[#E2E8F0] shadow-xl shadow-slate-900/10   2xl:block 2xl:absolute 2xl:left-1/2 2xl:-translate-x-1/2 2xl:-bottom-32 2xl:mb-16'
            src='/hero_dashboard.jpg'
            alt='Orbita Dashboard Preview'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero