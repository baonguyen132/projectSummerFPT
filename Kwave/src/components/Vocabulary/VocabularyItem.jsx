import React, { useState } from "react";
import "../common/Button"; 

const VocabularyItem = () => {
  const [state, setState] = useState(0);

  // Danh sách icon theo trạng thái
  const images = ["/chuadanhdautuvung.png", "/nhotuvung.png", "/chuanhotuvung.png"];

    const handleCycleClick = () => {
    setState((prev) => (prev + 1) % images.length);
    };

  return (
    <div className="vocabulary-item-container">
      <div className="vocabulary-item">
        <small>1. 01/07/2005</small>
        <p className="korean">일출</p>
        <p className="vietnamese">mặt trời mọc</p>
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
          <i class='bxr  bx-volume-full'  ></i> 
        </button>
      </div>
    </div>
  );
};

export default VocabularyItem;
