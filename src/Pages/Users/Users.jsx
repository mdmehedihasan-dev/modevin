import React, { useState, useMemo } from "react";

// Rich, high-fidelity mock collectors dataset matching the look and feel of the dashboard
const mockCollectors = [
  {
    id: 1,
    name: "Alexander Sterling",
    email: "a.sterling@chronos.io",
    plan: "ELITE",
    status: "Active",
    lastActive: "2 mins ago",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    email: "rodriguez.e@vanguard.com",
    plan: "PREMIUM",
    status: "Active",
    lastActive: "14 hrs ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 3,
    name: "Marcus Wright",
    email: "m.wright@gmail.com",
    plan: "FREE",
    status: "Suspended",
    lastActive: "Oct 12, 2023",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 4,
    name: "Julian Thorne",
    email: "j.thorne@horizon.net",
    plan: "ELITE",
    status: "Pending",
    lastActive: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 5,
    name: "Julian Thorne",
    email: "j.thorne@horizon.net",
    plan: "ELITE",
    status: "Pending",
    lastActive: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 6,
    name: "Julian Thorne",
    email: "j.thorne@horizon.net",
    plan: "ELITE",
    status: "Pending",
    lastActive: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 7,
    name: "Julian Thorne",
    email: "j.thorne@horizon.net",
    plan: "ELITE",
    status: "Pending",
    lastActive: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 8,
    name: "Julian Thorne",
    email: "j.thorne@horizon.net",
    plan: "ELITE",
    status: "Pending",
    lastActive: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  // Page 2 & 3 mock users for beautiful paginated experience
  {
    id: 9,
    name: "Clara Oswald",
    email: "c.oswald@tardis.co.uk",
    plan: "PREMIUM",
    status: "Active",
    lastActive: "5 mins ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 10,
    name: "Alistair Cooke",
    email: "a.cooke@chronicle.org",
    plan: "FREE",
    status: "Active",
    lastActive: "2 hrs ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 11,
    name: "Sophia Loren",
    email: "s.loren@cinecitta.it",
    plan: "ELITE",
    status: "Active",
    lastActive: "3 days ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 12,
    name: "Charles Leclerc",
    email: "c.leclerc@scuderia.mc",
    plan: "PREMIUM",
    status: "Suspended",
    lastActive: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 13,
    name: "Victoria Windsor",
    email: "v.windsor@royal.gov.uk",
    plan: "ELITE",
    status: "Active",
    lastActive: "10 mins ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 14,
    name: "Thomas Cromwell",
    email: "tcromwell@tudor.court",
    plan: "FREE",
    status: "Pending",
    lastActive: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 15,
    name: "Anne Boleyn",
    email: "aboleyn@tudor.court",
    plan: "PREMIUM",
    status: "Pending",
    lastActive: "4 days ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 16,
    name: "Winston Churchill",
    email: "w.churchill@downing.gov.uk",
    plan: "ELITE",
    status: "Active",
    lastActive: "5 hrs ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 17,
    name: "Albert Einstein",
    email: "aeinstein@princeton.edu",
    plan: "FREE",
    status: "Active",
    lastActive: "12 hrs ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 18,
    name: "Arthur Pendragon",
    email: "arthur@camelot.kingdom",
    plan: "ELITE",
    status: "Active",
    lastActive: "3 mins ago",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 19,
    name: "Guinevere du Lac",
    email: "guinevere@camelot.kingdom",
    plan: "PREMIUM",
    status: "Active",
    lastActive: "20 mins ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 20,
    name: "Robin Hood",
    email: "robin@sherwood.forest",
    plan: "FREE",
    status: "Suspended",
    lastActive: "Dec 25, 2024",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 21,
    name: "Marian Fitzwalter",
    email: "marian@sherwood.forest",
    plan: "PREMIUM",
    status: "Active",
    lastActive: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 22,
    name: "Richard Lionheart",
    email: "richard@england.crown",
    plan: "ELITE",
    status: "Pending",
    lastActive: "6 days ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 23,
    name: "Jane Seymour",
    email: "jseymour@tudor.court",
    plan: "FREE",
    status: "Active",
    lastActive: "8 hrs ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 24,
    name: "Erasmus Rotterdam",
    email: "erasmus@humanist.org",
    plan: "PREMIUM",
    status: "Active",
    lastActive: "1 day ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 25,
    name: "Martin Luther",
    email: "luther@wittenberg.de",
    plan: "FREE",
    status: "Pending",
    lastActive: "3 days ago",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 26,
    name: "John Calvin",
    email: "calvin@geneva.ch",
    plan: "ELITE",
    status: "Suspended",
    lastActive: "Oct 27, 2024",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export default function Users() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState("All Tiers");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ field: "name", direction: "asc" });
  const itemsPerPage = 8; // Number of items per page

  // Filter collectors dynamically based on search query and tier dropdown selection
  const filteredCollectors = useMemo(() => {
    return mockCollectors.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.email.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTier =
        selectedTier === "All Tiers" ||
        c.plan.toLowerCase() === selectedTier.toLowerCase();

      return matchesSearch && matchesTier;
    });
  }, [searchQuery, selectedTier]);

  // Sort collectors dynamically
  const sortedCollectors = useMemo(() => {
    const sorted = [...filteredCollectors];
    const { field, direction } = sortBy;
    sorted.sort((a, b) => {
      let valA = a[field].toLowerCase();
      let valB = b[field].toLowerCase();
      if (valA < valB) return direction === "asc" ? -1 : 1;
      if (valA > valB) return direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [filteredCollectors, sortBy]);

  // Paginated slice
  const paginatedCollectors = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedCollectors.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedCollectors, currentPage]);

  // Total pages
  const totalPages = Math.ceil(sortedCollectors.length / itemsPerPage) || 1;

  // Total active count (Always shows 1,284 for visual alignment, or dynamically calculate as needed)
  const totalActiveCount = "1,284";

  const handleSort = (field) => {
    setSortBy((prev) => ({
      field,
      direction: prev.field === field && prev.direction === "asc" ? "desc" : "asc",
    }));
    setCurrentPage(1);
  };

  const getPlanBadgeClass = (plan) => {
    switch (plan) {
      case "ELITE":
        return "bg-[#002B49] text-white text-[10px] tracking-wider font-extrabold px-3 py-1 rounded-full shadow-sm";
      case "PREMIUM":
        return "bg-[#1C3D5A] text-white text-[10px] tracking-wider font-extrabold px-3 py-1 rounded-full shadow-sm";
      case "FREE":
      default:
        return "bg-[#E2E8F0] text-[#1C3D5A] text-[10px] tracking-wider font-extrabold px-3 py-1 rounded-full";
    }
  };

  const getStatusDotClass = (status) => {
    switch (status) {
      case "Active":
        return "bg-[#10B981]"; // Emerald
      case "Suspended":
        return "bg-[#EF4444]"; // Rose/Red
      case "Pending":
      default:
        return "bg-[#F59E0B]"; // Amber/Yellow
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50/50 font-sans mt-16 text-slate-800">
      
      {/* Title, Subtitle, & Total Active Badge Header Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 select-none">
        <div className="text-left">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#002B49] tracking-tight">
            User Management
          </h1>
          <p className="text-xs md:text-sm text-gray-400 mt-1 font-semibold">
            Review and manage verified horological collectors.
          </p>
        </div>

        {/* Total Active Badge */}
        <div className="bg-white border border-gray-100 px-5 py-3 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.01)] flex items-center gap-3.5 border-gray-200/40">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Total Active
          </span>
          <span className="text-lg md:text-xl font-black text-[#002B49]">
            {totalActiveCount}
          </span>
        </div>
      </div>

      {/* Main Table Outer Card */}
      <div className="bg-white border border-gray-100/80 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.015)] overflow-hidden">
        
        {/* Upper Controls Row */}
        <div className="p-5 md:p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none">
          
          {/* Filters & Search Left Section */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-1 max-w-2xl">
            
            {/* Tiers Select Dropdown Container */}
            <div className="relative">
              <select
                value={selectedTier}
                onChange={(e) => {
                  setSelectedTier(e.target.value);
                  setCurrentPage(1);
                }}
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
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
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

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            
            {/* Table Header Section */}
            <thead className="bg-[#EEF2F6]/60 select-none">
              <tr>
                {/* USER Header */}
                <th 
                  onClick={() => handleSort("name")}
                  className="px-6 py-4 text-left text-[11px] font-bold text-[#1C3D5A]/70 uppercase tracking-widest cursor-pointer hover:text-[#002B49] transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>User</span>
                    <svg className="w-3 h-3 text-[#1C3D5A]/50" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </th>
                
                {/* EMAIL Header */}
                <th 
                  onClick={() => handleSort("email")}
                  className="px-6 py-4 text-left text-[11px] font-bold text-[#1C3D5A]/70 uppercase tracking-widest cursor-pointer hover:text-[#002B49] transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Email</span>
                    <svg className="w-3 h-3 text-[#1C3D5A]/50" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                  </div>
                </th>
                
                {/* PLAN Header */}
                <th className="px-6 py-4 text-left text-[11px] font-bold text-[#1C3D5A]/70 uppercase tracking-widest">
                  Plan
                </th>
                
                {/* STATUS Header */}
                <th className="px-6 py-4 text-left text-[11px] font-bold text-[#1C3D5A]/70 uppercase tracking-widest">
                  Status
                </th>
                
                {/* LAST ACTIVE Header */}
                <th className="px-6 py-4 text-left text-[11px] font-bold text-[#1C3D5A]/70 uppercase tracking-widest">
                  Last Active
                </th>
                
                {/* Actions placeholder header */}
                <th className="w-16 px-6 py-4"></th>
              </tr>
            </thead>

            {/* Table Body Section */}
            <tbody className="divide-y divide-gray-100">
              {paginatedCollectors.length > 0 ? (
                paginatedCollectors.map((collector) => (
                  <tr 
                    key={collector.id}
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    
                    {/* User profile avatar & name */}
                    <td className="px-6 py-4.5 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <img 
                          src={collector.avatar} 
                          alt={collector.name} 
                          className="w-10 h-10 rounded-full object-cover border border-gray-100 shadow-sm"
                          onError={(e) => {
                            // Fallback in case of network or source issue
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(collector.name)}&background=002B49&color=fff`;
                          }}
                        />
                        <span className="text-sm font-extrabold text-[#002B49] tracking-tight group-hover:text-sky-950 transition-colors">
                          {collector.name}
                        </span>
                      </div>
                    </td>

                    {/* Email address cell */}
                    <td className="px-6 py-4.5 whitespace-nowrap">
                      <span className="text-xs text-[#1C3D5A]/80 font-semibold">
                        {collector.email}
                      </span>
                    </td>

                    {/* Plan Badge cell */}
                    <td className="px-6 py-4.5 whitespace-nowrap">
                      <span className={getPlanBadgeClass(collector.plan)}>
                        {collector.plan}
                      </span>
                    </td>

                    {/* Status with dot cell */}
                    <td className="px-6 py-4.5 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <span className={`w-2 h-2 rounded-full ${getStatusDotClass(collector.status)}`} />
                        <span>{collector.status}</span>
                      </div>
                    </td>

                    {/* Last active time */}
                    <td className="px-6 py-4.5 whitespace-nowrap">
                      <span className="text-xs text-gray-400 font-semibold">
                        {collector.lastActive}
                      </span>
                    </td>

                    {/* Action buttons (three vertical dots menu) */}
                    <td className="px-6 py-4.5 whitespace-nowrap text-right select-none">
                      <button 
                        type="button" 
                        className="text-gray-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100/80 transition-all focus:outline-none"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 8a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                /* No matching collectors row */
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center select-none">
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      <span className="text-xs font-bold tracking-wide mt-1.5">
                        No collectors match your criteria
                      </span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination Controls Row */}
        <div className="px-5 py-5 border-t border-gray-100 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none">
          
          {/* Left Slice Range Label */}
          <div className="text-left">
            <span className="text-xs font-bold text-gray-400 font-semibold tracking-wide">
              Showing {sortedCollectors.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} - {Math.min(currentPage * itemsPerPage, sortedCollectors.length)} of {sortedCollectors.length} users
            </span>
          </div>

          {/* Right Page Controls Numbers */}
          <div className="flex items-center justify-end gap-1.5">
            
            {/* Left Chevron */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`w-8 h-8 rounded-lg flex items-center justify-center border border-gray-200 transition-all focus:outline-none ${
                currentPage === 1 
                  ? "text-gray-300 bg-gray-50 border-gray-100 cursor-not-allowed" 
                  : "text-[#1C3D5A] hover:bg-slate-50 border-gray-200"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Pagination Number List */}
            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold tracking-wide transition-all focus:outline-none ${
                  currentPage === pageNum
                    ? "bg-[#002B49] text-white shadow-sm"
                    : "text-[#1C3D5A] hover:bg-slate-50"
                }`}
              >
                {pageNum}
              </button>
            ))}

            {/* Ellipsis & Total pages if pages exceed limit */}
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <>
                <span className="text-xs font-extrabold text-gray-400 px-1 select-none">
                  ...
                </span>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold tracking-wide transition-all focus:outline-none ${
                    currentPage === totalPages
                      ? "bg-[#002B49] text-white shadow-sm"
                      : "text-[#1C3D5A] hover:bg-slate-50"
                  }`}
                >
                  {totalPages}
                </button>
              </>
            )}

            {/* Right Chevron */}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`w-8 h-8 rounded-lg flex items-center justify-center border border-gray-200 transition-all focus:outline-none ${
                currentPage === totalPages 
                  ? "text-gray-300 bg-gray-50 border-gray-100 cursor-not-allowed" 
                  : "text-[#1C3D5A] hover:bg-slate-50 border-gray-200"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
