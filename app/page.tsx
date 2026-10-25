import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import TeamSection from './components/TeamSection'
import Features from './components/Features'
import Showcase from './components/Showcase'

const page = () => {
  return (
    <div className='font-poppins'><Hero/>
    <TrustedBy/>
    <TeamSection/>
    <Features/>
    <Showcase/>
    </div>
  )
}

export default page