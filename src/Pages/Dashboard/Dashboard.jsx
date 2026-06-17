import React, { useState } from 'react';
import { 
  Users, 
  CreditCard, 
  Activity, 
  Terminal, 
  TrendingUp, 
  Calendar
} from 'lucide-react';
import StatsCard from '../../Components/Dashboard/StatsCard';
import UserGrowth from '../../Components/Dashboard/UserGrowth';
import RevenueTrends from '../../Components/Dashboard/RevenueTrends';
import WatchBrandSearch from '../../Components/Dashboard/WatchBrandSearch';

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState('Last 30 Days');

  const stats = [
    {
      title: 'TOTAL USERS',
      value: '124.5k',
      change: '+12%',
      icon: Users,
      sparklinePath: 'M2 18 Q 12 10, 22 13 T 48 3'
    },
    {
      title: 'REVENUE',
      value: '$2.4M',
      change: '+8.5%',
      icon: CreditCard,
      sparklinePath: 'M2 15 Q 15 13, 25 9 T 48 2'
    },
    {
      title: 'ACTIVE SEARCHES',
      value: '45.2k',
      subValue: 'real-time',
      icon: Activity,
      badge: (
        <span className="flex items-center gap-1 bg-red-50 text-[8px] font-extrabold tracking-widest text-red-500 px-2 py-0.5 rounded-full select-none border border-red-100">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
          LIVE
        </span>
      )
    },
    {
      title: 'API USAGE',
      value: '98.2%',
      icon: Terminal,
      badge: (
        <span className="flex items-center gap-1.5 bg-emerald-50 text-[9px] font-extrabold text-emerald-600 px-2.5 py-0.5 rounded-full border border-emerald-100">
          <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Healthy
        </span>
      )
    },
    {
      title: 'CONVERSION',
      value: '3.4%',
      change: '+0.2%',
      icon: TrendingUp,
      sparklinePath: 'M2 13 Q 12 13, 22 15 T 48 10'
    }
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50/50 font-sans select-none mt-16 text-slate-800">
      
      {/* Title & Filter Header Block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="text-left">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#002B49] tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-xs md:text-sm text-gray-400 mt-1 font-semibold">
            Real-time performance metrics for Horological Authority
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex items-center gap-2 bg-white border border-gray-150 p-1.5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] self-start md:self-auto">
          {['Last 30 Days', 'Quarterly', 'Yearly'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                activeFilter === filter
                  ? 'bg-[#002B49] text-white shadow-sm'
                  : 'text-[#1C3D5A]/85 hover:bg-slate-50 hover:text-[#002B49]'
              }`}
            >
              {filter}
            </button>
          ))}
          <div className="h-4 w-[1px] bg-gray-200 mx-1" />
          <div className="relative">
            <input 
              type="date" 
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
              onChange={(e) => {
                if(e.target.value) {
                  setActiveFilter(`Date: ${e.target.value}`);
                }
              }}
            />
            <button className={`p-1.5 rounded-lg transition-colors flex items-center justify-center ${activeFilter.startsWith('Date:') ? 'bg-[#002B49] text-white shadow-sm' : 'text-gray-400 hover:text-[#002B49] hover:bg-slate-50'}`}>
              <Calendar className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Top 5 Stat Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Middle Grid Row: Growth Dynamics & Revenue Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* User Growth Line Chart */}
        <UserGrowth />

        {/* Revenue Trends Bar Chart */}
        <RevenueTrends />
      </div>

      {/* Bottom Grid Row: Watch Brand Search Trends */}
      <WatchBrandSearch />

    </div>
  );
}