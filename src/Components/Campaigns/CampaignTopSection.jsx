import React from 'react';
import { 
  FiCalendar, FiBarChart2, FiTarget, 
  FiCloud, FiBox, FiLink, FiAlertTriangle,
  FiTrendingUp, FiTrendingDown, FiClock
} from 'react-icons/fi';
import { BsMegaphone } from 'react-icons/bs';

const statsData = [
  {
    title: 'Total Campaigns',
    value: '42',
    icon: <BsMegaphone className="text-gray-400 text-lg" />,
    trend: 'up',
    trendValue: '+12.5%',
    trendText: 'vs last month',
  },
  {
    title: 'Scheduled Posts',
    value: '128',
    icon: <FiCalendar className="text-gray-400 text-lg" />,
    trend: 'neutral',
    trendIcon: <FiClock className="mr-1" />,
    trendText: 'Next in 45m',
  },
  {
    title: 'Engagement Rate',
    value: '5.8%',
    icon: <FiBarChart2 className="text-gray-400 text-lg" />,
    trend: 'down',
    trendValue: '~-0.2%',
    trendText: 'avg platforms',
  },
  {
    title: 'API Usage',
    value: '82%',
    icon: <FiTarget className="text-gray-400 text-lg" />,
    isProgress: true,
    progressValue: 82,
  },
];

const systemData = [
  {
    name: 'Facebook Graph API',
    icon: <FiCloud className="text-emerald-500" />,
    status: 'HEALTHY',
    statusColor: 'text-emerald-600 bg-emerald-100',
  },
  {
    name: 'Asset Catalog Sync',
    icon: <FiBox className="text-emerald-500" />,
    status: '99.9%',
    statusColor: 'text-emerald-600 bg-emerald-100',
  },
  {
    name: 'Campaign Webhooks',
    icon: <FiLink className="text-blue-500" />,
    status: 'ACTIVE',
    statusColor: 'text-blue-600 bg-blue-100',
  },
  {
    name: 'Insta-Link Service',
    icon: <FiAlertTriangle className="text-rose-500" />,
    status: 'RETRYING',
    statusColor: 'text-rose-600 bg-rose-100',
    containerClass: 'bg-rose-50/50 border-rose-100/50',
  },
];

export const CampaignStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {statsData.map((stat, idx) => (
        <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[13px] font-medium text-gray-500">{stat.title}</p>
            {stat.icon}
          </div>
          <div className="mb-2">
            <h3 className="text-[32px] leading-none font-bold text-[#001f3f]">{stat.value}</h3>
          </div>
          
          {stat.isProgress ? (
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-1 mb-1">
              <div className="bg-[#0b3b7c] h-full rounded-full" style={{ width: `${stat.progressValue}%` }}></div>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-[11px] font-bold mt-1">
              {stat.trend === 'up' && <span className="text-emerald-500 flex items-center"><FiTrendingUp className="mr-1"/> {stat.trendValue}</span>}
              {stat.trend === 'down' && <span className="text-rose-500 flex items-center"><FiTrendingDown className="mr-1"/> {stat.trendValue}</span>}
              {stat.trend === 'neutral' && <span className="text-gray-500 flex items-center">{stat.trendIcon} {stat.trendText}</span>}
              
              {stat.trend !== 'neutral' && <span className="text-gray-400 font-medium">{stat.trendText}</span>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const CampaignPerformance = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 mb-6 items-start">
      {/* Chart Area */}
      <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 h-full min-h-[300px] flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-[15px] font-bold text-gray-800">Campaign Performance</h3>
            <p className="text-[12px] text-gray-500 mt-1">Real-time reach vs engagement across all luxury assets.</p>
          </div>
          <div className="flex bg-gray-50 p-1 rounded-lg border border-gray-200">
            <button className="px-3 py-1.5 text-[11px] font-bold bg-white shadow-sm rounded text-gray-800">7 Days</button>
            <button className="px-3 py-1.5 text-[11px] font-bold text-gray-500">30 Days</button>
          </div>
        </div>
        {/* Mock Chart */}
        <div className="flex-1 flex flex-col justify-end relative mt-8 pb-4">
          <svg className="w-full h-full absolute inset-0 pt-4" preserveAspectRatio="none" viewBox="0 0 100 100">
             <path d="M0,80 Q20,78 30,70 T50,55 T70,55 T90,30 T100,20" fill="none" stroke="#0b3b7c" strokeWidth="1.5" />
             <path d="M0,90 Q20,88 30,85 T50,70 T70,70 T90,55 T100,45" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
          <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-auto border-t border-gray-100 pt-3 z-10">
            <span>MON</span>
            <span>TUE</span>
            <span>WED</span>
            <span>THU</span>
            <span>FRI</span>
            <span>SAT</span>
            <span>SUN</span>
          </div>
        </div>
      </div>

      {/* System Monitoring */}
      <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 h-full flex flex-col">
        <h3 className="text-[15px] font-bold text-gray-800 mb-6">System Monitoring</h3>
        
        <div className="space-y-3.5 flex-1">
          {systemData.map((sys, idx) => (
            <div key={idx} className={`flex items-center justify-between p-3.5 rounded-xl border ${sys.containerClass || 'bg-[#f4f7fb] border-blue-50/50'}`}>
              <div className="flex items-center gap-3">
                {sys.icon}
                <span className="text-[13px] font-semibold text-gray-700">{sys.name}</span>
              </div>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${sys.statusColor}`}>
                {sys.status}
              </span>
            </div>
          ))}
        </div>

        <button className="w-full text-center text-[12px] font-bold text-[#0b3b7c] hover:underline mt-6">
          View System Status Page
        </button>
      </div>
    </div>
  );
};
