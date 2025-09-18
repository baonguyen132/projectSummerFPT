import React, { useState } from "react";
import "./Vocabulary.css";
import Button from '../common/Button'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Flashcard = ({ words }) => {
  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);
  const [state, setState] = useState(0);

  // Danh sách icon theo trạng thái
  const images = ["/chuadanhdautuvung.png", "/nhotuvung.png", "/chuanhotuvung.png"];
  const messages = [
    "Đã bỏ đánh dấu",
    "Đã đánh dấu là Nhớ từ vựng",
    "Đã đánh dấu là Chưa nhớ từ vựng"
  ];

  const handleFlip = () => setFlipped(!flipped);

  const handleNext = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % words.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + words.length) % words.length);
  };

  const handleCycleClick = () => {
    const nextState = (state + 1) % images.length;
    setState(nextState);
    toast.info(messages[nextState], { position: "top-center" });
  };

  return (
    <div className="flashcard-wrapper">
      <div className="flashcard-container">
        <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
          <div className="front">
            <p>{words[index].korean}</p>
          </div>
          <div className="back">
            <p>{words[index].vietnamese}</p>
          </div>
        </div>

        <div className="flashcard-controls">
          <Button type="white" onClick={handlePrev}>
            <i className="bx bx-chevrons-left"></i>
          </Button>
          <Button type="white">
            <i className="bx bx-volume-full"></i>
          </Button>
          <label>
            {index + 1} / {words.length}
          </label>
          <Button type="white" onClick={handleCycleClick}>
            <img
              src={images[state]}
              alt="status"
              style={{ width: "25px", height: "25px" }}
            />
          </Button>
          <Button type="white" onClick={handleNext}>
            <i className="bx bx-chevrons-right"></i>
          </Button>
        </div>
      </div>

      {/* Container để hiện thông báo */}
      <ToastContainer />
    </div>
  );
};

export default Flashcard;
