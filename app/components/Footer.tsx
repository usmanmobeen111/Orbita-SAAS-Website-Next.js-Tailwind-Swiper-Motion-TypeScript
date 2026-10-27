import NewsletterForm from './NewsletterForm'

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
    <a href={href} className="text-base text-slate-600 transition-colors duration-150 hover:text-primary">{label}</a>
  ) : (
    <span className="cursor-default text-base text-slate-600">{label}</span>
  )

const Footer = () => {
  return (
    <footer id="footer" className="relative isolate overflow-hidden bg-white px-6 pb-16 pt-32 md:px-10">
      {/* Landscape background: top edge fades into the white section above */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/footer.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full select-none object-cover object-bottom mask-[linear-gradient(to_bottom,transparent_0%,#000_45%)]"
      />

      <div className="mx-auto max-w-[95vw] rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 md:p-12 lg:p-14">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <a href="#home" className="flex w-fit items-center gap-3">
              <img src="/orbita.svg" className="h-12 w-12 object-contain" alt="Orbita" />
              <span className="text-2xl font-bold tracking-tight text-navy">Orbita</span>
            </a>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-slate-600">
              Bring your projects, people, and progress into one orbit.
            </p>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight text-navy">Stay in the loop.</h2>
            <p className="mt-2 max-w-sm text-base leading-relaxed text-slate-600">
              Get practical ideas for better teamwork, smarter planning, and productive projects.
            </p>
            <NewsletterForm />
          </div>

          {/* Link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-navy">{col.title}</h3>
                <ul className="mt-4 space-y-3">
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
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Orbita. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((label) => (
              <li key={label}><span className="cursor-default">{label}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
