import React from 'react';
import { BarChart, Bar, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'W1', revenue: 480 },
  { name: 'W2', revenue: 750 },
  { name: 'W3', revenue: 620 },
  { name: 'W4', revenue: 950 },
  { name: 'W5', revenue: 680 },
  { name: 'W6', revenue: 800 },
];

export default function RevenueTrends() {
  const maxRevenue = Math.max(...data.map(d => d.revenue));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const isPeak = payload[0].value === maxRevenue;
      return (
        <div className="bg-[#0D1B2A] text-white px-3 py-2 rounded-lg shadow-lg text-[12px] font-bold flex flex-col items-center gap-1">
          {isPeak && <span className="text-[9px] text-gray-400 uppercase tracking-widest">Peak</span>}
          <span>${payload[0].value}k</span>
        </div>
      );
    }
    return null;
  };

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

      <div className="relative w-full h-[224px] mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }} barCategoryGap={12}>
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={{ fill: 'transparent' }} 
            />
            <Bar dataKey="revenue" radius={[8, 8, 8, 8]}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.revenue === maxRevenue ? '#002B49' : '#002B491A'} 
                  className="transition-all hover:opacity-80 cursor-pointer"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
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
