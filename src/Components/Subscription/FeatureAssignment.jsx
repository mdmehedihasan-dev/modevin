import React from 'react';
import { Switch } from 'antd';
import { FiSearch, FiCamera, FiBarChart2, FiSettings } from 'react-icons/fi';

const FeatureAssignment = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Feature Assignment</h3>
          <p className="text-gray-500 text-[13px] mt-1">Toggle capabilities for the Premium Tier</p>
        </div>
        <div className="bg-blue-50 text-[#0b3b7c] px-3 py-1.5 rounded-md flex flex-col uppercase">
          <span className="text-[9px] font-bold text-[#0b3b7c]/70 tracking-wider leading-tight">Select Tier:</span>
          <span className="text-xs font-bold leading-tight">Premium</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl shadow-sm bg-white">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-50 text-[#0b3b7c] rounded-lg flex items-center justify-center text-lg flex-shrink-0">
              <FiSearch />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">Unlimited Searches</h4>
              <p className="text-[12px] text-gray-500 mt-0.5">Bypass monthly look-up limits</p>
            </div>
          </div>
          <Switch defaultChecked className="bg-gray-200" style={{ backgroundColor: '#0b3b7c' }} />
        </div>

        <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl shadow-sm bg-white">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-50 text-[#0b3b7c] rounded-lg flex items-center justify-center text-lg flex-shrink-0">
              <FiCamera />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">AI Visual Search</h4>
              <p className="text-[12px] text-gray-500 mt-0.5">Image recognition for movement ID</p>
            </div>
          </div>
          <Switch defaultChecked className="bg-gray-200" style={{ backgroundColor: '#0b3b7c' }} />
        </div>

        <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl shadow-sm bg-white">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-50 text-[#0b3b7c] rounded-lg flex items-center justify-center text-lg flex-shrink-0">
              <FiBarChart2 />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">Market Analytics</h4>
              <p className="text-[12px] text-gray-500 mt-0.5">Price trend indices and liquidity data</p>
            </div>
          </div>
          <Switch defaultChecked className="bg-gray-200" style={{ backgroundColor: '#0b3b7c' }} />
        </div>

        <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl shadow-sm bg-white">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
              <FiSettings />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">API Access</h4>
              <p className="text-[12px] text-gray-500 mt-0.5">Integration with external ERPs</p>
            </div>
          </div>
          <Switch className="bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default FeatureAssignment;
