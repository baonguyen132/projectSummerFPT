import React from 'react';

const NewsHeader = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="K-Wave" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">K-Wave</h1>
      </div>
      <div className="w-[500px] relative">
        <input 
          type="text" 
          placeholder="Tìm kiếm" 
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-green-500"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewsHeader;