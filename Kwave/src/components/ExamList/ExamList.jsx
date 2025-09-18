import React from "react";
import Button from "../common/Button";
import "./ExamList.css";

const examData = {
  "TOPIK I": { real: 4, total: 6 },   // 4 đề thật → trắng, còn lại → xám
  "TOPIK II": { real: 3, total: 5 },
  ESP: { real: 2, total: 6 }
};

const ExamList = ({ examType }) => {
  const config = examData[examType] || { real: 0, total: 0 };
  const list = Array.from({ length: config.total }, (_, i) => `Đề ${i + 1}`);

  return (
    <div className="examlist">
      {list.map((exam, idx) => (
        <Button
          key={idx}
          className={`list-${idx + 1}`}
          type={idx < config.real ? "white" : "grey"}  // chọn màu theo index
          size="large"
        >
          {exam}
        </Button>
      ))}
    </div>
  );
};

export default ExamList;
