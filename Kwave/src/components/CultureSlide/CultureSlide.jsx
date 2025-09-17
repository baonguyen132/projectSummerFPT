import React from "react";
import "./CultureSlide.css";

const categories = [
  "Tất cả",
  "Âm nhạc",
  "Ẩm thực",
  "Du lịch",
  "Điện ảnh",
  "Gia đình & Xã hội",
  "Làm đẹp",
  "Lễ hội",
  "Lịch sử",
  "Trang phục",
  "Trường học",
  "Uống rượu",
  "Ứng xử"
];

const CultureSlide = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-slider">
      {categories.map((cat, index) => (
        <button
          key={index}
          className={`category-item ${
            selectedCategory === cat ? "active" : ""
          }`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CultureSlide;
