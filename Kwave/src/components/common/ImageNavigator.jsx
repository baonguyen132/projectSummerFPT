import React, { useState } from "react";
import "./css/ImageNavigator.css";
import Button from "../common/Button";

const ImageNavigator = ({ onPrev, onNext, image, script }) => {
  const [showScript, setShowScript] = useState(false);

  const toggleScript = () => setShowScript(!showScript);

  return (
    <div className="image-navigator">
      {/* Chỉ hiển thị ảnh nếu image tồn tại */}
      {image && (
        <div className="image-box">
          <img src={image} alt="illustration" className="image" />
        </div>
      )}

      <div className="image-controls">
        <Button type="white" onClick={onPrev}>
          <i className="bx bx-arrow-left-circle"></i>
        </Button>
        <Button type="white" onClick={toggleScript}>
          {showScript ? (
            <i className="bxr bx-eye-big"></i>
          ) : (
            <i className="bxr bx-eye-closed"></i>
          )}
        </Button>
        <Button type="white">
          <i className="bxr bx-volume-full"></i>
        </Button>
        <Button type="white" onClick={onNext}>
          <i className="bx bx-arrow-right-circle"></i>
        </Button>
      </div>

      {/* Hiển thị script nếu showScript = true và script tồn tại */}
      {showScript && script && (
        <div className="script-box">
          <p>{script}</p>
        </div>
      )}
    </div>
  );
};

export default ImageNavigator;
