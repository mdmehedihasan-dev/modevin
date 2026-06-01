import React, { useState, useMemo } from "react";
import { jsPDF } from "jspdf";

// Import modular Earning sub-components
import { mockTransactions } from "../../Components/Earning/mockTransactionsData";
import EarningStats from "../../Components/Earning/EarningStats";
import EarningFilters from "../../Components/Earning/EarningFilters";
import EarningTable from "../../Components/Earning/EarningTable";
import EarningPagination from "../../Components/Earning/EarningPagination";
import TransactionDetailsModal from "../../Components/Earning/TransactionDetailsModal";

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
    doc.text("Modevin Inc. • Secure compliance audit system document • All rights reserved", 20, 268);
    doc.text("For support, please contact your Modevin administrator.", 20, 273);

    doc.save(`Invoice_${trx.trxId.replace("#", "")}.pdf`);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50/50 font-sans mt-16 text-slate-800 relative">
      
      {/* 1. Top KPI Summary Cards Row */}
      <EarningStats />

      {/* 2. Earnings Header & Toolbar Controls Row */}
      <EarningFilters 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        subscriptionFilter={subscriptionFilter}
        setSubscriptionFilter={setSubscriptionFilter}
        setCurrentPage={setCurrentPage}
        showFilterDropdown={showFilterDropdown}
        setShowFilterDropdown={setShowFilterDropdown}
      />

      {/* 3. Main Transaction Table Card Panel */}
      <div className="bg-white border border-gray-100/80 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.015)] overflow-hidden relative z-0">
        
        {/* Table View */}
        <EarningTable 
          paginatedTransactions={paginatedTransactions}
          downloadInvoicePDF={downloadInvoicePDF}
          setSelectedTrx={setSelectedTrx}
        />

        {/* 4. Footer statistics range & Pagination Chevrons */}
        <EarningPagination 
          filteredTransactions={filteredTransactions}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalPages={totalPages}
        />

      </div>

      {/* 5. Transaction Details Modal Overlay */}
      <TransactionDetailsModal 
        selectedTrx={selectedTrx}
        setSelectedTrx={setSelectedTrx}
        downloadInvoicePDF={downloadInvoicePDF}
      />

    </div>
  );
}
