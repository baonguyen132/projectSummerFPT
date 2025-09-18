import React from 'react';

const NewsSidebar = () => {
  return (
    <div className="w-96">
      <TopicSection />
      <VideoSection />
    </div>
  );
};

const TopicSection = () => {
  const topics = [
    [{ text: 'Động vật', width: 'w-28' }, { text: 'Quần áo & thời trang', width: 'w-56' }],
    [{ text: 'Ẩm thực', width: 'w-28' }, { text: 'Gia đình', width: 'w-28' }, { text: 'Sức khỏe', width: 'w-28' }],
    [{ text: 'Quốc gia', width: 'w-28' }, { text: 'Thời gian', width: 'w-28' }, { text: 'Phim ảnh', width: 'w-28' }],
    [{ text: 'Quân đội', width: 'w-28' }, { text: 'Cảm xúc', width: 'w-28' }, { text: 'Thiên nhiên', width: 'w-32' }],
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-green-900 mb-4 text-center">
        Đọc báo theo chủ đề
      </h2>
      <div className="space-y-3">
        {topics.map((row, index) => (
          <div key={index} className="flex justify-between items-center">
            {row.map((topic, idx) => (
              <TopicButton key={idx} text={topic.text} width={topic.width} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const TopicButton = ({ text, width }) => {
  return (
    <button className={`${width} px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors`}>
      {text}
    </button>
  );
};

const VideoSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-green-900 text-center">
        Học tiếng Hàn qua Video
      </h2>
      <VideoCard />
      <VideoCard />
    </div>
  );
};

const VideoCard = () => {
  return (
    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
      <img 
        src="https://dbnd.1cdn.vn/thumbs/1200x630/2024/12/30/images-4503789e48f18972563c8c5a560db4232246e69ea26ad1cd773db2250bfebf516093a4695276b7e8f07d1a8dcc61e45893202bf75346e796c7b93d381311208f-_img-5688.jpg" 
        alt="Video thumbnail" 
        className="w-full aspect-video rounded-lg mb-2 object-cover" 
      />
      <h3 className="text-lg text-green-900 mb-2">Things You Don't Wa...</h3>
      <div className="flex items-center gap-2 text-green-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        </svg>
        <span className="font-mono">2567</span>
      </div>
    </div>
  );
};

export default NewsSidebar;