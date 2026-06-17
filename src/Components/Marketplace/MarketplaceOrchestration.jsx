import React, { useState } from 'react';
import { Switch, Input } from 'antd';
import { FiPlus } from 'react-icons/fi';

const ChronoLogo = () => (
  <div className="w-10 h-10 rounded-full border-2 border-[#1c2c3b] flex items-center justify-center relative">
    <span className="text-xl font-bold text-[#1c2c3b]">C</span>
    <div className="absolute top-1/2 left-1/2 w-[18px] h-[2px] bg-orange-400 origin-left transform -rotate-[35deg] translate-y-[-1px] -translate-x-[2px]"></div>
  </div>
);

const EbayLogo = () => (
  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm">
    <span className="text-red-500 font-bold text-[13px] translate-y-[2px]">e</span>
    <span className="text-blue-500 font-bold text-[13px] -translate-y-[2px]">b</span>
    <span className="text-yellow-500 font-bold text-[13px] translate-y-[2px]">a</span>
    <span className="text-green-500 font-bold text-[13px] -translate-y-[2px]">y</span>
  </div>
);

const GrailzeeLogo = () => (
  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
    <span className="text-white text-[9px] font-bold italic">Grailzee</span>
  </div>
);

const initialIntegrations = [
  { id: 1, name: 'Chrono24', logo: <ChronoLogo />, active: true, sync: '14 mins ago' },
  { id: 2, name: 'eBay', logo: <EbayLogo />, active: true, sync: '1 hour ago' },
  { id: 3, name: 'Grailzee', logo: <GrailzeeLogo />, active: true, sync: '32 mins ago' },
];

const MarketplaceOrchestration = () => {
  const [integrations, setIntegrations] = useState(initialIntegrations);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState(null);

  const handleToggle = (id, checked) => {
    setIntegrations(integrations.map(item => item.id === id ? { ...item, active: checked } : item));
  };

  const handleSyncNow = (id) => {
    setIntegrations(integrations.map(item => item.id === id ? { ...item, sync: 'Just now' } : item));
  };

  const handleEditClick = (item) => {
    setEditingId(item.id);
    setEditFormData({ ...item });
  };

  const handleSaveClick = () => {
    setIntegrations(integrations.map(item => item.id === editingId ? editFormData : item));
    setEditingId(null);
  };

  const handleCancelClick = () => {
    setEditingId(null);
    setEditFormData(null);
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">Marketplace Orchestration</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {integrations.map((item) => (
          <div key={item.id} className="bg-white rounded-[20px] p-6  shadow-sm border border-gray-100 flex flex-col ">
            <div className="flex justify-between items-start mb-5">
              {item.logo}
              {editingId !== item.id && (
                <Switch
                  checked={item.active}
                  onChange={(checked) => handleToggle(item.id, checked)}
                  style={{ backgroundColor: item.active ? '#0b3b7c' : undefined }}
                />
              )}
            </div>

            {editingId === item.id ? (
              // Edit Mode
              <div className="flex flex-col h-full">
                <div className="mb-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Name</label>
                  <Input
                    value={editFormData.name}
                    onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                    className="w-full text-sm font-medium rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Last Sync Text</label>
                  <Input
                    value={editFormData.sync}
                    onChange={(e) => setEditFormData({ ...editFormData, sync: e.target.value })}
                    className="w-full text-sm font-medium rounded-md"
                  />
                </div>
                <div className="mt-auto flex gap-2">
                  <button
                    onClick={handleCancelClick}
                    className="flex-1 py-2 border border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveClick}
                    className="flex-1 py-2 bg-[#0b3b7c] hover:bg-[#0b3b7c]/90 text-white rounded-lg font-semibold transition-colors text-sm shadow-sm"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              // View Mode
              <>
                <h3 className="text-[17px] font-bold text-gray-900 mb-1.5">{item.name}</h3>
                <div className="flex items-center gap-1.5 mb-7">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-emerald-500' : 'bg-gray-400'}`}></div>
                  <span className={`${item.active ? 'text-emerald-500' : 'text-gray-500'} text-[11px] font-bold tracking-wide`}>
                    {item.active ? 'Active' : 'Inactive'}
                  </span>
                </div>

                <div className="mb-8">
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Last Sync</p>
                  <p className="text-[13px] text-gray-700 font-medium">{item.sync}</p>
                </div>

                <div className="mt-auto  space-y-2.5">
                  <button
                    onClick={() => handleEditClick(item)}
                    className="w-full bg-[#0b3b7c] hover:bg-[#0b3b7c]/90 text-white rounded-lg py-2.5 text-sm font-semibold transition-colors shadow-sm"
                  >
                    Edit Settings
                  </button>
                  <button
                    onClick={() => handleSyncNow(item.id)}
                    className="w-full bg-white hover:bg-gray-50 text-[#0b3b7c] border border-[#0b3b7c] rounded-lg py-2.5 text-sm font-semibold transition-colors shadow-sm"
                  >
                    Sync Now
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceOrchestration;
