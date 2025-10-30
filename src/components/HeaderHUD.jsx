import React from "react";

function Bar({ label, full, colorClass }) {
  const cells = new Array(10).fill(0);
  return (
    <div className="flex items-center gap-2 select-none">
      <span className="text-xs uppercase tracking-wider text-zinc-400">{label}</span>
      <div className="flex gap-1">
        {cells.map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 border border-zinc-700 ${i < full ? colorClass : "bg-zinc-900"}`}
            style={{ boxShadow: i < full ? "inset 0 0 0 1px rgba(0,0,0,0.35)" : undefined }}
          />
        ))}
      </div>
    </div>
  );
}

export default function HeaderHUD() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0b0b]/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-emerald-500 to-emerald-700 border border-emerald-800" aria-hidden />
          <span className="font-semibold tracking-wide">YourName.mc</span>
        </div>
        <div className="flex items-center gap-6">
          <Bar label="Hearts" full={8} colorClass="bg-red-500" />
          <Bar label="Hunger" full={7} colorClass="bg-orange-400" />
          <div className="hidden sm:flex items-center gap-2 select-none">
            <span className="text-xs uppercase tracking-wider text-zinc-400">XP</span>
            <div className="h-3 w-24 bg-zinc-900 border border-zinc-700">
              <div className="h-full bg-emerald-500" style={{ width: "62%" }} />
            </div>
            <span className="text-emerald-400 text-xs font-mono">18</span>
          </div>
        </div>
      </div>
    </header>
  );
}
