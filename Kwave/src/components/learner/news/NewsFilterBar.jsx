import React from 'react'

const NewsFilterBar = () => {
  return (
    <div className="bg-green-50 p-3 rounded-lg flex items-center gap-4">
      <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-green-500 text-green-500">
        <span>Chọn ngày</span>
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
      </button>

      <div className="flex-1 flex justify-center items-center gap-8">
        <FilterSelect label="Thể loại: All" />

        <div className="flex rounded-lg border border-green-500 overflow-hidden">
          <button className="px-4 py-2 bg-green-500 text-white">
            Hiện tại
          </button>
          <button className="px-4 py-2 bg-white">Yêu thích</button>
        </div>
         <FilterSelect label="Nguồn: All" />
      </div>
     
      <div className="ml-auto flex items-center gap-2">
        <button className="p-2 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
        <button className="p-2 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

const FilterSelect = ({ label }) => {
  return (
    <button className="flex items-center justify-between gap-2 px-4 py-2 bg-white rounded-lg border border-green-500">
      <span>{label}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 text-green-500"
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
