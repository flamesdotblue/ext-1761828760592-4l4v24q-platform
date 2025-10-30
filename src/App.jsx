import React from 'react'
import HeaderHUD from './components/HeaderHUD'
import Hero from './components/Hero'
import ProjectsGrid from './components/ProjectsGrid'
import InventoryBar from './components/InventoryBar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen text-zinc-100 bg-gradient-to-b from-sky-300 via-sky-200 to-emerald-600 relative">
      <StyleDefs />
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]" aria-hidden>
        <div className="w-full h-full bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\"><rect width=\"64\" height=\"64\" fill=\"%23ffffff\"/><rect width=\"64\" height=\"32\" fill=\"%2387ceeb\"/><rect y=\"48\" width=\"64\" height=\"16\" fill=\"%23228957\"/></svg>')]" />
      </div>

      <HeaderHUD />

      <main className="relative z-10">
        <Hero />
        <ProjectsGrid />
      </main>

      <Footer />
      <InventoryBar />
    </div>
  )
}

function StyleDefs() {
  return (
    <style>{`
      @keyframes enchant-glint {
        0% { transform: translateX(-150%); }
        100% { transform: translateX(150%); }
      }
      .pixel-border {
        box-shadow: 0 0 0 2px rgba(0,0,0,0.6), inset 0 0 0 2px rgba(255,255,255,0.06);
        image-rendering: pixelated;
      }
      .ui-panel {
        background: linear-gradient(180deg, rgba(24,24,27,0.9), rgba(9,9,11,0.9));
        box-shadow: 0 6px 0 rgba(0,0,0,0.35), 0 0 0 2px rgba(255,255,255,0.06) inset;
      }
      .btn-blocky {
        position: relative;
        transform: translateY(0);
        transition: transform 120ms ease, box-shadow 120ms ease;
        box-shadow: 0 6px 0 rgba(0,0,0,0.35);
      }
      .btn-blocky:active { transform: translateY(4px); box-shadow: 0 2px 0 rgba(0,0,0,0.35); }
      .hotbar-slot { box-shadow: inset 0 0 0 2px rgba(255,255,255,0.06), inset 0 0 12px rgba(0,0,0,0.5); }
      .hotbar-selected { outline: 2px solid #b3ff5a; outline-offset: -2px; }
      .mc-font { font-family: "IBM Plex Sans", "Mona Sans", system-ui, sans-serif; letter-spacing: 0.02em; }
      .debug-text { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 12px; }
    `}</style>
  )
}
