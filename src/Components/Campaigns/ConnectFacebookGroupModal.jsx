import React, { useState } from 'react';
import { FiX, FiCheckCircle, FiShield, FiChevronDown, FiInfo, FiCopy } from 'react-icons/fi';
import campainImg from '../../assets/image/campain.png';

const ConnectFacebookGroupModal = ({ isOpen, onClose, onAuthorize }) => {
  const [frequency, setFrequency] = useState('Real-time');
  const [alertsEnabled, setAlertsEnabled] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-[#fdfdfd] rounded-2xl w-full max-w-[650px] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">

        {/* Header */}
        <div className="p-6 pb-5 border-b border-gray-100 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#0b3b7c] rounded-xl flex items-center justify-center text-white shrink-0 shadow-inner">
              <div className="relative flex items-center justify-center">
                <FiCopy size={24} className="opacity-90" />
              </div>
            </div>
            <div>
              <h2 className="text-[20px] font-bold text-[#001f3f] leading-tight">Connect Facebook Group</h2>
              <p className="text-[13px] text-gray-500 font-medium mt-0.5">Integrate your community with ChronoAdmin Enterprise</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-6">

          {/* Status Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#f8faff] border border-[#e5edff] rounded-xl p-4 flex items-start gap-3">
              <div className="mt-0.5 text-emerald-500">
                <FiCheckCircle size={18} fill="currentColor" className="text-white bg-emerald-500 rounded-full" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Api Approval</p>
                <p className="text-[14px] font-bold text-[#001f3f]">Active & Authenticated</p>
              </div>
            </div>

            <div className="bg-[#f8faff] border border-[#e5edff] rounded-xl p-4 flex items-start gap-3">
              <div className="mt-0.5 text-[#0b3b7c]">
                <FiShield size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Permissions</p>
                <p className="text-[14px] font-bold text-[#001f3f]">Admin Access Granted</p>
              </div>
            </div>
          </div>

          {/* Target Group Select */}
          <div>
            <h3 className="text-[12px] font-bold text-gray-600 uppercase tracking-wider mb-2">Select Target Group</h3>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] font-medium text-[#001f3f] outline-none focus:border-[#0b3b7c] transition-colors shadow-sm cursor-pointer">
                <option>Vintage Horology Collectors Guild</option>
                <option>Luxury Watch Enthusiasts</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <FiChevronDown size={18} />
              </div>
            </div>
            <p className="text-[13px] text-gray-500 font-medium italic mt-2">Only groups where you have 'Admin' privileges are displayed.</p>
          </div>

          {/* Automation Settings */}
          <div>
            <h3 className="text-[18px] font-bold text-[#001f3f] mb-4">Automation Settings</h3>

            <div className="bg-[#f8faff] border border-[#e5edff] rounded-2xl overflow-hidden">
              {/* Posting Frequency */}
              <div className="p-5 border-b border-[#e5edff] flex items-center justify-between">
                <div>
                  <p className="text-[14px] font-bold text-[#001f3f] mb-1">Posting Frequency</p>
                  <p className="text-[13px] text-gray-500 font-medium">Interval between automated data updates</p>
                </div>
                <div className="flex bg-white rounded-lg p-1 border border-gray-200 shadow-sm">
                  {['Daily', 'Real-time', 'Weekly'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setFrequency(opt)}
                      className={`px-4 py-1.5 rounded-md text-[13px] transition-colors ${frequency === opt
                        ? 'font-bold bg-[#0b3b7c] text-white shadow-sm'
                        : 'font-medium text-gray-600 hover:text-[#0b3b7c]'
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Asset Price Alerts */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-[14px] font-bold text-[#001f3f] mb-1">Asset Price Alerts</p>
                  <p className="text-[13px] text-gray-500 font-medium">Automatically notify members of market shifts</p>
                </div>
                {/* Toggle Switch */}
                <button
                  onClick={() => setAlertsEnabled(!alertsEnabled)}
                  className={`w-12 h-6 rounded-full relative transition-colors shadow-inner flex items-center shrink-0 ${alertsEnabled ? 'bg-[#0b3b7c]' : 'bg-gray-300'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full absolute shadow-sm transition-all ${alertsEnabled ? 'right-1' : 'left-1'}`}></div>
                </button>
              </div>
            </div>
          </div>

          {/* Info Banner Graphic */}
          <div className="relative h-32 rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center border border-gray-200">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 opacity-50"></div>

            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply"
              style={{ backgroundImage: `url(${campainImg})` }}
            ></div>

            <div className="relative z-10 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-sm border border-white/20">
              <div className="bg-[#0b3b7c] text-white rounded-full p-0.5">
                <FiInfo size={14} />
              </div>
              <span className="text-[13px] font-bold text-[#001f3f]">Group members will see automated market insights.</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-[#fafafa] flex items-center justify-end gap-3 mt-auto">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-[10px] text-[14px] font-bold text-[#001f3f] hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onAuthorize}
            className="px-5 py-2.5 rounded-[10px] text-[14px] font-bold bg-[#0b3b7c] text-white hover:bg-[#0b3b7c]/90 transition-colors shadow-sm"
          >
            Authorize & Connect Group
          </button>
        </div>

      </div>
    </div>
  );
};

export default ConnectFacebookGroupModal;
