import React from 'react';

export const AnalyticsBottomSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* User Activity Engagement */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between">
        <h2 className="text-[18px] font-bold text-[#001f3f] mb-6">User Activity Engagement</h2>
        
        <div className="flex flex-col gap-6">
          {/* DAU */}
          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-[13px] font-medium text-gray-600">Daily Active Users (DAU)</span>
              <div className="flex items-baseline gap-2">
                <span className="text-[16px] font-bold text-[#001f3f]">12,402</span>
                <span className="text-[11px] font-bold text-emerald-500">+5.2%</span>
              </div>
            </div>
            <div className="w-full bg-[#f0f4f8] h-2 rounded-full">
              <div className="bg-[#4da6ff] h-full w-[65%] rounded-full"></div>
            </div>
          </div>
          
          {/* MAU */}
          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-[13px] font-medium text-gray-600">Monthly Active Users (MAU)</span>
              <div className="flex items-baseline gap-2">
                <span className="text-[16px] font-bold text-[#001f3f]">84,930</span>
                <span className="text-[11px] font-bold text-emerald-500">+12.8%</span>
              </div>
            </div>
            <div className="w-full bg-[#f0f4f8] h-2 rounded-full">
              <div className="bg-[#001f3f] h-full w-[85%] rounded-full"></div>
            </div>
          </div>
          
          {/* Retention Cohort */}
          <div className="mt-2">
            <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">Retention Cohort (30D)</h3>
            <div className="flex gap-1.5 h-10 w-full">
              <div className="flex-1 bg-[#3b597b] flex items-center justify-center text-white text-[10px] font-medium">98%</div>
              <div className="flex-1 bg-[#5c7a99] flex items-center justify-center text-white text-[10px] font-medium">74%</div>
              <div className="flex-1 bg-[#7b9ab9] flex items-center justify-center text-white text-[10px] font-medium">62%</div>
              <div className="flex-1 bg-[#9ab9d9] flex items-center justify-center text-gray-700 text-[10px] font-medium">55%</div>
              <div className="flex-1 bg-[#b9d9f9] flex items-center justify-center text-gray-700 text-[10px] font-medium">48%</div>
              <div className="flex-1 bg-[#d0e5f9] flex items-center justify-center text-gray-700 text-[10px] font-medium">42%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Brand Heatmap */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col relative overflow-hidden">
        <div>
          <h2 className="text-[18px] font-bold text-[#001f3f]">Search Brand Heatmap</h2>
          <p className="text-[13px] text-gray-500 font-medium">Trending luxury brands by search volume</p>
        </div>
        
        <div className="relative flex-1 mt-8 min-h-[200px]">
          {/* Bubble Chart Custom Implementation */}
          
          <div className="absolute top-[20%] left-[25%] w-16 h-16 rounded-full bg-[#001f3f] text-white flex flex-col items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10">
            <span className="text-[10px] font-bold">Rolex</span>
            <span className="text-[11px] font-extrabold">42%</span>
          </div>

          <div className="absolute top-[80%] left-[75%] w-12 h-12 rounded-full bg-[#0088cc] text-white flex flex-col items-center justify-center shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10">
            <span className="text-[9px] font-bold">Patek</span>
            <span className="text-[10px] font-extrabold">28%</span>
          </div>

          <div className="absolute top-[65%] left-[90%] w-10 h-10 rounded-full bg-[#3b597b] text-white flex flex-col items-center justify-center shadow-sm transform -translate-x-1/2 -translate-y-1/2 z-10">
            <span className="text-[8px] font-bold">AP</span>
            <span className="text-[9px] font-extrabold">18%</span>
          </div>

          <div className="absolute top-[35%] left-[65%] w-9 h-9 rounded-full bg-gray-300 text-gray-600 flex flex-col items-center justify-center shadow-sm transform -translate-x-1/2 -translate-y-1/2 z-10">
            <span className="text-[7px] font-bold">Omega</span>
            <span className="text-[8px] font-extrabold">8%</span>
          </div>

          <div className="absolute top-[85%] left-[15%] w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex flex-col items-center justify-center shadow-sm transform -translate-x-1/2 -translate-y-1/2 z-10">
            <span className="text-[7px] font-bold">Cartier</span>
            <span className="text-[7px] font-extrabold">4%</span>
          </div>

          {/* Center Graphic */}
          <div className="absolute top-[50%] left-[50%] w-20 h-20 rounded-full bg-[#f8faff] border border-gray-200 text-[#001f3f] flex flex-col items-center justify-center shadow-inner transform -translate-x-1/2 -translate-y-1/2 z-0">
            <span className="text-[10px] font-black text-center leading-tight tracking-widest text-[#0b3b7c]">WATCH<br/>TRENDS</span>
          </div>
        </div>
      </div>

    </div>
  );
};
