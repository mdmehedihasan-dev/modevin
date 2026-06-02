import React from 'react';
import MarketplaceOrchestration from '../../Components/Marketplace/MarketplaceOrchestration';
import ApiKeyManagement from '../../Components/Marketplace/ApiKeyManagement';
import GlobalSettings from '../../Components/Marketplace/GlobalSettings';

const Marketplace = () => {
  return (
    <div className="p-8 bg-[#fdfdfd] min-h-screen font-sans mt-16">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-bold text-[#001f3f] tracking-tight">Configure Third-Party Integrations</h1>
        <p className="text-gray-500 text-[13px] mt-1.5 font-medium">Manage luxury horology platforms and API connectivity settings across the global ecosystem.</p>
      </div>

      <MarketplaceOrchestration />

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
        <ApiKeyManagement />
        <GlobalSettings />
      </div>
    </div>
  );
};

export default Marketplace;
