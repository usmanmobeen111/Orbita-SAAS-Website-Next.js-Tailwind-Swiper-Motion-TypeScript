'use client'

import React, { useState, useEffect } from 'react'
import { HiBars3, HiXMark, HiArrowRight } from 'react-icons/hi2'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  {
    id: 1,
    name: 'Features',
    href: '#features',
  },
  {
    id: 2,
    name: 'Solutions',
    href: '#solutions',
  },
  {
    id: 3,
    name: 'Pricing',
    href: '#pricing',
  },
  {
    id: 4,
    name: 'Resources',
    href: '#testimonials',
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Close menu if window is resized past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className='relative z-50 w-full'>
      <div className='flex items-center justify-between px-6 md:px-20 lg:px-40 py-5 md:py-6'>
        {/* Brand Logo */}
        <a href='#home' className='flex items-center gap-3 group focus:outline-hidden'>
          <img
            src='/orbita.svg'
            className='w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-200 group-hover:scale-105'
            alt='Orbita'
          />
          <h1 className='text-2xl font-bold text-navy tracking-tight'>Orbita</h1>
        </a>

        {/* Desktop Navigation Links */}
        <nav className='hidden md:flex items-center gap-6 lg:gap-8' aria-label='Main Navigation'>
          {navLinks.map((link) => (
            <a
              key={link.id}
              className='text-base font-medium text-navy hover:text-primary transition-colors duration-150'
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className='hidden md:block'>
          <a
            href='#pricing'
            className='inline-flex items-center justify-center bg-black hover:bg-black/80 text-white text-base font-medium px-5 py-2.5 rounded-md shadow-sm transition-all duration-150 cursor-pointer active:scale-[0.98]'
          >
            Get Started
          </a>
        </div>

        {/* Mobile Actions: CTA + Hamburger Toggle */}
        <div className='flex items-center gap-2.5 sm:gap-3 md:hidden'>
          <a
            href='#pricing'
            className='inline-flex items-center justify-center bg-black hover:bg-black/85 text-white text-xs sm:text-sm font-medium px-3.5 py-2 rounded-lg shadow-xs transition-colors'
          >
            Get Started
          </a>
          <button
            type='button'
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls='mobile-navigation-menu'
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className='inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200/90 bg-white/90 text-navy hover:bg-white hover:text-primary hover:border-slate-300 shadow-xs focus:outline-hidden focus:ring-2 focus:ring-primary/40 transition-colors cursor-pointer'
          >
            {isOpen ? <HiXMark className='w-6 h-6' /> : <HiBars3 className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              key='mobile-backdrop'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='fixed inset-0 bg-navy/20 backdrop-blur-xs z-40 md:hidden'
              onClick={() => setIsOpen(false)}
              aria-hidden='true'
            />

            {/* Dropdown Panel */}
            <motion.div
              key='mobile-menu'
              id='mobile-navigation-menu'
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className='absolute top-full left-0 right-0 px-4 sm:px-6 pt-1 pb-4 z-50 md:hidden'
            >
              <div className='bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xl shadow-slate-900/10 space-y-4'>
                <nav className='flex flex-col space-y-1' aria-label='Mobile Navigation Links'>
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className='group flex items-center justify-between px-4 py-3 text-base font-medium text-navy/90 hover:text-primary hover:bg-paleblue/70 rounded-xl transition-all duration-150 active:scale-[0.99]'
                    >
                      <span>{link.name}</span>
                      <HiArrowRight className='w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all' />
                    </a>
                  ))}
                </nav>

                <div className='pt-3 border-t border-slate-100 flex flex-col gap-2'>
                  <a
                    href='#pricing'
                    onClick={() => setIsOpen(false)}
                    className='w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-black/85 text-white text-base font-medium py-3 rounded-xl shadow-sm transition-all duration-150 active:scale-[0.98]'
                  >
                    <span>Get Started</span>
                    <HiArrowRight className='w-4 h-4' />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar