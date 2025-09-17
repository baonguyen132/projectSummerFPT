import React from 'react';

const UpgradeBar = () => {
  return (
    <div className="bg-[#E8FFF1] px-4 py-3 flex items-center justify-between">
      <span className="text-[#00A551] font-medium">
        Nâng cấp ngay để sử dụng tính năng dịch bài
      </span>
      <button className="bg-[#00A551] text-white px-6 py-2 rounded-full hover:bg-[#008543] transition-colors duration-200 text-sm font-medium">
        Nâng cấp ngay
      </button>
    </div>
  );
};

export default UpgradeBar;