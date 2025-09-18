import React from "react";
import Button from "../common/Button";
import "./ExamType.css";

const ExamType = ({ onSelectType }) => {
  return (
    <div className="examtype">
      <Button
        type="card"
        layout="vertical"
        className="btn exam-I"
        icon="/exam.png"
        onClick={() => onSelectType("TOPIK I")}
      >
        Thi TOPIK I
      </Button>

      <Button
        type="card"
        layout="vertical"
        className="btn exam-II"
        icon="/exam.png"
        onClick={() => onSelectType("TOPIK II")}
      >
        Thi TOPIK II
      </Button>

      <Button
        type="card"
        layout="vertical"
        className="btn exam-ESP"
        icon="/exam.png"
        onClick={() => onSelectType("ESP")}
      >
        Thi ESP
      </Button>
    </div>
  );
};

export default ExamType;
