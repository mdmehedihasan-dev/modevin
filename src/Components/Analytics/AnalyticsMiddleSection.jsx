import React from 'react';
import { ComposedChart, Bar, Line, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'JAN', value: 4000, lineValue: 3000 },
  { name: 'FEB', value: 5500, lineValue: 4800 },
  { name: 'MAR', value: 4500, lineValue: 4000 },
  { name: 'APR', value: 6500, lineValue: 2500 },
  { name: 'MAY', value: 6000, lineValue: 3500 },
  { name: 'JUN', value: 8000, lineValue: 7000 },
  { name: 'JUL', value: 7000, lineValue: 4000 },
  { name: 'AUG', value: 9500, lineValue: 2000 },
  { name: 'SEP', value: 11000, lineValue: 4000 },
];

const colors = [
  '#e2e8f0', '#cbd5e1', '#b0c4cf', '#94a3b8', '#8aa3b5', '#64748b', '#5c7a99', '#3b597b', '#001f3f'
];

export const AnalyticsMiddleSection = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 mb-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-[18px] font-bold text-[#001f3f]">Revenue Trends</h2>
          <p className="text-[13px] text-gray-500 font-medium">Comparison of Subscription vs. Transaction Revenue</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#001f3f]"></div>
            <span className="text-[12px] font-medium text-gray-600">Subscriptions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#4da6ff]"></div>
            <span className="text-[12px] font-medium text-gray-600">Transaction Fees</span>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#64748b', fontWeight: 700 }}
              dy={10}
            />
            <Tooltip 
              cursor={{fill: 'transparent'}}
              contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
            <Line 
              type="monotone" 
              dataKey="lineValue" 
              stroke="#e2e8f0" 
              strokeWidth={3} 
              dot={false} 
              activeDot={{ r: 6, fill: '#001f3f', stroke: '#fff', strokeWidth: 2 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
