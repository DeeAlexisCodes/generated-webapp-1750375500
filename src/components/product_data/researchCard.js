import React from 'react';

const ResearchCard = ({ study, isSelected, onClick }) => {
  return (
    <button
      type="button"
      className={`
        bg-transparent p-4 rounded-lg border border-gray-200
        transition-all duration-200 ease-in-out cursor-pointer text-left
        hover:border-orange-500 hover:-translate-y-0.5
        ${isSelected ? 'border-orange-500 ring-2 ring-orange-600' : ''}
      `}
      onClick={onClick}
    >
      <h3 className="font-bold text-[0.95rem] mb-2">
        {study.title}
      </h3>
      <div className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-lg text-xs inline-block">
        <strong>✓ Relevant:</strong> {study.relevance_reason}
      </div>
    </button>
  );
};

export default ResearchCard;