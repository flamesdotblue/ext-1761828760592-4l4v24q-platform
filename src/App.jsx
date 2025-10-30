import React, { useRef } from "react";
import HeaderHUD from "./components/HeaderHUD";
import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectsGrid";
import InventoryBar from "./components/InventoryBar";

export default function App() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen text-zinc-100 relative overflow-x-hidden" style={{
      backgroundColor: "#0a0a0a",
      backgroundImage:
        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
      backgroundSize: "12px 12px",
    }}>
      <div className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-[0.07]" aria-hidden />

      <HeaderHUD />

      <main className="relative z-10">
        <Hero onPrimaryAction={scrollToProjects} />
        <section ref={projectsRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <ProjectsGrid />
        </section>
      </main>

      <InventoryBar />
    </div>
  );
}
