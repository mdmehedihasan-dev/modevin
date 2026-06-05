import React, { useState } from 'react';
import { FiX, FiCalendar, FiTarget, FiCheckSquare, FiSquare, FiImage, FiBriefcase } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs'; // For AI Caption

const CreateSocialMediaPostModal = ({ isOpen, onClose }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('Instagram');
  const [globalTracking, setGlobalTracking] = useState(true);
  const [revenueAttribution, setRevenueAttribution] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl w-full max-w-[850px] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 pb-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-[22px] font-bold text-[#001f3f] leading-tight">Create Social Media Post</h2>
            <p className="text-[13px] text-gray-500 font-medium mt-1">Compose and schedule your high-precision horology content.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            
            {/* Campaign Identity */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiBriefcase className="text-[#0b3b7c]" size={14} />
                <h3 className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">Campaign Identity</h3>
              </div>
              
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Post Headline</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Q4 Patek Philippe Heritage Showcase" 
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#0b3b7c] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Post Type</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#0b3b7c] transition-colors appearance-none bg-white">
                    <option>New Listing</option>
                    <option>Market Insight</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Platform Selection */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiImage className="text-[#0b3b7c]" size={14} />
                <h3 className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">Platform selection</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <button 
                  onClick={() => setSelectedPlatform('Instagram')}
                  className={`flex flex-col items-center justify-center gap-2 py-3 rounded-xl border transition-colors ${selectedPlatform === 'Instagram' ? 'border-[#0b3b7c] bg-[#f8faff] text-[#0b3b7c]' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                >
                  <FaInstagram size={18} />
                  <span className="text-[12px] font-bold">Instagram</span>
                </button>
                <button 
                  onClick={() => setSelectedPlatform('Facebook')}
                  className={`flex flex-col items-center justify-center gap-2 py-3 rounded-xl border transition-colors ${selectedPlatform === 'Facebook' ? 'border-[#0b3b7c] bg-[#f8faff] text-[#0b3b7c]' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                >
                  <FaFacebookF size={18} />
                  <span className="text-[12px] font-bold">Facebook</span>
                </button>
                <button 
                  onClick={() => setSelectedPlatform('LinkedIn')}
                  className={`flex flex-col items-center justify-center gap-2 py-3 rounded-xl border transition-colors ${selectedPlatform === 'LinkedIn' ? 'border-[#0b3b7c] bg-[#f8faff] text-[#0b3b7c]' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                >
                  <FaLinkedinIn size={18} />
                  <span className="text-[12px] font-bold">LinkedIn</span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FiImage className="text-[#0b3b7c]" size={14} />
                  <h3 className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">Content</h3>
                </div>
                <button className="flex items-center gap-1.5 bg-[#eef2f9] text-[#0b3b7c] px-3 py-1 rounded-full text-[12px] font-bold hover:bg-[#e2e8f4] transition-colors">
                  <BsStars size={12} /> AI Caption
                </button>
              </div>
              
              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Post Caption</label>
                <textarea 
                  rows={4}
                  placeholder="Write your caption here..." 
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#0b3b7c] transition-colors resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            
            {/* Post Schedule */}
            <div className="bg-[#f8faff] border border-[#e5edff] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <FiCalendar className="text-[#0b3b7c]" size={14} />
                <h3 className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">Post Schedule</h3>
              </div>
              
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Promoted Post Budget (Optional)</label>
                  <input 
                    type="text" 
                    defaultValue="€ 25,000.00" 
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#0b3b7c] transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Post Date</label>
                    <input 
                      type="text" 
                      defaultValue="11/01/2023" 
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#0b3b7c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Post Time</label>
                    <input 
                      type="text" 
                      defaultValue="10:00 AM" 
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#0b3b7c] transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-[#e5edff] mt-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[13px] font-medium text-gray-600">Daily Average:</span>
                    <span className="text-[13px] font-bold text-[#0b3b7c]">€416.67</span>
                  </div>
                  <div className="w-full bg-[#e5edff] h-1.5 rounded-full overflow-hidden mb-3">
                    <div className="bg-[#0b3b7c] h-full w-[65%] rounded-full"></div>
                  </div>
                  <p className="text-[11px] text-gray-400 font-medium italic">Optimized for high-frequency trading hours in major financial hubs.</p>
                </div>
              </div>
            </div>

            {/* Tracking & Pixels */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiTarget className="text-[#0b3b7c]" size={14} />
                <h3 className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">Tracking & Pixels</h3>
              </div>
              
              <div className="flex flex-col gap-3">
                <div 
                  className="flex items-center justify-between p-3.5 border border-gray-200 rounded-xl cursor-pointer hover:border-[#0b3b7c] transition-colors bg-white"
                  onClick={() => setGlobalTracking(!globalTracking)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f8faff] flex items-center justify-center text-[#0b3b7c]">
                      <FiTarget size={16} />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#001f3f] leading-tight">Global Tracking Pixel</p>
                      <p className="text-[11px] text-gray-500 font-medium">Standard conversion tracking</p>
                    </div>
                  </div>
                  <div className={`text-[#0b3b7c] ${globalTracking ? 'opacity-100' : 'opacity-30'}`}>
                    {globalTracking ? <FiCheckSquare size={20} fill="currentColor" className="text-[#0b3b7c] bg-white" /> : <FiSquare size={20} />}
                  </div>
                </div>

                <div 
                  className="flex items-center justify-between p-3.5 border border-gray-200 rounded-xl cursor-pointer hover:border-[#0b3b7c] transition-colors bg-white"
                  onClick={() => setRevenueAttribution(!revenueAttribution)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f8faff] flex items-center justify-center text-[#0b3b7c]">
                      <FiBriefcase size={16} />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#001f3f] leading-tight">Revenue Attribution</p>
                      <p className="text-[11px] text-gray-500 font-medium">Direct sales tracking</p>
                    </div>
                  </div>
                  <div className={`text-[#0b3b7c] ${revenueAttribution ? 'opacity-100' : 'opacity-30'}`}>
                    {revenueAttribution ? <FiCheckSquare size={20} fill="currentColor" className="text-[#0b3b7c] bg-white" /> : <FiSquare size={20} />}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-100 bg-[#fafafa] flex items-center justify-end gap-3 mt-auto rounded-b-2xl">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 rounded-[10px] text-[13px] font-bold text-[#001f3f] bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
          >
            Save Draft
          </button>
          <button className="px-5 py-2.5 rounded-[10px] text-[13px] font-bold bg-[#0b3b7c] text-white hover:bg-[#0b3b7c]/90 transition-colors shadow-sm">
            Publish/Schedule
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default CreateSocialMediaPostModal;
