import React from 'react';

export default function UnderConstruction() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden font-sans text-white">
      
      {/* Dynamiczne tło (animowane kółka w tle) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 text-center px-4 max-w-2xl">
        
        {/* Badge statusu */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-medium tracking-wider uppercase text-blue-200/80">W budowie</span>
        </div>

        {/* Nagłówek */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          Coś wielkiego <br /> jest w drodze.
        </h1>

        <p className="text-lg md:text-xl text-white/50 mb-10 leading-relaxed">
          Pracujemy nad nowym projektem. Wkrótce zobaczysz tutaj panel z Twoim ekwipunkiem Steam i zaawansowane statystyki.
        </p>

        {/* Input zapisu (UI tylko do wyglądu) */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
          <input 
            type="email" 
            placeholder="Twój e-mail..." 
            className="w-full md:w-80 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 outline-none transition-all focus:ring-4 focus:ring-blue-500/10"
          />
          <button className="w-full md:w-auto px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all active:scale-95">
            Powiadom mnie
          </button>
        </div>

        {/* Footer / Social links */}
        <div className="mt-20 flex justify-center gap-6 text-white/30 text-sm">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
        </div>

      </div>

      {/* Grid pattern w tle */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>
    </main>
  );
}