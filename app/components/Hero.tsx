import React from 'react'
import Navbar from './Navbar'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='min-h-screen relative overflow-x-hidden overflow-y-clip text-center'>
      <Navbar />
      <img className='absolute inset-0 h-full w-full object-cover -z-50 pointer-events-none select-none' src="/hero.jpg" alt="" />

      <div className='flex flex-col items-center'>
        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy max-w-4xl leading-[1.15] mt-10 sm:mt-14 mb-5  px-6 md:px-10'>Bring your projects,
        people, and <span className='text-primary font-dm-serif-display italic font-normal'>and progress
          into one orbit.</span></h1>
      <p className='text-base sm:text-lg text-[#475569] max-w-2xl leading-relaxed mb-8 px-6 md:px-10 font-normal '>Plan projects, coordinate tasks, and keep your team aligned in one beautifully organized workspace. Orbita brings every moving piece together.</p>
      <button className='flex items-center gap-2.5 bg-linear-to-b from-primary to-blue-400 text-white text-sm sm:text-base font-medium  py-2.5 px-4 rounded-full shadow-sm transition-colors duration-150 cursor-pointer ml-6 md:ml-10 mb-12 sm:mb-14 '>Get Started <div className='flex items-center justify-center p-3 rounded-full bg-white text-gray-700'><FaArrowRight className='text-lg' /></div></button>

      <img className='max-w-5xl w-[calc(100%-3rem)] md:w-[calc(100%-5rem)] lg:max-w-5xl rounded-xl border border-[#E2E8F0] shadow-xl shadow-slate-900/10 ml-6 md:ml-10 absolute -bottom-32 mb-16 object-cover ' src="/hero_dashboard.jpg" alt="" />
      </div>
    </div>
  )
}
  
export default Hero