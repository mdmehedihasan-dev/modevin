import React from 'react';
import { Switch, Input } from 'antd';
import { FiCheck, FiSearch, FiCamera, FiBarChart2, FiSettings, FiTrash2, FiDownload, FiPlus } from 'react-icons/fi';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Subscription = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans mt-16">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Subscription Management</h1>
          <p className="text-gray-500 text-sm mt-1">Configure user tiers, pricing, and platform features.</p>
        </div>
        <button className="bg-[#0b3b7c] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#0b3b7c]/90 text-sm font-medium transition-colors">
          <FiPlus /> Create New Plan
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Free Plan */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Free</h3>
          <div className="flex items-end gap-1 mb-6">
            <span className="text-4xl font-bold text-gray-900">$0</span>
            <span className="text-gray-500 mb-1 text-sm font-medium">/ month</span>
          </div>
          
          <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-4 uppercase">Active Features</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> 5 Active Watches
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> Standard Market Prices
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-400">
              <IoCheckmarkCircleOutline className="text-gray-300 text-lg flex-shrink-0" /> AI Visual Search
            </li>
          </ul>
          
          <button className="w-full py-2 border border-gray-300 text-[#0b3b7c] rounded-md font-medium hover:bg-gray-50 transition-colors text-sm">
            Edit Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white p-6 rounded-xl border-2 border-[#0b3b7c] relative shadow-md">
          <div className="absolute top-4 right-4 bg-[#0b3b7c] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Most Popular
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Premium</h3>
          <div className="flex items-end gap-1 mb-6">
            <span className="text-4xl font-bold text-gray-900">$49</span>
            <span className="text-gray-500 mb-1 text-sm font-medium">/ month</span>
          </div>
          
          <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-4 uppercase">Active Features</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> Unlimited Searches
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> AI Visual Search
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> Market Analytics
            </li>
          </ul>
          
          <button className="w-full py-2 border border-gray-300 text-[#0b3b7c] rounded-md font-medium hover:bg-gray-50 transition-colors text-sm">
            Edit Plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Enterprise</h3>
          <div className="flex items-end gap-1 mb-6">
            <span className="text-4xl font-bold text-gray-900">$299</span>
            <span className="text-gray-500 mb-1 text-sm font-medium">/ month</span>
          </div>
          
          <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-4 uppercase">Active Features</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> All Premium Features
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> API Access (REST/Webhooks)
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> Dedicated Account Manager
            </li>
          </ul>
          
          <button className="w-full py-2 border border-gray-300 text-[#0b3b7c] rounded-md font-medium hover:bg-gray-50 transition-colors text-sm">
            Edit Plan
          </button>
        </div>
      </div>

      {/* Two columns section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Feature Assignment */}
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

        {/* Billing Cycle Controls */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Billing Cycle Controls</h3>
              <p className="text-gray-500 text-[13px] mt-1">Manage global subscription parameters</p>
            </div>

            <div className="mb-8">
              <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-3 uppercase">Trial Period (Days)</p>
              <div className="flex items-center gap-3">
                <Input defaultValue={14} className="w-20 text-center font-medium rounded-md h-9" />
                <button className="bg-[#0b3b7c] text-white px-4 py-0 rounded-md text-sm font-medium hover:bg-[#0b3b7c]/90 transition-colors h-9">Update Global</button>
                <button className="border border-gray-300 text-gray-700 px-4 py-0 rounded-md text-sm font-medium bg-white hover:bg-gray-50 transition-colors h-9">Preview</button>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-3 uppercase">Active Discount Codes</p>
              <div className="bg-blue-50/40 rounded-lg p-2 space-y-1 mb-4 border border-blue-100/50">
                <div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-blue-50/80 transition-colors">
                  <span className="text-sm font-bold text-[#0b3b7c]">SIHH2024</span>
                  <span className="text-sm text-gray-500 font-medium">25% Off / 6 Months</span>
                  <button className="text-red-400 hover:text-red-600 transition-colors"><FiTrash2 size={15} /></button>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-blue-50/80 transition-colors">
                  <span className="text-sm font-bold text-[#0b3b7c]">WATCHPRO10</span>
                  <span className="text-sm text-gray-500 font-medium">10% Off / Lifetime</span>
                  <button className="text-red-400 hover:text-red-600 transition-colors"><FiTrash2 size={15} /></button>
                </div>
              </div>
              <button className="text-[#0b3b7c] text-[13px] font-semibold flex items-center gap-1.5 hover:underline px-1">
                <FiPlus size={16} /> Add New Promotion
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
            <div>
              <h4 className="text-sm font-semibold text-gray-800">Auto-Renewal Policy</h4>
              <p className="text-[12px] text-gray-500 mt-0.5">Enforce renewal 48h before expiry</p>
            </div>
            <Switch defaultChecked className="bg-gray-200" style={{ backgroundColor: '#0b3b7c' }} />
          </div>
        </div>
      </div>

      {/* Recent Billing Actions */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm overflow-x-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Recent Billing Actions</h3>
          <button className="text-[#0b3b7c] text-[11px] font-bold flex items-center gap-1.5 hover:underline uppercase tracking-wider">
            <FiDownload size={14} /> Export Logs
          </button>
        </div>

        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-3 pr-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Plan Modified</th>
              <th className="pb-3 pr-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Administrator</th>
              <th className="pb-3 pr-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Action</th>
              <th className="pb-3 pr-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Date & Time</th>
              <th className="pb-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
              <td className="py-4 pr-4 font-medium text-gray-800">Enterprise Tier</td>
              <td className="py-4 pr-4 text-gray-600">James V. (Lead Admin)</td>
              <td className="py-4 pr-4 text-gray-600">Updated API Rate Limit</td>
              <td className="py-4 pr-4 text-gray-500">Oct 24, 2023 • 14:22</td>
              <td className="py-4 text-right">
                <span className="bg-green-50 text-emerald-600 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">Success</span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="py-4 pr-4 font-medium text-gray-800">Global Settings</td>
              <td className="py-4 pr-4 text-gray-600">James V. (Lead Admin)</td>
              <td className="py-4 pr-4 text-gray-600">Toggled Auto-Renewal</td>
              <td className="py-4 pr-4 text-gray-500">Oct 22, 2023 • 17:45</td>
              <td className="py-4 text-right">
                <span className="bg-green-50 text-emerald-600 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">Success</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscription;
