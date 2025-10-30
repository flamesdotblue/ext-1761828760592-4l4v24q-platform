import React from 'react'

export default function Hero() {
  return (
    <section className="pt-28 pb-20 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="ui-panel rounded-md p-8 pixel-border relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <Clouds />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-50 drop-shadow-[0_2px_0_rgba(0,0,0,0.35)] mc-font tracking-wide">
              Hi, I’m Sam – Full‑Stack Crafter
            </h1>
            <p className="mt-4 text-zinc-200/90 max-w-2xl">
              I build performant web experiences and scalable systems. Think of me as your friendly neighborhood redstone engineer, automating the boring stuff and polishing the blocks that matter.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-blocky inline-flex items-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3">
                Craft Projects
                <span className="text-xs bg-black/20 text-black px-2 py-0.5 rounded">W</span>
              </a>
              <a href="#contact" className="btn-blocky inline-flex items-center gap-2 rounded-md bg-amber-400 hover:bg-amber-300 text-black font-semibold px-5 py-3">
                Open Chest
                <span className="text-xs bg-black/20 text-black px-2 py-0.5 rounded">E</span>
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Redstone Automation', value: 'Workflows & CI' },
                { label: 'Fortified Builds', value: 'Type-safe & tested' },
                { label: 'Nether-fast', value: '~50ms APIs' },
                { label: 'Silk Touch UX', value: 'Smooth interactions' },
              ].map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-md bg-zinc-900/60 border border-zinc-700/40 p-3">
      <div className="text-zinc-300 text-sm">{label}</div>
      <div className="text-zinc-50 font-semibold">{value}</div>
    </div>
  )
}

function Clouds() {
  return (
    <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
        </linearGradient>
      </defs>
      <rect x="-200" y="20" width="300" height="50" fill="url(#g)">
        <animate attributeName="x" from="-200" to="600" dur="16s" repeatCount="indefinite" />
      </rect>
      <rect x="-300" y="90" width="260" height="40" fill="url(#g)">
        <animate attributeName="x" from="-300" to="600" dur="22s" repeatCount="indefinite" />
      </rect>
      <rect x="-250" y="150" width="320" height="45" fill="url(#g)">
        <animate attributeName="x" from="-250" to="600" dur="18s" repeatCount="indefinite" />
      </rect>
    </svg>
  )
}
