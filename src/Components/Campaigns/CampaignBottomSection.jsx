import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const CampaignBottomSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Post Performance Tracking */}
      <div className="bg-white p-7 rounded-[20px] shadow-sm border border-gray-100 flex flex-col h-full">
        <h3 className="text-[15px] font-bold text-gray-800 mb-8">Post Performance Tracking</h3>
        <div className="flex items-center justify-between gap-10 flex-1 px-4">
          {/* Donut Chart Mock */}
          <div className="relative w-[120px] h-[120px] flex-shrink-0">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90 drop-shadow-sm">
              <path
                className="text-gray-100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4.5"
              />
              <path
                className="text-[#0b3b7c]"
                strokeDasharray="84, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[22px] font-bold text-[#001f3f]">84%</span>
              <span className="text-[7px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Positive</span>
            </div>
            <p className="text-[9px] text-center text-gray-400 mt-5 leading-tight font-medium px-2">Sentiment Analysis on Comments</p>
          </div>
          
          {/* Bar Charts */}
          <div className="flex-1 space-y-5 -mt-4">
            <div>
              <div className="flex justify-between items-end text-[10px] mb-1.5">
                <span className="text-gray-500 font-bold">Reach (Organic)</span>
                <span className="font-bold text-gray-800 text-[11px]">12.4k</span>
              </div>
              <div className="w-full bg-gray-100 h-[5px] rounded-full overflow-hidden">
                <div className="bg-[#0b3b7c] h-full rounded-full w-[85%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end text-[10px] mb-1.5">
                <span className="text-gray-500 font-bold">Reach (Paid)</span>
                <span className="font-bold text-gray-800 text-[11px]">3.2k</span>
              </div>
              <div className="w-full bg-gray-100 h-[5px] rounded-full overflow-hidden">
                <div className="bg-indigo-300 h-full rounded-full w-[35%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end text-[10px] mb-1.5">
                <span className="text-gray-500 font-bold">Conversions</span>
                <span className="font-bold text-gray-800 text-[11px]">142</span>
              </div>
              <div className="w-full bg-gray-100 h-[5px] rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="bg-white p-7 rounded-[20px] shadow-sm border border-gray-100 flex flex-col h-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[15px] font-bold text-gray-800">Upcoming Schedule</h3>
          <div className="flex gap-2">
            <button className="text-gray-400 hover:text-gray-700 transition-colors"><FiChevronLeft size={16} /></button>
            <button className="text-gray-400 hover:text-gray-700 transition-colors"><FiChevronRight size={16} /></button>
          </div>
        </div>

        {/* Calendar Strip */}
        <div className="flex justify-between mb-7 px-1">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => {
            const isToday = i === 2; // W/24th
            const dates = [22, 23, 24, 25, 26, 27, 28];
            return (
              <div key={i} className="flex flex-col items-center">
                <span className="text-[9px] font-bold text-gray-400 mb-2.5">{day}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-bold ${isToday ? 'bg-blue-50/50 text-[#0b3b7c] border border-blue-200' : 'text-gray-500 hover:bg-gray-50 cursor-pointer'}`}>
                  {dates[i]}
                </div>
              </div>
            )
          })}
        </div>

        {/* Events */}
        <div className="space-y-3">
          <div className="flex gap-4 p-3.5 bg-[#f4f7fb] rounded-xl border border-blue-50/50">
            <div className="text-[10px] font-bold text-gray-400 pt-0.5 w-10">09:00</div>
            <div>
              <h4 className="text-[12px] font-bold text-gray-800">Inventory Sync: Rolex Batch</h4>
              <p className="text-[10px] text-gray-500 mt-0.5 font-medium">All Channels</p>
            </div>
          </div>
          <div className="flex gap-4 p-3.5 bg-blue-50/50 rounded-xl border border-blue-100/50">
            <div className="text-[10px] font-bold text-blue-400 pt-0.5 w-10">14:30</div>
            <div>
              <h4 className="text-[12px] font-bold text-[#0b3b7c]">Member Spotlight Post</h4>
              <p className="text-[10px] text-blue-600/70 mt-0.5 font-medium">FB Groups Only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
