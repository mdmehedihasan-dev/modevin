import React from 'react';

export default function RevenueTrends() {
  return (
    <div className="bg-white border border-gray-100/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] text-left flex flex-col justify-between">
      <div className="mb-6">
        <h2 className="text-base font-bold text-[#002B49] tracking-tight">
          Revenue Trends
        </h2>
        <p className="text-[11px] text-gray-400 font-semibold mt-0.5">
          Monthly seasonal peaks
        </p>
      </div>

      {/* Bar Chart Visual container */}
      <div className="relative w-full h-56 flex items-end justify-between px-2 gap-4 mt-6">
        {/* Bar 1 */}
        <div className="flex flex-col items-center flex-1 h-[48%] group cursor-pointer">
          <div className="w-full bg-[#002B49]/10 hover:bg-[#002B49]/20 transition-all rounded-lg h-full" />
        </div>

        {/* Bar 2 */}
        <div className="flex flex-col items-center flex-1 h-[75%] group cursor-pointer">
          <div className="w-full bg-[#002B49]/10 hover:bg-[#002B49]/20 transition-all rounded-lg h-full" />
        </div>

        {/* Bar 3 */}
        <div className="flex flex-col items-center flex-1 h-[62%] group cursor-pointer">
          <div className="w-full bg-[#002B49]/10 hover:bg-[#002B49]/20 transition-all rounded-lg h-full" />
        </div>

        {/* Bar 4: Highlighted Peak Bar with tooltip */}
        <div className="relative flex flex-col items-center flex-1 h-[95%] group cursor-pointer">
          {/* Tooltip badge */}
          <div className="absolute -top-7 bg-[#0D1B2A] text-white text-[8px] font-black tracking-widest px-2 py-0.5 rounded shadow-sm leading-none select-none uppercase z-20">
            Peak
          </div>
          <div className="w-full bg-[#002B49] transition-all rounded-lg h-full shadow-[0_4px_12px_rgba(0,43,73,0.15)]" />
        </div>

        {/* Bar 5 */}
        <div className="flex flex-col items-center flex-1 h-[68%] group cursor-pointer">
          <div className="w-full bg-[#002B49]/10 hover:bg-[#002B49]/20 transition-all rounded-lg h-full" />
        </div>

        {/* Bar 6 */}
        <div className="flex flex-col items-center flex-1 h-[80%] group cursor-pointer">
          <div className="w-full bg-[#002B49]/10 hover:bg-[#002B49]/20 transition-all rounded-lg h-full" />
        </div>
      </div>

      {/* Bar Chart Footer info */}
      <div className="flex items-center justify-between mt-8 border-t border-gray-100 pt-4 px-0.5 select-none">
        <span className="text-[9px] font-extrabold text-gray-400 tracking-widest uppercase">Q1 PERFORMANCE</span>
        <span className="text-xs font-bold text-[#002B49]">
          AVG: <span className="font-extrabold">$420k</span>
        </span>
      </div>
    </div>
  );
}
