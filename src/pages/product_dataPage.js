import React, { useState, useEffect } from 'react';
import AppHeader from '../components/productDashboard/AppHeader';
import MobileTabNavigation from '../components/productDashboard/MobileTabNavigation';
import ProductDetailsPanel from '../components/productDashboard/ProductDetailsPanel';
import ResearchListPanel from '../components/productDashboard/ResearchListPanel';
import ResearchDetailPanel from '../components/productDashboard/ResearchDetailPanel';
import MethodologyModal from '../components/productDashboard/MethodologyModal';
import * as api from '../logic/productDashboard/productDashboardLogic';

const ProductDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [selectedResearchStudy, setSelectedResearchStudy] = useState(null);
  const [isMethodologyModalOpen, setIsMethodologyModalOpen] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState('product-details');

  const handleToggleDescription = () => {
    setIsDescriptionExpanded(prev => !prev);
  };

  const handleViewMethodology = () => {
    setIsMethodologyModalOpen(true);
  };

  const handleCloseMethodologyModal = () => {
    setIsMethodologyModalOpen(false);
  };

  const handleSelectResearchStudy = (study) => {
    setSelectedResearchStudy(study);
    setActiveMobileTab('research-detail-panel'); // Switch to detail panel on mobile
  };

  const handleSelectMobileTab = (tab) => {
    setActiveMobileTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await api.fetchProductData();
        setProductData(data);
        if (data && data.researchStudies && data.researchStudies.length > 0) {
          setSelectedResearchStudy(data.researchStudies[0]);
        }
      } catch (error) {
        console.error("Failed to fetch product data:", error);
        setProductData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="product-dashboard-page">
        <AppHeader />
        <div className="loading-message">Loading product dashboard...</div>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="product-dashboard-page">
        <AppHeader />
        <div className="error-message">Failed to load product data. Please try again later.</div>
      </div>
    );
  }

  return (
    <div className="product-dashboard-page">
      <AppHeader />

      <MobileTabNavigation
        activeTab={activeMobileTab}
        onSelectTab={handleSelectMobileTab}
      />

      <div className="dashboard-content">
        <ProductDetailsPanel
          product={productData.productInfo}
          isDescriptionExpanded={isDescriptionExpanded}
          onToggleDescription={handleToggleDescription}
          onViewMethodology={handleViewMethodology}
          isLoading={isLoading}
        />

        <ResearchListPanel
          studies={productData.researchStudies}
          selectedStudy={selectedResearchStudy}
          onSelectStudy={handleSelectResearchStudy}
          isLoading={isLoading}
        />

        <ResearchDetailPanel
          selectedStudy={selectedResearchStudy}
        />
      </div>

      <MethodologyModal
        isOpen={isMethodologyModalOpen}
        onClose={handleCloseMethodologyModal}
        queries={productData.searchQueries || []}
      />
    </div>
  );
};

export default ProductDashboard;