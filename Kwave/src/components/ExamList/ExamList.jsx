import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";
import "./ExamList.css";

const examData = {
  "TOPIK I": { real: 4, total: 6 },
  "TOPIK II": { real: 3, total: 5 },
  ESP: { real: 2, total: 6 }
};

const ExamList = ({ examType }) => {
  const config = examData[examType] || { real: 0, total: 0 };
  const list = Array.from({ length: config.total }, (_, i) => `Đề ${i + 1}`);

  return (
    <div className="examlist">
      {list.map((exam, idx) => (
        <NavLink
          key={idx}
          to={`/exam/${examType}/${idx + 1}`}   // URL động
          style={{ textDecoration: "none" }}   // bỏ gạch chân
        >
          <Button
            className={`list-${idx + 1}`}
            type={idx < config.real ? "white" : "grey"}
            size="large"
          >
            {exam}
          </Button>
        </NavLink>
      ))}
    </div>
  );
};

export default ExamList;
