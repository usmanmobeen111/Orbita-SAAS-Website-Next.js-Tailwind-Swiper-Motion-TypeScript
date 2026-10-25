import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import TeamSection from './components/TeamSection'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='font-poppins'><Hero/>
    <TrustedBy/>
    <TeamSection/>
    <Features/>
    <Showcase/>
    <Testimonials/>
    <Pricing/>
    <Footer/>
    </div>
  )
}

export default page