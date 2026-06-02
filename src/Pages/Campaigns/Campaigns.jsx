import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { CampaignStats, CampaignPerformance } from '../../Components/Campaigns/CampaignTopSection';
import { GroupAndLiveMonitoring, ActiveCampaigns } from '../../Components/Campaigns/CampaignMiddleSection';
import { CampaignBottomSection } from '../../Components/Campaigns/CampaignBottomSection';

const Campaigns = () => {
  return (
    <div className="p-8 bg-[#fdfdfd] min-h-screen font-sans mt-16">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-[28px] font-bold text-[#001f3f] tracking-tight">Campaign Automation</h1>
          <p className="text-gray-500 text-[13px] mt-1.5 font-medium">Manage cross-platform marketing flows and scheduled activities.</p>
        </div>
        <div className="flex items-center gap-3.5">
          <button className="border border-gray-200 text-gray-700 px-5 py-2.5 rounded-[10px] text-[13px] font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm">
            View API Logs
          </button>
          <button className="bg-[#0b3b7c] text-white px-5 py-2.5 rounded-[10px] flex items-center gap-2 hover:bg-[#0b3b7c]/90 text-[13px] font-bold transition-colors shadow-sm">
            <FiPlus size={16} /> New Campaign
          </button>
        </div>
      </div>

      <CampaignStats />
      <CampaignPerformance />
      <GroupAndLiveMonitoring />
      <ActiveCampaigns />
      <CampaignBottomSection />
    </div>
  );
};

export default Campaigns;
