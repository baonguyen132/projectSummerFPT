import React, { useState } from "react";
import "./css/Question.css";
import AnswerOption from "./AnswerOption";

const Question = ({ question, answers, correctIndex, explanation }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className="question-card">
      <h3 className="question">{question}</h3>

      <div className="answers">
        {answers.map((ans, idx) => {
          let status = "default";
          if (selected !== null && idx === selected) {
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

      {selected !== null && (
        <p className="explanation">
          {selected === correctIndex
            ? "✅ Chính xác! " + explanation
            : "❌ Sai rồi! " + explanation}
        </p>
      )}
    </div>
  );
};

export default Question;
