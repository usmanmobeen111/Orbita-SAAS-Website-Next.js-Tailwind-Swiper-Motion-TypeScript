import NewsletterForm from './NewsletterForm'
import { FaGithub, FaGlobe, FaLinkedin, FaInstagram } from 'react-icons/fa6'

const PORTFOLIO_URL = 'https://usmanmobeen-blush.vercel.app/'

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/usmanmobeen111',
    icon: FaGithub,
  },
  {
    name: 'Portfolio',
    href: PORTFOLIO_URL,
    icon: FaGlobe,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/usmanmobeen111/',
    icon: FaLinkedin,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/thecodeweaver111/',
    icon: FaInstagram,
  },
]

/* `href` is set only where a matching section exists on this page.
   Items without `href` are pages that don't exist yet and render as plain text. */
const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Projects', href: '#workspace' },
      { label: 'Task Management', href: '#workspace' },
      { label: 'Pricing', href: '#pricing' },
      { label: "What's New" },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Project Management', href: '#features' },
      { label: 'Team Collaboration', href: '#workspace' },
      { label: 'Team Planning' },
      { label: 'Remote Teams' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog' },
      { label: 'Guides' },
      { label: 'Help Center' },
      { label: 'Documentation' },
      { label: 'FAQs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Orbita', href: '#people' },
      { label: 'Contact' },
      { label: 'Privacy Policy' },
      { label: 'Terms of Service' },
      { label: 'Careers' },
    ],
  },
]

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Preferences']

const FooterItem = ({ label, href }: { label: string, href?: string }) =>
  href ? (
    <a
      href={href}
      className="text-sm md:text-base text-slate-600 transition-colors duration-150 hover:text-primary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/40 rounded-xs"
    >
      {label}
    </a>
  ) : (
    <span className="cursor-default text-sm md:text-base text-slate-600">{label}</span>
  )

const Footer = () => {
  return (
    <footer id="footer" className="relative isolate overflow-hidden bg-white px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 md:px-8 md:pt-28 md:pb-16 lg:px-10 lg:pt-32 lg:pb-20">
      {/* Landscape background: top edge softly fades into the white section above */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/footer.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full select-none object-cover object-bottom"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)',
        }}
      />

      <div className="mx-auto w-full max-w-[95vw] 2xl:max-w-7xl rounded-3xl md:rounded-[2.5rem] border border-slate-200/90 bg-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 shadow-xl shadow-slate-900/5">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            {/* Orbita logo & wordmark matching navbar */}
            <a
              href="#home"
              className="group flex items-center gap-2.5 shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg select-none w-fit"
              aria-label="Orbita Home"
            >
              <img
                src="/orbita.svg"
                className="w-7.5 h-7.5 md:w-8 md:h-8 shrink-0 object-contain transition-transform duration-200 group-hover:scale-105"
                alt="Orbita"
              />
              <span className="text-xl font-bold tracking-tight text-navy leading-none">
                Orbita
              </span>
            </a>
            <p className="mt-3.5 max-w-sm text-sm md:text-base leading-relaxed text-slate-600">
              Bring your projects, people, and progress into one orbit.
            </p>

            <h2 className="mt-8 md:mt-10 text-xl md:text-2xl font-semibold tracking-tight text-navy">
              Stay in the loop.
            </h2>
            <p className="mt-2 max-w-sm text-sm md:text-base leading-relaxed text-slate-600">
              Get practical ideas for better teamwork, smarter planning, and productive projects.
            </p>
            <NewsletterForm />
          </div>

          {/* Link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-8 md:gap-x-10 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold tracking-tight text-navy">{col.title}</h3>
                <ul className="mt-3.5 md:mt-4 space-y-2.5 md:space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <FooterItem label={link.label} href={link.href} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-12 lg:mt-14 border-t border-slate-200/90 pt-6 md:pt-8">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:flex-wrap lg:flex-nowrap">
            {/* Copyright */}
            <p className="order-2 md:order-1 text-center md:text-left text-xs sm:text-sm text-slate-600">
              © 2026 Orbita. All rights reserved.
            </p>

            {/* Developer credit */}
            <p className="order-1 md:order-2 text-center text-xs sm:text-sm text-slate-600">
              Designed and developed by{' '}
              <a
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-navy transition-colors duration-150 hover:text-primary underline underline-offset-4 decoration-slate-300 hover:decoration-primary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/40 rounded-xs"
              >
                Usman Mobeen
              </a>
            </p>

            {/* Social links */}
            <div className="order-3 flex items-center gap-2.5 sm:gap-3" aria-label="Social media links">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="group flex size-9 sm:size-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-150 hover:border-primary/40 hover:bg-paleblue hover:text-primary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/40 active:scale-95"
                  >
                    <Icon className="size-4 sm:size-4.5 transition-transform duration-150 group-hover:scale-110" aria-hidden="true" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Legal links */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-slate-500 md:justify-start">
            {legalLinks.map((label) => (
              <span key={label} className="cursor-default transition-colors hover:text-slate-800">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
