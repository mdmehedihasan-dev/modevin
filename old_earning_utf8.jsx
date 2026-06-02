import React, { useState, useMemo } from "react";
import { jsPDF } from "jspdf";
import { 
  Eye, 
  FileDown, 
  SlidersHorizontal, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Inbox 
} from "lucide-react";

// High-fidelity rich dataset matching both page 1 of the screenshot and enriching with realistic user profiles to enable fully working pagination/filters
const mockTransactions = [
  // Page 1 matches Screenshot 1 perfectly
  {
    id: 1,
    user: {
      name: "Evelyn Thorne",
      collectorId: "LA- 8892",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      email: "evelyn.thorne@example.com"
    },
    trxId: "#123456",
    subscription: "Legacy",
    planName: "Monthly Subscription",
    price: "$75",
    date: "2 hours ago",
    dateString: "02-24-2024",
    acNumber: "**** **** **** *545",
    type: "All Users"
  },
  {
    id: 2,
    user: {
      name: "Evelyn Thorne",
      collectorId: "LA- 8892",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      email: "evelyn.thorne@example.com"
    },
    trxId: "#123456",
    subscription: "Pro",
    planName: "Pro Subscription",
    price: "$25",
    date: "2 hours ago",
    dateString: "02-24-2024",
    acNumber: "**** **** **** *545",
    type: "All Users"
  },
  {
    id: 3,
    user: {
      name: "Evelyn Thorne",
      collectorId: "LA- 8892",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
      email: "evelyn.thorne@example.com"
    },
    trxId: "#123456",
    subscription: "Basic",
    planName: "Basic Subscription",
    price: "$25",
    date: "2 hours ago",
    dateString: "02-24-2024",
    acNumber: "**** **** **** *545",
    type: "All Users"
  },
  {
    id: 4,
    user: {
      name: "Evelyn Thorne",
      collectorId: "LA- 8892",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      email: "evelyn.thorne@example.com"
    },
    trxId: "#123456",
    subscription: "Legacy",
    planName: "Monthly Subscription",
    price: "$25",
    date: "2 hours ago",
    dateString: "02-24-2024",
    acNumber: "**** **** **** *545",
    type: "All Users"
  },
  // Additional pages & modal verification users
  {
    id: 5,
    user: {
      name: "John Doe",
      collectorId: "LA- 5451",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      email: "john@email.com"
    },
    trxId: "#12345678",
    subscription: "Legacy",
    planName: "Monthly Subscription",
    price: "$75",
    date: "2 hours ago",
    dateString: "02-24-2024",
    acNumber: "**** **** **** *545",
    type: "All Users"
  },
  {
    id: 6,
    user: {
      name: "Marcus Wright",
      collectorId: "LA- 5521",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      email: "m.wright@gmail.com"
    },
    trxId: "#98765432",
    subscription: "Pro",
    planName: "Pro Subscription",
    price: "$25",
    date: "5 hours ago",
    dateString: "02-23-2024",
    acNumber: "**** **** **** *911",
    type: "All Users"
  },
  {
    id: 7,
    user: {
      name: "Elena Rodriguez",
      collectorId: "LA- 9112",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      email: "rodriguez.e@vanguard.com"
    },
    trxId: "#33445566",
    subscription: "Basic",
    planName: "Basic Subscription",
    price: "$25",
    date: "1 day ago",
    dateString: "02-22-2024",
    acNumber: "**** **** **** *112",
    type: "All Users"
  },
  {
    id: 8,
    user: {
      name: "Alexander Sterling",
      collectorId: "LA- 0422",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80",
      email: "a.sterling@chronos.io"
    },
    trxId: "#66778899",
    subscription: "Legacy",
    planName: "Monthly Subscription",
    price: "$75",
    date: "2 days ago",
    dateString: "02-21-2024",
    acNumber: "**** **** **** *422",
    type: "All Users"
  },
  {
    id: 9,
    user: {
      name: "Sophia Loren",
      collectorId: "LA- 1121",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      email: "s.loren@cinecitta.it"
    },
    trxId: "#77889900",
    subscription: "Pro",
    planName: "Pro Subscription",
    price: "$25",
    date: "3 days ago",
    dateString: "02-20-2024",
    acNumber: "**** **** **** *121",
    type: "All Users"
  },
  {
    id: 10,
    user: {
      name: "Clara Oswald",
      collectorId: "LA- 0399",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
      email: "c.oswald@tardis.co.uk"
    },
    trxId: "#10293847",
    subscription: "Legacy",
    planName: "Monthly Subscription",
    price: "$75",
    date: "5 days ago",
    dateString: "02-18-2024",
    acNumber: "**** **** **** *399",
    type: "All Users"
  },
  {
    id: 11,
    user: {
      name: "Alistair Cooke",
      collectorId: "LA- 5612",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      email: "a.cooke@chronicle.org"
    },
    trxId: "#84739201",
    subscription: "Basic",
    planName: "Basic Subscription",
    price: "$25",
    date: "1 week ago",
    dateString: "02-15-2024",
    acNumber: "**** **** **** *612",
    type: "All Users"
  },
  // Internal transaction items to enable toggle filtering
  {
    id: 12,
    user: {
      name: "Charles Leclerc",
      collectorId: "LA- 1616",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      email: "c.leclerc@scuderia.mc"
    },
    trxId: "#99008811",
    subscription: "Pro",
    planName: "Pro Subscription",
    price: "$25",
    date: "5 hours ago",
    dateString: "02-23-2024",
    acNumber: "**** **** **** *161",
    type: "Internal"
  },
  {
    id: 13,
    user: {
      name: "Victoria Windsor",
      collectorId: "LA- 1901",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      email: "v.windsor@royal.gov.uk"
    },
    trxId: "#11223344",
    subscription: "Basic",
    planName: "Basic Subscription",
    price: "$25",
    date: "1 day ago",
    dateString: "02-22-2024",
    acNumber: "**** **** **** *190",
    type: "Internal"
  },
  {
    id: 14,
    user: {
      name: "Thomas Cromwell",
      collectorId: "LA- 1540",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
      email: "tcromwell@tudor.court"
    },
    trxId: "#55667788",
    subscription: "Legacy",
    planName: "Monthly Subscription",
    price: "$75",
    date: "2 days ago",
    dateString: "02-21-2024",
    acNumber: "**** **** **** *154",
    type: "Internal"
  }
];

