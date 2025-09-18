// src/components/Exam/Exam.jsx
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ImageNavigator from "../common/ImageNavigator";
import Question from "../common/Question";
import FinishModal from "../common/FinishModal";
import Button from "../common/Button";
import QuestionNumber from "../QuestionNumber/QuestionNumber";
import questionsData from "../../data/Question";
import "./Exam.css";

const Exam = () => {
  const { examType, examId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const examMode = params.get("examMode") || "practice";
  const isRealExam = examMode === "real";

  const id = Number(examId);

  // --- Memo để tránh cảnh báo useCallback ---
  const questions = useMemo(
    () => questionsData[examType]?.[examMode]?.[id] || [],
    [examType, examMode, id]
  );

  // --- State ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);

  const examTimes = { "TOPIK I": 125, "TOPIK II": 70, ESP: 50 };
  const [timeLeft, setTimeLeft] = useState(isRealExam ? (examTimes[examType] || 0) * 60 : 0);

  // --- Timer ---
  useEffect(() => {
    if (!isRealExam || showFinishModal) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowFinishModal(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRealExam, showFinishModal]);

  // --- Format thời gian ---
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  // --- Chọn đáp án ---
  const handleSelectAnswer = (index) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
  };

  // --- Chuyển câu ---
  const handlePrev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNext = () => setCurrentIndex((prev) => (prev < questions.length - 1 ? prev + 1 : prev));
  const handleJumpTo = (idx) => setCurrentIndex(idx);

  // --- Nộp bài: mở modal Result ---
  const handleOpenResultModal = () => {
    setShowFinishModal(false);
    setShowResultModal(true);
  };

  // --- Thực sự submit và chuyển trang Result ---
  const handleSubmit = useCallback(() => {
    setShowResultModal(false);
    navigate("/result", {
      state: { examType, examId, examMode, answers, questions },
    });
  }, [answers, examId, examMode, examType, navigate, questions]);

  return (
    <div className="exam-container">
      <h2>
        제{examId}회 {examType} ({examMode === "real" ? "Thi thật" : "Thi thử"} - 2023년도 {examType})
      </h2>

      <div className="exam-section">
        <div>
          <QuestionNumber
            totalQuestions={questions.length}
            currentIndex={currentIndex}
            answers={answers}
            onJumpTo={handleJumpTo}
          />
          {isRealExam && <div className="exam-timer">⏱ {formatTime(timeLeft)}</div>}
          <Button onClick={() => setShowFinishModal(true)}>Nộp bài</Button>
        </div>

        <div className="exam-content">
          {questions.length === 0 ? (
            <p>❌ Không có dữ liệu câu hỏi cho đề này.</p>
          ) : (
            <>
              <ImageNavigator
                onPrev={handlePrev}
                onNext={handleNext}
                image={questions[currentIndex].image}
                script={questions[currentIndex].script}
              />
              <Question
                question={questions[currentIndex].question}
                answers={questions[currentIndex].answers}
                correctIndex={questions[currentIndex].correctIndex}
                explanation={questions[currentIndex].explanation}
                selectedAnswer={answers[currentIndex]}
                onSelectAnswer={handleSelectAnswer}
              />
            </>
          )}
        </div>
      </div>

      {/* Modal hỏi có muốn nộp bài */}
      <FinishModal
        isOpen={showFinishModal}
        onClose={() => setShowFinishModal(false)}
        onSubmit={handleOpenResultModal} // mở modal Result
        totalQuestions={questions.length}
        answers={answers}
      />

      {/* Modal Result ngay tại Exam */}
      {showResultModal && (
        <FinishModal
          isOpen={showResultModal}
          onClose={() => setShowResultModal(false)}
          onSubmit={handleSubmit} // thực sự submit → navigate("/result")
          totalQuestions={questions.length}
          answers={answers}
        />
      )}
    </div>
  );
};

export default Exam;
