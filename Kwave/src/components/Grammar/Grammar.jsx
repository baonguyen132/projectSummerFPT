import React, { useState } from "react";
import Button from "../common/Button";
import "../Grammar/Grammar.css";

const Grammar = ({ grammarData }) => {
  const [answers, setAnswers] = useState(
    Array(grammarData.exercises.length).fill(null) // số bài tập theo data
  );

  const handleAnswer = (index, isCorrect) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[index] = isCorrect ? "correct" : "wrong";
      return newAnswers;
    });
  };

  return (
    <div className="grammar">
      <div className="grammar-card">
        <div className="grammar-name">
          <h3>{grammarData.title}</h3>
          <h3>Ngữ pháp</h3>
        </div>

        {/* Định nghĩa */}
        <div className="define">
          <h3>Định nghĩa</h3>
          <ul>
            {grammarData.definition.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Ví dụ */}
        <div className="example">
          <h3>Ví dụ</h3>
          <ul>
            {grammarData.examples.map((ex, idx) => (
              <li key={idx}>{ex}</li>
            ))}
          </ul>
        </div>

        {/* Bài tập */}
        <div className="homework">
          <h3>Bài tập</h3>
          <p>Hãy chọn câu đúng:</p>
          <ul>
            {grammarData.exercises.map((ex, idx) => (
              <li key={idx}>
                {ex.sentence}{" "}
                {answers[idx] === null ? (
                  <Button
                    className="circle-btn"
                    type="outlinegreen"
                    onClick={() => handleAnswer(idx, ex.isCorrect)}
                  >
                    O
                  </Button>
                ) : answers[idx] === "correct" ? (
                  <span className="icon correct">
                    <i className="bx bx-check"></i>
                  </span>
                ) : (
                  <span className="icon wrong">
                    <i className="bx bx-x"></i>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Grammar;
