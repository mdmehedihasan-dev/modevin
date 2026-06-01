import React from "react";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "alert",
      title: "Flagged conversation in Sanctuary Alpha",
      time: "2 mins ago",
      description: "AI detected a potential safety violation in the 'Personal Legacy' thread of the Alpha group. Immediate review required to ensure compliance with sanctuary guidelines.",
      actions: (
        <div className="flex items-center gap-4 mt-4 select-none">
          <button className="bg-[#3A5343] hover:bg-[#2D4134] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
            Review
          </button>
          <button className="text-gray-400 hover:text-gray-600 text-xs font-bold transition-colors">
            Dismiss
          </button>
        </div>
      ),
      icon: (
        <div className="flex-shrink-0 w-11 h-11 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      )
    },
    {
      id: 2,
      type: "user",
      title: "New access request from Sarah Chen",
      time: "45 mins ago",
      description: "Sarah Chen has requested viewer access to the 'Chen Family Heritage' vault. Her identity has been verified through the lineage verification protocol.",
      actions: (
        <div className="flex items-center gap-2.5 mt-4 select-none">
          <button className="bg-[#3A5343] hover:bg-[#2D4134] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
            Approve
          </button>
          <button className="bg-white border border-gray-200 hover:bg-slate-50 text-[#002B49] text-xs font-bold px-4 py-2 rounded-lg transition-colors">
            View Profile
          </button>
        </div>
      ),
      icon: (
        <div className="flex-shrink-0 w-11 h-11 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
      )
    },
    {
      id: 3,
      type: "download",
      title: "Consent log export complete",
      time: "5 hours ago",
      description: "The full compliance audit trail for Q3 is ready. This includes all user consent changes and AI processing permissions across the platform.",
      actions: (
        <div className="flex items-center gap-2.5 mt-4 select-none">
          <button className="bg-[#3A5343] hover:bg-[#2D4134] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
            Download
          </button>
        </div>
      ),
      icon: (
        <div className="flex-shrink-0 w-11 h-11 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50/50 font-sans mt-16 text-slate-800">
      {/* Title & Subtitle Header */}
      <div className="text-left mb-8 select-none">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#002B49] tracking-tight">
          Notifications Center
        </h1>
        <p className="text-xs md:text-sm text-gray-400 mt-1 font-semibold">
          Stay updated with system activities, security events, and user requests.
        </p>
      </div>

      {/* Notifications Card List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {notifications.map((notif) => (
          <div 
            key={notif.id}
            className="bg-white border border-gray-100/80 rounded-2xl p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.015)] relative flex items-start gap-4.5"
          >
            {/* Outline status circle icon */}
            {notif.icon}

            {/* Time Stamp label */}
            <span className="absolute top-5 right-5 text-[10px] md:text-xs font-bold text-gray-400 select-none">
              {notif.time}
            </span>

            {/* Content text */}
            <div className="flex-1 text-left pr-16 md:pr-20">
              <h3 className="text-sm md:text-base font-bold text-slate-800 tracking-tight mb-1">
                {notif.title}
              </h3>
              <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                {notif.description}
              </p>
              {notif.actions}
            </div>
          </div>
        ))}

        {/* Bottom Loading indicators */}
        <div className="flex flex-col items-center justify-center gap-3 pt-6 select-none">
          <span className="text-[10px] md:text-xs font-bold text-gray-400 italic">
            showing 3 of 24 notifications
          </span>
          <button 
            type="button"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:bg-slate-50 text-[#002B49] text-xs font-bold px-5 py-2.5 rounded-full shadow-sm transition-all focus:outline-none"
          >
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            Load more notifications
          </button>
        </div>
      </div>
    </div>
  );
}
