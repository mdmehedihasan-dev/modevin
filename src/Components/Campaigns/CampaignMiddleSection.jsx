import React from 'react';
import { FiImage, FiVideo, FiPaperclip, FiMoreVertical } from 'react-icons/fi';
import { BsStars, BsMegaphone } from 'react-icons/bs';

export const GroupAndLiveMonitoring = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 mb-6 items-start">
      {/* Facebook Group Automation */}
      <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[15px] font-bold text-gray-800">Facebook Group Automation</h3>
          <span className="bg-blue-50/50 text-[#0b3b7c] px-3 py-1.5 rounded-full text-[10px] font-bold border border-blue-100/50">2 Groups Connected</span>
        </div>

        <table className="w-full text-left mb-6">
          <thead>
            <tr>
              <th className="pb-3 text-[9px] font-bold text-gray-400 uppercase tracking-wider">Group Name</th>
              <th className="pb-3 text-[9px] font-bold text-gray-400 uppercase tracking-wider">Members</th>
              <th className="pb-3 text-[9px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="pb-3 text-[9px] font-bold text-gray-400 uppercase tracking-wider">Last Activity</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-50/50">
              <td className="py-3 flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[10px]">LW</div>
                <span className="font-bold text-gray-800 text-[12px]">Luxury Watch Aficionados</span>
              </td>
              <td className="py-3 text-gray-600 font-semibold text-[12px]">14.2k</td>
              <td className="py-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-gray-700 font-bold text-[11px]">Linked</span>
                </div>
              </td>
              <td className="py-3 text-gray-500 text-[11px] font-medium">2 hours ago</td>
            </tr>
            <tr>
              <td className="py-3 flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-[10px]">VC</div>
                <span className="font-bold text-gray-800 text-[12px]">Vintage Chrono Club</span>
              </td>
              <td className="py-3 text-gray-600 font-semibold text-[12px]">8.5k</td>
              <td className="py-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-gray-700 font-bold text-[11px]">Linked</span>
                </div>
              </td>
              <td className="py-3 text-gray-500 text-[11px] font-medium">12 mins ago</td>
            </tr>
          </tbody>
        </table>

        {/* Composer */}
        <div className="bg-[#f4f7fb] rounded-xl border border-blue-50/50 p-4 mt-auto">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">New Post Composer</h4>
            <button className="text-[9px] font-bold text-indigo-600 flex items-center gap-1 bg-indigo-50 px-2 py-1 rounded">
              <BsStars /> AI Magic Caption
            </button>
          </div>
          <textarea 
            className="w-full bg-white border border-gray-200 rounded-lg p-3 text-[12px] font-medium text-gray-600 resize-none outline-none focus:border-[#0b3b7c] transition-colors mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
            rows="3"
            placeholder="Exquisite craftsmanship meets modern utility. Discover the new Chrono GMT series..."
            defaultValue="Exquisite craftsmanship meets modern utility. Discover the new Chrono GMT series..."
          ></textarea>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <button className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:text-[#0b3b7c] hover:border-[#0b3b7c] transition-colors"><FiImage size={13} /></button>
              <button className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:text-[#0b3b7c] hover:border-[#0b3b7c] transition-colors"><FiVideo size={13} /></button>
              <button className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:text-[#0b3b7c] hover:border-[#0b3b7c] transition-colors"><FiPaperclip size={13} /></button>
            </div>
            <button className="bg-[#0b3b7c] text-white px-5 py-2 rounded-lg text-[12px] font-bold hover:bg-[#0b3b7c]/90 transition-colors shadow-sm">
              Post to All
            </button>
          </div>
        </div>
      </div>

      {/* Live Monitoring */}
      <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 h-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[15px] font-bold text-gray-800">Live Monitoring</h3>
          <FiMoreVertical className="text-gray-400" />
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[19px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-gray-200/20 before:via-gray-100 before:to-transparent pt-1 pb-2">
          {/* Feed Item 1 */}
          <div className="relative flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-[10px] bg-[#1c2c3b] flex-shrink-0 z-10 border-2 border-white flex items-center justify-center text-[11px] font-bold text-white shadow-sm">LW</div>
            <div className="pt-0.5">
              <p className="text-[10px] font-bold text-gray-500 leading-tight mb-1">New Comment • <span className="text-[#0b3b7c]">Rolex Submariner</span></p>
              <p className="text-[12px] font-semibold text-gray-800 leading-snug">"Is the bezel ceramic on this 2024 model?"</p>
              <p className="text-[9px] font-medium text-gray-400 mt-1.5">2 mins ago • FB Group: Watch Aficionados</p>
            </div>
          </div>

          {/* Feed Item 2 */}
          <div className="relative flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-[10px] bg-blue-50 flex-shrink-0 z-10 border-2 border-white flex items-center justify-center text-blue-500 shadow-sm"><BsMegaphone size={16} /></div>
            <div className="pt-0.5">
              <p className="text-[10px] font-bold text-gray-500 leading-tight mb-1">High Traction • <span className="text-[#0b3b7c]">Omega Seamaster</span></p>
              <p className="text-[12px] font-semibold text-gray-800 leading-snug">Your post is performing 45% better than usual in 3 groups.</p>
              <p className="text-[9px] font-medium text-gray-400 mt-1.5">1 hour ago</p>
            </div>
          </div>

          {/* Feed Item 3 */}
          <div className="relative flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-[10px] bg-[#2a2a2a] flex-shrink-0 z-10 border-2 border-white flex items-center justify-center text-[11px] font-bold text-white shadow-sm">PP</div>
            <div className="pt-0.5">
              <p className="text-[10px] font-bold text-gray-500 leading-tight mb-1">Mention • <span className="text-[#0b3b7c]">Patek Philippe</span></p>
              <p className="text-[12px] font-semibold text-gray-800 leading-snug">"@ChronoAdmin always has the best insights"</p>
              <p className="text-[9px] font-medium text-gray-400 mt-1.5">3 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ActiveCampaigns = () => {
  return (
    <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden mb-6">
      <div className="p-6 flex justify-between items-start mb-2">
        <div>
          <h3 className="text-[15px] font-bold text-gray-800">Active Campaigns</h3>
          <p className="text-[11px] text-gray-500 mt-1">Global reach and automated triggers summary.</p>
        </div>
        <button className="border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-[11px] font-bold hover:bg-gray-50 transition-colors shadow-sm">
          Export Report
        </button>
      </div>
      
      <table className="w-full text-left">
        <thead className="bg-[#f4f7fb] border-y border-gray-100">
          <tr>
            <th className="px-6 py-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Campaign ID</th>
            <th className="px-6 py-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Objective</th>
            <th className="px-6 py-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider w-[25%]">Progress</th>
            <th className="px-6 py-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Budget</th>
            <th className="px-6 py-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50 text-sm">
          <tr className="hover:bg-gray-50/50 transition-colors">
            <td className="px-6 py-5 font-mono text-[11px] text-gray-500 font-semibold tracking-wider">#CA-2024-001</td>
            <td className="px-6 py-5">
              <p className="font-bold text-[13px] text-[#0b3b7c]">Summer Diver Collection</p>
              <p className="text-[10px] font-medium text-gray-400 mt-1">12 Ads • 3 Platforms</p>
            </td>
            <td className="px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#0b3b7c] h-full w-[70%] rounded-full"></div>
                </div>
                <span className="text-[10px] font-bold text-gray-500">70%</span>
              </div>
            </td>
            <td className="px-6 py-5 font-bold text-gray-700 text-[12px]">$4,500.00</td>
            <td className="px-6 py-5">
              <span className="bg-emerald-100 text-emerald-600 text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Active</span>
            </td>
            <td className="px-6 py-5 text-right">
              <button className="text-gray-400 hover:text-gray-600"><FiMoreVertical /></button>
            </td>
          </tr>
          <tr className="hover:bg-gray-50/50 transition-colors">
            <td className="px-6 py-5 font-mono text-[11px] text-gray-500 font-semibold tracking-wider">#CA-2024-004</td>
            <td className="px-6 py-5">
              <p className="font-bold text-[13px] text-[#0b3b7c]">Vintage Gold Heirlooms</p>
              <p className="text-[10px] font-medium text-gray-400 mt-1">5 Ads • FB/IG</p>
            </td>
            <td className="px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-300 h-full w-[31%] rounded-full"></div>
                </div>
                <span className="text-[10px] font-bold text-gray-500">31%</span>
              </div>
            </td>
            <td className="px-6 py-5 font-bold text-gray-700 text-[12px]">$2,200.00</td>
            <td className="px-6 py-5">
              <span className="bg-blue-100 text-blue-600 text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Scheduled</span>
            </td>
            <td className="px-6 py-5 text-right">
              <button className="text-gray-400 hover:text-gray-600"><FiMoreVertical /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
