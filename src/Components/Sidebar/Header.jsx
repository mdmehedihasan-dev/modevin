import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";

const Header = ({ showDrawer }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationsCount] = useState(1); // Mapped to 1 as in screenshot

  const notifications = [
    { message: "A new user joined your app.", time: "Fri, 12:30pm" },
    { message: "Profile report received.", time: "Fri, 12:30pm" },
    { message: "A new verification request.", time: "Fri, 12:30pm" },
    { message: "New comment on your post.", time: "Fri, 12:30pm" },
  ];

  return (
    <div className="relative w-full py-4 select-none font-sans">
      {/* Floating White Rounded Card Container */}
      <div className="bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100/80 rounded-2xl w-full">
        <div className="flex items-center justify-between px-6 py-4">
          
          {/* Left Section: Hamburger & Welcome Info */}
          <div className="flex items-center gap-4">
            {/* Hamburger button always visible */}
            <button 
              onClick={showDrawer} 
              className="text-[#002B49] hover:bg-slate-50 p-2 rounded-xl transition-colors flex items-center justify-center border border-transparent focus:outline-none"
            >
              <svg className="w-5 h-5 text-[#002B49]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            
            {/* Welcome Typography */}
            <div className="flex flex-col text-left">
              <h2 className="text-base md:text-lg font-bold text-[#002B49] tracking-tight leading-none">
                Welcome, James
              </h2>
              <span className="text-[11px] text-gray-400 font-semibold tracking-wide mt-1.5 leading-none">
                Have a nice day!
              </span>
            </div>
          </div>

          {/* Right Section: Circular Outline Controls */}
          <div className="flex items-center gap-3">
            {/* Notification Bell Outline Button */}
            <button
              onClick={() => navigate("/notifications")}
              className="relative flex items-center justify-center w-10 h-10 rounded-full border border-[#002B49]/15 text-[#002B49] hover:bg-[#002B49]/5 hover:border-[#002B49]/30 transition-all focus:outline-none"
            >
              <svg className="w-[18px] h-[18px] text-[#002B49]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>

            </button>

            {/* Profile User Outline Button */}
            <Link to="/settings" className="focus:outline-none">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#002B49]/15 text-[#002B49] hover:bg-[#002B49]/5 hover:border-[#002B49]/30 transition-all">
                <svg className="w-[18px] h-[18px] text-[#002B49]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Notification Dropdown styled to match */}
      {showNotifications && (
        <div className="absolute right-0 top-[88px] z-50 p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 w-80">
          <h2 className="text-sm font-bold text-center border-b border-gray-50 pb-2.5 text-[#002B49] uppercase tracking-wider">
            Notifications
          </h2>

          <div className="mt-4 space-y-3.5">
            {notifications.map((item, index) => (
              <div key={index} className="flex items-start gap-3 hover:bg-slate-50 p-1.5 rounded-xl transition-all cursor-pointer">
                <div className="bg-[#002B49]/5 p-2 rounded-lg text-[#002B49]">
                  <Bell className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-800 leading-normal">
                    {item.message}
                  </p>
                  <p className="text-[10px] text-gray-400 font-medium mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
