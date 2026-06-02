import React from 'react';
import { FiLink } from 'react-icons/fi';

const keys = [
  { name: 'Chrono24', key: '••••••••••••c24_x9', env: 'PRODUCTION', envColor: 'bg-emerald-100 text-emerald-700', date: 'Oct 12, 2023', icon: 'bg-[#1c2c3b] text-white' },
  { name: 'eBay', key: '••••••••••••eb_luxe', env: 'PRODUCTION', envColor: 'bg-emerald-100 text-emerald-700', date: 'Nov 05, 2023', icon: 'bg-gray-200 text-gray-800' },
  { name: 'Grailzee', key: '••••••••••••wb_sbx', env: 'SANDBOX', envColor: 'bg-indigo-100 text-indigo-700', date: 'Jan 12, 2024', icon: 'bg-black text-white' },
];

const ApiKeyManagement = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4 px-1">
        <FiLink className="text-[#0b3b7c] text-[18px] stroke-[2.5]" />
        <h2 className="text-[17px] font-bold text-[#001f3f]">API Key Management</h2>
      </div>

      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#f4f7fb]">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider w-[25%]">Marketplace</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider w-[35%]">API Key</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider w-[20%]">Environment</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider w-[20%]">Last Rotated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm">
            {keys.map((k, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-5 flex items-center gap-3">
                  <div className={`w-7 h-7 rounded flex items-center justify-center ${k.icon} shadow-sm`}>
                    <div className="w-3.5 h-3.5 bg-current opacity-30 rounded-sm"></div>
                  </div>
                  <span className="font-semibold text-gray-800 text-[13px]">{k.name}</span>
                </td>
                <td className="px-6 py-5 text-gray-600 font-mono text-[13px] tracking-wider">{k.key}</td>
                <td className="px-6 py-5">
                  <span className={`${k.envColor} text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider`}>
                    {k.env}
                  </span>
                </td>
                <td className="px-6 py-5 text-gray-500 leading-tight text-[12px]">
                  {k.date.split(', ')[0]},<br/>{k.date.split(', ')[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ApiKeyManagement;
