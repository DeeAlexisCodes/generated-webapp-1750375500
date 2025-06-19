import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <a
      href={product.link}
      className="block bg-white rounded-2xl shadow-md overflow-hidden text-gray-900 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="h-44 bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-2">{product.title}</h3>
        <p className="text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
          {product.displayUrl}
        </p>
      </div>
    </a>
  );
};

export default ProductCard;