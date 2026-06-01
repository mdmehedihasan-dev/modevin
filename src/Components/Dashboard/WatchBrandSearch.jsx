import React from 'react';

export default function WatchBrandSearch() {
  return (
    <div className="w-full bg-white border border-gray-100/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] text-left flex flex-col justify-between">
      
      {/* Header Block with Legends */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 select-none">
        <div>
          <h2 className="text-base font-bold text-[#002B49] tracking-tight">
            Watch Brand Search Trends
          </h2>
          <p className="text-[11px] text-gray-400 font-semibold mt-0.5">
            Tracking brand interest and market sentiment spikes
          </p>
        </div>

        {/* Color Legend items */}
        <div className="flex items-center gap-4 text-[10px] font-extrabold text-gray-500 tracking-wider">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#002B49]"></span>
            <span>Rolex</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]"></span>
            <span>Patek Philippe</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
            <span>Audemars Piguet</span>
          </div>
        </div>
      </div>

      {/* Multi-layered Area Chart */}
      <div className="relative w-full h-56 flex items-end">
        {/* Custom SVG Layered Chart */}
        <svg className="w-full h-full z-10" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rolexGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#002B49" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#002B49" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="patekGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="apGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Layer 3: Audemars Piguet (Gray, bottom wave) */}
          <path d="M 0 180 Q 150 170, 300 160 T 600 170 T 1000 165 L 1000 200 L 0 200 Z" fill="url(#apGradient)" />
          
          {/* Layer 2: Rolex (Dark Blue wave) */}
          <path d="M 0 165 C 200 160, 300 110, 500 120 S 800 80, 1000 105 L 1000 200 L 0 200 Z" fill="url(#rolexGradient)" />
          
          {/* Layer 1: Patek Philippe (Sky Blue wave, overlaps) */}
          <path d="M 0 180 C 150 180, 250 135, 400 145 S 700 100, 1000 120 L 1000 200 L 0 200 Z" fill="url(#patekGradient)" />
        </svg>

        {/* Floating Tooltip/Badge - Overlay on Rolex Wave Peak */}
        <div className="absolute top-[35%] left-[38%] md:left-[42%] z-20 bg-white border border-gray-150 p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-left flex flex-col justify-center pointer-events-none select-none">
          <span className="text-[10px] font-extrabold text-[#002B49] tracking-wider uppercase leading-none">Rolex Submariner Spike</span>
          <span className="text-[9px] text-[#38BDF8] font-extrabold mt-1.5 leading-none">+45% in last 48h</span>
        </div>
      </div>

    </div>
  );
}
