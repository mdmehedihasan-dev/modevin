import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'JAN', users: 10000 },
  { name: 'FEB', users: 25000 },
  { name: 'MAR', users: 45000 },
  { name: 'APR', users: 70000 },
  { name: 'MAY', users: 110000 },
  { name: 'JUN', users: 140000 },
];

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

      <div className="relative w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#002B49" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#002B49" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }} 
              dy={10} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#d1d5db', fontWeight: 'bold' }} 
              tickFormatter={(value) => value === 0 ? '0' : `${value / 1000}k`}
              domain={[0, 150000]}
              ticks={[0, 50000, 100000, 150000]}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
              itemStyle={{ color: '#002B49', fontWeight: 'bold' }}
              labelStyle={{ color: '#6b7280', fontSize: '12px', fontWeight: '500', marginBottom: '4px' }}
              formatter={(value) => [`${(value).toLocaleString()} Users`, 'Growth']}
            />
            <Area 
              type="monotone" 
              dataKey="users" 
              stroke="#002B49" 
              strokeWidth={3.5} 
              fillOpacity={1} 
              fill="url(#growthGradient)" 
              activeDot={{ r: 5, fill: '#002B49', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
