import React from "react";

const projects = [
  {
    title: "Fortune III — Data Mining",
    desc: "Turning raw data into diamonds with clean pipelines and a sprinkle of enchantment.",
    tag: "Diamond Pickaxe",
    color: "from-cyan-400 to-emerald-400",
  },
  {
    title: "Redstone Automation",
    desc: "Event-driven services and CI/CD that tick like a perfect observer clock.",
    tag: "Redstone Dust",
    color: "from-red-400 to-rose-500",
  },
  {
    title: "Cartographer’s Map",
    desc: "Interactive maps and dashboards that reveal the world chunk by chunk.",
    tag: "Cartography Table",
    color: "from-amber-300 to-yellow-500",
  },
  {
    title: "Ender Link",
    desc: "Latency-hopping APIs that feel like teleportation across dimensions.",
    tag: "Ender Pearl",
    color: "from-fuchsia-400 to-purple-600",
  },
];

function Card({ title, desc, tag, color }) {
  return (
    <article className="group relative border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-colors">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
        backgroundImage: "linear-gradient(120deg, rgba(255,255,255,0.08), transparent 40%)",
      }} />
      <div className="p-5">
        <div className={`inline-flex items-center gap-2 text-[11px] tracking-wider uppercase bg-gradient-to-r ${color} text-black px-2 py-1 border border-black/30`}> 
          <span>{tag}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-zinc-300 text-sm">{desc}</p>
        <div className="mt-5 flex items-center gap-2 text-xs text-zinc-400">
          <span className="h-3 w-3 bg-emerald-500 border border-emerald-800" />
          <span>Sneaky reference: hold F3 for details</span>
        </div>
      </div>
      <div className="px-5 pb-5">
        <div className="grid grid-cols-5 gap-2">
          {new Array(5).fill(0).map((_, i) => (
            <div key={i} className="h-10 border border-zinc-800 bg-zinc-900 group-hover:bg-zinc-800 transition-colors" />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsGrid() {
  return (
    <div>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-sm text-zinc-400">No need to sleep to set your spawn point—just bookmark this page.</p>
        </div>
        <a
          id="contact"
          href="mailto:hello@example.com"
          className="text-sm underline decoration-dotted underline-offset-4 text-emerald-300 hover:text-emerald-200"
        >
          Send a carrier chicken
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Card key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}
