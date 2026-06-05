import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Generate 45 dummy items for pagination demonstration
const allReportsData = Array.from({ length: 45 }, (_, i) => ({
  id: String(i + 1).padStart(2, '0'),
  from: 'Robert Fox',
  reason: i % 3 === 0 ? 'Unprofessional behavior' : (i % 3 === 1 ? 'Spam' : 'Other'),
  to: 'Robert Fox',
  date: `02-${String((i % 28) + 1).padStart(2, '0')}-2025`
}));

const ITEMS_PER_PAGE = 8;

const Reports = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalItems = allReportsData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  
  const currentData = allReportsData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate page numbers for display (simple approach: show all if few, else show subset with ellipsis)
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || 
        i === totalPages || 
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <button 
            key={i}
            onClick={() => handlePageChange(i)}
            className={`w-7 h-7 rounded flex items-center justify-center font-bold transition-colors ${
              currentPage === i 
                ? 'bg-[#002B49] text-white' 
                : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            {i}
          </button>
        );
      } else if (
        i === currentPage - 2 || 
        i === currentPage + 2
      ) {
        pages.push(<span key={i} className="text-gray-400">...</span>);
      }
    }
    // Remove duplicate ellipsis if any (basic cleanup)
    return pages.filter((item, index, arr) => {
      if (item.type === 'span' && arr[index - 1]?.type === 'span') return false;
      return true;
    });
  };

  return (
    <div className="p-8 bg-[#fdfdfd] min-h-screen font-sans mt-16 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-fit flex flex-col min-h-[700px]">
        {/* Header */}
        <div className="bg-[#002B49] px-8 py-5 shrink-0">
          <h2 className="text-white text-[24px] font-bold tracking-wide">Reports</h2>
        </div>

        {/* Table Content */}
        <div className="w-full overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-white">
                <th className="px-8 py-5 text-[14px] font-medium text-[#1e4c8c]">S.ID</th>
                <th className="px-8 py-5 text-[14px] font-medium text-[#1e4c8c]">Report From</th>
                <th className="px-8 py-5 text-[14px] font-medium text-[#1e4c8c] text-center">Report Reason</th>
                <th className="px-8 py-5 text-[14px] font-medium text-[#1e4c8c]">Report T0</th>
                <th className="px-8 py-5 text-[14px] font-medium text-[#1e4c8c] text-right">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((row, index) => (
                <tr key={row.id + index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-4 text-[14px] text-gray-700">{row.id}</td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <img src={`https://i.pravatar.cc/150?img=${(index % 70) + 1}`} alt="avatar" className="w-8 h-8 rounded-full bg-gray-200 object-cover" />
                      <span className="text-[14px] text-gray-700">{row.from}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-[14px] text-gray-600 text-center">{row.reason}</td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <img src={`https://i.pravatar.cc/150?img=${(index % 70) + 20}`} alt="avatar" className="w-8 h-8 rounded-full bg-gray-200 object-cover" />
                      <span className="text-[14px] text-gray-700">{row.to}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-[14px] text-gray-600 text-right">{row.date}</td>
                </tr>
              ))}
              {/* Fill empty rows if needed to keep height stable */}
              {Array.from({ length: ITEMS_PER_PAGE - currentData.length }).map((_, idx) => (
                <tr key={`empty-${idx}`} className="h-[73px]">
                  <td colSpan="5"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="px-8 py-6 flex items-center justify-between border-t border-gray-100 shrink-0">
          <div className="text-[14px] text-[#1e4c8c] font-medium uppercase tracking-wide">
            Showing {totalItems === 0 ? 0 : startIndex + 1}-{endIndex} of {totalItems}
          </div>
          <div className="flex items-center gap-2 text-[14px] select-none">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-1 flex items-center justify-center transition-colors ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-[#002B49]'}`}
            >
              <FiChevronLeft size={20} />
            </button>
            
            <div className="flex items-center gap-1.5 px-2">
              {renderPageNumbers()}
            </div>

            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-1 flex items-center justify-center transition-colors ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-[#002B49]'}`}
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Reports;
