import React from "react";

export default function UserPagination({ 
  totalCount, 
  currentPage, 
  totalPages, 
  itemsPerPage, 
  onPageChange 
}) {
  return (
    <div className="px-5 py-5 border-t border-gray-100 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none">
      
      {/* Left Slice Range Label */}
      <div className="text-left">
        <span className="text-xs font-bold text-gray-400 font-semibold tracking-wide">
          Showing {totalCount > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} - {Math.min(currentPage * itemsPerPage, totalCount)} of {totalCount} users
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
        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
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
        ))}

        {/* Ellipsis & Total pages if pages exceed limit */}
        {totalPages > 5 && currentPage < totalPages - 2 && (
          <>
            <span className="text-xs font-extrabold text-gray-400 px-1 select-none">
              ...
            </span>
            <button
              onClick={() => onPageChange(totalPages)}
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold tracking-wide transition-all focus:outline-none cursor-pointer ${
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
