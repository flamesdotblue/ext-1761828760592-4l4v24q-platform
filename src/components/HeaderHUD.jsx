import React from 'react'

export default function HeaderHUD() {
  const now = new Date()
  const day = 131
  const coords = {
    x: 123.45,
    y: 68,
    z: -247.89,
  }
  return (
    <header className="fixed top-2 left-2 z-40 select-none">
      <div className="debug-text text-black/80 bg-white/60 backdrop-blur-sm rounded-sm px-2 py-1 pixel-border">
        <div>JavaScript 1.20.5 (Portfolio Edition)</div>
        <div>XYZ: {coords.x.toFixed(2)} / {coords.y} / {coords.z.toFixed(2)}</div>
        <div>Biome: plains | Facing: north (Towards negative Z)</div>
        <div>Local Difficulty: 2.75 (Day {day}) | Time: {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        <div className="opacity-60">Hint: Press F to pay respect to good UI</div>
      </div>
    </header>
  )
}
