import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import {
  HiSquares2X2, HiCheckCircle, HiUserGroup, HiChartBar,
  HiFlag, HiChatBubbleLeftRight, HiArrowTrendingUp,
} from 'react-icons/hi2'

/* ---------- Shared building blocks ---------- */

const ShowcaseCard = ({ icon: Icon, title, description, children, className = '' }: {
  icon: IconType
  title: string
  description: string
  children: ReactNode
  className?: string
}) => (
  <article className={`flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-300 hover:border-blue-200 sm:p-7 ${className}`}>
    <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-paleblue text-primary'>
      <Icon className='h-5 w-5' aria-hidden='true' />
    </div>
    <h3 className='mt-5 text-xl font-semibold text-navy'>{title}</h3>
    <p className='mt-2 text-base leading-relaxed text-slate-600'>{description}</p>
    {/* Static, decorative interface mockup; fills remaining card height */}
    <div aria-hidden='true' className='mt-6 flex flex-1 flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4'>
      {children}
    </div>
  </article>
)

const Panel = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <div className={`rounded-lg border border-slate-200 bg-white p-3 ${className}`}>{children}</div>
)

const ProgressBar = ({ value }: { value: number }) => (
  <div className='h-2 w-full overflow-hidden rounded-full bg-slate-200'>
    <div className='h-full rounded-full bg-primary' style={{ width: `${value}%` }} />
  </div>
)

const statusStyles = {
  'On track': 'bg-emerald-50 text-emerald-700',
  'To do': 'bg-slate-100 text-slate-600',
  'In progress': 'bg-blue-50 text-primary',
  'Done': 'bg-emerald-50 text-emerald-700',
} as const

const StatusLabel = ({ status }: { status: keyof typeof statusStyles }) => (
  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}>{status}</span>
)

const Avatar = ({ initials, className = '' }: { initials: string, className?: string }) => (
  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white bg-paleblue text-xs font-semibold text-primary ${className}`}>
    {initials}
  </span>
)

const Metric = ({ label, value }: { label: string, value: string }) => (
  <Panel>
    <p className='text-xs text-slate-500'>{label}</p>
    <p className='mt-1 text-lg font-semibold text-navy'>{value}</p>
  </Panel>
)

/* ---------- Card 1: Project overview ---------- */

const milestones = [
  { name: 'Design approved', done: true },
  { name: 'Development complete', done: true },
  { name: 'Launch review', done: false },
]

const recentActivity = [
  { initials: 'AM', text: 'Uploaded final homepage designs', time: '2m' },
  { initials: 'JK', text: 'Marked “Design tokens” as done', time: '1h' },
  { initials: 'SL', text: 'Added 3 tasks to Launch review', time: '3h' },
]

const ProjectOverviewMock = () => (
  <>
    <Panel>
      <div className='flex items-start justify-between gap-3'>
        <div className='min-w-0'>
          <p className='truncate text-sm font-semibold text-navy'>Website Redesign</p>
          <p className='mt-0.5 text-xs text-slate-500'>Due Nov 30</p>
        </div>
        <StatusLabel status='On track' />
      </div>
      <div className='mt-4 flex items-center gap-3'>
        <ProgressBar value={72} />
        <span className='text-sm font-semibold text-navy'>72%</span>
      </div>
    </Panel>
    <div className='grid grid-cols-3 gap-2'>
      <Metric label='Tasks' value='48' />
      <Metric label='Done' value='34' />
      <Metric label='Team' value='9' />
    </div>
    <Panel>
      <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>Milestones</p>
      <ul className='mt-3 space-y-2.5'>
        {milestones.map((m) => (
          <li key={m.name} className='flex items-center gap-2.5 text-sm'>
            <HiFlag className={`h-4 w-4 shrink-0 ${m.done ? 'text-primary' : 'text-slate-300'}`} />
            <span className={m.done ? 'text-slate-500' : 'font-medium text-navy'}>{m.name}</span>
          </li>
        ))}
      </ul>
    </Panel>
    <Panel className='flex-1'>
      <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>Recent activity</p>
      <ul className='mt-3 space-y-3'>
        {recentActivity.map((a) => (
          <li key={a.text} className='flex items-center gap-3'>
            <Avatar initials={a.initials} className='border-slate-50' />
            <p className='min-w-0 flex-1 text-sm leading-snug text-slate-600'>{a.text}</p>
            <span className='shrink-0 text-xs text-slate-400'>{a.time}</span>
          </li>
        ))}
      </ul>
    </Panel>
  </>
)

/* ---------- Card 2: Task management ---------- */

const tasks = [
  { name: 'Finalize homepage copy', status: 'In progress', done: false },
  { name: 'Update design tokens', status: 'Done', done: true },
  { name: 'Prepare sprint demo', status: 'To do', done: false },
  { name: 'QA checkout flow', status: 'In progress', done: false },
] as const

const TaskManagementMock = () => (
  <ul className='flex-1 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white'>
    {tasks.map((t) => (
      <li key={t.name} className='flex flex-wrap items-center gap-x-3 gap-y-1.5 p-3'>
        <HiCheckCircle className={`h-5 w-5 shrink-0 ${t.done ? 'text-primary' : 'text-slate-300'}`} />
        <p className={`min-w-0 flex-1 text-sm font-medium ${t.done ? 'text-slate-400 line-through' : 'text-navy'}`}>{t.name}</p>
        <StatusLabel status={t.status} />
      </li>
    ))}
  </ul>
)

/* ---------- Card 3: Team collaboration ---------- */

const TeamCollaborationMock = () => (
  <>
    <Panel className='flex items-center justify-between gap-3'>
      <div className='flex -space-x-2'>
        {['AM', 'JK', 'SL', 'RT'].map((i) => <Avatar key={i} initials={i} />)}
        <span className='flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-semibold text-slate-600'>+5</span>
      </div>
      <span className='flex items-center gap-1.5 text-xs text-slate-500'>
        <span className='h-2 w-2 rounded-full bg-emerald-500' /> 6 online
      </span>
    </Panel>
    <Panel className='flex flex-1 flex-col justify-center gap-2'>
      <div className='flex items-center gap-2'>
        <Avatar initials='AM' className='border-slate-50' />
        <p className='text-sm font-medium text-navy'>Alex M.</p>
        <HiChatBubbleLeftRight className='ml-auto h-4 w-4 text-slate-400' />
      </div>
      <p className='text-sm leading-snug text-slate-600'>Copy is ready for review. Can someone check the pricing section?</p>
    </Panel>
    <Panel className='flex items-center gap-3'>
      <Avatar initials='SL' className='border-slate-50' />
      <p className='min-w-0 flex-1 text-sm text-slate-600'>
        <span className='font-medium text-navy'>Assigned to Sam:</span> Pricing review
      </p>
    </Panel>
  </>
)

/* ---------- Card 4: Progress & analytics ---------- */

const bars = [40, 65, 50, 80, 60, 90, 75]
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

const AnalyticsMock = () => (
  <>
    <Panel>
      <p className='text-xs text-slate-500'>Sprint completion</p>
      <div className='mt-1 flex items-baseline gap-2'>
        <p className='text-4xl font-bold tracking-tight text-navy'>78%</p>
        <span className='flex items-center gap-1 text-sm font-medium text-emerald-600'>
          <HiArrowTrendingUp className='h-4 w-4' /> 12%
        </span>
      </div>
      <div className='mt-3'><ProgressBar value={78} /></div>
    </Panel>
    <Panel className='flex flex-1 flex-col'>
      <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>Tasks completed</p>
      <div className='mt-4 flex min-h-32 flex-1 items-end gap-2'>
        {bars.map((h, i) => (
          <div key={i} className='flex h-full flex-1 flex-col items-center justify-end gap-2'>
            <div className={`w-full rounded-t-md ${i === 5 ? 'bg-primary' : 'bg-blue-200'}`} style={{ height: `${h}%` }} />
            <span className='text-xs text-slate-400'>{days[i]}</span>
          </div>
        ))}
      </div>
    </Panel>
    <div className='grid grid-cols-2 gap-2'>
      <Metric label='Avg. completion' value='2.4 days' />
      <Metric label='On-time rate' value='94%' />
    </div>
  </>
)

/* ---------- Section ---------- */

const Showcase = () => {
  return (
    <section id='workspace' className='relative isolate overflow-hidden bg-white py-20 sm:py-24 scroll-mt-12'>
      {/* Atmospheric background: vertical mask fades top and bottom into the page */}
      <img
        src='/showcase.jpg'
        alt=''
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10 h-full w-full select-none object-cover mask-[linear-gradient(to_bottom,transparent_0%,#000_25%,#000_75%,transparent_100%)]'
      />

      <div className='mx-auto max-w-7xl px-6 md:px-10'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold leading-[1.15] tracking-tight text-navy sm:text-5xl lg:text-6xl'>
            One workspace,{' '}
            <span className='font-dm-serif-display font-normal italic text-primary'>every detail.</span>
          </h2>
          <p className='mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg'>
            See projects, tasks, people, and progress together in a single, clear view.
          </p>
        </div>

        {/*
          Mobile: single column in DOM order (1, 2, 3, 4).
          md: two columns. lg: three columns, cards 1 and 4 span both rows.
        */}
        <div className='mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-8'>
          <ShowcaseCard
            className='lg:col-start-1 lg:row-span-2 lg:row-start-1'
            icon={HiSquares2X2}
            title='Project overview'
            description='Track every project, its status, and its progress from one dashboard.'
          >
            <ProjectOverviewMock />
          </ShowcaseCard>

          <ShowcaseCard
            className='lg:col-start-2 lg:row-start-1'
            icon={HiCheckCircle}
            title='Task management'
            description='Assign owners, set priorities, and keep deadlines in view.'
          >
            <TaskManagementMock />
          </ShowcaseCard>

          <ShowcaseCard
            className='lg:col-start-2 lg:row-start-2'
            icon={HiUserGroup}
            title='Team collaboration'
            description='Keep discussions, updates, and shared work in one place.'
          >
            <TeamCollaborationMock />
          </ShowcaseCard>

          <ShowcaseCard
            className='lg:col-start-3 lg:row-span-2 lg:row-start-1'
            icon={HiChartBar}
            title='Progress and analytics'
            description='Understand how your team is performing with clear, simple metrics.'
          >
            <AnalyticsMock />
          </ShowcaseCard>
        </div>
      </div>
    </section>
  )
}

export default Showcase