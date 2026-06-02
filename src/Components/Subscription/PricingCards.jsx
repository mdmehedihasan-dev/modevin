import React from 'react';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const PricingCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Free Plan */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Free</h3>
        <div className="flex items-end gap-1 mb-6">
          <span className="text-4xl font-bold text-gray-900">$0</span>
          <span className="text-gray-500 mb-1 text-sm font-medium">/ month</span>
        </div>
        
        <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-4 uppercase">Active Features</p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> 5 Active Watches
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> Standard Market Prices
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-400">
            <IoCheckmarkCircleOutline className="text-gray-300 text-lg flex-shrink-0" /> AI Visual Search
          </li>
        </ul>
        
        <button className="w-full py-2 border border-gray-300 text-[#0b3b7c] rounded-md font-medium hover:bg-gray-50 transition-colors text-sm">
          Edit Plan
        </button>
      </div>

      {/* Premium Plan */}
      <div className="bg-white p-6 rounded-xl border-2 border-[#0b3b7c] relative shadow-md">
        <div className="absolute top-4 right-4 bg-[#0b3b7c] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
          Most Popular
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">Premium</h3>
        <div className="flex items-end gap-1 mb-6">
          <span className="text-4xl font-bold text-gray-900">$49</span>
          <span className="text-gray-500 mb-1 text-sm font-medium">/ month</span>
        </div>
        
        <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-4 uppercase">Active Features</p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> Unlimited Searches
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> AI Visual Search
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> Market Analytics
          </li>
        </ul>
        
        <button className="w-full py-2 border border-gray-300 text-[#0b3b7c] rounded-md font-medium hover:bg-gray-50 transition-colors text-sm">
          Edit Plan
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Enterprise</h3>
        <div className="flex items-end gap-1 mb-6">
          <span className="text-4xl font-bold text-gray-900">$299</span>
          <span className="text-gray-500 mb-1 text-sm font-medium">/ month</span>
        </div>
        
        <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-4 uppercase">Active Features</p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> All Premium Features
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> API Access (REST/Webhooks)
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" /> Dedicated Account Manager
          </li>
        </ul>
        
        <button className="w-full py-2 border border-gray-300 text-[#0b3b7c] rounded-md font-medium hover:bg-gray-50 transition-colors text-sm">
          Edit Plan
        </button>
      </div>
    </div>
  );
};

export default PricingCards;
