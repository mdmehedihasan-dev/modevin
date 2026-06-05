import React, { useState } from 'react';
import { FiRefreshCw, FiDownload } from 'react-icons/fi';
import { message } from 'antd';
import { SystemMonitoringTopSection } from '../../Components/SystemMonitoring/SystemMonitoringTopSection';
import { APIHealthMonitoring } from '../../Components/SystemMonitoring/APIHealthMonitoring';
import { SystemMonitoringBottomSection } from '../../Components/SystemMonitoring/SystemMonitoringBottomSection';

const SystemMonitoring = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    message.loading({ content: 'Refreshing system data...', key: 'refresh' });
    setTimeout(() => {
      setIsRefreshing(false);
      message.success({ content: 'System data updated!', key: 'refresh', duration: 2 });
    }, 1500);
  };

  const handleDownloadLogs = () => {
    const logs = `[${new Date().toISOString()}] INFO: System metrics gathered.
[${new Date().toISOString()}] INFO: API Health verified.
[${new Date().toISOString()}] WARN: Instagram API latency high (485ms).
[${new Date().toISOString()}] ERROR: WatchBox Sync timeout.
[${new Date().toISOString()}] INFO: Resource Load within normal parameters.
[${new Date().toISOString()}] INFO: Active nodes stable.`;

    const blob = new Blob([logs], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `system_logs_${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    message.success('Logs downloaded successfully');
  };

  return (
    <div className="p-8 bg-[#fdfdfd] min-h-screen font-sans mt-16">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-[28px] font-bold text-[#001f3f] tracking-tight">System Monitoring</h1>
          <p className="text-gray-500 text-[13px] mt-1.5 font-medium">Real-time infrastructure and API health overview</p>
        </div>
        <div className="flex items-center gap-3.5">
          <button 
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={`border border-gray-200 text-[#001f3f] px-5 py-2.5 rounded-[10px] text-[13px] font-bold transition-colors flex items-center gap-2 shadow-sm bg-white ${isRefreshing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-50'}`}
          >
            <FiRefreshCw size={16} className={isRefreshing ? 'animate-spin text-[#0b3b7c]' : ''} /> 
            {isRefreshing ? 'Refreshing...' : 'Refresh All'}
          </button>
          <button 
            onClick={handleDownloadLogs}
            className="bg-[#001f3f] text-white px-5 py-2.5 rounded-[10px] flex items-center gap-2 hover:bg-[#001f3f]/90 text-[13px] font-bold transition-colors shadow-sm"
          >
            <FiDownload size={16} /> Download Logs
          </button>
        </div>
      </div>

      <SystemMonitoringTopSection />
      <APIHealthMonitoring />
      <SystemMonitoringBottomSection />
    </div>
  );
};

export default SystemMonitoring;
