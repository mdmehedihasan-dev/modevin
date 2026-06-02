import React from 'react';
import { Switch } from 'antd';
import { FiPlus } from 'react-icons/fi';

const ChronoLogo = () => (
  <div className="w-10 h-10 rounded-full border-2 border-[#1c2c3b] flex items-center justify-center relative">
    <span className="text-xl font-bold text-[#1c2c3b]">C</span>
    <div className="absolute top-1/2 left-1/2 w-[18px] h-[2px] bg-orange-400 origin-left transform -rotate-[35deg] translate-y-[-1px] -translate-x-[2px]"></div>
  </div>
);

const EbayLogo = () => (
  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm">
    <span className="text-red-500 font-bold text-[13px] translate-y-[2px]">e</span>
    <span className="text-blue-500 font-bold text-[13px] -translate-y-[2px]">b</span>
    <span className="text-yellow-500 font-bold text-[13px] translate-y-[2px]">a</span>
    <span className="text-green-500 font-bold text-[13px] -translate-y-[2px]">y</span>
  </div>
);

const GrailzeeLogo = () => (
  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
    <span className="text-white text-[9px] font-bold italic">Grailzee</span>
  </div>
);

const integrations = [
  { name: 'Chrono24', logo: <ChronoLogo />, status: 'Active', sync: '14 mins ago' },
  { name: 'eBay', logo: <EbayLogo />, status: 'Active', sync: '1 hour ago' },
  { name: 'Grailzee', logo: <GrailzeeLogo />, status: 'Active', sync: '32 mins ago' },
];

const MarketplaceOrchestration = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">Marketplace Orchestration</h2>
        <span className="bg-blue-50/50 text-[#0b3b7c] px-3 py-1.5 rounded-full text-[11px] font-semibold border border-blue-100">
          4 Active Connections
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {integrations.map((item, idx) => (
          <div key={idx} className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-start mb-5">
              {item.logo}
              <Switch defaultChecked style={{ backgroundColor: '#0b3b7c' }} />
            </div>

            <h3 className="text-[17px] font-bold text-gray-900 mb-1.5">{item.name}</h3>
            <div className="flex items-center gap-1.5 mb-7">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              <span className="text-emerald-500 text-[11px] font-bold tracking-wide">{item.status}</span>
            </div>

            <div className="mb-8">
              <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Last Sync</p>
              <p className="text-[13px] text-gray-700 font-medium">{item.sync}</p>
            </div>

            <div className="mt-auto space-y-2.5">
              <button className="w-full bg-[#0b3b7c] hover:bg-[#0b3b7c]/90 text-white rounded-lg py-2.5 text-sm font-semibold transition-colors shadow-sm">
                Edit Settings
              </button>
              <button className="w-full bg-white hover:bg-gray-50 text-[#0b3b7c] border border-[#0b3b7c] rounded-lg py-2.5 text-sm font-semibold transition-colors shadow-sm">
                Sync Now
              </button>
            </div>
          </div>
        ))}

        {/* Add Marketplace Card */}
        {/* <div className="bg-[#f4f7fb] rounded-[20px] p-6 border-2 border-dashed border-[#dce3f0] flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50/50 transition-colors h-full min-h-[320px]">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[#0b3b7c] mb-4">
            <FiPlus size={20} />
          </div>
          <h3 className="text-[#0b3b7c] font-bold text-[15px] mb-1">Add<br/>Marketplace</h3>
          <p className="text-gray-500 text-[11px]">New API Integration</p>
        </div> */}
      </div>
    </div>
  );
};
export default MarketplaceOrchestration;
