import React, { useState } from "react";
import "./css/ImageNavigator.css";
import Button from "../common/Button";

const ImageNavigator = () => {
  const [showScript, setShowScript] = useState(false);

  const toggleScript = () => {
    setShowScript(!showScript);
  };

  return (
    <div className="image-navigator">
      <div className="image-box">
        <img src="/bus.jpg" alt="illustration" className="image" />
      </div>

      <div className="image-controls">
        <Button><i className="bx bx-arrow-left-circle"></i></Button>
        <Button onClick={toggleScript}>
          {showScript ? (
            <i class='bxr  bx-eye-big'  ></i>    // mở mắt
          ) : (
            <i class='bxr  bx-eye-closed'  ></i>  // nhắm mắt
          )}
        </Button>
        <Button><i class='bxr  bx-volume-full'  ></i></Button>
        <Button><i className="bx bx-arrow-right-circle"></i></Button>

      </div>

      {/* Script hiển thị/ẩn */}
      {showScript && (
        <div className="script-box">
          <p>
            Đây là đoạn transcript ví dụ. 
            Sau này bạn có thể truyền props để hiển thị nội dung đề nghe.
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageNavigator;
