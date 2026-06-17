import React from "react";

export default function UserPagination({ 
  totalCount, 
  currentPage, 
  totalPages, 
  itemsPerPage, 
  onPageChange 
}) {
  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, idx) => idx + 1);
    }
    
    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages];
    }
    
    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }
    
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const startItem = totalCount > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItem = Math.min(currentPage * itemsPerPage, totalCount);

  return (
    <div className="px-5 py-5 border-t border-gray-100 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none">
      
      {/* Left Slice Range Label */}
      <div className="text-left">
        <span className="text-xs font-bold text-gray-400 font-semibold tracking-wide">
          Showing {startItem.toLocaleString()} - {endItem.toLocaleString()} of {totalCount.toLocaleString()} users
        </span>
      </div>

      {/* Right Page Controls Numbers */}
      <div className="flex items-center justify-end gap-1.5">
        
        {/* Left Chevron */}
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`w-8 h-8 rounded-lg flex items-center justify-center border border-gray-200 transition-all focus:outline-none ${
            currentPage === 1 
              ? "text-gray-300 bg-gray-50 border-gray-100 cursor-not-allowed" 
              : "text-[#1C3D5A] hover:bg-slate-50 border-gray-200 cursor-pointer"
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Pagination Number List */}
        {getVisiblePages().map((pageNum, idx) => (
          pageNum === '...' ? (
            <span key={`ellipsis-${idx}`} className="text-xs font-extrabold text-gray-400 px-1 select-none">
              ...
            </span>
          ) : (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold tracking-wide transition-all focus:outline-none cursor-pointer ${
                currentPage === pageNum
                  ? "bg-[#002B49] text-white shadow-sm"
                  : "text-[#1C3D5A] hover:bg-slate-50"
              }`}
            >
              {pageNum}
            </button>
          )
        ))}

        {/* Right Chevron */}
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 rounded-lg flex items-center justify-center border border-gray-200 transition-all focus:outline-none ${
            currentPage === totalPages 
              ? "text-gray-300 bg-gray-50 border-gray-100 cursor-not-allowed" 
              : "text-[#1C3D5A] hover:bg-slate-50 border-gray-200 cursor-pointer"
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
