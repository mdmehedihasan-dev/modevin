import React from 'react';

export default function StatsCard({ title, value, subValue, change, icon: Icon, badge, sparklinePath }) {
  return (
    <div className="bg-white border border-gray-100/80 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.015)] flex flex-col justify-between text-left">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-[#002B49]/5 p-2 rounded-lg text-[#002B49] flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        
        {/* Metric Sparkline / Badge */}
        {sparklinePath ? (
          <div className="flex items-center gap-2">
            {change && <span className="text-[10px] font-bold text-emerald-500 tracking-wider">{change}</span>}
            <svg className="w-10 h-5 text-emerald-500" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={sparklinePath} />
            </svg>
          </div>
        ) : badge}
      </div>
      <div>
        <p className="text-[9px] font-extrabold text-gray-400 tracking-widest uppercase mb-1">{title}</p>
        <div className="flex items-baseline gap-1">
          <h3 className="text-2xl font-black text-[#002B49] tracking-tight">{value}</h3>
          {subValue && <span className="text-[9px] font-bold text-gray-400">{subValue}</span>}
        </div>
      </div>
    </div>
  );
}
