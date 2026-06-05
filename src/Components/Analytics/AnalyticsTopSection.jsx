import React from 'react';
import { FiDollarSign, FiCalendar, FiUserPlus, FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';
import { BsCashCoin } from 'react-icons/bs';

export const AnalyticsTopSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Revenue */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#f0f4f8] flex items-center justify-center text-[#0b3b7c]">
            <BsCashCoin size={20} />
          </div>
          <div className="flex items-center gap-1 text-emerald-500 font-bold text-[13px]">
            <FiArrowUpRight size={14} /> ~12.4%
          </div>
        </div>
        <div>
          <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Total Revenue</h3>
          <p className="text-[32px] font-extrabold text-[#001f3f] leading-none tracking-tight">$2.48M</p>
        </div>
        <div className="w-full bg-[#f0f4f8] h-1 rounded-full mt-5">
          <div className="bg-[#001f3f] h-full w-[80%] rounded-full"></div>
        </div>
      </div>

      {/* Monthly Recurring Revenue */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#f0f4f8] flex items-center justify-center text-[#4da6ff]">
            <FiCalendar size={20} />
          </div>
          <div className="flex items-center gap-1 text-emerald-500 font-bold text-[13px]">
            <FiArrowUpRight size={14} /> ~8.2%
          </div>
        </div>
        <div>
          <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Monthly Recurring Revenue</h3>
          <p className="text-[32px] font-extrabold text-[#001f3f] leading-none tracking-tight">$420,500</p>
          <p className="text-[13px] text-gray-500 font-medium mt-2">Target: $500k</p>
        </div>
      </div>

      {/* Avg Revenue Per User */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#f0f4f8] flex items-center justify-center text-gray-500">
            <FiUserPlus size={20} />
          </div>
          <div className="flex items-center gap-1 text-red-500 font-bold text-[13px]">
            <FiArrowDownRight size={14} /> ~1.4%
          </div>
        </div>
        <div>
          <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Avg. Revenue Per User</h3>
          <p className="text-[32px] font-extrabold text-[#001f3f] leading-none tracking-tight">$1,840</p>
          <p className="text-[13px] text-gray-500 font-medium mt-2">Previous Month: $1,865</p>
        </div>
      </div>
    </div>
  );
};
