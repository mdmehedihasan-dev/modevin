import React from 'react';

const apiData = [
  {
    name: 'Facebook Graph',
    status: 'HEALTHY',
    latency: '142ms',
    uptime: '99.98%',
    color: 'emerald',
    latencyColor: 'text-[#001f3f]',
    uptimeColor: 'text-[#001f3f]',
    barColor: 'bg-emerald-500'
  },
  {
    name: 'Instagram API',
    status: 'WARNING',
    latency: '485ms',
    uptime: '98.40%',
    color: 'amber',
    latencyColor: 'text-amber-500',
    uptimeColor: 'text-[#001f3f]',
    barColor: 'bg-amber-400'
  },
  {
    name: 'Chrono24 Sync',
    status: 'HEALTHY',
    latency: '82ms',
    uptime: '99.99%',
    color: 'emerald',
    latencyColor: 'text-[#001f3f]',
    uptimeColor: 'text-[#001f3f]',
    barColor: 'bg-emerald-500'
  },
  {
    name: 'WatchBox Sync',
    status: 'ERROR',
    latency: 'Timeout',
    uptime: '92.12%',
    color: 'rose',
    latencyColor: 'text-rose-500',
    uptimeColor: 'text-rose-500',
    barColor: 'bg-rose-500'
  }
];

export const APIHealthMonitoring = () => {
  return (
    <div className="mb-8">
      <h2 className="text-[16px] font-bold text-[#001f3f] mb-4">API Health Monitoring</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {apiData.map((api, index) => {
          
          let bgStatus = '';
          let textStatus = '';
          let borderLeft = '';
          
          if (api.status === 'HEALTHY') {
            bgStatus = 'bg-emerald-50';
            textStatus = 'text-emerald-600';
            borderLeft = 'border-l-emerald-500';
          } else if (api.status === 'WARNING') {
            bgStatus = 'bg-amber-50';
            textStatus = 'text-amber-600';
            borderLeft = 'border-l-amber-400';
          } else {
            bgStatus = 'bg-rose-50';
            textStatus = 'text-rose-600';
            borderLeft = 'border-l-rose-500';
          }

          return (
            <div key={index} className={`bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 border-l-[3px] ${borderLeft} p-5 relative overflow-hidden flex flex-col justify-between`}>
              
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-[14px] font-bold text-[#001f3f] leading-tight pr-2">{api.name}</h3>
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-wider ${bgStatus} ${textStatus}`}>
                  {api.status}
                </span>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1">Latency</p>
                  <p className={`text-[14px] font-bold ${api.latencyColor}`}>{api.latency}</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1">Uptime</p>
                  <p className={`text-[14px] font-bold ${api.uptimeColor}`}>{api.uptime}</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-5 right-5 h-[3px] rounded-t-full bg-gray-100">
                <div className={`h-full ${api.barColor} rounded-t-full`} style={{width: api.status === 'ERROR' ? '30%' : (api.status === 'WARNING' ? '60%' : '100%')}}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
