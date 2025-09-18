import React, { useState, useEffect } from 'react'
import UpgradeBar from '../../components/learner/common/UpgradeBar'
import { useNavigate } from 'react-router-dom'

const LearnerVideo = () => {
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useState('newest') // 'newest' or 'popular'
  const [filteredVideos, setFilteredVideos] = useState([])
  
  // Mock data - thay thế bằng dữ liệu thực tế sau
  const allVideos = [
    { id: 1, title: '뭐 하는 거야?', subtitle: 'mwo haneun geoya', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '12:34', views: 123, date: new Date(2025, 8, 15), popularity: 85 },
    { id: 2, title: '끝났어- 끝났어-', subtitle: 'kkeutnadeo- kkeutnadeo-', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '15:20', views: 245, date: new Date(2025, 8, 14), popularity: 92 },
    { id: 3, title: '영이 나빠', subtitle: 'yeongi nappa', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '08:45', views: 189, date: new Date(2025, 8, 16), popularity: 78 },
    { id: 4, title: '무례하다!', subtitle: 'muryehada', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '10:15', views: 432, date: new Date(2025, 8, 13), popularity: 95 },
    { id: 5, title: '죄송합니다!', subtitle: 'joesonghapnita', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '11:30', views: 321, date: new Date(2025, 8, 12), popularity: 88 },
    { id: 6, title: '왜, 왜, 괜찮은데?', subtitle: 'wae, wae, gwaenchaneunde?', thumbnail: 'https://youcan.edu.vn/wp-content/uploads/2023/09/loi-ich-khi-hoc-tieng-han-qua-podcast-768x432.jpg', duration: '09:50', views: 567, date: new Date(2025, 8, 11), popularity: 91 }
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
      {/* Filter section */}
      <div className="bg-green-50 p-4 rounded-lg mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Back button */}
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-green-500 hover:text-green-600 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
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

            {/* Category filter */}
            <select className="px-4 py-2 rounded-lg border border-green-500">
              <option>Tất cả thể loại</option>
              <option>Học tập</option>
              <option>Giải trí</option>
              <option>Tin tức</option>
            </select>
            

          </div>
          
          {/* Sort options */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSortBy('newest')}
              className={`px-4 py-2 rounded-lg border border-green-500 transition-colors ${
                sortBy === 'newest' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white text-green-500 hover:bg-green-50'
              }`}
            >
              Video
            </button>
            <button 
              onClick={() => setSortBy('popular')}
              className={`px-4 py-2 rounded-lg border border-green-500 transition-colors ${
                sortBy === 'popular' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white text-green-500 hover:bg-green-50'
              }`}
            >
              Podcast
            </button>
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