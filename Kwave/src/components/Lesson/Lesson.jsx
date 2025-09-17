import React from "react";
import Button from "../common/Button";
import "../Lesson/Lesson.css";

const Lesson = ({ step }) => {
  // trạng thái theo step
  const progressByStep = {
    0: ["completed","completed","completed","completed","completed","completed"], // Bài 1 học hết
    1: ["completed","in-progress","locked","locked","locked","locked"], // Bài 2 học tới ngữ pháp
    2: ["locked","locked","locked","locked","locked","locked"], // Bài 3 chưa học
    3: ["locked","locked","locked","locked","locked","locked"], // Bài 4
    4: ["locked","locked","locked","locked","locked","locked"], // Bài 5
  };

  // Nếu step > 5 thì bị khóa -> không mở Lesson
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
      {lessons.map((item, index) => (
        <Button
          key={item.key}
          type="card"
          layout={progress[index] === "locked" ? "horizontal-off" : "horizontal-on"}
          className={`btn nd-${item.key} ${progress[index]}`}
          icon={item.icon}
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
      ))}
    </div>
  );
};

export default Lesson;
