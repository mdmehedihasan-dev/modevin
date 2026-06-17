import React, { useState, useMemo } from "react";
import { mockCollectors } from "../../Components/Users/mockCollectorsData";
import UserDetailDrawer from "../../Components/Users/UserDetailDrawer";
import UserFilters from "../../Components/Users/UserFilters";
import UserTable from "../../Components/Users/UserTable";
import UserPagination from "../../Components/Users/UserPagination";

export default function Users() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState("All Tiers");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ field: "name", direction: "asc" });
  const itemsPerPage = 10; // Number of items per page


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

  // Total active count (Always shows 1,284 for visual alignment, or dynamically calculate as needed)
  const totalActiveCount = "1,284";
  const fakeTotalCount = 1284;
  
  // Total pages
  const totalPages = Math.ceil(fakeTotalCount / itemsPerPage) || 1;

  const handleSort = (field) => {
    setSortBy((prev) => ({
      field,
      direction: prev.field === field && prev.direction === "asc" ? "desc" : "asc",
    }));
    setCurrentPage(1);
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
        <UserFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedTier={selectedTier}
          onTierChange={setSelectedTier}
        />

        {/* Table Container */}
        <UserTable
          collectors={paginatedCollectors}
          sortBy={sortBy}
          onSort={handleSort}
          onSelectUser={setSelectedUser}
        />

        {/* Footer Pagination Controls Row */}
        <UserPagination
          totalCount={fakeTotalCount}
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* User Details Right Drawer Modal */}
      <UserDetailDrawer
        selectedUser={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
}
