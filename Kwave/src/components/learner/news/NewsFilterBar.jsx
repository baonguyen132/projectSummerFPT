import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const NewsFilterBar = () => {
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSource, setSelectedSource] = useState('all')
  const [showFavorites, setShowFavorites] = useState(false)
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  
  // Mock data - thay thế bằng dữ liệu thực tế sau
  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'entertainment', label: 'Giải trí' },
    { id: 'education', label: 'Giáo dục' },
    { id: 'culture', label: 'Văn hóa' },
    { id: 'sport', label: 'Thể thao' }
  ]

  const sources = [
    { id: 'all', label: 'Tất cả' },
    { id: 'kbs', label: 'KBS News' },
    { id: 'mbc', label: 'MBC News' },
    { id: 'sbs', label: 'SBS News' }
  ]

  const handleDateChange = (date) => {
    setSelectedDate(date)
    setIsDatePickerOpen(false)
  }

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
  }

  const handleSourceChange = (sourceId) => {
    setSelectedSource(sourceId)
  }

  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl shadow-sm border border-green-200 flex items-center gap-6">
      <div className="relative">
        <button 
          onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
          className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border-2 border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          <span>{selectedDate ? selectedDate.toLocaleDateString() : 'Chọn ngày'}</span>
        </button>
        
        {isDatePickerOpen && (
          <div className="absolute top-full left-0 mt-3 z-20">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
              calendarClassName="border-2 border-green-500 rounded-xl shadow-xl"
            />
          </div>
        )}
      </div>

      <div className="flex-1 flex justify-center items-center gap-10">
        <div className="relative group">
          <FilterSelect 
            label={`Thể loại: ${categories.find(c => c.id === selectedCategory)?.label}`}
            onClick={() => document.getElementById('category-dropdown').classList.toggle('hidden')}
          />
          <div 
            id="category-dropdown"
            className="hidden absolute top-full left-0 mt-3 w-52 bg-white rounded-xl border-2 border-green-500 shadow-xl z-20 overflow-hidden"
          >
            {categories.map(category => (
              <button
                key={category.id}
                className={`w-full text-left px-5 py-3 hover:bg-green-50 transition-all duration-200 ${
                  selectedCategory === category.id ? 'text-green-600 bg-green-50 font-semibold border-l-4 border-green-500' : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => {
                  handleCategoryChange(category.id)
                  document.getElementById('category-dropdown').classList.add('hidden')
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex rounded-xl border-2 border-green-500 overflow-hidden shadow-sm bg-white">
          <button 
            className={`px-6 py-3 transition-all duration-300 font-medium ${
              !showFavorites ? 'bg-green-500 text-white shadow-inner' : 'bg-white text-green-500 hover:bg-green-50'
            }`}
            onClick={() => setShowFavorites(false)}
          >
            📰 Hiện tại
          </button>
          <button 
            className={`px-6 py-3 transition-all duration-300 font-medium ${
              showFavorites ? 'bg-green-500 text-white shadow-inner' : 'bg-white text-green-500 hover:bg-green-50'
            }`}
            onClick={() => setShowFavorites(true)}
          >
            ❤️ Yêu thích
          </button>
        </div>

        <div className="relative group">
          <FilterSelect 
            label={`Nguồn: ${sources.find(s => s.id === selectedSource)?.label}`}
            onClick={() => document.getElementById('source-dropdown').classList.toggle('hidden')}
          />
          <div 
            id="source-dropdown"
            className="hidden absolute top-full left-0 mt-3 w-52 bg-white rounded-xl border-2 border-green-500 shadow-xl z-20 overflow-hidden"
          >
            {sources.map(source => (
              <button
                key={source.id}
                className={`w-full text-left px-5 py-3 hover:bg-green-50 transition-all duration-200 ${
                  selectedSource === source.id ? 'text-green-600 bg-green-50 font-semibold border-l-4 border-green-500' : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => {
                  handleSourceChange(source.id)
                  document.getElementById('source-dropdown').classList.add('hidden')
                }}
              >
                {source.label}
              </button>
            ))}
          </div>
        </div>
      </div>
     
      <div className="ml-auto flex items-center gap-3">
        <button 
          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg font-medium" 
          title="Xem video"
          onClick={() => navigate('/learner/video')}
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
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <span>Video</span>
        </button>
      </div>
    </div>
  )
}

const FilterSelect = ({ label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center justify-between gap-3 px-5 py-3 bg-white rounded-xl border-2 border-green-500 hover:bg-green-50 hover:border-green-600 transition-all duration-300 shadow-sm hover:shadow-md font-medium text-green-600 min-w-[160px]"
    >
      <span className="truncate">{label}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4 text-green-500 flex-shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  )
}

const FilterIcons = () => {
  return (
    <div className="flex justify-start items-start gap-5 overflow-hidden">
      <div className="w-12 h-12 relative overflow-hidden">
        <div className="w-10 h-9 left-[4.69px] top-[7.81px] absolute bg-green-400" />
      </div>
      <div className="w-14 h-14 relative overflow-hidden">
        <div className="w-10 h-10 left-[6.29px] top-[6.29px] absolute bg-green-400" />
      </div>
    </div>
  )
}

export default NewsFilterBar
