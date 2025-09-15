import React from "react";
import Button from "../common/Button";
import "../Lesson/Lesson.css";

const Roadmap = () => {
  return (
    <div className="lesson">
      <Button type="card" layout="horizontal-on" className="btn nd-tuvung"
        icon="/alphabet.png">
        어휘<br/>Từ vựng
      </Button>

      <Button type="card" layout="horizontal-on" className="btn nd-nguphap"
        icon="/nguphap.png">
        문법<br/>Ngữ pháp
      </Button>

      <Button type="card" layout="horizontal-off" className="btn nd-doc"
        icon="/doc.png">
        읽기<br/>Luyện Đọc
      </Button>

      <Button type="card" layout="horizontal-off" className="btn nd-viet"
        icon="/viet.png">
        쓰기<br/>Luyện Viết
      </Button>
      
      <Button type="card" layout="horizontal-off" className="btn nd-nghe"
        icon="/nghe.png">
        듣기<br/>Luyện Nghe
      </Button>

      <Button type="card" layout="horizontal-off" className="btn nd-noi"
        icon="/noi.png">
        말하기<br/>Luyện Nói
      </Button>
    </div>
  );
};

export default Roadmap;
