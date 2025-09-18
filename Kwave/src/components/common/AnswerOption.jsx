import React from "react";
import "./css/AnswerOption.css";

const AnswerOption = ({ label, text, status }) => {
  // status: "correct" | "wrong" | "default"
  return (
    <div className={`answer-option ${status}`}>
      <span className="answer-label">{label}.</span>
      <span className="answer-text">{text}</span>
      {status === "correct" && <span className="icon correct">✔</span>}
      {status === "wrong" && <span className="icon wrong">✖</span>}
    </div>
  );
};

export default AnswerOption;
