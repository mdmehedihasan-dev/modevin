import React from "react";

export default function UserFilters({ searchQuery, onSearchChange, selectedTier, onTierChange }) {
  return (
    <div className="p-5 md:p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none">
      
      {/* Filters & Search Left Section */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-1 max-w-2xl">
        
        {/* Tiers Select Dropdown Container */}
        <div className="relative">
          <select
            value={selectedTier}
            onChange={(e) => onTierChange(e.target.value)}
            className="appearance-none bg-white border border-gray-200 hover:border-gray-300 text-slate-700 text-xs font-semibold pl-10 pr-9 py-2.5 rounded-xl cursor-pointer focus:outline-none focus:border-[#002B49]/40 transition-colors w-full sm:w-auto"
          >
            <option value="All Tiers">All Tiers</option>
            <option value="Elite">Elite</option>
            <option value="Premium">Premium</option>
            <option value="Free">Free</option>
          </select>
          {/* Custom Selector Icons */}
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h18M6.75 9h10.5M10.5 13.5h3m-1.5 4.5h.008v.008h-.008v-.008z" />
            </svg>
          </div>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>

        {/* Filter Search Input */}
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Filter by email or name..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 hover:border-gray-300 focus:border-[#002B49]/40 rounded-xl text-xs font-semibold placeholder-gray-400 focus:outline-none transition-colors"
          />
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bulk Actions Button Right Section */}
      <div className="flex items-center justify-end">
        <button
          type="button"
          className="bg-white border border-gray-200 hover:bg-slate-50 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition-all focus:outline-none shadow-sm"
        >
          Bulk Actions
        </button>
      </div>
    </div>
  );
}
