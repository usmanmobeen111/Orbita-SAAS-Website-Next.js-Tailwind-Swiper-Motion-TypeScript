import { HiCheck, HiArrowRight } from 'react-icons/hi2'

export type PricingPlan = {
  name: string
  description: string
  monthly: number
  yearly: number
  features: string[]
  cta: string
  featured?: boolean
  /** Optional decorative landscape used as the featured card's background, e.g. /pricing_card.jpg */
  artwork?: string
}

const PricingCard = ({ plan, yearly }: { plan: PricingPlan, yearly: boolean }) => {
  const price = yearly ? plan.yearly : plan.monthly
  const featured = plan.featured

  return (
    <article
      className={`relative isolate flex h-full  flex-col overflow-hidden rounded-3xl border bg-white p-6 text-navy sm:p-8 ${
        featured ? 'border-slate-200 shadow-lg shadow-slate-900/5' : 'border-slate-200 shadow-xs'
      }`}
    >
      {featured && plan.artwork && (
        <>
          {/* Decorative landscape: misty sky fades into the hill at the lower right */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={plan.artwork}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20 h-full w-full select-none object-cover object-bottom"
          />
          {/* Soft white wash keeps text readable over the grass */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-white via-white/40 to-transparent" />
        </>
      )}

      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">{plan.name}</h3>
        {featured && (
          <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">Most Popular</span>
        )}
      </div>

      <div className="mt-6">
        <p className="flex items-baseline gap-1.5">
          <span className="text-5xl font-bold tracking-tight">${price}</span>
          <span className="text-sm text-slate-600">/month</span>
        </p>
        <p className="mt-1 text-sm text-slate-600">
          {yearly ? `Billed annually ($${plan.yearly * 12}/year) · per workspace` : 'Billed monthly · per workspace'}
        </p>
      </div>

      <p className="mt-4 text-base leading-relaxed text-slate-600">{plan.description}</p>

      <button
        type="button"
        className={`group mt-6 flex w-full items-center justify-between rounded-full py-2 pl-5 pr-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
          featured ? 'bg-navy text-white hover:bg-slate-800' : 'bg-slate-100 text-navy hover:bg-paleblue'
        }`}
      >
        {plan.cta}
        <span className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${featured ? 'bg-white text-navy' : 'bg-white text-navy'}`}>
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </button>

      <hr className="mt-6 border-slate-200" />

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-base">
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${featured ? 'bg-navy text-white' : 'border border-slate-300 text-slate-500'}`}>
              <HiCheck className="h-3 w-3" aria-hidden="true" />
            </span>
            <span className={featured ? 'font-medium text-navy' : 'text-slate-600'}>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default PricingCard
