import React, { useState } from "react";
import Button from "../common/Button";
import VocabularyPage from "../Vocabulary/VocabularyPage"; 
import Grammar from "../Grammar/Grammar"; 
import "../Lesson/Lesson.css";
import grammarList from "../../data/Grammar.js";

const Lesson = ({ step }) => {
  const [activeTab, setActiveTab] = useState(null); // tab đang chọn

  const progressByStep = {
    0: ["completed","completed","completed","completed","completed","completed"], 
    1: ["completed","in-progress","locked","locked","locked","locked"], 
    2: ["locked","locked","locked","locked","locked","locked"], 
    3: ["locked","locked","locked","locked","locked","locked"], 
    4: ["locked","locked","locked","locked","locked","locked"], 
  };

  if (step >= 6) {
    return (
      <div className="lesson-locked">
        🔒 Bài này bị khóa. Nâng cấp để mở khóa bài học!
      </div>
    );
  }

  const progress = progressByStep[step] || ["locked","locked","locked","locked","locked","locked"];

  const lessons = [
    { key: "tuvung", label: "어휘\nTừ vựng", icon: "/alphabet.png" },
    { key: "nguphap", label: "문법\nNgữ pháp", icon: "/nguphap.png" },
    { key: "doc", label: "읽기\nLuyện Đọc", icon: "/doc.png" },
    { key: "viet", label: "쓰기\nLuyện Viết", icon: "/viet.png" },
    { key: "nghe", label: "듣기\nLuyện Nghe", icon: "/nghe.png" },
    { key: "noi", label: "말하기\nLuyện Nói", icon: "/noi.png" },
  ];

  return (
    <div className="lesson">
      {/* danh sách card */}
      <div className="lesson-cards">
        {lessons.map((item, index) => {
          const locked = progress[index] === "locked";

          return (
            <Button
              key={item.key}
              type="card"
              layout={locked ? "horizontal-off" : "horizontal-on"}
              className={`btn nd-${item.key} ${progress[index]}`}
              icon={item.icon}
              onClick={() => !locked && setActiveTab(item.key)} // chỉ cho click khi ko bị khóa
            >
              {item.label.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              {progress[index] === "completed" && <span className="status done"></span>}
              {progress[index] === "in-progress" && <span className="status learning"></span>}
              {progress[index] === "locked" && <span className="status lock"></span>}
            </Button>
          );
        })}
      </div>

      {/* hiển thị nội dung tab được chọn */}
      <div className="lesson-content">
        {activeTab === "tuvung" && <VocabularyPage />}

        {activeTab === "nguphap" && (
          <div className="grammar-list">
            {grammarList.map((item) => (
              <Grammar key={item.id} grammarData={item} />
            ))}
          </div>
        )}

        {activeTab === "doc" && <div>📖 Trang Luyện Đọc</div>}

        {activeTab === "viet" && <div>✍️ Trang Luyện Viết</div>}

        {activeTab === "nghe" && <div>🎧 Trang Luyện Nghe</div>}
        
        {activeTab === "noi" && <div>🗣️ Trang Luyện Nói</div>}
      </div>
    </div>
  );
};

export default Lesson;
