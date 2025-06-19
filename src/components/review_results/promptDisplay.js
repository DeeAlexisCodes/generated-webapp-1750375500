import React from 'react';

const PromptDisplay = ({ promptText }) => {
  return (
    <pre className="bg-slate-800 text-slate-200 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap break-words">
      {promptText}
    </pre>
  );
};

export default PromptDisplay;