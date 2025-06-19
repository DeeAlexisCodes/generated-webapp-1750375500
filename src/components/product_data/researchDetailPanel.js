import React from 'react';

const ResearchDetailPanel = ({ selectedStudy }) => {
  // Common styles for dashboard panels
  const panelClasses = "bg-white rounded-2xl border border-gray-200 p-6 overflow-y-auto flex flex-col";

  if (!selectedStudy) {
    return (
      <section id="research-detail-panel" className={panelClasses}>
        <div id="detail-placeholder" className="flex flex-col justify-center items-center h-full text-center text-gray-600">
          <p>Select a clinical study from the list to view its details here.</p>
        </div>
      </section>
    );
  }

  // Destructure selectedStudy for easier access
  const { title, metadata, product_related_summary, supporting_statements, source_url } = selectedStudy;

  return (
    <section id="research-detail-panel" className={panelClasses}>
      <div id="detail-content" className="animate-in fade-in duration-500">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="text-sm text-gray-600 mb-4">
          <span><strong>Authors:</strong> {metadata.authors.join(', ')}</span><br/>
          <span><strong>Journal:</strong> {metadata.journal}, {metadata.publication_date}</span>
        </div>
        <h3 className="text-base font-bold mb-2 pb-2 border-b border-b-gray-200">Summary</h3>
        <p className="text-base mb-4 py-2 px-4 rounded-xl border-l-[3px] border-l-orange-500 bg-gray-50">
          {product_related_summary}
        </p>
        <h3 className="text-base font-bold mb-2 pb-2 border-b border-b-gray-200">Supporting Statements</h3>
        <ul className="list-none pl-0 mb-4">
          {supporting_statements.map((statement, index) => (
            <li key={index} className="text-sm italic text-gray-600 pl-4 border-l-2 border-l-gray-200 mb-2">
              {statement}
            </li>
          ))}
        </ul>
        <a href={source_url} target="_blank" rel="noopener noreferrer" className="text-orange-500 font-medium hover:underline">
          Read Full Study &rarr;
        </a>
      </div>
    </section>
  );
};

export default ResearchDetailPanel;