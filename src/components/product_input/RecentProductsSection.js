import React from 'react';

const RecentProductsSection = ({ recentProducts }) => {
  return (
    <section className="mt-16">
      <div className="w-full max-w-screen-xl mx-auto px-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Recent Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recentProducts.map((product) => (
            <a
              key={product.id} // Assuming product has a unique 'id'
              href={product.url}
              className="block bg-white rounded-2xl shadow-sm overflow-hidden text-gray-900 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-44 bg-gray-100">
                <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                  {product.url}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProductsSection;