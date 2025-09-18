// src/components/common/FinishModal.jsx
import React from "react";
import "./css/FinishModal.css";
import Button from "./Button";
import QuestionNumber from "../QuestionNumber/QuestionNumber";

const FinishModal = ({ isOpen, onClose, onSubmit, totalQuestions, answers }) => {
  if (!isOpen) return null;

  return (
    <div className="finish-modal-overlay">
      <div className="finish-modal-container">
        <h1>Bạn có muốn nộp bài thi ngay bây giờ ?</h1>
        <h3>Nếu nộp thì sẽ không thể chỉnh sửa đáp án được !</h3>

        <QuestionNumber
          totalQuestions={totalQuestions}
          currentIndex={-1}   // không cần highlight câu hiện tại
          answers={answers}
          onJumpTo={() => {}} // không cho nhảy câu ở modal
        />

        <div className="finish-button-container">
          <Button className="button-submit" onClick={onSubmit}>
            Nộp bài
          </Button>
          <Button className="button-back" onClick={onClose}>
            Quay lại
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinishModal;
