import React from "react";
import { Eye, FileDown, Inbox } from "lucide-react";

export default function EarningTable({
  paginatedTransactions,
  downloadInvoicePDF,
  setSelectedTrx
}) {
  const getSubBadgeClass = (sub) => {
    switch (sub) {
      case "Legacy":
        return "bg-[#E6F4EA] text-[#137333] text-[10px] tracking-wide font-extrabold px-3 py-1 rounded-full";
      case "Pro":
        return "bg-[#435F4C] text-white text-[10px] tracking-wide font-extrabold px-3 py-1 rounded-full shadow-sm";
      case "Basic":
      default:
        return "bg-[#E8F0FE] text-[#1A73E8] text-[10px] tracking-wide font-extrabold px-3 py-1 rounded-full";
    }
  };

  return (
    <div className="bg-white border border-gray-100/80 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.015)] overflow-hidden relative z-0">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Headers row */}
          <thead className="bg-[#EEF2F6]/30 border-b border-gray-100 select-none">
            <tr>
              <th className="px-6 py-4.5 text-left text-[11px] font-bold text-[#1C3D5A]/70 uppercase tracking-widest">
                Users
              </th>
              <th className="px-6 py-4.5 text-left text-[11px] font-bold text-[#1C3D5A]/70 uppercase tracking-widest">
                Trx ID
              </th>
              <th className="px-6 py-4.5 text-left text-[11px] font-bold text-[#1C3D5A]/70 uppercase tracking-widest">
                Subscription
              </th>
              <th className="px-6 py-4.5 text-left text-[11px] font-bold text-[#1C3D5A]/70 uppercase tracking-widest">
                Price
              </th>
              <th className="px-6 py-4.5 text-left text-[11px] font-bold text-[#1C3D5A]/70 uppercase tracking-widest">
                Date
              </th>
              <th className="px-6 py-4.5 text-right text-[11px] font-bold text-[#1C3D5A]/70 uppercase tracking-widest pr-10">
                Action
              </th>
            </tr>
          </thead>

          {/* Body rows */}
          <tbody className="divide-y divide-gray-100">
            {paginatedTransactions.length > 0 ? (
              paginatedTransactions.map((trx, idx) => (
                <tr
                  key={trx.id}
                  className={`hover:bg-[#F1F4F6]/40 transition-colors group ${
                    idx === 0 ? "bg-[#F1F4F6]/20" : ""
                  }`}
                >
                  {/* Users Profile Info */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={trx.user.avatar}
                        alt={trx.user.name}
                        className="w-10 h-10 rounded-full object-cover border border-gray-100 shadow-xs"
                      />
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-extrabold text-[#002B49] tracking-tight group-hover:text-[#1c3d5a] transition-colors leading-none">
                          {trx.user.name}
                        </span>
                        <span className="text-[10px] text-gray-400 font-bold tracking-wide mt-1.5 leading-none">
                          ID: {trx.user.collectorId}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Transaction ID */}
                  <td className="px-6 py-4 whitespace-nowrap text-left">
                    <span className="text-xs text-slate-800 font-semibold">
                      {trx.trxId}
                    </span>
                  </td>

                  {/* Subscription badge */}
                  <td className="px-6 py-4 whitespace-nowrap text-left">
                    <span className={getSubBadgeClass(trx.subscription)}>
                      {trx.subscription}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4 whitespace-nowrap text-left">
                    <span className="text-xs text-slate-800 font-bold">
                      {trx.price}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 whitespace-nowrap text-left">
                    <span className="text-xs text-gray-400 font-semibold">
                      {trx.date}
                    </span>
                  </td>

                  {/* Document and details action items */}
                  <td className="px-6 py-4 whitespace-nowrap text-right pr-10 select-none">
                    <div className="flex items-center justify-end gap-3.5">
                      {/* Document sheet download button */}
                      <button
                        type="button"
                        onClick={() => downloadInvoicePDF(trx)}
                        className="text-gray-400 hover:text-slate-800 p-1.5 rounded-lg hover:bg-slate-100/70 transition-colors focus:outline-none cursor-pointer"
                        title="Download Invoice"
                      >
                        <FileDown className="w-5 h-5 text-gray-500 hover:text-slate-800 transition-colors" />
                      </button>

                      {/* View eye outline button */}
                      <button
                        type="button"
                        onClick={() => setSelectedTrx(trx)}
                        className="text-gray-400 hover:text-slate-800 p-1.5 rounded-lg hover:bg-slate-100/70 transition-colors focus:outline-none cursor-pointer"
                        title="View Details"
                      >
                        <Eye className="w-5 h-5 text-gray-500 hover:text-[#002B49] transition-colors" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              /* No matching transaction row */
              <tr>
                <td colSpan="6" className="px-6 py-12 text-center select-none">
                  <div className="flex flex-col items-center gap-2 text-gray-400">
                    <Inbox className="w-8 h-8 text-gray-300" />
                    <span className="text-xs font-bold tracking-wide mt-1.5">
                      No transactions found in this tier
                    </span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
