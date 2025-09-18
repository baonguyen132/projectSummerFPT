import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import QuestionNumber from "../QuestionNumber/QuestionNumber";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Result.css";
import img8 from "../../asset/image/cheer/img8.png";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { examType, examId, examMode, answers, questions } = location.state || {};

  if (!questions || !answers) {
    return <p>Không có dữ liệu kết quả.</p>;
  }

  // tính tổng số câu đúng/sai
  const correctCount = questions.reduce(
    (acc, q, idx) => acc + (answers[idx] === q.correctIndex ? 1 : 0),
    0
  );
  const wrongCount = questions.length - correctCount;

  return (
    <div className="result-container">
      <ToastContainer position="top-center" autoClose={3000} />
      
      <h2>
        제{examId}회 {examType} ({examMode === "real" ? "Thi thật" : "Thi thử"} - 2023년도 {examType})
      </h2>

      <div className="result-section">
        <div>
          <QuestionNumber
            totalQuestions={questions.length}
            answers={answers}
            currentIndex={-1} // không highlight câu hiện tại
            onJumpTo={() => {}}
          />
        </div>

        <div className="result-content">
          <h2>Quá đỉnh! Ngữ pháp đã nằm gọn trong đầu rồi!</h2>
          <label>Điểm số:</label> <br />
          <b>{correctCount * 3}</b> {/* ví dụ mỗi câu 3 điểm */}

          <div className="result-note">
            <label>Thời gian:</label>
            <label>1:43:55s</label>
            <label>Tổng số câu đúng:</label>
            <label>{correctCount} câu</label>
            <label>Tổng số câu sai:</label>
            <label>{wrongCount} câu</label>
          </div>

          <img src={img8} alt="Chúc mừng" />

          <div className="result-button-container">
            <Button onClick={() => toast.info("Tính năng đang trong quá trình phát triển")}>Chi tiết</Button>
            <Button onClick={() => navigate("/")}>Trang chủ</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