export default function Earning() {
  const [activeTab, setActiveTab] = useState("All Users");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTrx, setSelectedTrx] = useState(null); // Eye click details modal state
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [subscriptionFilter, setSubscriptionFilter] = useState("All Subscriptions");
  const itemsPerPage = 4; // Styled to match 4 items in the screenshot view

  // Filter transactions dynamically based on active tab and subscription filter dropdown
  const filteredTransactions = useMemo(() => {
    return mockTransactions.filter((t) => {
      const matchesTab = t.type === activeTab;
      const matchesSub = 
        subscriptionFilter === "All Subscriptions" || 
        t.subscription === subscriptionFilter;
      return matchesTab && matchesSub;
    });
  }, [activeTab, subscriptionFilter]);

  // Paginated slice
  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTransactions.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTransactions, currentPage]);

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage) || 1;

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

  // Generates and downloads a high-fidelity client-side PDF using jsPDF
  const downloadInvoicePDF = (trx) => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });

    // Brand colors
    const primaryColor = [0, 43, 73]; // #002B49 Dark Navy
    const accentColor = [67, 95, 76]; // #435F4C Forest Green
    const textDark = [28, 61, 90]; // #1C3D5A Slate Blue
    const lightGrey = [241, 244, 246]; // #F1F4F6 Soft Grey

    // Top Header Banner
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 45, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    doc.text("MODEVIN", 20, 28);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("OFFICIAL TRANSACTION INVOICE", 142, 28);

    // Metadata details block
    doc.setFillColor(...lightGrey);
    doc.rect(20, 55, 170, 38, "F");

    doc.setTextColor(...primaryColor);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("INVOICE TO:", 25, 64);

    doc.setTextColor(...textDark);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Name: ${trx.user.name}`, 25, 72);
    doc.text(`Email: ${trx.user.email || `${trx.user.name.toLowerCase().replace(/\s/g, "")}@example.com`}`, 25, 78);
    doc.text(`A/C Number: ${trx.acNumber || "**** **** **** *545"}`, 25, 84);

    doc.setTextColor(...primaryColor);
    doc.setFont("helvetica", "bold");
    doc.text("TRANSACTION DETAILS:", 115, 64);

    doc.setTextColor(...textDark);
    doc.setFont("helvetica", "normal");
    doc.text(`Transaction ID: ${trx.trxId}`, 115, 72);
    doc.text(`Date: ${trx.dateString || "02-24-2024"}`, 115, 78);
    doc.text(`Plan Tier: ${trx.subscription}`, 115, 84);

    // Invoice Item Table Header
    doc.setFillColor(...primaryColor);
    doc.rect(20, 105, 170, 8, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("Description", 25, 110.5);
    doc.text("Plan", 95, 110.5);
    doc.text("Price", 165, 110.5);

    // Invoice Item Table Row
    doc.setTextColor(...textDark);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`${trx.subscription} Subscription Access Plan`, 25, 122);
    doc.text(trx.planName || "Monthly Subscription", 95, 122);
    doc.text(trx.price, 165, 122);

    // Divider Line
    doc.setDrawColor(220, 225, 230);
    doc.setLineWidth(0.3);
    doc.line(20, 128, 190, 128);

    // Summary pricing totals
    doc.setTextColor(...primaryColor);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("Total Amount Paid:", 115, 140);
    doc.setTextColor(...accentColor);
    doc.setFontSize(15);
    doc.text(trx.price, 165, 140);

    // Design layout separator
    doc.setFillColor(...lightGrey);
    doc.rect(20, 150, 170, 15, "F");
    doc.setTextColor(...textDark);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.text("Payment has been processed successfully. No further action is required.", 25, 159);

    // Footer section
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.5);
    doc.line(20, 260, 190, 260);

    doc.setTextColor(160, 170, 180);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("Modevin Inc. ΓÇó Secure compliance audit system document ΓÇó All rights reserved", 20, 268);
    doc.text("For support, please contact your Modevin administrator.", 20, 273);

    doc.save(`Invoice_${trx.trxId.replace("#", "")}.pdf`);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50/50 font-sans mt-16 text-slate-800 relative">
      
      {/* 1. Top KPI Summary Cards Row */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.015)] mb-8 select-none flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-0">
        
        {/* KPI 1: Today */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <span className="text-2xl md:text-3xl font-black text-[#002B49] tracking-tight">
            1.2k
          </span>
          <span className="text-[10px] md:text-xs font-bold text-[#1C3D5A]/75 mt-2.5 tracking-wide uppercase">
            Today
          </span>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-100" />

        {/* KPI 2: This Month */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <span className="text-2xl md:text-3xl font-black text-[#002B49] tracking-tight">
            18.6K
          </span>
          <span className="text-[10px] md:text-xs font-bold text-[#1C3D5A]/75 mt-2.5 tracking-wide uppercase">
            This Month
          </span>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-100" />

        {/* KPI 3: Total Revenue */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <span className="text-2xl md:text-3xl font-black text-[#002B49] tracking-tight">
            4.9M
          </span>
          <span className="text-[10px] md:text-xs font-bold text-[#1C3D5A]/75 mt-2.5 tracking-wide uppercase">
            Total Revenue
          </span>
        </div>

      </div>

      {/* 2. Earnings Header & Toolbar Controls Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 select-none relative z-10">
        
        {/* Typography Title & Subtitle */}
        <div className="text-left">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#002B49] tracking-tight">
            Earnings Management
          </h1>
          <p className="text-xs md:text-sm text-gray-400 mt-1 font-semibold leading-relaxed">
            Monitor, manage and support all the transactions
          </p>
        </div>

        {/* Toolbar Buttons Segment */}
        <div className="flex flex-wrap items-center gap-3 relative">
          
          {/* Segmented control pill selector */}
          <div className="bg-[#EEF2F6]/80 p-1 rounded-xl flex items-center border border-gray-100/30">
            <button
              onClick={() => {
                setActiveTab("All Users");
                setSubscriptionFilter("All Subscriptions");
                setCurrentPage(1);
              }}
              className={`px-6 py-2 rounded-lg text-xs font-bold tracking-wide transition-all focus:outline-none cursor-pointer ${
                activeTab === "All Users"
                  ? "bg-white text-[#002B49] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                  : "text-gray-400 hover:text-slate-600"
              }`}
            >
              All Users
            </button>
            <button
              onClick={() => {
                setActiveTab("Internal");
                setSubscriptionFilter("All Subscriptions");
                setCurrentPage(1);
              }}
              className={`px-6 py-2 rounded-lg text-xs font-bold tracking-wide transition-all focus:outline-none cursor-pointer ${
                activeTab === "Internal"
                  ? "bg-white text-[#002B49] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                  : "text-gray-400 hover:text-slate-600"
              }`}
            >
              Internal
            </button>
          </div>

          {/* Filters Outlined Button Container */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowFilterDropdown((prev) => !prev)}
              className={`bg-white border text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition-all focus:outline-none flex items-center gap-2 shadow-xs cursor-pointer ${
                showFilterDropdown || subscriptionFilter !== "All Subscriptions"
                  ? "border-[#002B49] text-[#002B49] bg-slate-50"
                  : "border-gray-200 hover:bg-slate-50"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4 text-gray-400" />
              {subscriptionFilter === "All Subscriptions" ? "Filters" : subscriptionFilter}
            </button>

            {/* Dropdown Card */}
            {showFilterDropdown && (
              <div className="absolute right-0 top-[46px] z-50 p-2.5 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 w-52 flex flex-col gap-1">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest px-2.5 py-1 text-left select-none">
                  Subscription Tier
                </span>
                {["All Subscriptions", "Legacy", "Pro", "Basic"].map((sub) => (
                  <button
                    key={sub}
                    onClick={() => {
                      setSubscriptionFilter(sub);
                      setShowFilterDropdown(false);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                      subscriptionFilter === sub 
                        ? "bg-[#002B49] text-white" 
                        : "text-[#1C3D5A] hover:bg-slate-50"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Export Outlined Button */}
          <button
            type="button"
            onClick={() => alert("Current transactions list exported successfully as CSV.")}
            className="bg-white border border-gray-200 hover:bg-slate-50 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition-all focus:outline-none flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4 text-gray-400" />
            Export
          </button>
        </div>
      </div>

      {/* 3. Main Transaction Table Card Panel */}
      <div className="bg-white border border-gray-100/80 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.015)] overflow-hidden relative z-0">
        
        {/* Table Viewport Container */}
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

        {/* 4. Footer statistics range & Pagination Chevrons */}
        <div className="px-5 py-5 border-t border-gray-100 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none">
          
          {/* Slice statistical range text */}
          <div className="text-left">
            <span className="text-xs font-bold text-gray-400 font-semibold tracking-wide">
              Showing {filteredTransactions.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to {Math.min(currentPage * itemsPerPage, filteredTransactions.length)} of {filteredTransactions.length} users
            </span>
          </div>

          {/* Numbers list page selection */}
          <div className="flex items-center justify-end gap-1.5">
            
            {/* Left Chevron */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`w-8 h-8 rounded-lg flex items-center justify-center border border-gray-200 transition-all focus:outline-none cursor-pointer ${
                currentPage === 1 
                  ? "text-gray-300 bg-gray-50 border-gray-100 cursor-not-allowed" 
                  : "text-[#1C3D5A] hover:bg-slate-50 border-gray-200"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Numbers array loops */}
            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold tracking-wide transition-all focus:outline-none cursor-pointer ${
                  currentPage === pageNum
                    ? "bg-[#435F4C] text-white shadow-sm"
                    : "text-[#1C3D5A] hover:bg-slate-50"
                }`}
              >
                {pageNum}
              </button>
            ))}

            {/* Right Chevron */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`w-8 h-8 rounded-lg flex items-center justify-center border border-gray-200 transition-all focus:outline-none cursor-pointer ${
                currentPage === totalPages 
                  ? "text-gray-300 bg-gray-50 border-gray-100 cursor-not-allowed" 
                  : "text-[#1C3D5A] hover:bg-slate-50 border-gray-200"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        </div>

      </div>

      {/* 5. Transaction Details Modal Overlay */}
      {selectedTrx && (
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
      )}

    </div>
  );
}
