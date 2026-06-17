import React, { useState } from 'react';
import { FiDownload, FiBarChart2 } from 'react-icons/fi';
import { AnalyticsTopSection } from '../../Components/Analytics/AnalyticsTopSection';
import { AnalyticsMiddleSection } from '../../Components/Analytics/AnalyticsMiddleSection';
import { AnalyticsBottomSection } from '../../Components/Analytics/AnalyticsBottomSection';
import { message } from 'antd';
import { jsPDF } from 'jspdf';

const Analytics = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      try {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("Analytics & Reporting Summary", 20, 20);
        doc.setFontSize(12);
        doc.text("Exported Real-time market performance metrics.", 20, 30);
        doc.text("Date: " + new Date().toLocaleDateString(), 20, 40);
        doc.save("analytics_report.pdf");
        message.success("PDF exported successfully!");
      } catch (error) {
        message.error("Failed to export PDF.");
      } finally {
        setIsExporting(false);
      }
    }, 800);
  };

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      message.success("Custom report successfully generated and sent to your email!");
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <div className="p-8 bg-[#fdfdfd] min-h-screen font-sans mt-16">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-[28px] font-bold text-[#001f3f] tracking-tight">Analytics & Reporting</h1>
          <p className="text-gray-500 text-[13px] mt-1.5 font-medium">Real-time market performance and user engagement metrics.</p>
        </div>
        <div className="flex items-center gap-3.5">
          <button 
            onClick={handleExportPDF}
            disabled={isExporting}
            className="border border-gray-200 text-[#001f3f] px-5 py-2.5 rounded-[10px] text-[13px] font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm bg-white disabled:opacity-70"
          >
            <FiDownload size={16} /> {isExporting ? 'Exporting...' : 'Export PDF'}
          </button>
          <button 
            onClick={handleGenerateReport}
            disabled={isGenerating}
            className="bg-[#001f3f] text-white px-5 py-2.5 rounded-[10px] flex items-center gap-2 hover:bg-[#001f3f]/90 text-[13px] font-bold transition-colors shadow-sm disabled:opacity-70"
          >
            <FiBarChart2 size={16} /> {isGenerating ? 'Generating...' : 'Generate Custom Report'}
          </button>
        </div>
      </div>

      <AnalyticsTopSection />
      <AnalyticsMiddleSection />
      <AnalyticsBottomSection />
    </div>
  );
};

export default Analytics;
