import React from "react";

export default function TransactionDetailsModal({
  selectedTrx,
  setSelectedTrx,
  downloadInvoicePDF
}) {
  if (!selectedTrx) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-[2px] z-50 flex items-center justify-center p-4 font-sans transition-all duration-300">
      {/* Modal Container Card matching Screenshot 2 perfectly */}
      <div className="bg-white rounded-[32px] p-10 max-w-[420px] w-full shadow-2xl relative select-none text-slate-800 scale-100 transition-transform duration-300">
        {/* Title */}
        <h2 className="text-[26px] font-bold text-[#002B49] text-center mb-8 mt-2 tracking-tight">
          Transaction Details
        </h2>

        {/* Fields list styled exactly as Screenshot 2 */}
        <div className="space-y-5 mb-8">
          {/* Transaction ID */}
          <div className="flex justify-between items-center text-[15px]">
            <span className="font-bold text-[#1C3D5A] text-left">
              Transaction ID
            </span>
            <span className="text-slate-600 font-medium text-right">
              {selectedTrx.trxId}
            </span>
          </div>

          {/* Plans */}
          <div className="flex justify-between items-center text-[15px]">
            <span className="font-bold text-[#1C3D5A] text-left">
              Plans
            </span>
            <span className="text-slate-600 font-medium text-right">
              {selectedTrx.planName}
            </span>
          </div>

          {/* Date */}
          <div className="flex justify-between items-center text-[15px]">
            <span className="font-bold text-[#1C3D5A] text-left">
              Date
            </span>
            <span className="text-slate-600 font-medium text-right">
              {selectedTrx.dateString}
            </span>
          </div>

          {/* Name */}
          <div className="flex justify-between items-center text-[15px]">
            <span className="font-bold text-[#1C3D5A] text-left">
              Name
            </span>
            <span className="text-slate-600 font-medium text-right">
              {selectedTrx.user.name}.
            </span>
          </div>

          {/* A/C Number */}
          <div className="flex justify-between items-center text-[15px]">
            <span className="font-bold text-[#1C3D5A] text-left">
              A/C number
            </span>
            <span className="text-slate-600 font-medium text-right">
              {selectedTrx.acNumber}
            </span>
          </div>

          {/* Email */}
          <div className="flex justify-between items-center text-[15px]">
            <span className="font-bold text-[#1C3D5A] text-left">
              Email
            </span>
            <span className="text-slate-600 font-medium text-right break-all max-w-[200px]">
              {selectedTrx.user.email || `${selectedTrx.user.name.toLowerCase().replace(/\s/g, "")}@email.com`}
            </span>
          </div>

          {/* Transaction Amount */}
          <div className="flex justify-between items-center text-[15px]">
            <span className="font-bold text-[#1C3D5A] text-left">
              Transaction amount
            </span>
            <span className="text-slate-600 font-medium text-right">
              {selectedTrx.price}
            </span>
          </div>
        </div>

        {/* Actions button row styled exactly as Screenshot 2 */}
        <div className="flex gap-4 mt-10">
          <button
            type="button"
            onClick={() => setSelectedTrx(null)}
            className="flex-1 bg-white hover:bg-slate-50 border border-[#002B49] text-[#002B49] text-sm font-semibold py-3 rounded-lg transition-all focus:outline-none flex items-center justify-center cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              downloadInvoicePDF(selectedTrx);
              setSelectedTrx(null);
            }}
            className="flex-1 bg-[#002B49] hover:bg-[#002b49]/90 text-white text-sm font-semibold py-3 rounded-lg transition-all focus:outline-none flex items-center justify-center cursor-pointer shadow-sm"
          >
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
}
