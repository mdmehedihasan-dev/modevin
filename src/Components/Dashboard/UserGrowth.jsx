import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export default function UserGrowth() {
  return (
    <div className="lg:col-span-2 bg-white border border-gray-100/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] text-left flex flex-col justify-between">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-base font-bold text-[#002B49] tracking-tight">
            User Growth Dynamics
          </h2>
          <p className="text-[11px] text-gray-400 font-semibold mt-0.5">
            Steady trajectory over the last 6 months
          </p>
        </div>
        <button className="text-gray-400 hover:text-[#002B49] p-1 rounded hover:bg-slate-50 transition-colors flex items-center justify-center">
          <MoreHorizontal className="w-4.5 h-4.5" />
        </button>
      </div>

      {/* SVG Line Chart Container */}
      <div className="relative w-full h-64 flex items-end">
        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between text-[10px] font-bold text-gray-300 pointer-events-none select-none pr-2">
          <div className="w-full flex items-center justify-between border-b border-gray-50 pb-1.5">
            <span>150k</span>
          </div>
          <div className="w-full flex items-center justify-between border-b border-gray-50 pb-1.5 mt-auto">
            <span>100k</span>
          </div>
          <div className="w-full flex items-center justify-between border-b border-gray-50 pb-1.5 mt-auto">
            <span>50k</span>
          </div>
          <div className="w-full flex items-center justify-between mt-auto">
            <span>0</span>
          </div>
        </div>

        {/* Inline SVG Chart Curve */}
        <svg className="w-full h-[80%] z-10" viewBox="0 0 600 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#002B49" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#002B49" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          {/* Grid area fill under the path */}
          <path 
            d="M 10 160 C 120 135, 230 115, 340 95 S 470 65, 590 55 L 590 200 L 10 200 Z" 
            fill="url(#growthGradient)" 
          />
          {/* Curved indicator line */}
          <path 
            d="M 10 160 C 120 135, 230 115, 340 95 S 470 65, 590 55" 
            fill="none" 
            stroke="#002B49" 
            strokeWidth="3.5" 
            strokeLinecap="round"
          />
          {/* Tooltip dot on the curve peak */}
          <circle cx="590" cy="55" r="4.5" fill="#002B49" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* X Axis Labels */}
      <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 tracking-wider mt-4 px-1 select-none">
        <span>JAN</span>
        <span>FEB</span>
        <span>MAR</span>
        <span>APR</span>
        <span>MAY</span>
        <span>JUN</span>
      </div>
    </div>
  );
}
