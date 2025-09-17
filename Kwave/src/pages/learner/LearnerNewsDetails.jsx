import React from 'react';
import NewsHeader from '../../components/learner/news/NewsHeader';
import NewsDetailsNav from '../../components/learner/news/NewsDetailsNav';
import NewsContent from '../../components/learner/news/NewsContent';
import NewsSidebar from '../../components/learner/news/NewsSidebar';


const LearnerNewsDetails = () => {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen bg-white">
      <div className="sticky top-0 bg-white z-10">
        <NewsHeader />
        <div className="px-4 ">
          <NewsDetailsNav />
        </div>
       
      </div>

      <div className="px-4 py-6 flex gap-6">
        <NewsContent />
        <NewsSidebar />
      </div>


    </div>
  );
};

export default LearnerNewsDetails;
