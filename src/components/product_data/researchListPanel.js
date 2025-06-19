import React from 'react';

// Internal helper component for a single research study card
const ResearchCard = ({ study, isSelected, onSelect }) => {
  const { title, relevance_reason } = study;

  return (
    <button
      type="button"
      className={`
        bg-transparent p-4 rounded-xl border border-gray-200 transition-all duration-200 ease-in-out cursor-pointer text-left
        hover:border-orange-500 hover:-translate-y-0.5
        ${isSelected ? 'border-orange-500 ring-2 ring-orange-600' : ''}
      `}
      onClick={onSelect}
    >
      <h3 className="font-bold text-base mb-2">{title}</h3>
      {relevance_reason && (
        <div className="bg-green-100 text-[#206b31] px-2 py-0.5 rounded-xl text-xs inline-block">
          <strong>✓ Relevant:</strong> {relevance_reason}
        </div>
      )}
    </button>
  );
};

const ResearchListPanel = ({ studies, selectedStudy, onSelectStudy, isLoading }) => {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-6 overflow-y-auto flex flex-col">
      {isLoading ? (
        <div className="animate-pulse">
          <div className="bg-gray-300 rounded w-1/2 h-5 mb-2"></div>
          <div className="bg-gray-300 rounded h-20 my-4"></div>
          <div className="bg-gray-300 rounded h-20 my-4"></div>
          <div className="bg-gray-300 rounded h-20 my-4"></div>
        </div>
      ) : (
        <div className="w-full flex flex-col">
          <h2 className="text-base font-bold mb-2 pb-2 border-b border-gray-200">Clinical Research</h2>
          {studies && studies.length > 0 ? (
            <div className="flex flex-col gap-4">
              {studies.map((study, index) => (
                <ResearchCard
                  // It's highly recommended to use a unique ID from the study data if available,
                  // instead of `index`, especially if the list can change or be reordered.
                  key={study.title || index} 
                  study={study}
                  isSelected={selectedStudy && selectedStudy.title === study.title}
                  onSelect={() => onSelectStudy(study)}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No clinical research studies found.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default ResearchListPanel;