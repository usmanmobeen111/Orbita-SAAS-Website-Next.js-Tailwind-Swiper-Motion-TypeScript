'use client'

import { useState } from 'react'
import PricingCard, { type PricingPlan } from './PricingCard'

/* Illustrative prototype pricing, per workspace per month.
   The Pro card uses /pricing_card.jpg as its landscape backdrop. */
const plans: PricingPlan[] = [
  {
    name: 'Basic',
    description: 'For individuals and small teams getting organized.',
    monthly: 15,
    yearly: 12,
    features: ['Unlimited projects', 'Core task management', 'Basic team collaboration', 'Project progress', 'Standard support'],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    description: 'For growing teams managing multiple projects.',
    monthly: 30,
    yearly: 24,
    features: [
      'Unlimited projects',
      'Advanced task management',
      'Team collaboration and shared views',
      'Advanced project analytics',
      'Workflow automation',
      'Custom roles',
      'Priority support',
    ],
    cta: 'Get Started',
    featured: true,
    artwork: '/pricing_card.jpg',
  },
  {
    name: 'Enterprise',
    description: 'For organizations that need advanced control.',
    monthly: 50,
    yearly: 40,
    features: [
      'Unlimited projects',
      'Advanced task management',
      'Organization-wide collaboration',
      'Advanced reporting',
      'Advanced workflow controls',
      'Advanced permissions',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
  },
]

const Pricing = () => {
  const [yearly, setYearly] = useState(false)

  const toggleClass = (active: boolean) =>
    `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-5 ${
      active ? 'bg-primary text-white' : 'text-slate-600 hover:text-navy'
    }`

  return (
    <section id="pricing" className="bg-white py-20 sm:py-24 scroll-mt-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center">
          {/* Heading as specified in the brief */}
             
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy leading-[1.15] px-4">
            Great{" "}
            <span className="text-primary font-dm-serif-display italic font-normal">
              work
            </span>{" "}starts
            <br className="hidden sm:block" />
            with the right plan
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-5 px-4 font-normal leading-relaxed">
            Simple plans for teams ready to plan smarter, collaborate better, and get more done.
          </p>

          {/* Billing toggle */}
          <div role="group" aria-label="Billing period" className="mt-8 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-paleblue p-1">
            <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)} className={toggleClass(!yearly)}>
              Monthly
            </button>
            <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)} className={toggleClass(yearly)}>
              Yearly
              <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${yearly ? 'bg-white text-primary' : 'bg-white text-emerald-700'}`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-6 sm:mt-16 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} yearly={yearly} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing