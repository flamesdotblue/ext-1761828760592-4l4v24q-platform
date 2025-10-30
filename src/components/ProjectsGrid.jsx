import React from 'react'

const projects = [
  {
    title: 'Redstone Ops Center',
    desc: 'Pipeline automation that triggers builds faster than a repeater clock. Reduced deploy time by 60%.',
    badge: '64',
    tag: 'Automation',
  },
  {
    title: 'Ender Chest Sync',
    desc: 'Real-time data sync across regions, as reliable as your favorite temporary storage. Sub-100ms replication.',
    badge: '16',
    tag: 'Realtime',
  },
  {
    title: 'Nether Portal Analytics',
    desc: 'Event ingestion that travels far and fast. 8x compression and blazing query speed.',
    badge: '8',
    tag: 'Analytics',
  },
  {
    title: 'Beacon UI Kit',
    desc: 'Accessibility-first React components with an enchanting glint and smooth transitions.',
    badge: '32',
    tag: 'Frontend',
  },
]

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-50 mc-font tracking-wide drop-shadow-[0_2px_0_rgba(0,0,0,0.35)]">
          Projects & Builds
        </h2>
        <p className="text-zinc-200/90 mt-2 max-w-2xl">
          Sneaky references for the seasoned crafters: try hovering items, check the stack counts, and mind the creepers.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, desc, badge, tag }) {
  return (
    <article className="relative rounded-md overflow-hidden ui-panel pixel-border">
      <div className="relative p-5">
        <div className="relative h-36 rounded-sm overflow-hidden bg-gradient-to-br from-emerald-700 to-emerald-900 pixel-border">
          <div className="absolute inset-0 opacity-60" style={{ backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,0.25) 55%, transparent 100%)`, transform: 'skewX(-15deg)' }}>
            <div className="absolute top-0 left-[-150%] w-[300%] h-full" style={{ animation: 'enchant-glint 2.8s linear infinite' }} />
          </div>
          <div className="absolute bottom-1 right-2 text-right text-[13px] font-bold text-zinc-100 drop-shadow-[0_2px_0_rgba(0,0,0,0.45)]">
            {badge}
          </div>
          <div className="absolute top-2 left-2 text-[11px] uppercase tracking-widest bg-black/40 text-white px-2 py-0.5 rounded-sm">
            {tag}
          </div>
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-0 opacity-25" aria-hidden>
            {Array.from({ length: 18 }).map((_, idx) => (
              <div key={idx} className={(idx % 2 ? 'bg-emerald-800/60' : 'bg-emerald-950/40')} />
            ))}
          </div>
        </div>
        <h3 className="mt-4 text-xl font-bold text-zinc-50">{title}</h3>
        <p className="mt-2 text-zinc-300 leading-relaxed">{desc}</p>
        <div className="mt-4 flex items-center gap-2">
          <span className="inline-block text-xs text-emerald-300 bg-emerald-900/50 border border-emerald-700/40 px-2 py-1 rounded">
            Efficiency V
          </span>
          <span className="inline-block text-xs text-indigo-300 bg-indigo-900/40 border border-indigo-700/40 px-2 py-1 rounded">
            Unbreaking III
          </span>
        </div>
      </div>
      <div className="absolute -top-2 -right-2 rotate-6 select-none text-[10px] bg-amber-400 text-black px-2 py-1 font-bold shadow-md">
        Achievement Get!
      </div>
    </article>
  )
}
