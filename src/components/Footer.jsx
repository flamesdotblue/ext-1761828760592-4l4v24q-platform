import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-8 pb-28">
      <div className="max-w-5xl mx-auto px-4">
        <div className="ui-panel rounded-md p-6 pixel-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-50">Let’s team up</h3>
              <p className="text-zinc-300 mt-1">I’m open to interesting problems, from survival to creative mode.</p>
            </div>
            <div className="flex gap-3">
              <a href="mailto:hello@example.com" className="btn-blocky bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-2 rounded-md">Send Carrier Chicken</a>
              <a href="#" className="btn-blocky bg-zinc-200 hover:bg-white text-black font-semibold px-4 py-2 rounded-md">Download Map (Resume)</a>
            </div>
          </div>
          <div className="mt-4 text-xs text-zinc-400">
            Built with heart containers and a splash of potion. No creepers were harmed. If you can read this, you’re probably wearing carved pumpkins.
          </div>
        </div>
      </div>
    </footer>
  )
}
