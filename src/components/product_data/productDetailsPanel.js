import React from 'react';

// Child component for displaying an individual ingredient tag
// Defined within the same file as requested for a single-file component
const IngredientTag = ({ name }) => (
  <span className="bg-gray-200 text-gray-900 px-2.5 py-1 rounded-2xl text-sm font-medium">
    {name}
  </span>
);

const ProductDetailsPanel = ({ product, isDescriptionExpanded, onToggleDescription, onViewMethodology, isLoading }) => {
  // Conditional rendering for skeleton loader when data is loading
  if (isLoading) {
    return (
      <section className="bg-white rounded-2xl border border-gray-200 p-6 overflow-y-auto flex flex-col">
        <div className="animate-pulse flex-grow flex flex-col">
          {/* Skeleton for product image */}
          <div className="h-[150px] w-full bg-gray-300 rounded-xl mb-4"></div>

          {/* Skeleton for product name */}
          <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>

          {/* Skeleton for product description */}
          <div className="h-4 w-full bg-gray-300 rounded mb-1"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded mb-4"></div>

          {/* Skeleton for toggle description button */}
          <div className="h-4 w-1/4 bg-gray-300 rounded mb-4"></div>

          {/* Skeleton for section title (Key Ingredients) */}
          <div className="h-4 w-1/3 bg-gray-300 rounded mt-4 mb-2"></div>

          {/* Skeleton for ingredients list */}
          <div className="flex flex-wrap gap-2 my-4">
            <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-28 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Skeleton for methodology button */}
        <div className="h-8 w-full bg-gray-300 rounded mt-auto pt-4"></div>
      </section>
    );
  }

  // Actual content rendering when data is loaded
  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-6 overflow-y-auto flex flex-col">
      <div className="flex-grow flex flex-col">
        {product ? ( // Ensure product data exists before rendering
          <>
            <img className="w-full rounded-xl mb-4" src={product.product_image_url} alt={product.product_name} />
            <h2 className="text-xl font-bold">{product.product_name}</h2>
            <p
              className={`text-gray-600 text-sm mt-2 mb-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${isDescriptionExpanded ? 'max-h-[500px]' : 'max-h-20'}`}
            >
              {product.product_description}
            </p>
            {/* Show 'Show More/Less' button only if description is long enough to be truncated */}
            {product.product_description && product.product_description.length > 200 && ( // Heuristic for long description
              <button
                onClick={onToggleDescription}
                className="bg-transparent border-none text-orange-500 font-medium cursor-pointer p-0 text-sm text-left"
              >
                {isDescriptionExpanded ? 'Show Less' : 'Show More'}
              </button>
            )}
            <h3 className="text-base font-bold mb-2 pb-2 border-b border-gray-200 mt-4">Key Ingredients</h3>
            <div className="flex flex-wrap gap-2 my-4">
              {product.ingredients && product.ingredients.map((ingredient) => (
                <IngredientTag key={ingredient} name={ingredient} />
              ))}
            </div>
          </>
        ) : (
          // Fallback or empty state if product is null/undefined and not loading
          <div className="flex items-center justify-center h-full text-gray-500">
            No product data available.
          </div>
        )}
      </div>
      <button
        onClick={onViewMethodology}
        className="mt-auto pt-4 border-t border-gray-200 w-full bg-transparent border-none text-orange-500 font-medium cursor-pointer p-0 text-sm text-left flex items-center justify-between"
      >
        <span>View Search Terms</span>
        <span className="text-xl leading-none">&rarr;</span>
      </button>
    </section>
  );
};

export default ProductDetailsPanel;