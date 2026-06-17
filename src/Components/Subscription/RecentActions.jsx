import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';

const initialLogs = [
  {
    id: 1,
    plan: "Enterprise Tier",
    admin: "James V. (Lead Admin)",
    action: "Updated API Rate Limit",
    date: "Oct 24, 2023 • 14:22",
    status: "Success"
  },
  {
    id: 2,
    plan: "Global Settings",
    admin: "James V. (Lead Admin)",
    action: "Toggled Auto-Renewal",
    date: "Oct 22, 2023 • 17:45",
    status: "Success"
  }
];

const RecentActions = () => {
  const [logs, setLogs] = useState(initialLogs);

  const handleExport = () => {
    // 1. Create CSV headers
    const headers = ["Plan Modified", "Administrator", "Action", "Date & Time", "Status"];
    
    // 2. Convert logs to CSV rows
    const csvRows = logs.map(log => {
      // Escape quotes if needed, wrap in quotes
      return `"${log.plan}","${log.admin}","${log.action}","${log.date}","${log.status}"`;
    });
    
    // 3. Combine headers and rows
    const csvContent = [headers.join(","), ...csvRows].join("\n");
    
    // 4. Create Blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "billing_actions_logs.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm overflow-x-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Recent Billing Actions</h3>
        <button 
          onClick={handleExport}
          className="text-[#0b3b7c] text-[11px] font-bold flex items-center gap-1.5 hover:underline uppercase tracking-wider"
        >
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
          {logs.map((log, index) => (
            <tr key={log.id} className={`${index !== logs.length - 1 ? 'border-b border-gray-50' : ''} hover:bg-gray-50/50 transition-colors`}>
              <td className="py-4 pr-4 font-medium text-gray-800">{log.plan}</td>
              <td className="py-4 pr-4 text-gray-600">{log.admin}</td>
              <td className="py-4 pr-4 text-gray-600">{log.action}</td>
              <td className="py-4 pr-4 text-gray-500">{log.date}</td>
              <td className="py-4 text-right">
                <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                  log.status === 'Success' 
                    ? 'bg-green-50 text-emerald-600' 
                    : 'bg-red-50 text-red-600'
                }`}>
                  {log.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActions;
