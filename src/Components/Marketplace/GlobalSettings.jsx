import React from 'react';
import { Switch, Select } from 'antd';
import { FiSave } from 'react-icons/fi';
import { BsSliders } from "react-icons/bs";

const GlobalSettings = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4 px-1">
        <BsSliders className="text-[#0b3b7c] text-[18px] stroke-[0.5]" />
        <h2 className="text-[17px] font-bold text-[#001f3f]">Global Settings</h2>
      </div>

      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-7 flex flex-col h-full">
        <div className="mb-7">
          <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2.5">Global Sync Frequency</label>
          <Select 
             defaultValue="1hour" 
             className="w-full h-[44px]" 
             options={[{ value: '1hour', label: 'Every 1 Hour' }]}
          />
          <p className="text-[11px] text-gray-500 mt-2.5 italic">Controls polling interval for all active platform inventory.</p>
        </div>

        <div className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-[14px] p-5 flex items-center justify-between mb-6">
          <div>
            <h4 className="text-[14px] font-bold text-gray-900">Strict Metadata Mapping</h4>
            <p className="text-[11px] text-gray-500 mt-1 leading-tight pr-4">Enforce ISO-8601 for dates and standardized brand names.</p>
          </div>
          <Switch defaultChecked style={{ backgroundColor: '#0b3b7c' }} />
        </div>

        <div className="bg-rose-50/50 border border-rose-100 rounded-[14px] p-5 flex items-center justify-between mb-8">
          <div>
            <h4 className="text-[14px] font-bold text-rose-600">Maintenance Mode</h4>
            <p className="text-[11px] text-rose-500/80 mt-1 leading-tight pr-4">Pause all outgoing API requests and webhook ingestion.</p>
          </div>
          <Switch className="bg-rose-200" />
        </div>

        <div className="mt-auto pt-2">
          <button className="w-full bg-[#0b3b7c] hover:bg-[#0b3b7c]/90 text-white rounded-[12px] py-3.5 text-sm font-bold transition-colors flex items-center justify-center gap-2 shadow-sm">
            <FiSave className="text-lg" /> Save Global Changes
          </button>
        </div>
      </div>
    </div>
  );
};
export default GlobalSettings;
