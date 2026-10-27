'use client'

import React, { useState, useEffect } from 'react'
import { HiBars3, HiXMark, HiArrowRight } from 'react-icons/hi2'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'Integrations',
    href: '#integrations',
  },
  {
    id: 3,
    name: 'People',
    href: '#people',
  },
  {
    id: 4,
    name: 'Features',
    href: '#features',
  },
  {
    id: 5,
    name: 'Workspace',
    href: '#workspace',
  },
  {
    id: 6,
    name: 'Testimonials',
    href: '#testimonials',
  },
  {
    id: 7,
    name: 'Pricing',
    href: '#pricing',
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

  // Close menu if window is resized past desktop breakpoint (1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
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
      <div className='flex items-center justify-between px-6 md:px-12 lg:px-16 xl:px-24 py-5 md:py-6'>
        {/* Brand Logo & Wordmark */}
        <a
          href='#home'
          className='group flex items-center gap-2.5 shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg select-none'
          aria-label='Orbita Home'
        >
          <img
            src='/orbita.svg'
            className='w-7.5 h-7.5 md:w-8 md:h-8 shrink-0 object-contain transition-transform duration-200 group-hover:scale-105'
            alt='Orbita'
          />
          <span className='text-xl font-bold tracking-tight text-navy leading-none'>
            Orbita
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className='hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8'
          aria-label='Main Navigation'
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className='text-sm xl:text-base font-medium text-navy/80 hover:text-primary transition-colors duration-150'
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className='hidden lg:block'>
          <a
            href='#pricing'
            className='inline-flex items-center justify-center bg-black hover:bg-black/80 text-white text-sm xl:text-base font-medium px-4 py-2 xl:px-5 xl:py-2.5 rounded-md shadow-sm transition-all duration-150 cursor-pointer active:scale-[0.98]'
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className='flex items-center lg:hidden'>
          <button
            type='button'
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls='mobile-navigation-menu'
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className='inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200/90 bg-white/90 text-navy hover:bg-white hover:text-primary hover:border-slate-300 shadow-xs focus:outline-hidden focus:ring-2 focus:ring-primary/40 transition-colors cursor-pointer'
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
              className='fixed inset-0 bg-navy/20 backdrop-blur-xs z-40 lg:hidden'
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
              className='absolute top-full left-0 right-0 px-6 md:px-12 pt-2 pb-6 z-50 lg:hidden'
            >
              <div className='bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-4 md:p-6 shadow-xl shadow-slate-900/10 space-y-4'>
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

                <div className='pt-3 border-t border-slate-100 flex flex-col'>
                  <a
                    href='#pricing'
                    onClick={() => setIsOpen(false)}
                    className='w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-black/85 text-white text-base font-medium py-3 rounded-md shadow-sm transition-all duration-150 active:scale-[0.98]'
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