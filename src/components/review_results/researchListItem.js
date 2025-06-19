import React from 'react';

const ResearchListItem = ({ research }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h4 className="font-bold mb-2">{research.title}</h4>
      <p className="text-sm text-gray-600 mb-2">
        Source: <a href={research.url} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">{research.source}</a>
      </p>
      <p className="text-sm pl-4 border-l-4 border-orange-500 text-gray-600">
        {research.excerpt}
      </p>
    </div>
  );
};

export default ResearchListItem;