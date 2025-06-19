import React, { useState, useEffect } from 'react';
import * as api from '../logic/reviewResults/reviewResultsLogic';
import AppHeader from '../components/reviewResults/AppHeader';
import AppFooter from '../components/reviewResults/AppFooter';
import PageTitleSection from '../components/reviewResults/PageTitleSection';
import ReviewCarousel from '../components/reviewResults/ReviewCarousel';
import CarouselButton from '../components/reviewResults/CarouselButton';
import ReviewCard from '../components/reviewResults/ReviewCard';
import DoctorInfo from '../components/reviewResults/DoctorInfo';
import ReviewModal from '../components/reviewResults/ReviewModal';
import ModalSectionTitle from '../components/reviewResults/ModalSectionTitle';
import ResearchListItem from '../components/reviewResults/ResearchListItem';
import PromptDisplay from '../components/reviewResults/PromptDisplay';

const ReviewResults = () => {
  const [reviews, setReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        setLoading(true);
        const data = await api.fetchReviews();
        setReviews(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
        setError('Failed to load reviews. Please try again later.');
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviewsData();
  }, []);

  const handleReviewSelect = (review) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReview(null); // Clear selected review when modal closes
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex(prevIndex => 
      prevIndex > 0 ? prevIndex - 1 : reviews.length > 0 ? reviews.length - 1 : 0
    );
  };

  const handleNextReview = () => {
    setCurrentReviewIndex(prevIndex => 
      prevIndex < reviews.length - 1 ? prevIndex + 1 : reviews.length > 0 ? 0 : 0
    );
  };

  if (loading) {
    return (
      <div className="review-results-page">
        <AppHeader />
        <main className="page-content">
          <PageTitleSection title="Review Results" />
          <div className="loading-state">Loading reviews...</div>
        </main>
        <AppFooter />
      </div>
    );
  }

  if (error) {
    return (
      <div className="review-results-page">
        <AppHeader />
        <main className="page-content">
          <PageTitleSection title="Review Results" />
          <div className="error-state">{error}</div>
        </main>
        <AppFooter />
      </div>
    );
  }

  return (
    <div className="review-results-page">
      <AppHeader />
      <main className="page-content">
        <PageTitleSection title="Review Results" />
        {reviews.length > 0 ? (
          <ReviewCarousel
            reviews={reviews}
            currentReviewIndex={currentReviewIndex}
            onReviewSelect={handleReviewSelect}
            onPrev={handlePrevReview}
            onNext={handleNextReview}
          />
        ) : (
          <div className="no-reviews-found">No reviews available.</div>
        )}
      </main>
      <ReviewModal
        isOpen={isModalOpen}
        review={selectedReview}
        onClose={handleCloseModal}
      />
      <AppFooter />
    </div>
  );
};

export default ReviewResults;