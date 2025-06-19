import React from 'react';

const MobileTabNavigation = ({ activeTab, onSelectTab }) => {
  const tabs = [
    { id: 'product-details', label: 'Details' },
    { id: 'research-list-panel', label: 'Research' },
    { id: 'research-detail-panel', label: 'Study' },
  ];

  return (
    <div className="hidden lg:flex border-b border-gray-200 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`
            py-2 px-4 
            border-none bg-transparent 
            text-base text-gray-900 
            cursor-pointer 
            whitespace-nowrap
            ${activeTab === tab.id 
              ? 'border-b-2 border-orange-500 font-bold' 
              : 'hover:text-orange-600'
            }
          `}
          onClick={() => onSelectTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default MobileTabNavigation;