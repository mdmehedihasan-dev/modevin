import React from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { FiClock, FiRefreshCw, FiAlertCircle } from 'react-icons/fi';
import { FiArrowUpRight } from 'react-icons/fi';

const trafficData = [
  { name: '0', value: 2400 },
  { name: '1', value: 3400 },
  { name: '2', value: 4400 },
  { name: '3', value: 3000 },
  { name: '4', value: 3800 },
  { name: '5', value: 6800 },
  { name: '6', value: 4800 },
  { name: '7', value: 3400 },
  { name: '8', value: 4400 },
  { name: '9', value: 4000 },
];

const throughputData = [
  { name: '0', value: 30 },
  { name: '1', value: 40 },
  { name: '2', value: 35 },
  { name: '3', value: 50 },
  { name: '4', value: 45 },
  { name: '5', value: 60 },
  { name: '6', value: 35 },
];

export const SystemMonitoringTopSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      
      {/* Live Global Traffic */}
      <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-[16px] font-bold text-[#001f3f] mb-2">Live Global Traffic</h2>
            <div className="flex items-baseline gap-3">
              <span className="text-[40px] font-extrabold text-[#001f3f] leading-none tracking-tight">1,284</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Requests / Sec</span>
              <span className="text-[12px] font-bold text-emerald-500 flex items-center gap-0.5 ml-2">
                <FiArrowUpRight size={14} /> +12.4%
              </span>
            </div>
          </div>
        </div>
        
        <div className="h-[140px] w-full mt-auto">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={trafficData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barCategoryGap={2}>
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                {trafficData.map((entry, index) => {
                  let fill = '#94a3b8'; // default slate
                  if (index === 5) fill = '#0b3b7c'; // peak
                  else if (index > 5) fill = '#1e4c8c'; // after peak darker
                  else if (index < 5) fill = '#a8b9cc'; // before peak lighter
                  return <Cell key={`cell-${index}`} fill={fill} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Job Queue Status */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between">
        <h2 className="text-[16px] font-bold text-[#001f3f] mb-6">Job Queue Status</h2>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                <FiClock size={16} />
              </div>
              <span className="text-[13px] font-medium text-gray-700">Pending</span>
            </div>
            <span className="text-[16px] font-bold text-[#001f3f]">428</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                <FiRefreshCw size={16} />
              </div>
              <span className="text-[13px] font-medium text-gray-700">Processing</span>
            </div>
            <span className="text-[16px] font-bold text-[#001f3f]">12</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                <FiAlertCircle size={16} />
              </div>
              <span className="text-[13px] font-medium text-gray-700">Failed</span>
            </div>
            <span className="text-[16px] font-bold text-[#001f3f]">3</span>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-gray-100">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">Queue Throughput (6H)</h3>
          <div className="h-[40px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={throughputData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barCategoryGap={1}>
                <Bar dataKey="value" fill="#7ba8ff" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  );
};
