import React from 'react';

const ReviewModal = ({ isOpen, review, onClose }) => {
  if (!isOpen || !review) {
    return null;
  }

  const { doctorName, doctorImg, reviewTitle, reviewText, research, prompt } = review;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-gray-50 rounded-2xl w-11/12 max-w-3xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <button
          className="absolute top-4 right-4 bg-gray-200 border-none rounded-full w-8 h-8 cursor-pointer flex items-center justify-center z-10 hover:bg-gray-600 hover:text-white transition-colors duration-200"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </button>
        <div className="p-12">
          <div className="flex flex-col items-center gap-2 mb-4">
            <img src={doctorImg} alt={doctorName} className="w-20 h-20 rounded-full object-cover shadow-sm" />
            <span className="font-bold">{doctorName}</span>
          </div>
          <h2 className="text-xl font-bold mb-2">{reviewTitle}</h2>
          <div
            className="text-gray-900 [&>p]:mb-4" // Targets p tags within this div
            dangerouslySetInnerHTML={{ __html: reviewText }}
          ></div>

          <h3 className="text-lg font-bold mt-8 mb-4 pb-2 border-b border-gray-200">
            Supporting Research
          </h3>
          <ul className="list-none grid gap-4">
            {research && research.length > 0 ? (
              research.map((item, index) => (
                <li key={index}>
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Source:{" "}
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-orange-500 no-underline hover:underline">
                        {item.source}
                      </a>
                    </p>
                    <p className="text-sm pl-4 border-l-4 border-orange-500 text-gray-600">
                      {item.excerpt}
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <li>No specific studies cited for this review.</li>
            )}
          </ul>

          <h3 className="text-lg font-bold mt-8 mb-4 pb-2 border-b border-gray-200">
            Generation Prompt
          </h3>
          <pre className="bg-gray-800 text-gray-200 p-4 rounded-xl font-mono text-sm whitespace-pre-wrap break-words">
            {prompt}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;