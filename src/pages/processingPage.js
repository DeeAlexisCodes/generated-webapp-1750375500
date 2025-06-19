import React, { useState, useEffect } from 'react';
import AppHeader from '../components/productAnalysisProcessingPage/AppHeader';
import ProcessingCard from '../components/productAnalysisProcessingPage/ProcessingCard';
import AppFooter from '../components/productAnalysisProcessingPage/AppFooter';
import * as api from '../logic/productAnalysisProcessingPage/productAnalysisProcessingPageLogic';

const ProductAnalysisProcessingPage = () => {
  const [productUrl, setProductUrl] = useState("Loading...");
  const [isProcessingComplete, setIsProcessingComplete] = useState(false);
  const [processingTitle, setProcessingTitle] = useState("Analyzing Product");
  const [statusMessage, setStatusMessage] = useState("Initializing...");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductUrl = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const url = params.get('url');
        if (url) {
          setProductUrl(decodeURIComponent(url));
        } else {
          setProductUrl("No product URL provided.");
          setError("Product URL not found in query parameters.");
        }
      } catch (err) {
        setProductUrl("Error retrieving URL.");
        setError("Failed to parse URL parameters.");
        console.error("Error retrieving product URL:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductUrl();

    // Simulate processing steps
    const processingSequence = async () => {
      // Step 1: Initializing is already set
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatusMessage("Fetching product data...");

      // Step 2: Fetching data
      await new Promise(resolve => setTimeout(resolve, 3000));
      setStatusMessage("Performing initial analysis...");

      // Step 3: Performing analysis
      await new Promise(resolve => setTimeout(resolve, 3000));
      setStatusMessage("Generating insights and recommendations...");

      // Step 4: Completing process
      await new Promise(resolve => setTimeout(resolve, 2000));
      setProcessingTitle("Analysis Complete!");
      setStatusMessage("Review the results below.");
      setIsProcessingComplete(true);
    };

    // Only start processing sequence if a URL was (or will be) successfully retrieved.
    // In a real app, this might depend on 'productUrl' not being an error state.
    // For this simulation, we assume URL will be present or processing starts regardless.
    processingSequence();

  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Loading Product Analysis Page...</h1>
        <p>Please wait while we prepare the content.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
        <h1>Error</h1>
        <p>{error}</p>
        <p>Could not load the product analysis page properly.</p>
      </div>
    );
  }

  return (
    <div className="product-analysis-processing-page">
      <AppHeader />
      <main style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <ProcessingCard
          productUrl={productUrl}
          processingTitle={processingTitle}
          statusMessage={statusMessage}
          isProcessingComplete={isProcessingComplete}
        />
      </main>
      <AppFooter />
    </div>
  );
};

export default ProductAnalysisProcessingPage;