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
  const [favoriteSentences, setFavoriteSentences] = useState(new Set());
  const [repeatSentence, setRepeatSentence] = useState(false);

    // State cho toggle ngôn ngữ
    const [showKorean, setShowKorean] = useState(true);
    const [showVietnamese, setShowVietnamese] = useState(true);

  // Mock data - danh sách các câu trong video
  const sentences = [
    { id: 1, korean: '뭐 하는 거야?', romanization: 'mwo haneun geoya', vietnamese: 'Bạn đang làm gì vậy?', timestamp: '00:10', level: 'Beginner' },
    { id: 2, korean: '끝났어- 끝났어-', romanization: 'kkeutnadeo- kkeutnadeo-', vietnamese: 'Kết thúc rồi - Kết thúc rồi', timestamp: '00:25', level: 'Beginner' },
    { id: 3, korean: '영이 나빠', romanization: 'yeongi nappa', vietnamese: 'Yeong tệ quá', timestamp: '00:42', level: 'Intermediate' },
    { id: 4, korean: '무례하다!', romanization: 'muryehada', vietnamese: 'Thật bất lịch sự!', timestamp: '01:05', level: 'Intermediate' },
    { id: 5, korean: '죄송합니다!', romanization: 'joesonghapnita', vietnamese: 'Xin lỗi!', timestamp: '01:28', level: 'Beginner' },
    { id: 6, korean: '왜, 왜, 괜찮은데?', romanization: 'wae, wae, gwaenchaneunde?', vietnamese: 'Tại sao, tại sao, không sao mà?', timestamp: '01:55', level: 'Advanced' },
  ];

  const tabs = [
    { id: 'luyen-nghe', label: 'Luyện nghe' },
    { id: 'tu-vung', label: 'Từ vựng' },
    { id: 'ngu-phap', label: 'Ngữ pháp' },
    { id: 'cai-dat', label: 'Cài đặt' },
  ];

    // Mock transcriptx
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

    const toggleFavorite = (sentenceId) => {
      setFavoriteSentences(prev => {
        const newSet = new Set(prev);
        if (newSet.has(sentenceId)) {
          newSet.delete(sentenceId);
        } else {
          newSet.add(sentenceId);
        }
        return newSet;
      });
    };

  const filteredSentences = sentences.filter(sentence =>
    sentence.korean.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sentence.romanization.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sentence.vietnamese.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const SentenceItem = ({ sentence }) => (
    <div className="bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200 group">
      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0">
          <button 
            className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-lg"
            title={`Phát câu tại ${sentence.timestamp}`}
          >
            <IoMdPlay className="w-5 h-5 ml-0.5" />
          </button>
          <div className="absolute -bottom-1 -right-1 bg-blue-100 text-blue-700 text-xs px-1.5 py-0.5 rounded-full font-medium">
            {sentence.timestamp}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <h3 className="font-bold text-gray-800 mb-1 group-hover:text-green-600 transition-colors duration-300">
              {sentence.korean}
            </h3>
            <p className="text-green-600 text-sm font-medium mb-1 italic">{sentence.romanization}</p>
            <p className="text-gray-600 text-sm">{sentence.vietnamese}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
              sentence.level === 'Beginner' ? 'bg-green-100 text-green-700' :
              sentence.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {sentence.level}
            </span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => toggleFavorite(sentence.id)}
                className="text-red-400 hover:text-red-500 transition-colors duration-300"
                title="Thêm vào yêu thích"
              >
                {favoriteSentences.has(sentence.id) ? (
                  <IoMdHeart className="w-4 h-4" />
                ) : (
                  <IoMdHeartEmpty className="w-4 h-4" />
                )}
              </button>
              <button 
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                title="Lặp lại câu này"
              >
                <IoMdRepeat className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100 shadow-md backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left section with back button and title */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-3 text-green-600 hover:text-green-700 transition-all duration-300 bg-white px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-5 h-5"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" 
                  />
                </svg>
                <span className="font-medium">Quay lại</span>
              </button>
              
              {/* Page title */}
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-gray-800">🎥 Chi tiết Video</h1>
                <p className="text-sm text-gray-600">Học tiếng Hàn qua video</p>
              </div>
            </div>

            {/* Right section with actions */}
            <div className="flex items-center gap-3">
              {/* Favorite button */}
              <button 
                className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-4 h-4"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" 
                  />
                </svg>
                <span className="hidden sm:inline text-sm font-medium">Yêu thích</span>
              </button>

              {/* History button */}
              <button 
                onClick={() => navigate('/learner/history')}
                className="group flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2.5 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span className="font-medium">Lịch sử</span>
              </button>
            </div>
          </div>
          
          {/* Mobile title */}
          <div className="md:hidden mt-4 text-center">
            <h1 className="text-lg font-bold text-gray-800">🎥 Chi tiết Video</h1>
            <p className="text-sm text-gray-600">Học tiếng Hàn qua video</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main video area */}
          <div className="lg:col-span-2">
            {/* Video player */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl mb-6 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-all duration-300">
                  <IoMdPlay className="w-10 h-10 ml-1" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center justify-between text-white text-sm">
                    <span>00:00 / 02:30</span>
                    <div className="flex items-center gap-2">
                      <button className="hover:text-green-400 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.824L4.168 13.66A2.001 2.001 0 012.83 11H2a1 1 0 01-1-1V8a1 1 0 011-1h.83a2.001 2.001 0 011.337-2.66l4.215-3.164z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <div className="w-16 h-1 bg-gray-600 rounded-full">
                        <div className="w-1/3 h-full bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video info card */}
            <div className="bg-white rounded-xl p-6 mb-6 shadow-lg border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">뭐 하는 거야?</h2>
                  <p className="text-green-600 font-medium text-lg mb-1">mwo haneun geoya</p>
                  <p className="text-gray-500">Bạn đang làm gì vậy?</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-500 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <IoMdHeartEmpty className="w-5 h-5" />
                    <span className="font-medium">Yêu thích</span>
                  </button>
                  <button className="flex items-center gap-2 bg-green-50 hover:bg-green-100 text-green-600 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <IoMdRepeat className="w-5 h-5" />
                    <span className="font-medium">Lặp lại</span>
                  </button>
                </div>
              </div>
              
              {/* Progress and stats */}
              <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    1,234 lượt xem
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    2:30 phút
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    Level: Beginner
                  </span>
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 font-medium">4.8</span>
                </div>
              </div>
            </div>

            {/* Content area */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                {activeTab === 'luyen-nghe' && (
                  <>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.824L4.168 13.66A2.001 2.001 0 012.83 11H2a1 1 0 01-1-1V8a1 1 0 011-1h.83a2.001 2.001 0 011.337-2.66l4.215-3.164z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">🎧 Transcript</h3>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-400">
                      <p className="text-gray-700 text-lg leading-relaxed">{transcript}</p>
                    </div>
                  </>
                )}
                {activeTab === 'tu-vung' && (
                  <>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Từ vựng trong transcript</h3>
                    </div>
                    <div className="grid gap-4">
                      {vocabulary.map((item, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl font-bold text-green-700">{item.word}</span>
                                <span className="text-gray-600">→</span>
                                <span className="text-lg text-gray-800 font-medium">{item.meaning}</span>
                              </div>
                              <div className="bg-white rounded-md p-3 text-sm text-gray-600">
                                <span className="font-medium text-gray-800">Ví dụ:</span> {item.example}
                              </div>
                            </div>
                            <button className="text-green-600 hover:text-green-700 p-2">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {activeTab === 'ngu-phap' && (
                  <>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">📝 Ngữ pháp trong transcript</h3>
                    </div>
                    <div className="grid gap-6">
                      {grammar.map((item, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border border-purple-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {idx + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-purple-700 mb-2">{item.point}</h4>
                              <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>
                              <div className="bg-white rounded-lg p-3 border-l-4 border-purple-400">
                                <span className="font-medium text-gray-800">Ví dụ:</span>
                                <span className="text-gray-600 ml-2">{item.example}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {activeTab === 'cai-dat' && (
                  <>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Cài đặt học tập</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {/* Language Settings Section */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
                        <h4 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd"/>
                          </svg>
                          Hiển thị ngôn ngữ
                        </h4>
                        
                        <div className="space-y-3">
                          {/* Hiện tiếng Hàn */}
                          <div className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                한
                              </div>
                              <div>
                                <span className="font-semibold text-gray-800">Tiếng Hàn</span>
                                <p className="text-sm text-gray-500">Hiển thị văn bản tiếng Hàn</p>
                              </div>
                            </div>
                            <label className="inline-flex items-center cursor-pointer">
                              <input type="checkbox" checked={showKorean} onChange={() => setShowKorean(v => !v)} className="sr-only" />
                              <span className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${showKorean ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gray-300'}`}>
                                <span className={`w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 ${showKorean ? 'translate-x-6' : 'translate-x-0'}`}></span>
                              </span>
                            </label>
                          </div>
                          
                          {/* Hiện tiếng Việt */}
                          <div className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                V
                              </div>
                              <div>
                                <span className="font-semibold text-gray-800">Tiếng Việt</span>
                                <p className="text-sm text-gray-500">Hiển thị bản dịch tiếng Việt</p>
                              </div>
                            </div>
                            <label className="inline-flex items-center cursor-pointer">
                              <input type="checkbox" checked={showVietnamese} onChange={() => setShowVietnamese(v => !v)} className="sr-only" />
                              <span className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${showVietnamese ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gray-300'}`}>
                                <span className={`w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 ${showVietnamese ? 'translate-x-6' : 'translate-x-0'}`}></span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Premium Features Section */}
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-5 border border-yellow-200">
                        <h4 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          Tính năng Premium
                        </h4>
                        
                        <div className="space-y-3">
                          {/* Nâng cấp */}
                          <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                <MdUpgrade className="text-white w-5 h-5" />
                              </div>
                              <div className="text-left">
                                <span className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">Nâng cấp Premium</span>
                                <p className="text-sm text-gray-500">Mở khóa tất cả tính năng</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                                HOT
                              </span>
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                              </svg>
                            </div>
                          </button>
                          
                          {/* Khôi phục thanh toán */}
                          <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                <MdRestore className="text-white w-5 h-5" />
                              </div>
                              <div className="text-left">
                                <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Khôi phục thanh toán</span>
                                <p className="text-sm text-gray-500">Khôi phục gói Premium đã mua</p>
                              </div>
                            </div>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Community & Support Section */}
                      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-5 border border-green-200">
                        <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                          </svg>
                          Cộng đồng & Hỗ trợ
                        </h4>
                        
                        <div className="grid grid-cols-2 gap-3">
                          {/* Chia sẻ */}
                          <button className="bg-white rounded-lg p-3 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                              <AiOutlineShareAlt className="text-white w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Chia sẻ</span>
                          </button>
                          
                          {/* Góp ý */}
                          <button className="bg-white rounded-lg p-3 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                              <AiOutlineMail className="text-white w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">Góp ý</span>
                          </button>
                          
                          {/* Đánh giá */}
                          <button className="bg-white rounded-lg p-3 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group">
                            <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                              <AiOutlineStar className="text-white w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-yellow-600 transition-colors">Đánh giá</span>
                          </button>
                          
                          {/* Nhóm Facebook */}
                          <button className="bg-white rounded-lg p-3 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                              <FaFacebook className="text-white w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Facebook</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Tab navigation */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 mb-6 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4">
                <h3 className="text-white font-bold text-lg">📋 Menu học tập</h3>
              </div>
              <div className="flex flex-col">
                {tabs.map((tab, index) => {
                  const icons = ['🎧', '📚', '📝', '⚙️'];
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-6 text-left font-medium border-l-4 transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-500 text-green-700 shadow-inner'
                          : 'border-transparent hover:bg-gray-50 hover:border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{icons[index]}</span>
                        <span>{tab.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search box */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Tìm kiếm câu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-lg transition-all duration-300"
              />
              <IoIosSearch className="w-6 h-6 text-gray-400 absolute left-4 top-3.5" />
            </div>

            {/* Sentence list */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.824L4.168 13.66A2.001 2.001 0 012.83 11H2a1 1 0 01-1-1V8a1 1 0 011-1h.83a2.001 2.001 0 011.337-2.66l4.215-3.164z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800">Các câu trong video</h4>
              </div>
              {filteredSentences.map(sentence => (
                <SentenceItem key={sentence.id} sentence={sentence} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerVideoDetails;
