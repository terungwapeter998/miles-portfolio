

export default function App() {
  const finalStatement = "Building the operating systems for Africa’s future institutions. Miles Platforms Group bridges the gap between academic theory and mission-critical execution. Our goal is to provide sovereign, audit-ready infrastructure for the health, education, and government sectors through the 2030 roadmap.";

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">

      {/* BACKGROUND GRID OVERLAY */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* 1. HERO SECTION - Refined Typography Scale */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 py-48">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-[2px] w-8 bg-blue-600"></div>
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold">
            Systems Architect
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-light leading-none tracking-tight text-slate-900">
          TERUNGWA <span className="font-black text-slate-900 italic uppercase">PETER.</span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <p className="max-w-xs text-slate-500 font-mono text-[10px] leading-relaxed uppercase tracking-[0.2em]">
            Architecting High-Integrity Digital Infrastructure // 2026
          </p>
          <div className="hidden md:block h-px w-24 bg-slate-200"></div>
          <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">
            Nigeria // Miles Platforms Group
          </p>
        </div>
      </header>

      {/* 2. SELECTED PROJECTS SECTION */}
      <section id="work" className="relative z-10 max-w-6xl mx-auto px-6 py-32 border-t border-slate-200">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Selected Deployments</h2>
          <span className="font-mono text-[10px] text-slate-300">ENG — 001 // PROD — 002</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">

          {/* Card 1: NGO Web Engineering */}
          <div className="group relative bg-white p-12 hover:bg-blue-50 transition-colors duration-500">
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono text-[10px] text-blue-600 font-bold border border-blue-200 px-2 py-1 rounded">ACADEMIC_01</span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Web Engineering</span>
            </div>
            <h3 className="text-3xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-300">NGO Awareness Platform</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-sm">
              Architecture for social impact. Implemented fixed navigation systems and anchor synchronization for mission-critical outreach.
            </p>
            <div className="flex gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
              <div className="h-px w-8 bg-blue-600 mt-2"></div>
              <span className="font-mono text-[10px] uppercase">HTML5 // CSS3 // JS</span>
            </div>
          </div>

          {/* Card 2: Mesokurtic */}
          <div className="group relative bg-white p-12 hover:bg-slate-900 transition-colors duration-500">
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono text-[10px] text-slate-400 font-bold border border-slate-200 px-2 py-1 rounded group-hover:text-white group-hover:border-slate-700">PRODUCTION_02</span>
              <a href="https://mesokurtic.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-blue-600 underline">LIVE_SITE</a>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-slate-900 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">Mesokurtic Supply Chain</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-sm group-hover:text-slate-400">
              Professional logistics interface optimized for low-latency edge delivery and enterprise scalability via React + Vercel.
            </p>
            <div className="flex gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
              <div className="h-px w-8 bg-blue-600 mt-2"></div>
              <span className="font-mono text-[10px] uppercase group-hover:text-white transition-colors">React // Vercel // Vite</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRINCIPLES SECTION (High-Contrast) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-40 border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {[
            { id: "01", title: "Logical Determinism", desc: "Eliminating systemic ambiguity through rigorous state-machine logic and verified invariants." },
            { id: "02", title: "Sovereign Design", desc: "Building audit-ready infrastructure tailored for the longevity and security of African institutions." },
            { id: "03", title: "Structural Integrity", desc: "Utilizing advanced decoupling patterns to protect core logic from external technological volatility." }
          ].map((item) => (
            <div key={item.id} className="relative group">
              <span className="block font-mono text-[40px] font-black text-slate-100 absolute -top-10 -left-4 z-0 group-hover:text-blue-50 transition-colors">{item.id}</span>
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VISION SECTION (Dark Mode Impact) */}
      <section id="vision" className="relative z-10 bg-slate-900 text-white py-40 px-6 overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-20">
            <span className="h-1.5 w-1.5 bg-blue-500 rounded-full animate-pulse"></span>
            2030 Strategic Roadmap
          </div>

          <blockquote className="text-3xl md:text-5xl font-medium leading-[1.3] text-slate-100 italic mb-24 tracking-tight">
            "{finalStatement}"
          </blockquote>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-20 border-t border-white/10">
            {['SchoolDesk', 'LearnLms', 'HealthOS', 'FinStack', 'CityOS'].map((prod, i) => (
              <div key={prod} className="group">
                <span className="block text-blue-500 font-mono text-[10px] mb-2 opacity-50 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">{prod}</span>
              </div>
            ))}
          </div>

          <p className="mt-32 font-mono text-[10px] tracking-[0.5em] text-slate-600 uppercase">
            Miles Platforms Group // Lagos // Nigeria
          </p>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="relative z-10 py-12 text-center text-slate-400 text-[9px] font-mono uppercase tracking-[0.3em]">
        © 2026 Terungwa Peter — All Systems Operational
      </footer>
    </div>
  );
}