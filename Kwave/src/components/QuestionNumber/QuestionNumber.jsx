import React from "react";
import Button from "../common/Button";
import './QuestionNumber.css'

const QuestionNumber = ({ totalQuestions, currentIndex, answers, onJumpTo }) => {
  if (!totalQuestions || totalQuestions === 0) return null;

  return (
    <div className="question-grid">
      {Array.from({ length: totalQuestions }, (_, idx) => {
        let className = "outlineblack"; // mặc định chưa chọn

        if (answers[idx] !== null) className = "yellow"; // đã chọn
        if (idx === currentIndex) className = "fullgreen"; // câu hiện tại

        return (
          <Button
            key={idx}
            className={`Button ${className}`}
            onClick={() => onJumpTo(idx)}
          >
            {idx + 1}
          </Button>
        );
      })}
    </div>
  );
};

export default QuestionNumber;
