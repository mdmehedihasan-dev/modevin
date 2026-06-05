import React from 'react';
import { FiDownload, FiBarChart2 } from 'react-icons/fi';
import { AnalyticsTopSection } from '../../Components/Analytics/AnalyticsTopSection';
import { AnalyticsMiddleSection } from '../../Components/Analytics/AnalyticsMiddleSection';
import { AnalyticsBottomSection } from '../../Components/Analytics/AnalyticsBottomSection';

const Analytics = () => {
  return (
    <div className="p-8 bg-[#fdfdfd] min-h-screen font-sans mt-16">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-[28px] font-bold text-[#001f3f] tracking-tight">Analytics & Reporting</h1>
          <p className="text-gray-500 text-[13px] mt-1.5 font-medium">Real-time market performance and user engagement metrics.</p>
        </div>
        <div className="flex items-center gap-3.5">
          <button className="border border-gray-200 text-[#001f3f] px-5 py-2.5 rounded-[10px] text-[13px] font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm bg-white">
            <FiDownload size={16} /> Export PDF
          </button>
          <button className="bg-[#001f3f] text-white px-5 py-2.5 rounded-[10px] flex items-center gap-2 hover:bg-[#001f3f]/90 text-[13px] font-bold transition-colors shadow-sm">
            <FiBarChart2 size={16} /> Generate Custom Report
          </button>
        </div>
      </div>

      <AnalyticsTopSection />
      <AnalyticsMiddleSection />
      <AnalyticsBottomSection />
    </div>
  );
};

export default Analytics;
