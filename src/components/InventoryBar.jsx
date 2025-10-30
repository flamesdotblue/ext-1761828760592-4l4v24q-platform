import React from 'react'

const slots = [
  { key: '1', item: '💎', label: 'Diamond Standard' },
  { key: '2', item: '🧱', label: 'Solid Architecture' },
  { key: '3', item: '⚙️', label: 'DevOps' },
  { key: '4', item: '🧪', label: 'Testing' },
  { key: '5', item: '🌐', label: 'Full‑stack' },
  { key: '6', item: '📦', label: 'APIs' },
  { key: '7', item: '🔥', label: 'Performance' },
  { key: '8', item: '🔒', label: 'Security' },
  { key: '9', item: '🧭', label: 'DX & Docs' },
]

export default function InventoryBar() {
  return (
    <div className="fixed bottom-4 inset-x-0 z-40 flex justify-center">
      <nav aria-label="Hotbar" className="ui-panel pixel-border rounded-md px-3 py-2 backdrop-blur">
        <ul className="grid grid-cols-9 gap-2">
          {slots.map((s, i) => (
            <li key={s.key} className={`w-12 h-12 rounded-sm bg-zinc-900/70 hotbar-slot relative ${i === 1 ? 'hotbar-selected' : ''}`}>
              <span className="absolute inset-0 grid place-items-center text-xl" aria-hidden>{s.item}</span>
              <span className="sr-only">{s.label}</span>
              <span className="absolute bottom-0 right-1 text-[10px] text-zinc-200/90">{s.key}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute -top-6 text-xs text-zinc-100/90 bg-black/50 px-2 py-1 rounded pixel-border">
        ssss... don’t look behind you
      </div>
    </div>
  )
}
