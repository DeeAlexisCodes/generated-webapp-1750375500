import React from 'react';

const IngredientTag = ({ name }) => {
  return (
    <span className="bg-gray-200 text-gray-900 py-1 px-2.5 rounded-2xl text-sm font-medium">
      {name}
    </span>
  );
};

export default IngredientTag;