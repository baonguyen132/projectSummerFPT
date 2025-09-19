import React, { useState, useEffect } from 'react';
import NewsHeader from '../../components/learner/news/NewsHeader';
import NewsMainContent from '../../components/learner/news/NewsMainContent';
import NewsSidebar from '../../components/learner/news/NewsSidebar';

const LearnerNews = () => {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen bg-white">
      <NewsHeader />
      <div className="px-4 py-6 flex gap-6">
        <NewsMainContent />
        <NewsSidebar />
      </div>
      
      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
};

// Component nút scroll to top
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          title="Lên đầu trang"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default LearnerNews;
