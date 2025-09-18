import React from 'react';
import NewsHeader from '../../components/news/NewsHeader';
import NewsFilterBar from '../../components/news/NewsFilterBar';
import NewsMainContent from '../../components/news/NewsMainContent';
import NewsSidebar from '../../components/news/NewsSidebar';

const LearnerNews = () => {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen bg-white">
      <NewsHeader />
      <div className="px-4">
        <NewsFilterBar />
      </div>
      <div className="px-4 py-6 flex gap-6">
        <NewsMainContent />
        <NewsSidebar />
      </div>
    </div>
  );
};

export default LearnerNews;
