import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsMainContent = () => {
  return (
    <div className="flex-1">
      <FeaturedNews />
      <NewsItemsList />
    </div>
  );
};

const FeaturedNews = () => {
  const navigate = useNavigate();
  
  return (
    <article 
      className="mb-8 cursor-pointer hover:opacity-90 transition-opacity"
      onClick={() => navigate('/learner/news/1')}
    >
      <img 
        src="https://dbnd.1cdn.vn/thumbs/1200x630/2024/12/30/images-4503789e48f18972563c8c5a560db4232246e69ea26ad1cd773db2250bfebf516093a4695276b7e8f07d1a8dcc61e45893202bf75346e796c7b93d381311208f-_img-5688.jpg" 
        alt="Featured news" 
        className="w-full h-[400px] object-cover rounded-lg mb-4" 
      />
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">미식의 나라 프랑스도 '꼬북칩'에 푹 빠졌네</h2>
        <p className="text-gray-700">
          22일(현지시간) 미국 캘리포니아 주 로스앤젤레스(LA)에 휴머노이드(사람을 닮은 로봇)가 팝콘을 파는 신기...
        </p>
        <div className="text-sm text-gray-500">
          Nguồn: Kids Donga · 2025-07-24 08:00:00
        </div>
      </div>
    </article>
  );
};

const NewsItemsList = () => {
  return (
    <div className="space-y-6">
      <NewsItem id="2" />
      <Divider />
      <NewsItem id="3" />
      <Divider />
    </div>
  );
};

const NewsItem = ({ id }) => {
  const navigate = useNavigate();

  return (
    <article 
      className="flex gap-6 cursor-pointer hover:opacity-90 transition-opacity"
      onClick={() => navigate(`/learner/news/${id}`)}
    >
      <img 
        src="https://dbnd.1cdn.vn/thumbs/1200x630/2024/12/30/images-4503789e48f18972563c8c5a560db4232246e69ea26ad1cd773db2250bfebf516093a4695276b7e8f07d1a8dcc61e45893202bf75346e796c7b93d381311208f-_img-5688.jpg" 
        alt="News thumbnail" 
        className="w-64 h-40 object-cover rounded-lg border border-green-500" 
      />
      <div className="flex-1 space-y-2">
        <h3 className="text-xl font-bold">미식의 나라 프랑스도 '꼬북칩'에 푹 빠졌네</h3>
        <p className="text-gray-700">
          22일(현지시간) 미국 캘리포니아 주 로스앤젤레스(LA)에 휴머노이드(사람을 닮은 로봇)가 팝콘을 파는 신기한 휴게소가 문을 열었어요.
        </p>
        <div className="text-sm text-gray-500">
          Nguồn: Kids Donga · 2025-07-24 08:00:00
        </div>
      </div>
    </article>
  );
};

const Divider = () => {
  return (
    <div className="w-[959px] p-2.5 inline-flex justify-start items-start gap-2.5 overflow-hidden">
      <div className="w-[959px] h-0 outline outline-4 outline-offset-[-2px] outline-green-600"></div>
    </div>
  );
};

export default NewsMainContent;