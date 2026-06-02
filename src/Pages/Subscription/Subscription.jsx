import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import PricingCards from '../../Components/Subscription/PricingCards';
import FeatureAssignment from '../../Components/Subscription/FeatureAssignment';
import BillingCycleControls from '../../Components/Subscription/BillingCycleControls';
import RecentActions from '../../Components/Subscription/RecentActions';
import PromotionModal from '../../Components/Subscription/PromotionModal';
import PlanModal from '../../Components/Subscription/PlanModal';

const Subscription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans mt-16">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Subscription Management</h1>
          <p className="text-gray-500 text-sm mt-1">Configure user tiers, pricing, and platform features.</p>
        </div>
        <button 
          onClick={() => setIsPlanModalOpen(true)}
          className="bg-[#0b3b7c] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#0b3b7c]/90 text-sm font-medium transition-colors shadow-sm"
        >
          <FiPlus /> Create New Plan
        </button>
      </div>

      {/* Pricing Cards */}
      <PricingCards />

      {/* Two columns section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <FeatureAssignment />
        <BillingCycleControls setIsModalOpen={setIsModalOpen} />
      </div>

      {/* Recent Billing Actions */}
      <RecentActions />

      {/* Modals */}
      <PromotionModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <PlanModal isPlanModalOpen={isPlanModalOpen} setIsPlanModalOpen={setIsPlanModalOpen} />
    </div>
  );
};

export default Subscription;
