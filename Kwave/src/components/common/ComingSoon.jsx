import React from "react";
import "./css/ComingSoon.css";

const ComingSoon = ({ text = "Tính năng sẽ được phát triển sau" }) => {
  return (
    <div className="coming-soon">
      <p>{text}</p>
    </div>
  );
};

export default ComingSoon;
