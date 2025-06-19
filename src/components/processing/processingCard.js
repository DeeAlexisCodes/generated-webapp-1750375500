import React from 'react';

const ProcessingCard = ({ productUrl, processingTitle, statusMessage, isProcessingComplete }) => {
  return (
    <div className="max-w-lg w-full bg-white p-12 rounded-2xl shadow-md text-center animate-in fade-in slide-in-from-top-4 duration-500 ease-out">
      {!isProcessingComplete && (
        <div className="w-12 h-12 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin mx-auto mb-8"></div>
      )}
      <h1 className="text-3xl font-bold mb-4">{processingTitle}</h1>
      
      {!isProcessingComplete && (
        <>
          <p className="text-sm text-gray-500">Processing URL:</p>
          <p className="font-medium break-all mb-8">{productUrl}</p>
        </>
      )}
      
      <p className="text-base text-gray-500 min-h-6">{statusMessage}</p>
      
      {isProcessingComplete && (
        <a 
          href="/" 
          className="inline-block bg-orange-500 text-white py-3 px-6 text-base font-medium rounded-xl transition-colors duration-300 ease-in-out mt-8 hover:bg-orange-600"
        >
          Back to Homepage
        </a>
      )}
    </div>
  );
};

export default ProcessingCard;