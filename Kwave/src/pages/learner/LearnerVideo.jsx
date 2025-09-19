import React, { useState, useEffect } from 'react'
import UpgradeBar from '../../components/learner/common/UpgradeBar'
import { useNavigate } from 'react-router-dom'

const LearnerVideo = () => {
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useState('newest') // 'newest' or 'popular'
  const [filteredVideos, setFilteredVideos] = useState([])
  
  // Mock data - thay thế bằng dữ liệu thực tế sau
  const allVideos = [
    { id: 1, title: '[명강의 모음] 건강하고 행복한 나로', subtitle: 'mwo haneun geoya', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '12:34', views: 123, date: new Date(2025, 8, 15), popularity: 85 },
    { id: 2, title: '[명강의 모음] 건강하고 행복한 나로', subtitle: 'kkeutnadeo- kkeutnadeo-', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '15:20', views: 245, date: new Date(2025, 8, 14), popularity: 92 },
    { id: 3, title: '[명강의 모음] 영이 나빠', subtitle: 'yeongi nappa', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '08:45', views: 189, date: new Date(2025, 8, 16), popularity: 78 },
    { id: 4, title: '[명강의 모음] 무례하다!', subtitle: 'muryehada', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '10:15', views: 432, date: new Date(2025, 8, 13), popularity: 95 },
    { id: 5, title: '[명강의 모음] 죄송합니다!', subtitle: 'joesonghapnita', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '11:30', views: 321, date: new Date(2025, 8, 12), popularity: 88 },
    { id: 6, title: '[명강의 모음] 죄송합니다!', subtitle: 'joesonghapnita', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '11:30', views: 321, date: new Date(2025, 8, 12), popularity: 88 },
    { id: 7, title: '[명강의 모음] 죄송합니다!', subtitle: 'joesonghapnita', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '11:30', views: 321, date: new Date(2025, 8, 12), popularity: 88 },
    { id: 8, title: '[명강의 모음] 죄송합니다!', subtitle: 'joesonghapnita', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '11:30', views: 321, date: new Date(2025, 8, 12), popularity: 88 },
    { id: 9, title: '[명강의 모음] 죄송합니다!', subtitle: 'joesonghapnita', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '11:30', views: 321, date: new Date(2025, 8, 12), popularity: 88 },
    { id: 10, title: '[명강의 모음] 죄송합니다!', subtitle: 'joesonghapnita', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '11:30', views: 321, date: new Date(2025, 8, 12), popularity: 88 },
    { id: 11, title: '[명강의 모음] 왜, 왜, 괜찮은데?', subtitle: 'wae, wae, gwaenchaneunde?', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '09:50', views: 567, date: new Date(2025, 8, 11), popularity: 91 }
  ]

  // Lọc và sắp xếp videos
  useEffect(() => {
    let result = [...allVideos]
    
    // Sắp xếp
    if (sortBy === 'newest') {
      result.sort((a, b) => b.date - a.date)
    } else if (sortBy === 'popular') {
      result.sort((a, b) => b.popularity - a.popularity)
    }
    
    setFilteredVideos(result)
  }, [sortBy])
  
  return (
    <div className="container mx-auto px-4">
      {/* Filter section with backdrop */}
      <div className="sticky top-0 z-40 mt-6 mb-2">
        {/* Backdrop to cover the gap */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-white"></div>
        
        {/* Filter bar */}
        <div className="relative top-4 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg shadow-lg border border-green-100">
          <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-4">
            {/* Back button */}
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-3 text-green-600 hover:text-green-700 transition-all duration-300 bg-white px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
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

            {/* Category filter */}
            <div className="relative">
              <select className="appearance-none bg-white px-4 py-2.5 pr-10 rounded-lg border border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-green-600 cursor-pointer transform hover:scale-105">
                <option>🎬 Tất cả thể loại</option>
                <option>📚 Học tập</option>
                <option>🎯 Giải trí</option>
                <option>📰 Tin tức</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Sort options */}
          <div className="flex items-center gap-3 bg-white p-1.5 rounded-xl shadow-md">
            <button 
              onClick={() => setSortBy('newest')}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                sortBy === 'newest' 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                  : 'text-green-600 hover:bg-green-50'
              }`}
            >
              🎥 Video
            </button>
            <button 
              onClick={() => setSortBy('popular')}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                sortBy === 'popular' 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                  : 'text-green-600 hover:bg-green-50'
              }`}
            >
              🎙️ Podcast
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Video grid section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>

      {/* Upgrade bar at bottom */}
      <div className="mt-12 mb-6">
        <UpgradeBar />
      </div>
    </div>
  )
}

const VideoCard = ({ id, title, subtitle, thumbnail, duration }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => navigate(`/learner/video/learn/${id}`)}
    >
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video object-cover"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
          {duration}
        </span>
      </div>
      
      {/* Video info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">
          {title}
        </h3>
        <p className="text-gray-600">{subtitle}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
          <span>123 lượt xem</span>
          <span>2 giờ trước</span>
        </div>
      </div>

       
    </div>

    
  )
}

export default LearnerVideo