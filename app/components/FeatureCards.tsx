import type { IconType } from 'react-icons'

const FeatureCards = ({ title, description, Icon }: { title: string, description: string, Icon: IconType }) => {
  return (
    <article className='group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 text-left transition-colors duration-300 hover:border-blue-200 motion-reduce:transition-none'>
      {/* Decorative grid (top-right) */}
      <div aria-hidden='true' className='feature-card-grid pointer-events-none absolute top-0 right-0' />

      <div className='relative'>
        <div className='feature-card-icon flex h-12 w-12 items-center justify-center rounded-xl bg-paleblue text-primary transition-[background-color,color,scale] duration-300 ease-out group-hover:scale-[1.08] group-hover:bg-blue-100 group-hover:text-blue-700 motion-reduce:transition-none motion-reduce:group-hover:scale-100'>
          <Icon className='h-6 w-6' aria-hidden='true' />
        </div>

        <div className='mt-16 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0'>
          <h3 className='text-xl font-semibold text-navy'>{title}</h3>
          <p className='mt-2 text-base leading-relaxed text-slate-600'>{description}</p>
        </div>
      </div>
    </article>
  )
}

export default FeatureCards