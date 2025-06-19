import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/shared/Navigation';
import product_inputPage from './pages/product_inputPage';
import review_resultsPage from './pages/review_resultsPage';
import product_dataPage from './pages/product_dataPage';
import processingPage from './pages/processingPage';
import homePage from './pages/homePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
        <Route path="/product-input" element={<product_inputPage />} />
        <Route path="/review-results" element={<review_resultsPage />} />
        <Route path="/product-data" element={<product_dataPage />} />
        <Route path="/processing" element={<processingPage />} />
        <Route path="/" element={<homePage />} />
        <Route path="/home" element={<homePage />} />
            <Route path="*" element={<div className="flex items-center justify-center min-h-screen"><h1 className="text-2xl text-gray-600">Page Not Found</h1></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;