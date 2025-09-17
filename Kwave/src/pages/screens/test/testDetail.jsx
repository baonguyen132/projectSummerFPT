import React, { useState } from "react";
import styles from "./testDetail.module.scss";
import DialogCustome from "../../../components/common/Dialog/DialogCustome";
import CreateQuestion from "../../../components/Test/createQuestion";

function TestDetail({ id }) {
  const testId = id;

  const [questions, setQuestions] = useState([
    {
      id: 1,
      content: "한국의 수도는 어디입니까?",
      optionA: "서울",
      optionB: "부산",
      optionC: "인천",
      optionD: "대구",
      correctAnswer: "A",
      score: 1,
      category: "읽기", // Thêm thể loại
      explanation: "한국의 수도는 서울입니다.",
    },
    {
      id: 2,
      content: "한글을 만든 왕은 누구입니까?",
      optionA: "세종대왕",
      optionB: "태조 이성계",
      optionC: "정조",
      optionD: "광개토대왕",
      correctAnswer: "A",
      score: 1,
      category: "듣기", // Thêm thể loại
      explanation:
        "세종대왕이 훈민정음을 창제하여 오늘날 한글의 기초가 되었습니다.",
    },
    {
      id: 3,
      content: "한국의 전통 의상은 무엇입니까?",
      optionA: "기모노",
      optionB: "한복",
      optionC: "치파오",
      optionD: "샤리",
      correctAnswer: "B",
      score: 1,
      category: "읽기", // Thêm thể loại
      explanation: "한복은 한국의 전통 의상입니다.",
    },
    {
      id: 4,
      content: "한국에서 가장 높은 산은 무엇입니까?",
      optionA: "한라산",
      optionB: "지리산",
      optionC: "설악산",
      optionD: "태백산",
      correctAnswer: "A",
      score: 1,
      category: "듣기", // Thêm thể loại
      explanation: "한라산은 제주도에 있으며 한국에서 가장 높은 산입니다.",
    },
    {
      id: 5,
      content: "한국의 전통 음식 김치는 주로 무엇으로 만듭니까?",
      optionA: "배추",
      optionB: "감자",
      optionC: "콩",
      optionD: "옥수수",
      correctAnswer: "A",
      score: 1,
      category: "읽기", // Thêm thể loại
      explanation: "김치는 주로 배추나 무로 만듭니다.",
    },
    {
      id: 6,
      content: "한국의 화폐 단위는 무엇입니까?",
      optionA: "엔",
      optionB: "위안",
      optionC: "원",
      optionD: "달러",
      correctAnswer: "C",
      score: 1,
      category: "듣기", // Thêm thể loại
      explanation: "한국의 화폐 단위는 원(₩)입니다.",
    },
    {
      id: 7,
      content: "다음 중 한국의 대표 명절은 무엇입니까?",
      optionA: "추석",
      optionB: "설날",
      optionC: "중추절",
      optionD: "크리스마스",
      correctAnswer: "A",
      score: 1,
      category: "읽기", // Thêm thể loại
      explanation: "추석은 한국의 대표적인 명절로, 한가위라고도 부릅니다.",
    },
    {
      id: 8,
      content: "한국에서 가장 많이 쓰이는 인사말은 무엇입니까?",
      optionA: "안녕하세요",
      optionB: "こんにちは",
      optionC: "你好",
      optionD: "Hello",
      correctAnswer: "A",
      score: 1,
      category: "듣기", // Thêm thể loại
      explanation: "'안녕하세요'는 한국에서 가장 일반적인 인사말입니다.",
    },
    {
      id: 9,
      content: "한국의 전통 놀이 중 윷을 던지는 놀이는 무엇입니까?",
      optionA: "윷놀이",
      optionB: "제기차기",
      optionC: "투호",
      optionD: "씨름",
      correctAnswer: "A",
      score: 1,
      category: "읽기", // Thêm thể loại
      explanation: "윷놀이에서는 윷을 던져 말판에서 말을 이동시킵니다.",
    },
    {
      id: 10,
      content: "한국의 국기는 무엇입니까?",
      optionA: "일장기",
      optionB: "성조기",
      optionC: "태극기",
      optionD: "오성홍기",
      correctAnswer: "C",
      score: 1,
      category: "듣기", // Thêm thể loại
      explanation: "태극기는 한국의 국기입니다.",
    },
  ]);

  const handleDelete = (questionId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa câu hỏi này?")) {
      setQuestions(questions.filter((q) => q.id !== questionId));
    }
  };

  const handleEdit = (question) => {
    console.log("Edit question:", question);
    // Implement edit functionality
  };

  const getTotalScore = () => {
    return questions.reduce((total, q) => total + q.score, 0);
  };

  // Thống kê theo thể loại
  const getCategoryStats = () => {
    const listening = questions.filter((q) => q.category === "듣기").length;
    const reading = questions.filter((q) => q.category === "읽기").length;
    return { listening, reading };
  };

  const categoryStats = getCategoryStats();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [questionFormData, setQuestionFormData] = useState({
    content: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
    score: 1,
    category: "",
    explanation: "",
  });

  const handleQuestionInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Handle form submission here
    onClose();
  };
  

  const closeDialog = () => {
    setIsDialogOpen(false);
    
  };

  return (
    <div className={styles.testDetailContainer}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <h1>Chi tiết bài kiểm tra #{testId}</h1>
          <div className={styles.stats}>
            <span className={styles.statItem}>
              <i className="bx bx-list-ul"></i>
              Tổng câu hỏi: {questions.length}
            </span>
            <span className={styles.statItem}>
              <i className="bx bx-star"></i>
              Tổng điểm: {getTotalScore()}
            </span>
            <span className={styles.statItem}>
              <i className="bx bx-headphone"></i>
              Nghe: {categoryStats.listening}
            </span>
            <span className={styles.statItem}>
              <i className="bx bx-book-open"></i>
              Đọc: {categoryStats.reading}
            </span>
          </div>
        </div>
        <button
          className={styles.addButton}
          onClick={() => setIsDialogOpen(true)}
        >
          <i className="bx bx-plus"></i>
          Thêm câu hỏi
        </button>
      </div>

      {/* Table */}
      <div className={styles.tableContainer}>
        <table className={styles.questionsTable}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Thể loại</th>
              <th>Nội dung câu hỏi</th>
              <th>Các đáp án</th>
              <th>Đáp án đúng</th>
              <th>Điểm</th>
              <th>Lời giải</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={question.id}>
                <td className={styles.sttColumn}>{index + 1}</td>
                <td className={styles.categoryColumn}>
                  <span
                    className={`${styles.categoryBadge} ${
                      question.category === "듣기"
                        ? styles.listeningBadge
                        : styles.readingBadge
                    }`}
                  >
                    <i
                      className={
                        question.category === "듣기"
                          ? "bx bx-headphone"
                          : "bx bx-book-open"
                      }
                    ></i>
                    {question.category === "듣기" ? "Nghe" : "Đọc"}
                  </span>
                </td>
                <td className={styles.contentColumn}>
                  <div className={styles.questionContent}>
                    {question.content}
                  </div>
                </td>
                <td className={styles.optionsColumn}>
                  <div className={styles.optionsList}>
                    <div className={styles.optionItem}>
                      <span className={styles.optionLabel}>A.</span>
                      <span className={styles.optionText}>
                        {question.optionA}
                      </span>
                    </div>
                    <div className={styles.optionItem}>
                      <span className={styles.optionLabel}>B.</span>
                      <span className={styles.optionText}>
                        {question.optionB}
                      </span>
                    </div>
                    <div className={styles.optionItem}>
                      <span className={styles.optionLabel}>C.</span>
                      <span className={styles.optionText}>
                        {question.optionC}
                      </span>
                    </div>
                    <div className={styles.optionItem}>
                      <span className={styles.optionLabel}>D.</span>
                      <span className={styles.optionText}>
                        {question.optionD}
                      </span>
                    </div>
                  </div>
                </td>
                <td className={styles.correctColumn}>
                  <span className={styles.correctAnswer}>
                    {question.correctAnswer}
                  </span>
                </td>
                <td className={styles.scoreColumn}>
                  <span className={styles.scoreValue}>{question.score}</span>
                </td>
                <td className={styles.explanationColumn}>
                  <div className={styles.explanationText}>
                    {question.explanation}
                  </div>
                </td>
                <td className={styles.actionColumn}>
                  <div className={styles.actionButtons}>
                    <button
                      className={styles.editButton}
                      onClick={() => handleEdit(question)}
                      title="Chỉnh sửa"
                    >
                      <i className="bx bx-edit"></i>
                    </button>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDelete(question.id)}
                      title="Xóa"
                    >
                      <i className="bx bx-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {questions.length === 0 && (
          <div className={styles.emptyState}>
            <i className="bx bx-file-blank"></i>
            <h3>Chưa có câu hỏi nào</h3>
            <p>Nhấn "Thêm câu hỏi" để bắt đầu tạo bài kiểm tra</p>
          </div>
        )}

        {isDialogOpen && (
          <DialogCustome
            isOpen={isDialogOpen}
            onClose={closeDialog}
            title="Tạo câu hỏi mới"
            handleSubmit={handleSubmit}
          >
            <CreateQuestion
              formData={questionFormData}
              handleInputChange={handleQuestionInputChange}
            />
          </DialogCustome>
        )}
      </div>
    </div>
  );
}

export default TestDetail;
