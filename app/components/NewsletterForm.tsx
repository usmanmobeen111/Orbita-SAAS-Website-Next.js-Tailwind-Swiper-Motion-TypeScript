'use client'

import { FaArrowRight } from 'react-icons/fa'

/* No backend yet: the form is ready for integration but intentionally shows no fake success state.
   Replace the handler below (or use a server action / API route) when a newsletter provider is chosen. */
const NewsletterForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-5 flex w-full max-w-md items-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 pl-5 shadow-xs focus-within:border-primary/50"
    >
      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <input
        id="footer-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Enter your email address"
        className="min-w-0 flex-1 bg-transparent text-sm text-navy placeholder:text-slate-400 focus:outline-none sm:text-base"
      />
      <button
        type="submit"
        className="group orbita-jelly inline-flex shrink-0 items-center gap-3 rounded-full bg-linear-to-b from-primary to-blue-400 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:brightness-105 active:scale-[0.97] sm:text-base"
      >
        Subscribe
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-gray-700">
          <FaArrowRight className="text-base transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </button>
    </form>
  )
}

export default NewsletterForm
