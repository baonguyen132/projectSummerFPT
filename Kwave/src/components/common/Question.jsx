import React from "react";
import "./css/Question.css";
import AnswerOption from "./AnswerOption";

const Question = ({ question, answers, correctIndex, explanation, selectedAnswer, onSelectAnswer }) => {
  const handleSelect = (idx) => {
    if (selectedAnswer === null) onSelectAnswer(idx);
  };

  return (
    <div className="question-card">
      <h3 className="question">{question}</h3>

      <div className="answers">
        {answers.map((ans, idx) => {
          let status = "default";
          if (selectedAnswer !== null && idx === selectedAnswer) {
            status = idx === correctIndex ? "correct" : "wrong";
          }

          return (
            <div key={idx} onClick={() => handleSelect(idx)}>
              <AnswerOption
                label={String.fromCharCode(65 + idx)}
                text={ans}
                status={status}
              />
            </div>
          );
        })}
      </div>

      {selectedAnswer !== null && (
        <p className="explanation">
          {selectedAnswer === correctIndex
            ? "✅ Chính xác! " + explanation
            : "❌ Sai rồi! " + explanation}
        </p>
      )}
    </div>
  );
};

export default Question;
