import React, { useState } from "react";

const slots = [
  { id: 1, label: "Pickaxe", emoji: "⛏️" },
  { id: 2, label: "Blocks", emoji: "🧱" },
  { id: 3, label: "Torch", emoji: "🔥" },
  { id: 4, label: "Map", emoji: "🗺️" },
  { id: 5, label: "Pearl", emoji: "🟣" },
  { id: 6, label: "Food", emoji: "🍞" },
  { id: 7, label: "Axe", emoji: "🪓" },
  { id: 8, label: "Book", emoji: "📘" },
  { id: 9, label: "Totem", emoji: "🟨" },
];

export default function InventoryBar() {
  const [selected, setSelected] = useState(1);

  return (
    <nav className="fixed inset-x-0 bottom-4 z-40">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-zinc-950/90 backdrop-blur border border-zinc-800 p-2 flex gap-2">
          {slots.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelected(s.id)}
              title={s.label}
              className={`relative h-12 w-12 border text-lg select-none grid place-items-center transition-colors ${
                selected === s.id
                  ? "border-emerald-400 bg-zinc-900"
                  : "border-zinc-800 bg-zinc-950 hover:bg-zinc-900"
              }`}
            >
              <span className="pointer-events-none" aria-hidden>{s.emoji}</span>
              {selected === s.id && (
                <span className="absolute -top-2 -right-2 text-[10px] bg-emerald-500 text-black px-1 border border-emerald-800">
                  1
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="px-2 pt-1 text-center text-xs text-zinc-400 select-none">
          Hotbar: Press 1-9 (mentally) to switch items. Don’t forget your shield.
        </div>
      </div>
    </nav>
  );
}
