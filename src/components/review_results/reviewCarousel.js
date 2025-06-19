import React, { useState, useEffect, useRef } from 'react';

const ReviewCarousel = ({ reviews, currentReviewIndex, onReviewSelect, onPrev, onNext }) => {
  const carouselTrackRef = useRef(null);
  const carouselViewportRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  // Effect to update carousel position when currentReviewIndex or reviews change
  useEffect(() => {
    const updateCarouselPosition = () => {
      if (carouselTrackRef.current && carouselViewportRef.current && reviews.length > 0) {
        const firstCard = carouselTrackRef.current.querySelector('.review-card');
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const gap = 20; // Corresponds to `gap-x-5` (20px) on `carousel-track`
        
        const offset = -currentReviewIndex * (cardWidth + gap) + (carouselViewportRef.current.offsetWidth / 2 - cardWidth / 2);
        
        carouselTrackRef.current.style.transform = `translateX(${offset}px)`;
      }
    };

    updateCarouselPosition(); // Initial position
    window.addEventListener('resize', updateCarouselPosition);

    return () => {
      window.removeEventListener('resize', updateCarouselPosition);
    };
  }, [currentReviewIndex, reviews]);

  const handleReviewClick = (index) => {
    setSelectedReview(reviews[index]);
    setModalVisible(true);
    // onReviewSelect(index); // This prop can be used if parent needs to know about modal open
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedReview(null);
  };

  const CarouselButton = ({ children, onClick, ariaLabel }) => (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="bg-white border border-gray-200 rounded-full w-11 h-11 cursor-pointer flex items-center justify-center shadow-md transition-all duration-200 shrink-0 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
    >
      {children}
    </button>
  );

  const ReviewCard = ({ review, index, isActive, onClick }) => {
    const shortText = review.reviewText.split('</p>')[0].replace('<p>', '') + '...';
    return (
      <div
        className={`review-card bg-white rounded-2xl shadow-md p-8 text-center flex-none max-w-[400px] md:max-w-none basis-[80%] md:basis-[60%] cursor-pointer transition-transform duration-400 ease-in-out ${isActive ? 'scale-100 opacity-100' : 'scale-85 opacity-60'}`}
        data-index={index}
        onClick={onClick}
      >
        <div className="flex flex-col items-center gap-2 mb-4">
          <img src={review.doctorImg} alt={review.doctorName} className="w-20 h-20 rounded-full object-cover shadow-md" />
          <span className="font-bold">{review.doctorName}</span>
        </div>
        <h2 className="text-xl font-bold mb-2">{review.reviewTitle}</h2>
        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: shortText }}></p>
      </div>
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans leading-relaxed overflow-x-hidden">
        {/* Header - Assuming this part of the HTML is outside the direct scope of ReviewCarousel component as per component plan,
            but included here as per "single-file React component" instruction. For a real app, this would be a separate layout. */}
        <header className="py-4">
          <div className="w-full max-w-screen-xl mx-auto px-8 flex items-center">
            <a href="/" className="text-2xl font-bold no-underline text-gray-900 flex items-center gap-2">
              <span className="text-orange-500">+</span><span>FrontrowMD</span>
            </a>
          </div>
        </header>

        <main className="py-12">
          <div className="w-full max-w-screen-xl mx-auto px-8">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold">Generated Review Templates</h1>
            </header>

            <div className="flex items-center justify-center gap-4">
              <CarouselButton onClick={onPrev} ariaLabel="Previous review">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-600">
                  <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                </svg>
              </CarouselButton>

              <div ref={carouselViewportRef} className="w-full max-w-4xl overflow-hidden">
                <div ref={carouselTrackRef} className="flex items-center transition-transform duration-400 ease-out gap-x-5">
                  {reviews.map((review, index) => (
                    <ReviewCard
                      key={index}
                      review={review}
                      index={index}
                      isActive={index === currentReviewIndex}
                      onClick={() => handleReviewClick(index)}
                    />
                  ))}
                </div>
              </div>

              <CarouselButton onClick={onNext} ariaLabel="Next review">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-600">
                  <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </CarouselButton>
            </div>
          </div>
        </main>
        
        {/* Footer - Assuming this part of the HTML is outside the direct scope of ReviewCarousel component. */}
        <footer className="py-12 text-center text-sm text-gray-400">
          <div className="w-full max-w-screen-xl mx-auto px-8"><p>&copy; 2024 FrontrowMD. All rights reserved.</p></div>
        </footer>
      </div>

      {/* Modal */}
      {modalVisible && selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-[1000]" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="bg-gray-50 rounded-2xl w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto relative p-12">
            <button onClick={closeModal} className="absolute top-4 right-4 bg-gray-200 border-none rounded-full w-8 h-8 cursor-pointer flex items-center justify-center z-10 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
              <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
                <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </button>
            
            <div className="flex flex-col items-center gap-2 mb-4">
              <img src={selectedReview.doctorImg} alt={selectedReview.doctorName} className="w-20 h-20 rounded-full object-cover shadow-md" />
              <span className="font-bold">{selectedReview.doctorName}</span>
            </div>
            <h2 className="text-xl font-bold mb-2">{selectedReview.reviewTitle}</h2>
            <div className="text-gray-600 [&>p]:mb-4" dangerouslySetInnerHTML={{ __html: selectedReview.reviewText }}></div>
            
            <h3 className="text-lg font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Supporting Research</h3>
            <ul className="list-none grid gap-4">
              {selectedReview.research && selectedReview.research.length > 0 ? (
                selectedReview.research.map((item, i) => (
                  <li key={i}>
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Source: <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-orange-500 no-underline hover:underline">{item.source}</a>
                      </p>
                      <p className="text-base pl-4 border-l-4 border-orange-500 text-gray-600">{item.excerpt}</p>
                    </div>
                  </li>
                ))
              ) : (
                <li>No specific studies cited for this review.</li>
              )}
            </ul>
            
            <h3 className="text-lg font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Generation Prompt</h3>
            <pre className="bg-gray-800 text-gray-200 p-4 rounded-xl font-mono text-sm whitespace-pre-wrap break-words">{selectedReview.prompt}</pre>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewCarousel;