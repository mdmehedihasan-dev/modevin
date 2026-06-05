import React from 'react';

export const SystemMonitoringBottomSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Resource Load */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between">
        <h2 className="text-[16px] font-bold text-[#001f3f] mb-6">Resource Load</h2>
        
        <div className="flex flex-col gap-6 mt-2">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[13px] font-medium text-[#001f3f]">CPU Usage</span>
              <span className="text-[13px] font-bold text-[#001f3f]">24%</span>
            </div>
            <div className="w-full bg-[#f0f4f8] h-1.5 rounded-full">
              <div className="bg-[#0b3b7c] h-full w-[24%] rounded-full"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[13px] font-medium text-[#001f3f]">Memory Load</span>
              <span className="text-[13px] font-bold text-[#001f3f]">88%</span>
            </div>
            <div className="w-full bg-[#f0f4f8] h-1.5 rounded-full">
              <div className="bg-[#0b3b7c] h-full w-[88%] rounded-full"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[13px] font-medium text-[#001f3f]">Disk I/O</span>
              <span className="text-[13px] font-bold text-[#001f3f]">12%</span>
            </div>
            <div className="w-full bg-[#f0f4f8] h-1.5 rounded-full">
              <div className="bg-[#0b3b7c] h-full w-[12%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Nodes */}
      <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between">
        <h2 className="text-[16px] font-bold text-[#001f3f] mb-6">Active Nodes</h2>
        
        <div className="w-full mt-2">
          <div className="grid grid-cols-12 gap-4 pb-3 border-b border-gray-100">
            <div className="col-span-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center md:text-left md:pl-10">Region</div>
            <div className="col-span-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center md:text-left">Uptime</div>
            <div className="col-span-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center md:text-left">Load</div>
          </div>
          
          <div className="flex flex-col">
            <div className="grid grid-cols-12 gap-4 py-4 items-center border-b border-gray-50">
              <div className="col-span-4 flex items-center gap-2 md:pl-10 justify-center md:justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span className="text-[13px] font-medium text-gray-700">CH-East</span>
              </div>
              <div className="col-span-4 text-[13px] font-medium text-[#001f3f] text-center md:text-left">14d 08h 22m</div>
              <div className="col-span-4 flex items-center justify-center md:justify-start">
                <div className="w-16 md:w-20 bg-[#f0f4f8] h-1.5 rounded-full">
                  <div className="bg-[#0b3b7c] h-full w-[35%] rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-4 py-4 items-center border-b border-gray-50">
              <div className="col-span-4 flex items-center gap-2 md:pl-10 justify-center md:justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span className="text-[13px] font-medium text-gray-700">US-West</span>
              </div>
              <div className="col-span-4 text-[13px] font-medium text-[#001f3f] text-center md:text-left">05d 12h 45m</div>
              <div className="col-span-4 flex items-center justify-center md:justify-start">
                <div className="w-16 md:w-20 bg-[#f0f4f8] h-1.5 rounded-full">
                  <div className="bg-[#0b3b7c] h-full w-[70%] rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-4 py-4 items-center">
              <div className="col-span-4 flex items-center gap-2 md:pl-10 justify-center md:justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                <span className="text-[13px] font-medium text-gray-700">AE-Central</span>
              </div>
              <div className="col-span-4 text-[13px] font-medium text-[#001f3f] text-center md:text-left">02d 19h 10m</div>
              <div className="col-span-4 flex items-center justify-center md:justify-start">
                <div className="w-16 md:w-20 bg-[#f0f4f8] h-1.5 rounded-full">
                  <div className="bg-[#0b3b7c] h-full w-[45%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
