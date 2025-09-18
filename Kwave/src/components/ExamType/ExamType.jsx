import React, { useState } from "react";
import Button from "../common/Button";
import { NavLink, useLocation } from "react-router-dom";
import "./ExamType.css";

const examData = {
  "TOPIK I": {
    practice: { open: 3, total: 6 },
    real: { open: 4, total: 6 }
  },  
  "TOPIK II": {
    practice: { open: 2, total: 5 },
    real: { open: 3, total: 5 }
  },
  ESP: {
    practice: { open: 4, total: 6 },
    real: { open: 2, total: 6 }
  }
};

const ExamType = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const examMode = params.get("examMode") || "practice"; // default thi thử

  const [selectedType, setSelectedType] = useState(null);

  const handleSelectType = (type) => setSelectedType(type);

  // Lấy config đúng chế độ
  const config = selectedType ? examData[selectedType][examMode] : { open: 0, total: 0 };
  const list = selectedType
    ? Array.from({ length: config.total }, (_, i) => ({
        name: `Đề ${i + 1}`,
        open: i < config.open
      }))
    : [];

  return (
    <div className="examtype-container">
      <h2>Bài thi</h2>

      {/* Chọn loại đề */}
      <div className="examtype">
        <Button type="card" layout="vertical" onClick={() => handleSelectType("TOPIK I")}>
          Thi TOPIK I
        </Button>
        <Button type="card" layout="vertical" onClick={() => handleSelectType("TOPIK II")}>
          Thi TOPIK II
        </Button>
        <Button type="card" layout="vertical" onClick={() => handleSelectType("ESP")}>
          Thi ESP
        </Button>
      </div>

      {/* Hiển thị danh sách đề */}
      {selectedType && (
        <div className="examlist">
          {list.map((exam, idx) => (
            <NavLink
              key={idx}
              to={exam.open ? `/exam/${selectedType}/${idx + 1}?examMode=${examMode}` : "#"}
              style={{
                textDecoration: "none",
                pointerEvents: exam.open ? "auto" : "none"
              }}
            >
              <Button
                className={`list-${idx + 1}`}
                type={exam.open ? "white" : "grey"}
                size="large"
              >
                {exam.name}
              </Button>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExamType;
