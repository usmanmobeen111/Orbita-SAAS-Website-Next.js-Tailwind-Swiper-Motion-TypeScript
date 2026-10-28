'use client'

import { FaArrowRight } from 'react-icons/fa'

/* No backend yet: the form is ready for integration but intentionally shows no fake success state.
   Replace the handler below (or use a server action / API route) when a newsletter provider is chosen. */
const NewsletterForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-5 flex w-full max-w-md flex-col sm:flex-row items-stretch sm:items-center gap-2 rounded-2xl sm:rounded-full border border-slate-200 bg-white p-1.5 sm:pl-5 shadow-xs focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-150"
    >
      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <input
        id="footer-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Enter your email address"
        className="min-w-0 flex-1 bg-transparent px-3.5 py-2 sm:px-0 sm:py-0 text-sm md:text-base text-navy placeholder:text-slate-400 focus:outline-none"
      />
      <button
        type="submit"
        className="group orbita-jelly inline-flex shrink-0 items-center justify-center sm:justify-start gap-3 rounded-full bg-linear-to-b from-primary to-blue-400 py-1.5 pl-5 pr-1.5 text-sm md:text-base font-medium text-white shadow-sm transition-all duration-200 hover:brightness-105 active:scale-[0.97] cursor-pointer"
      >
        <span>Subscribe</span>
        <span className="flex size-9 md:size-10 shrink-0 items-center justify-center rounded-full bg-white text-gray-700">
          <FaArrowRight className="text-sm md:text-base transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </button>
    </form>
  )
}

export default NewsletterForm
