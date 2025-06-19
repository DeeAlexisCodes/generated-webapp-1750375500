import React from 'react';

const ReviewInputForm = ({ productUrl, setProductUrl, handleGenerateReviews }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleGenerateReviews();
  };

  return (
    <section className="max-w-[800px] mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.05)] text-center">
        <h1 className="text-[1.8rem] font-bold mb-2">Start a New Review Generation</h1>
        <p className="text-[#555] mb-8">Enter a product page URL to begin the analysis and review creation process.</p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="url"
            className="w-full p-4 text-base border border-[#E0E0E0] rounded-lg bg-[#F1F3F5] transition-all duration-300 ease-in-out focus:outline-none focus:border-[#FF6B00] focus:ring-3 focus:ring-[#FF6B00] focus:ring-opacity-20"
            placeholder="https://www.example.com/product/item-123"
            required
            value={productUrl}
            onChange={(e) => setProductUrl(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#FF6B00] text-white p-4 rounded-lg text-lg font-bold transition-all duration-300 ease-in-out shadow-[0px_8px_24px_rgba(0,0,0,0.1)] border-none cursor-pointer hover:bg-[#E66000] hover:-translate-y-0.5 hover:shadow-[0px_8px_20px_rgba(0,0,0,0.12)]"
          >
            Generate Reviews
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReviewInputForm;