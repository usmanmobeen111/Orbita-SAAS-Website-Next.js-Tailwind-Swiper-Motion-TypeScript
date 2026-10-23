import React from 'react'
const navLinks = [
    {
        id: 1,
        name: 'Features',
        href: '#'
    },
    {
        id:2,
        name: 'Solutions',
        href: '#'
    },
    {
        id:3,
        name: 'Pricing',
        href: '#'
    },
    {
        id:4,
        name: 'Resources',
        href: '#'
    },
]

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-20 lg:px-40 py-6  relative z-10'>
        <div className='flex items-center gap-3'>
            <img src="/orbita.svg" className='w-12 h-12 object-contain' alt="Orbita" />
            <h1 className='text-2xl font-bold text-navy tracking-tight'>Orbita</h1>
        </div>
        <div className='flex items-center gap-6 md:gap-8'>
            {navLinks.map((link)=>(
            
                <a key={link.id} className='text-base sm:text-md font-medium text-navy hover:text-primary transition-colors duration-150' href={link.href}>{link.name}</a>
               
            ))}
        </div>
        <div>
            <a href="#" className='inline-flex items-center justify-center bg-black hover:bg-black/80 text-white text-base font-medium px-4 py-2 rounded-md shadow-sm transition-colors duration-150 cursor-pointer'>Get Started</a>
        </div>
    </div>
  )
}

export default Navbar