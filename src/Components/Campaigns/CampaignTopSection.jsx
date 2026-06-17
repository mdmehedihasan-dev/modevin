import React from 'react';
import { 
  FiCalendar, FiBarChart2, FiTarget, 
  FiCloud, FiDatabase, FiCommand, FiAlertTriangle,
  FiTrendingUp, FiTrendingDown, FiClock
} from 'react-icons/fi';
import { BsMegaphone } from 'react-icons/bs';
import { ResponsiveContainer, AreaChart, Area, Line, XAxis, Tooltip, ComposedChart } from 'recharts';

const chartData = [
  { name: 'MON', reach: 200, engagement: 100 },
  { name: 'TUE', reach: 350, engagement: 180 },
  { name: 'WED', reach: 450, engagement: 200 },
  { name: 'THU', reach: 600, engagement: 350 },
  { name: 'FRI', reach: 600, engagement: 350 },
  { name: 'SAT', reach: 850, engagement: 500 },
  { name: 'SUN', reach: 1000, engagement: 650 },
];

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
    name: 'Facebook\nGraph API',
    icon: <FiCloud className="text-emerald-500 text-lg" />,
    status: 'HEALTHY',
    statusColor: 'text-emerald-600 bg-emerald-100',
  },
  {
    name: 'Asset Catalog\nSync',
    icon: <FiDatabase className="text-emerald-500 text-lg" />,
    status: '99.9%',
    statusColor: 'text-emerald-600 bg-emerald-100',
  },
  {
    name: 'Campaign\nWebhooks',
    icon: <FiCommand className="text-blue-500 text-lg" />,
    status: 'ACTIVE',
    statusColor: 'text-blue-600 bg-blue-100',
  },
  {
    name: 'Insta-Link\nService',
    icon: <FiAlertTriangle className="text-rose-500 text-lg" />,
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
            <h3 className="text-lg font-bold text-[#0b3b7c]">Campaign Performance</h3>
            <p className="text-[12px] text-gray-500 mt-1">Real-time reach vs engagement across all luxury assets.</p>
          </div>
          <div className="flex bg-[#f4f7fb] p-1 rounded-full border border-gray-100">
            <button className="px-4 py-1.5 text-[11px] font-bold bg-white shadow-sm rounded-full text-[#0b3b7c]">7 Days</button>
            <button className="px-4 py-1.5 text-[11px] font-bold text-gray-500 rounded-full">30 Days</button>
          </div>
        </div>
        {/* Mock Chart */}
        <div className="flex-1 flex flex-col justify-end relative mt-8 pb-1">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#eff6ff" stopOpacity={1}/>
                  <stop offset="95%" stopColor="#eff6ff" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                axisLine={{ stroke: '#f3f4f6' }} 
                tickLine={false} 
                tick={{ fontSize: 10, fontWeight: 'bold', fill: '#9ca3af' }}
                dy={10}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: '1px solid #f0f0f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                labelStyle={{ fontWeight: 'bold', color: '#0b3b7c', marginBottom: '4px' }}
              />
              <Area 
                type="monotone" 
                dataKey="reach" 
                stroke="#0b3b7c" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorReach)" 
              />
              <Line 
                type="monotone" 
                dataKey="engagement" 
                stroke="#60a5fa" 
                strokeWidth={2}
                strokeDasharray="4 4" 
                dot={false}
                activeDot={{ r: 4 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* System Monitoring */}
      <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 h-full flex flex-col">
        <h3 className="text-lg font-bold text-[#0b3b7c] mb-6">System Monitoring</h3>
        
        <div className="space-y-4 flex-1">
          {systemData.map((sys, idx) => (
            <div key={idx} className={`flex items-center justify-between p-4 rounded-xl border ${sys.containerClass || 'bg-[#f4f7fb] border-blue-50/50'}`}>
              <div className="flex items-center gap-3.5">
                {sys.icon}
                <span className="text-[13px] font-semibold text-[#0b3b7c] whitespace-pre-line leading-tight">{sys.name}</span>
              </div>
              <span className={`text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${sys.statusColor}`}>
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
