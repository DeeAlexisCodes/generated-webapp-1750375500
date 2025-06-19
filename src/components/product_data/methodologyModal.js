import React, { useState, useEffect, useCallback } from 'react';

const MethodologyModal = ({ isOpen, onClose, queries }) => {
  const [copyStatus, setCopyStatus] = useState({});

  const handleCopy = useCallback((term) => {
    navigator.clipboard.writeText(term)
      .then(() => {
        setCopyStatus(prev => ({ ...prev, [term]: 'Copied!' }));
        setTimeout(() => {
          setCopyStatus(prev => ({ ...prev, [term]: 'Copy' }));
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        setCopyStatus(prev => ({ ...prev, [term]: 'Error!' }));
        setTimeout(() => {
          setCopyStatus(prev => ({ ...prev, [term]: 'Copy' }));
        }, 2000);
      });
  }, []);

  const handleOverlayClick = useCallback((e) => {
    if (e.target.id === 'methodology-modal-overlay') {
      onClose();
    }
  }, [onClose]);

  const handleEscapeKey = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, handleEscapeKey]);

  if (!isOpen) {
    return null;
  }

  // Note: 'animate-fadeIn' and custom keyframes are not standard Tailwind CSS utilities.
  // They are assumed to be defined in a custom Tailwind configuration or global CSS
  // based on the provided HTML's <style> block.
  return (
    <div
      id="methodology-modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-all duration-300 ease-in-out opacity-100 visible"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl max-w-[800px] w-[calc(100%-40px)] max-h-[90vh] overflow-y-auto p-8 relative transform translate-y-0 scale-100 transition-all duration-300 ease-in-out animate-fadeIn">
        <button
          className="absolute top-4 right-4 bg-transparent border-none text-2xl cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Search Term Methodology</h2>
        <div className="animate-fadeIn">
          {queries && queries.length > 0 ? (
            queries.map((q, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl">
                  <div className="flex-1 font-mono text-sm break-words">{q.term}</div>
                  <button
                    className="bg-transparent border border-gray-200 rounded-md py-1 px-2 cursor-pointer transition-colors duration-200 hover:bg-gray-200 text-sm font-medium text-gray-700 whitespace-nowrap"
                    onClick={() => handleCopy(q.term)}
                  >
                    {copyStatus[q.term] || 'Copy'}
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-2">{q.rationale}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center py-8">No search queries available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MethodologyModal;