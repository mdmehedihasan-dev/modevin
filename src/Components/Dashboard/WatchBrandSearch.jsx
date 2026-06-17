import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: '1', rolex: 110, patek: 80, ap: 40 },
  { day: '2', rolex: 130, patek: 90, ap: 45 },
  { day: '3', rolex: 180, patek: 100, ap: 55 },
  { day: '4', rolex: 290, patek: 150, ap: 60 },
  { day: '5', rolex: 250, patek: 130, ap: 50 },
  { day: '6', rolex: 340, patek: 180, ap: 65 },
  { day: '7', rolex: 310, patek: 210, ap: 75 },
];

export default function WatchBrandSearch() {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.06)] text-left flex flex-col justify-center">
          <span className="text-[10px] text-gray-400 font-semibold mb-2 uppercase tracking-wider">Day {label}</span>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-2 mb-1.5 last:mb-0">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }}></span>
              <span className="text-xs font-bold text-gray-600 capitalize">{entry.name}:</span>
              <span className="text-xs font-bold" style={{ color: entry.color }}>{entry.value}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

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
            <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]"></span>
            <span>Audemars Piguet</span>
          </div>
        </div>
      </div>

      {/* Inner Card Container for the Chart */}
      <div className="w-full bg-white border border-gray-100/60 rounded-3xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.015)] relative">
        <div className="relative w-full h-[224px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="rolexGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#002B49" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#002B49" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="patekGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="apGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#CBD5E1" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#CBD5E1" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e5e7eb', strokeWidth: 1, strokeDasharray: '4 4' }} />
              
              {/* Layer 3: Audemars Piguet */}
              <Area type="monotone" dataKey="ap" name="Audemars Piguet" stroke="#CBD5E1" strokeWidth={2} fillOpacity={1} fill="url(#apGradient)" activeDot={{ r: 4 }} />
              
              {/* Layer 2: Patek Philippe */}
              <Area type="monotone" dataKey="patek" name="Patek Philippe" stroke="#38BDF8" strokeWidth={2} fillOpacity={1} fill="url(#patekGradient)" activeDot={{ r: 4 }} />
              
              {/* Layer 1: Rolex */}
              <Area type="monotone" dataKey="rolex" name="Rolex" stroke="#002B49" strokeWidth={3} fillOpacity={1} fill="url(#rolexGradient)" activeDot={{ r: 5, strokeWidth: 2, stroke: '#fff' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
