// src/components/Lesson/Lesson.jsx
import React, { useState } from "react";
import Button from "../common/Button";
import VocabularyPage from "../Vocabulary/VocabularyPage"; 
import Grammar from "../Grammar/Grammar"; 
import Question from "../common/Question"; 
import "../Lesson/Lesson.css";
import ImageNavigator from "../common/ImageNavigator.jsx";
import listeningData from "../../data/Listening.js"; 
import grammarList from "../../data/Grammar.js";
import readingData from "../../data/Reading.js"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Lesson = ({ step }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [answers, setAnswers] = useState(Array(readingData.length).fill(null));

  const progressByStep = {
    0: ["completed","completed","completed","completed","completed","completed"], 
    1: ["completed","in-progress","locked","locked","locked","locked"], 
    2: ["locked","locked","locked","locked","locked","locked"], 
    3: ["locked","locked","locked","locked","locked","locked"], 
    4: ["locked","locked","locked","locked","locked","locked"], 
  };

  const progress = progressByStep[step] || ["locked","locked","locked","locked","locked","locked"];

  const lessons = [
    { key: "tuvung", label: "어휘\nTừ vựng", icon: "/alphabet.png" },
    { key: "nguphap", label: "문법\nNgữ pháp", icon: "/nguphap.png" },
    { key: "doc", label: "읽기\nLuyện Đọc", icon: "/doc.png" },
    { key: "viet", label: "쓰기\nLuyện Viết", icon: "/viet.png" },
    { key: "nghe", label: "듣기\nLuyện Nghe", icon: "/nghe.png" },
    { key: "noi", label: "말하기\nLuyện Nói", icon: "/noi.png" },
  ];

  const handleSelectAnswer = (idx, answerIdx) => {
    const newAnswers = [...answers];
    newAnswers[idx] = answerIdx;
    setAnswers(newAnswers);
  };

  if (step >= 6) {
    return (
      <div className="lesson-locked">
        🔒 Bài này bị khóa. Nâng cấp để mở khóa bài học!
      </div>
    );
  }

  const [listenIndex, setListenIndex] = useState(0);

  // Điều khiển prev/next cho ImageNavigator
  const handlePrev = () => {
    setListenIndex((prev) => (prev > 0 ? prev - 1 : listeningData.length - 1));
  };
  const handleNext = () => {
    setListenIndex((prev) => (prev < listeningData.length - 1 ? prev + 1 : 0));
  };


  // Hàm handle click tab
  const handleClickTab = (key, locked) => {
    if (locked) return;
    // Nếu luyện viết hoặc luyện nói, show toast
    if (key === "viet" || key === "noi") {
      toast.info("⚠️ Tính năng đang phát triển", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setActiveTab(key);
    }
  };

  return (
    <div className="lesson">
      {/* Danh sách card bài học */}
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
              onClick={() => handleClickTab(item.key, locked)}
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

      {/* Nội dung tab */}
      <div className="lesson-content">
        {activeTab === "tuvung" && <VocabularyPage />}
        {activeTab === "nguphap" && (
          <div className="grammar-list">
            {grammarList.map((item) => (
              <Grammar key={item.id} grammarData={item} />
            ))}
          </div>
        )}
        {activeTab === "doc" && (
          <div className="reading-list">
            {readingData.map((q, idx) => (
              <Question
                key={idx}
                question={q.question}
                answers={q.answers}
                correctIndex={q.correctIndex}
                explanation={q.explanation}
                selectedAnswer={answers[idx]}
                onSelectAnswer={(ansIdx) => handleSelectAnswer(idx, ansIdx)}
              />
            ))}
          </div>
        )}
        {activeTab === "nghe" && (
          <div className="listening-list">
            <ImageNavigator
              image={listeningData[listenIndex].image}
              script={listeningData[listenIndex].script}
              onPrev={handlePrev}
              onNext={handleNext}
            />
            <Question
              question={listeningData[listenIndex].question}
              answers={listeningData[listenIndex].answers}
              correctIndex={listeningData[listenIndex].correctIndex}
              explanation={listeningData[listenIndex].explanation}
              selectedAnswer={answers[listenIndex]}
              onSelectAnswer={(ansIdx) => handleSelectAnswer(listenIndex, ansIdx)}
            />
          </div>
        )}

      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Lesson;
