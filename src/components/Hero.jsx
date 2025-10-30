import React from "react";

export default function Hero({ onPrimaryAction }) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Mining ideas. Crafting experiences.
            </h1>
            <p className="mt-4 text-zinc-300">
              Hi, I’m a developer and designer who loves turning redstone logic into real-world software. This portfolio hides a few Easter eggs for players who know their way around the Overworld, Nether, and End.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={onPrimaryAction}
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 active:translate-y-[1px] border border-emerald-800 shadow-[0_2px_0_0_rgba(0,0,0,0.6)] transition-colors"
              >
                Open Crafting Table
              </button>
              <a
                href="#contact"
                className="px-5 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200"
              >
                Read the Enchanting Book
              </a>
            </div>
            <ul className="mt-6 text-sm text-zinc-400 space-y-1 list-disc list-inside">
              <li>Seed: 404-NotChunkAligned</li>
              <li>Difficulty: Hard (but peaceful vibes)</li>
              <li>Game rule: keepInventory = true</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full border border-zinc-800 bg-zinc-950 overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: "linear-gradient(0deg, #222 0 40%, #4ade80 40% 60%, #1f2937 60%)",
                imageRendering: "pixelated",
              }} />
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-yellow-400 border border-yellow-700" />
                  <span className="text-xs text-zinc-300">Day 1 • Biome: Plains</span>
                </div>
                <span className="text-xs text-zinc-400">The sun is setting...</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-zinc-400">Tip: Always carry a water bucket. Just in case you accidentally dig straight down.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
