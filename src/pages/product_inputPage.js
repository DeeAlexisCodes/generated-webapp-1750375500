import React, { useState, useEffect } from 'react';
import * as api from '../logic/newReviewGenerationPage/newReviewGenerationPageLogic';
import AppHeader from '../components/newReviewGenerationPage/AppHeader';
import ReviewInputForm from '../components/newReviewGenerationPage/ReviewInputForm';
import RecentProductsSection from '../components/newReviewGenerationPage/RecentProductsSection';
import AppFooter from '../components/newReviewGenerationPage/AppFooter';

const NewReviewGenerationPage = () => {
  const [productUrl, setProductUrl] = useState("");
  const [recentProducts, setRecentProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateError, setGenerateError] = useState(null);

  useEffect(() => {
    const loadRecentProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await api.fetchRecentProducts();
        setRecentProducts(data);
      } catch (err) {
        console.error("Failed to fetch recent products:", err);
        setError("Failed to load recent products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadRecentProducts();
  }, []);

  const handleGenerateReviews = async () => {
    setIsGenerating(true);
    setGenerateError(null);
    try {
      // Assuming api.generateReviews returns the newly generated product data
      const newProduct = await api.generateReviews(productUrl);
      // Add the new product to the beginning of the recentProducts list
      setRecentProducts(prevProducts => [newProduct, ...prevProducts]);
      setProductUrl(""); // Clear the input after successful generation
    } catch (err) {
      console.error("Failed to generate reviews:", err);
      setGenerateError("Failed to generate reviews. Please check the URL and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  if (loading) {
    return (
      <div className="new-review-generation-page">
        <AppHeader />
        <main style={{ padding: '20px', textAlign: 'center' }}>
          <p>Loading recent products...</p>
        </main>
        <AppFooter />
      </div>
    );
  }

  if (error) {
    return (
      <div className="new-review-generation-page">
        <AppHeader />
        <main style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </main>
        <AppFooter />
      </div>
    );
  }

  return (
    <div className="new-review-generation-page">
      <AppHeader />
      <main className="page-content" style={{ padding: '20px' }}>
        <ReviewInputForm
          productUrl={productUrl}
          setProductUrl={setProductUrl}
          handleGenerateReviews={handleGenerateReviews}
          isGenerating={isGenerating}
          generateError={generateError}
        />
        <RecentProductsSection
          recentProducts={recentProducts}
        />
      </main>
      <AppFooter />
    </div>
  );
};

export default NewReviewGenerationPage;