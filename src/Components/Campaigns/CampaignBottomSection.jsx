import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const eventsData = {
  22: [
    { time: '10:00', title: 'Weekly Strategy Sync', channel: 'Internal', highlight: false }
  ],
  23: [
    { time: '11:15', title: 'Ad Copy Review', channel: 'Marketing Team', highlight: false },
    { time: '15:00', title: 'Launch: Summer Diver', channel: 'Instagram/FB', highlight: true }
  ],
  24: [
    { time: '09:00', title: 'Inventory Sync: Rolex Batch', channel: 'All Channels', highlight: false },
    { time: '14:30', title: 'Member Spotlight Post', channel: 'FB Groups Only', highlight: true }
  ],
  25: [
    { time: '08:30', title: 'Q3 Budget Approval', channel: 'Finance', highlight: false }
  ],
  26: [],
  27: [
    { time: '12:00', title: 'Weekend Flash Sale', channel: 'All Channels', highlight: true }
  ],
  28: []
};

export const CampaignBottomSection = () => {
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDateIndex, setSelectedDateIndex] = useState(2); // Default to Wednesday
  
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const baseDates = [22, 23, 24, 25, 26, 27, 28];
  
  // Calculate dates based on week offset
  const currentDates = baseDates.map(date => {
    let newDate = date + (weekOffset * 7);
    if (newDate > 31) newDate = ((newDate - 1) % 31) + 1;
    if (newDate <= 0) newDate = 31 + (newDate % 31);
    return newDate;
  });

  const selectedDate = currentDates[selectedDateIndex];
  const activeEvents = weekOffset === 0 ? (eventsData[selectedDate] || []) : [
    { time: '09:00', title: 'Future Scheduled Event', channel: 'TBD', highlight: false }
  ];

  const handlePrevWeek = () => setWeekOffset(prev => prev - 1);
  const handleNextWeek = () => setWeekOffset(prev => prev + 1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Post Performance Tracking */}
      <div className="bg-white p-7 rounded-[20px] shadow-sm border border-gray-100 flex flex-col h-full">
        <h3 className="text-[15px] font-bold text-gray-800 mb-8">Post Performance Tracking</h3>
        <div className="flex items-center justify-between gap-10 flex-1 px-4">
          {/* Donut Chart Mock */}
          <div className="relative w-[120px] h-[120px] flex-shrink-0">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90 drop-shadow-sm">
              <path
                className="text-gray-100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4.5"
              />
              <path
                className="text-[#0b3b7c]"
                strokeDasharray="84, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[22px] font-bold text-[#001f3f]">84%</span>
              <span className="text-[7px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Positive</span>
            </div>
            <p className="text-[9px] text-center text-gray-400 mt-5 leading-tight font-medium px-2">Sentiment Analysis on Comments</p>
          </div>
          
          {/* Bar Charts */}
          <div className="flex-1 space-y-5 -mt-4">
            <div>
              <div className="flex justify-between items-end text-[10px] mb-1.5">
                <span className="text-gray-500 font-bold">Reach (Organic)</span>
                <span className="font-bold text-gray-800 text-[11px]">12.4k</span>
              </div>
              <div className="w-full bg-gray-100 h-[5px] rounded-full overflow-hidden">
                <div className="bg-[#0b3b7c] h-full rounded-full w-[85%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end text-[10px] mb-1.5">
                <span className="text-gray-500 font-bold">Reach (Paid)</span>
                <span className="font-bold text-gray-800 text-[11px]">3.2k</span>
              </div>
              <div className="w-full bg-gray-100 h-[5px] rounded-full overflow-hidden">
                <div className="bg-indigo-300 h-full rounded-full w-[35%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end text-[10px] mb-1.5">
                <span className="text-gray-500 font-bold">Conversions</span>
                <span className="font-bold text-gray-800 text-[11px]">142</span>
              </div>
              <div className="w-full bg-gray-100 h-[5px] rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="bg-white p-7 rounded-[20px] shadow-sm border border-gray-100 flex flex-col h-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[15px] font-bold text-gray-800">Upcoming Schedule</h3>
          <div className="flex gap-2">
            <button onClick={handlePrevWeek} className="text-gray-400 hover:text-gray-700 transition-colors"><FiChevronLeft size={16} /></button>
            <button onClick={handleNextWeek} className="text-gray-400 hover:text-gray-700 transition-colors"><FiChevronRight size={16} /></button>
          </div>
        </div>

        {/* Calendar Strip */}
        <div className="flex justify-between mb-7 px-1">
          {daysOfWeek.map((day, i) => {
            const isSelected = i === selectedDateIndex;
            return (
              <div key={i} className="flex flex-col items-center">
                <span className="text-[9px] font-bold text-gray-400 mb-2.5">{day}</span>
                <div 
                  onClick={() => setSelectedDateIndex(i)}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-bold transition-colors ${isSelected ? 'bg-blue-50/50 text-[#0b3b7c] border border-blue-200' : 'text-gray-500 hover:bg-gray-50 cursor-pointer'}`}
                >
                  {currentDates[i]}
                </div>
              </div>
            )
          })}
        </div>

        {/* Events */}
        <div className="space-y-3">
          {activeEvents.length > 0 ? (
            activeEvents.map((event, idx) => (
              <div key={idx} className={`flex gap-4 p-3.5 rounded-xl border transition-colors ${event.highlight ? 'bg-blue-50/50 border-blue-100/50' : 'bg-[#f4f7fb] border-blue-50/50'}`}>
                <div className={`text-[10px] font-bold pt-0.5 w-10 ${event.highlight ? 'text-blue-400' : 'text-gray-400'}`}>{event.time}</div>
                <div>
                  <h4 className={`text-[12px] font-bold ${event.highlight ? 'text-[#0b3b7c]' : 'text-gray-800'}`}>{event.title}</h4>
                  <p className={`text-[10px] mt-0.5 font-medium ${event.highlight ? 'text-blue-600/70' : 'text-gray-500'}`}>{event.channel}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-sm text-gray-400 font-medium">No events scheduled for this date.</div>
          )}
        </div>
      </div>
    </div>
  );
};
