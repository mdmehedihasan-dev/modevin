import React, { useState } from 'react';
import { 
  Users, 
  CreditCard, 
  Activity, 
  Terminal, 
  TrendingUp, 
  Calendar, 
  MoreHorizontal 
} from 'lucide-react';

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState('Last 30 Days');

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
          <button className="p-1.5 text-gray-400 hover:text-[#002B49] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-center">
            <Calendar className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Top 5 Stat Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
        
        {/* Card 1: TOTAL USERS */}
        <div className="bg-white border border-gray-100/80 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.015)] flex flex-col justify-between text-left">
          <div className="flex items-start justify-between mb-4">
            <div className="bg-[#002B49]/5 p-2 rounded-lg text-[#002B49] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            {/* Sparkline & Trend */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-emerald-500 tracking-wider">+12%</span>
              <svg className="w-10 h-5 text-emerald-500" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 18 Q 12 10, 22 13 T 48 3" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-[9px] font-extrabold text-gray-400 tracking-widest uppercase mb-1">TOTAL USERS</p>
            <h3 className="text-2xl font-black text-[#002B49] tracking-tight">124.5k</h3>
          </div>
        </div>

        {/* Card 2: REVENUE */}
        <div className="bg-white border border-gray-100/80 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.015)] flex flex-col justify-between text-left">
          <div className="flex items-start justify-between mb-4">
            <div className="bg-[#002B49]/5 p-2 rounded-lg text-[#002B49] flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            {/* Sparkline & Trend */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-emerald-500 tracking-wider">+8.5%</span>
              <svg className="w-10 h-5 text-emerald-500" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 15 Q 15 13, 25 9 T 48 2" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-[9px] font-extrabold text-gray-400 tracking-widest uppercase mb-1">REVENUE</p>
            <h3 className="text-2xl font-black text-[#002B49] tracking-tight">$2.4M</h3>
          </div>
        </div>

        {/* Card 3: ACTIVE SEARCHES */}
        <div className="bg-white border border-gray-100/80 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.015)] flex flex-col justify-between text-left">
          <div className="flex items-start justify-between mb-4">
            <div className="bg-[#002B49]/5 p-2 rounded-lg text-[#002B49] flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            {/* Live Indicator */}
            <span className="flex items-center gap-1 bg-red-50 text-[8px] font-extrabold tracking-widest text-red-500 px-2 py-0.5 rounded-full select-none border border-red-100">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
              LIVE
            </span>
          </div>
          <div>
            <p className="text-[9px] font-extrabold text-gray-400 tracking-widest uppercase mb-1">ACTIVE SEARCHES</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-2xl font-black text-[#002B49] tracking-tight">45.2k</h3>
              <span className="text-[9px] font-bold text-gray-400">real-time</span>
            </div>
          </div>
        </div>

        {/* Card 4: API USAGE */}
        <div className="bg-white border border-gray-100/80 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.015)] flex flex-col justify-between text-left">
          <div className="flex items-start justify-between mb-4">
            <div className="bg-[#002B49]/5 p-2 rounded-lg text-[#002B49] flex items-center justify-center">
              <Terminal className="w-5 h-5" />
            </div>
            {/* Healthy Badge */}
            <span className="flex items-center gap-1.5 bg-emerald-50 text-[9px] font-extrabold text-emerald-600 px-2.5 py-0.5 rounded-full border border-emerald-100">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Healthy
            </span>
          </div>
          <div>
            <p className="text-[9px] font-extrabold text-gray-400 tracking-widest uppercase mb-1">API USAGE</p>
            <h3 className="text-2xl font-black text-[#002B49] tracking-tight">98.2%</h3>
          </div>
        </div>

        {/* Card 5: CONVERSION */}
        <div className="bg-white border border-gray-100/80 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.015)] flex flex-col justify-between text-left">
          <div className="flex items-start justify-between mb-4">
            <div className="bg-[#002B49]/5 p-2 rounded-lg text-[#002B49] flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            {/* Sparkline & Trend */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-emerald-500 tracking-wider">+0.2%</span>
              <svg className="w-10 h-5 text-emerald-500" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 13 Q 12 13, 22 15 T 48 10" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-[9px] font-extrabold text-gray-400 tracking-widest uppercase mb-1">CONVERSION</p>
            <h3 className="text-2xl font-black text-[#002B49] tracking-tight">3.4%</h3>
          </div>
        </div>
      </div>

      {/* Middle Grid Row: Growth Dynamics & Revenue Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Card 6: User Growth Dynamics Line Chart */}
        <div className="lg:col-span-2 bg-white border border-gray-100/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] text-left flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-bold text-[#002B49] tracking-tight">
                User Growth Dynamics
              </h2>
              <p className="text-[11px] text-gray-400 font-semibold mt-0.5">
                Steady trajectory over the last 6 months
              </p>
            </div>
            <button className="text-gray-400 hover:text-[#002B49] p-1 rounded hover:bg-slate-50 transition-colors flex items-center justify-center">
              <MoreHorizontal className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* SVG Line Chart Container */}
          <div className="relative w-full h-64 flex items-end">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between text-[10px] font-bold text-gray-300 pointer-events-none select-none pr-2">
              <div className="w-full flex items-center justify-between border-b border-gray-50 pb-1.5">
                <span>150k</span>
              </div>
              <div className="w-full flex items-center justify-between border-b border-gray-50 pb-1.5 mt-auto">
                <span>100k</span>
              </div>
              <div className="w-full flex items-center justify-between border-b border-gray-50 pb-1.5 mt-auto">
                <span>50k</span>
              </div>
              <div className="w-full flex items-center justify-between mt-auto">
                <span>0</span>
              </div>
            </div>

            {/* Inline SVG Chart Curve */}
            <svg className="w-full h-[80%] z-10" viewBox="0 0 600 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#002B49" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#002B49" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Grid area fill under the path */}
              <path 
                d="M 10 160 C 120 135, 230 115, 340 95 S 470 65, 590 55 L 590 200 L 10 200 Z" 
                fill="url(#growthGradient)" 
              />
              {/* Curved indicator line */}
              <path 
                d="M 10 160 C 120 135, 230 115, 340 95 S 470 65, 590 55" 
                fill="none" 
                stroke="#002B49" 
                strokeWidth="3.5" 
                strokeLinecap="round"
              />
              {/* Tooltip dot on the curve peak */}
              <circle cx="590" cy="55" r="4.5" fill="#002B49" stroke="white" strokeWidth="2" />
            </svg>
          </div>

          {/* X Axis Labels */}
          <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 tracking-wider mt-4 px-1 select-none">
            <span>JAN</span>
            <span>FEB</span>
            <span>MAR</span>
            <span>APR</span>
            <span>MAY</span>
            <span>JUN</span>
          </div>
        </div>

        {/* Card 7: Revenue Trends Bar Chart */}
        <div className="bg-white border border-gray-100/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] text-left flex flex-col justify-between">
          <div className="mb-6">
            <h2 className="text-base font-bold text-[#002B49] tracking-tight">
              Revenue Trends
            </h2>
            <p className="text-[11px] text-gray-400 font-semibold mt-0.5">
              Monthly seasonal peaks
            </p>
          </div>

          {/* Bar Chart Visual container */}
          <div className="relative w-full h-56 flex items-end justify-between px-2 gap-4 mt-6">
            {/* Bar 1 */}
            <div className="flex flex-col items-center flex-1 h-[48%] group cursor-pointer">
              <div className="w-full bg-[#002B49]/10 hover:bg-[#002B49]/20 transition-all rounded-lg h-full" />
            </div>

            {/* Bar 2 */}
            <div className="flex flex-col items-center flex-1 h-[75%] group cursor-pointer">
              <div className="w-full bg-[#002B49]/10 hover:bg-[#002B49]/20 transition-all rounded-lg h-full" />
            </div>

            {/* Bar 3 */}
            <div className="flex flex-col items-center flex-1 h-[62%] group cursor-pointer">
              <div className="w-full bg-[#002B49]/10 hover:bg-[#002B49]/20 transition-all rounded-lg h-full" />
            </div>

            {/* Bar 4: Highlighted Peak Bar with tooltip */}
            <div className="relative flex flex-col items-center flex-1 h-[95%] group cursor-pointer">
              {/* Tooltip badge */}
              <div className="absolute -top-7 bg-[#0D1B2A] text-white text-[8px] font-black tracking-widest px-2 py-0.5 rounded shadow-sm leading-none select-none uppercase z-20">
                Peak
              </div>
              <div className="w-full bg-[#002B49] transition-all rounded-lg h-full shadow-[0_4px_12px_rgba(0,43,73,0.15)]" />
            </div>

            {/* Bar 5 */}
            <div className="flex flex-col items-center flex-1 h-[68%] group cursor-pointer">
              <div className="w-full bg-[#002B49]/10 hover:bg-[#002B49]/20 transition-all rounded-lg h-full" />
            </div>

            {/* Bar 6 */}
            <div className="flex flex-col items-center flex-1 h-[80%] group cursor-pointer">
              <div className="w-full bg-[#002B49]/10 hover:bg-[#002B49]/20 transition-all rounded-lg h-full" />
            </div>
          </div>

          {/* Bar Chart Footer info */}
          <div className="flex items-center justify-between mt-8 border-t border-gray-100 pt-4 px-0.5 select-none">
            <span className="text-[9px] font-extrabold text-gray-400 tracking-widest uppercase">Q1 PERFORMANCE</span>
            <span className="text-xs font-bold text-[#002B49]">
              AVG: <span className="font-extrabold">$420k</span>
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Grid Row: Watch Brand Search Trends */}
      <div className="w-full bg-white border border-gray-100/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] text-left flex flex-col justify-between">
        
        {/* Header Block with Legends */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 select-none">
          <div>
            <h2 className="text-base font-bold text-[#002B49] tracking-tight">
              Watch Brand Search Trends
            </h2>
            <p className="text-[11px] text-gray-400 font-semibold mt-0.5">
              Tracking brand interest and market sentiment spikes
            </p>
          </div>

          {/* Color Legend items */}
          <div className="flex items-center gap-4 text-[10px] font-extrabold text-gray-500 tracking-wider">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#002B49]"></span>
              <span>Rolex</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]"></span>
              <span>Patek Philippe</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
              <span>Audemars Piguet</span>
            </div>
          </div>
        </div>

        {/* Multi-layered Area Chart */}
        <div className="relative w-full h-56 flex items-end">
          {/* Custom SVG Layered Chart */}
          <svg className="w-full h-full z-10" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="rolexGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#002B49" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#002B49" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="patekGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="apGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Layer 3: Audemars Piguet (Gray, bottom wave) */}
            <path d="M 0 180 Q 150 170, 300 160 T 600 170 T 1000 165 L 1000 200 L 0 200 Z" fill="url(#apGradient)" />
            
            {/* Layer 2: Rolex (Dark Blue wave) */}
            <path d="M 0 165 C 200 160, 300 110, 500 120 S 800 80, 1000 105 L 1000 200 L 0 200 Z" fill="url(#rolexGradient)" />
            
            {/* Layer 1: Patek Philippe (Sky Blue wave, overlaps) */}
            <path d="M 0 180 C 150 180, 250 135, 400 145 S 700 100, 1000 120 L 1000 200 L 0 200 Z" fill="url(#patekGradient)" />
          </svg>

          {/* Floating Tooltip/Badge - Overlay on Rolex Wave Peak */}
          <div className="absolute top-[35%] left-[38%] md:left-[42%] z-20 bg-white border border-gray-150 p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-left flex flex-col justify-center pointer-events-none select-none">
            <span className="text-[10px] font-extrabold text-[#002B49] tracking-wider uppercase leading-none">Rolex Submariner Spike</span>
            <span className="text-[9px] text-[#38BDF8] font-extrabold mt-1.5 leading-none">+45% in last 48h</span>
          </div>
        </div>

      </div>

    </div>
  );
}