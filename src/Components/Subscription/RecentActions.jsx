import React from 'react';
import { FiDownload } from 'react-icons/fi';

const RecentActions = () => {
  return (
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
  );
};

export default RecentActions;
