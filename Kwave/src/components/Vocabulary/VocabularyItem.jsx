import React, { useState } from "react";
import "../common/Button"; 
import { toast } from "react-toastify";

const VocabularyItem = ({ index, word }) => {
  const [state, setState] = useState(0);

  // Danh sách icon theo trạng thái
  const images = ["/chuadanhdautuvung.png", "/nhotuvung.png", "/chuanhotuvung.png"];
  const messages = [
    "Đã bỏ đánh dấu",
    "Đã đánh dấu là Nhớ từ vựng",
    "Đã đánh dấu là Chưa nhớ từ vựng"
  ];

  const handleCycleClick = () => {
    const nextState = (state + 1) % images.length;
    setState(nextState);
    toast.info(messages[nextState], { position: "top-center" });
  };

  return (
    <div className="vocabulary-item-container">
      <div className="vocabulary-item">
        {/* hiển thị số thứ tự + ngày (nếu có) */}
        <small>{index + 1}. {word.date || "Chưa có ngày"}</small>
        <p className="korean">{word.korean}</p>
        <p className="vietnamese">{word.vietnamese}</p>
      </div>

      <div className="vocabulary-actions">
        <button className="button white-search large" onClick={handleCycleClick}>
          <img
            src={images[state]}
            alt="status"
            style={{ width: "20px", height: "20px" }}
          />
        </button>

        <button className="button white-search large">
          <i className="bx bx-volume-full"></i>
        </button>
      </div>
    </div>
  );
};

export default VocabularyItem;
