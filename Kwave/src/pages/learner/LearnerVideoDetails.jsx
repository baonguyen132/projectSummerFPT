import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdPlay, IoMdHeart, IoMdHeartEmpty, IoMdRepeat, IoIosSearch } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { MdUpgrade, MdRestore } from 'react-icons/md';
import { AiOutlineStar, AiOutlineShareAlt, AiOutlineMail, AiOutlineInfoCircle } from 'react-icons/ai';

const LearnerVideoDetails = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('luyen-nghe');
  const [searchQuery, setSearchQuery] = useState('');
  const [favoriteVideos, setFavoriteVideos] = useState(new Set());
  const [repeatVideo, setRepeatVideo] = useState(false);

    // State cho toggle ngôn ngữ
    const [showKorean, setShowKorean] = useState(true);
    const [showVietnamese, setShowVietnamese] = useState(true);

  // Mock data - thay thế bằng dữ liệu thực tế sau
  const videos = [
    { id: 1, title: '뭐 하는 거야?', romanization: 'mwo haneun geoya', level: 'Beginner' },
    { id: 2, title: '끝났어- 끝났어-', romanization: 'kkeutnadeo- kkeutnadeo-', level: 'Beginner' },
    { id: 3, title: '영이 나빠', romanization: 'yeongi nappa', level: 'Intermediate' },
    { id: 4, title: '무례하다!', romanization: 'muryehada', level: 'Intermediate' },
    { id: 5, title: '죄송합니다!', romanization: 'joesonghapnita', level: 'Beginner' },
    { id: 6, title: '왜, 왜, 괜찮은데?', romanization: 'wae, wae, gwaenchaneunde?', level: 'Advanced' },
  ];

  const tabs = [
    { id: 'luyen-nghe', label: 'Luyện nghe' },
    { id: 'tu-vung', label: 'Từ vựng' },
    { id: 'ngu-phap', label: 'Ngữ pháp' },
    { id: 'cai-dat', label: 'Cài đặt' },
  ];

    // Mock transcript
    const transcript = '뭐 하는 거야? 끝났어- 끝났어- 영이 나빠 무례하다! 죄송합니다! 왜, 왜, 괜찮은데?';

    // Từ vựng xuất hiện trong transcript
    const vocabulary = [
      { word: '뭐', meaning: 'Gì', example: '뭐 하는 거야? (Bạn đang làm gì vậy?)' },
      { word: '하다', meaning: 'Làm', example: '무례하다! (Thật bất lịch sự!)' },
      { word: '끝나다', meaning: 'Kết thúc', example: '끝났어 (Đã kết thúc rồi)' },
      { word: '죄송합니다', meaning: 'Xin lỗi', example: '죄송합니다! (Xin lỗi!)' },
      { word: '괜찮다', meaning: 'Ổn, không sao', example: '괜찮은데? (Không sao mà?)' },
    ];

    // Ngữ pháp xuất hiện trong transcript
    const grammar = [
      {
        point: '거야',
        description: 'Dùng để nhấn mạnh ý định hoặc hỏi lý do.',
        example: '뭐 하는 거야? (Bạn đang làm gì vậy?)',
      },
      {
        point: '-았/었어',
        description: 'Thì quá khứ, dùng để nói về hành động đã hoàn thành.',
        example: '끝났어 (Đã kết thúc rồi)',
      },
      {
        point: '합니다',
        description: 'Dạng kính ngữ của động từ, dùng trong giao tiếp lịch sự.',
        example: '죄송합니다! (Xin lỗi!)',
      },
      {
        point: '은/는데',
        description: 'Dùng để nối hai mệnh đề, thể hiện sự đối lập hoặc bổ sung thông tin.',
        example: '괜찮은데? (Không sao mà?)',
      },
    ];

    const toggleFavorite = (videoId) => {
      setFavoriteVideos(prev => {
        const newSet = new Set(prev);
        if (newSet.has(videoId)) {
          newSet.delete(videoId);
        } else {
          newSet.add(videoId);
        }
        return newSet;
      });
    };

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.romanization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const VideoItem = ({ video }) => (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50">
      <div className="relative">
        <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
          <IoMdPlay className="w-6 h-6" />
        </button>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium">{video.title}</h3>
        <p className="text-gray-600">{video.romanization}</p>
        <p className="text-sm text-gray-500">{video.level}</p>
      </div>
      <div className="flex items-center gap-3">
        <button 
          onClick={() => toggleFavorite(video.id)}
          className="text-red-500 hover:text-red-600"
        >
          {favoriteVideos.has(video.id) ? (
            <IoMdHeart className="w-6 h-6" />
          ) : (
            <IoMdHeartEmpty className="w-6 h-6" />
          )}
        </button>
        <button 
          onClick={() => setRepeatVideo(!repeatVideo)}
          className={`${repeatVideo ? 'text-green-500' : 'text-gray-400'} hover:text-green-600`}
        >
          <IoMdRepeat className="w-6 h-6" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-green-500 hover:text-green-600"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" 
                />
              </svg>
              <span>Quay lại</span>
            </button>

            {/* History icon */}
            <button 
              onClick={() => navigate('/learner/history')}
              className="group flex items-center gap-2 bg-gradient-to-r from-green-50 to-white px-4 py-2 rounded-lg border border-green-500 hover:from-green-100 hover:to-green-50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 text-green-600 group-hover:rotate-180 transition-transform duration-500"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <span className="text-green-600 font-medium">Lịch sử</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Main video area */}
          <div className="col-span-2">
            {/* Video player */}
            <div className="aspect-video bg-black rounded-lg mb-6" />

            {/* Video controls */}
            <div className="bg-white rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">뭐 하는 거야?</h2>
                  <p className="text-gray-600">mwo haneun geoya</p>
                </div>
                <div className="flex gap-4">
                  <button className="text-red-500 hover:text-red-600">
                    <IoMdHeartEmpty className="w-6 h-6" />
                  </button>
                  <button className="text-gray-400 hover:text-green-600">
                    <IoMdRepeat className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Transcript or additional content */}
              <div className="bg-white rounded-lg p-4">
                {activeTab === 'luyen-nghe' && (
                  <>
                    <h3 className="font-medium mb-4">Transcript</h3>
                    <p className="text-gray-600">{transcript}</p>
                  </>
                )}
                {activeTab === 'tu-vung' && (
                  <>
                    <h3 className="font-medium mb-4">Từ vựng trong transcript</h3>
                    <ul className="space-y-2">
                      {vocabulary.map((item, idx) => (
                        <li key={idx} className="border-b pb-2">
                          <span className="font-semibold text-green-700">{item.word}</span> - <span className="text-gray-700">{item.meaning}</span>
                          <div className="text-sm text-gray-500 mt-1">Ví dụ: {item.example}</div>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {activeTab === 'ngu-phap' && (
                  <>
                    <h3 className="font-medium mb-4">Ngữ pháp trong transcript</h3>
                    <ul className="space-y-2">
                      {grammar.map((item, idx) => (
                        <li key={idx} className="border-b pb-2">
                          <span className="font-semibold text-green-700">{item.point}</span>
                          <div className="text-gray-700">{item.description}</div>
                          <div className="text-sm text-gray-500 mt-1">Ví dụ: {item.example}</div>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {activeTab === 'cai-dat' && (
                  <>
                    <h3 className="font-medium mb-4">Cài đặt</h3>
                    <div className="space-y-2">
                      {/* Hiện tiếng Hàn */}
                      <div className="flex items-center justify-between py-2 border-b">
                        <div className="flex items-center gap-2">
                          <span role="img" aria-label="Korean">🇰🇷</span>
                          <span>Hiện tiếng Hàn</span>
                        </div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked={showKorean} onChange={() => setShowKorean(v => !v)} className="sr-only" />
                          <span className={`w-10 h-6 flex items-center bg-green-100 rounded-full p-1 ${showKorean ? 'justify-end' : 'justify-start'}`}>
                            <span className={`w-5 h-5 bg-green-500 rounded-full transition-all duration-200`}></span>
                          </span>
                        </label>
                      </div>
                      {/* Hiện tiếng Việt */}
                      <div className="flex items-center justify-between py-2 border-b">
                        <div className="flex items-center gap-2">
                          <span role="img" aria-label="Vietnamese">🇻🇳</span>
                          <span>Hiện tiếng Việt</span>
                        </div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked={showVietnamese} onChange={() => setShowVietnamese(v => !v)} className="sr-only" />
                          <span className={`w-10 h-6 flex items-center bg-green-100 rounded-full p-1 ${showVietnamese ? 'justify-end' : 'justify-start'}`}>
                            <span className={`w-5 h-5 bg-green-500 rounded-full transition-all duration-200`}></span>
                          </span>
                        </label>
                      </div>
                      {/* Nâng cấp */}
                      <div className="flex items-center justify-between py-2 border-b">
                        <span className="flex items-center gap-2"> <MdUpgrade className="text-green-600" /> Nâng cấp</span>
                        <AiOutlineInfoCircle className="text-green-600" />
                      </div>
                      {/* Khôi phục thanh toán */}
                      <div className="flex items-center justify-between py-2 border-b">
                        <span className="flex items-center gap-2"> <MdRestore className="text-green-600" /> Khôi phục thanh toán</span>
                        <AiOutlineInfoCircle className="text-green-600" />
                      </div>
                      {/* Chia sẻ */}
                      <div className="flex items-center py-2 border-b gap-2">
                        <AiOutlineShareAlt className="text-green-600" /> Chia sẻ
                      </div>
                      {/* Góp ý */}
                      <div className="flex items-center py-2 border-b gap-2">
                        <AiOutlineMail className="text-green-600" /> Góp ý
                      </div>
                      {/* Đánh giá */}
                      <div className="flex items-center py-2 border-b gap-2">
                        <AiOutlineStar className="text-green-600" /> Đánh giá
                      </div>
                      {/* Nhóm Facebook */}
                      <div className="flex items-center py-2 gap-2">
                        <FaFacebook className="text-green-600" /> Nhóm Facebook
                      </div>
                    </div>
                  </>
                )}
              </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-1">
            {/* Tab navigation */}
            <div className="bg-white rounded-lg shadow mb-4">
              <div className="flex flex-col">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-6 text-left font-medium border-l-4 ${
                      activeTab === tab.id
                        ? 'bg-green-50 border-green-500 text-green-700'
                        : 'border-transparent hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search box */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Tìm kiếm video..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <IoIosSearch className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>

            {/* Video list */}
            <div className="space-y-2">
              {filteredVideos.map(video => (
                <VideoItem key={video.id} video={video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerVideoDetails;
