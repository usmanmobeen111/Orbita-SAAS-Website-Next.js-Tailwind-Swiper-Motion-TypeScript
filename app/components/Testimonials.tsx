import { HiStar, HiArrowRight } from 'react-icons/hi2'

/* Fictional prototype content, not real customer reviews.
   Avatar `src` values are placeholder CDN images; swap them for local paths (e.g. "/team/1.jpg") later. */
const testimonials = [
  {
    id: 1,
    name: 'Maya Chen',
    avatar: 'https://i.pravatar.cc/120?img=47',
    role: 'Product Lead · Demo profile',
    quote: 'Orbita gives our team a clearer picture of what matters. We spend less time chasing updates and more time moving projects forward.',
  },
  {
    id: 2,
    name: 'Daniel Brooks',
    avatar: 'https://i.pravatar.cc/120?img=12',
    role: 'Project Manager · Demo profile',
    quote: 'Having tasks, ownership, and progress in one place makes collaboration feel much simpler. Everyone knows what comes next.',
  },
]

const summaryAvatars = [
  { id: 1, src: 'https://i.pravatar.cc/80?img=5' },
  { id: 2, src: 'https://i.pravatar.cc/80?img=33' },
  { id: 3, src: 'https://i.pravatar.cc/80?img=15' },
]

const cardClass = 'flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8'

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center">
          {/* User's Original Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy leading-[1.15] px-4">
            Loved by{" "}
            <span className="text-primary font-dm-serif-display italic font-normal">
              teams
            </span>{" "}
            <br className="hidden sm:block" />
            that get things done.
          </h2>

          {/* Persuasive Subheading */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-5 px-4 font-normal leading-relaxed">
            See why teams choose a clearer way to organize projects, collaborate better, and make progress together.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:*:first:col-span-2 lg:*:first:col-span-1">
          {/* Card 1: rating summary */}
          <article className={`${cardClass} justify-between gap-10`}>
            <div>
              <p className="text-6xl font-bold tracking-tight text-navy sm:text-7xl">
                4.9<span className="text-2xl font-medium text-slate-400 sm:text-3xl"> / 5</span>
              </p>
              <div className="mt-4 flex gap-1 text-primary" role="img" aria-label="4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HiStar key={i} className="h-6 w-6" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-3 text-base text-slate-600">Sample rating · 280 reviews</p>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-5">
              <div className="flex -space-x-2" aria-hidden="true">
                {summaryAvatars.map((a) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={a.id} src={a.src} alt="" loading="lazy" className="h-9 w-9 rounded-full border-2 border-white bg-paleblue object-cover" />
                ))}
              </div>
              <HiArrowRight className="h-5 w-5 text-slate-400" aria-hidden="true" />
            </div>
          </article>

          {/* Cards 2 and 3: sample testimonials */}
          {testimonials.map((t) => (
            <article key={t.id} className={`${cardClass} justify-between gap-10 min-h-120`}>
              <blockquote className="text-lg leading-relaxed text-navy sm:text-xl">
                “{t.quote}”
              </blockquote>
              <footer className="flex items-center gap-3 border-t border-slate-200 pt-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.avatar} alt={t.name} loading="lazy" className="h-11 w-11 shrink-0 rounded-full bg-paleblue object-cover" />
                <div className="min-w-0">
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-sm text-slate-600">{t.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials