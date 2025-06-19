import React, { useState } from 'react';

const SearchQueryCard = ({ query }) => {
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const handleCopyClick = () => {
    if (query?.term) {
      navigator.clipboard.writeText(query.term)
        .then(() => {
          setCopyButtonText('Copied!');
          setTimeout(() => {
            setCopyButtonText('Copy');
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy text:', err);
          // Optionally, set button text to 'Error!' for a brief moment
        });
    }
  };

  if (!query) {
    return null; // Or render a fallback/skeleton if preferred
  }

  return (
    <div className="border border-gray-200 rounded-xl p-4 mb-4">
      <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl">
        <div className="flex-1 font-mono text-sm">{query.term}</div>
        <button
          type="button"
          onClick={handleCopyClick}
          className="bg-transparent border border-gray-200 rounded-md py-1 px-2 cursor-pointer transition-colors duration-200 hover:bg-gray-200"
        >
          {copyButtonText}
        </button>
      </div>
      <p className="text-sm text-gray-600 mt-2">{query.rationale}</p>
    </div>
  );
};

export default SearchQueryCard;