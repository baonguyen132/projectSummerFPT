import React, { useState, useEffect } from "react";
import styles from "./testDetail.module.scss";
import DialogCustome from "../../../../components/common/admin/Dialog/DialogCustome";
import CreateQuestion from "../../../../components/admin/Test/createQuestion";
import {
  handleCreateQuestion,
  handleDeleteQuestion,
} from "../../../../services/admin/questionService";
import Cookies from "js-cookie";
import useFetchQuestion from "../../../../hooks/useQuestion";

function TestDetail({ id }) {
  const testId = id;
  const [data, setData] = useState([]);

  const { questions, loading, error } = useFetchQuestion({
    accessToken: Cookies.get("access_token"),
    dependencies: [],
    idTest: testId,
  });

  useEffect(() => {
    if (questions) {
      setData(questions);
    }
  }, [questions]);

  const handleDelete = async (questionId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa câu hỏi này?")) {
      await handleDeleteQuestion({
        id: questionId,
        accessToken: Cookies.get("access_token"),
        handleSuccess: ({ message }) => {
          alert(message);
          setData(data.filter((q) => q[0] !== questionId));
        },
      });
    }
  };

  const handleEdit = (question) => {
    console.log("Edit question:", question);
    // Implement edit functionality
  };

  const getTotalScore = () => {
    return questions.reduce((total, q) => total + q[3], 0);
  };

  // Thống kê theo thể loại
  const getCategoryStats = () => {
    const listening = questions.filter((q) => q[2] === "듣기").length;
    const reading = questions.filter((q) => q[2] === "읽기").length;
    return { listening, reading };
  };

  const typeStats = getCategoryStats();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [questionFormData, setQuestionFormData] = useState({
    content: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
    point: 1,
    type: "",
    solution: "",
  });

  const handleQuestionInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleCreateQuestion({
        id_test: testId,
        question: questionFormData.content,
        point: questionFormData.point,
        optionA: questionFormData.optionA,
        optionB: questionFormData.optionB,
        optionC: questionFormData.optionC,
        optionD: questionFormData.optionD,
        correctAnswer: questionFormData.correctAnswer,
        solution: questionFormData.solution,
        type: questionFormData.type,
        accessToken: Cookies.get("access_token"),
        handleSuccess: ({ dataQuestions, message }) => {
          console.log(message);
          // Optionally, you can reset the form or show a success message

          setData((prevData) => [
            ...prevData,
            [
              questionFormData.id,
              questionFormData.question,
              questionFormData.type,
              questionFormData.point,
              questionFormData.optionA,
              questionFormData.optionB,
              questionFormData.optionC,
              questionFormData.optionD,
              questionFormData.correctAnswer,
              questionFormData.solution,
              dataQuestions.created_at,
              dataQuestions.updated_at,
              questionFormData.id,
            ],
          ]);
          setIsDialogOpen(false);
          setQuestionFormData({
            content: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: "",
            point: 1,
            type: "",
            solution: "",
          });
        },
      });
    } catch (error) {
      console.error("Error creating question:", error);
    }

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
              Nghe: {typeStats.listening}
            </span>
            <span className={styles.statItem}>
              <i className="bx bx-book-open"></i>
              Đọc: {typeStats.reading}
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
            {data.map((question, index) => (
              <tr key={question[0]}>
                <td className={styles.sttColumn}>{index + 1}</td>
                <td className={styles.typeColumn}>
                  <span
                    className={`${styles.typeBadge} ${
                      question[2] === "듣기"
                        ? styles.listeningBadge
                        : styles.readingBadge
                    }`}
                  >
                    <i
                      className={
                        question[2] === "듣기"
                          ? "bx bx-headphone"
                          : "bx bx-book-open"
                      }
                    ></i>
                    {question[2] === "듣기" ? "Nghe" : "Đọc"}
                  </span>
                </td>
                <td className={styles.contentColumn}>
                  <div className={styles.questionContent}>{question[1]}</div>
                </td>
                <td className={styles.optionsColumn}>
                  <div className={styles.optionsList}>
                    <div className={styles.optionItem}>
                      <span className={styles.optionLabel}>A.</span>
                      <span className={styles.optionText}>{question[4]}</span>
                    </div>
                    <div className={styles.optionItem}>
                      <span className={styles.optionLabel}>B.</span>
                      <span className={styles.optionText}>{question[5]}</span>
                    </div>
                    <div className={styles.optionItem}>
                      <span className={styles.optionLabel}>C.</span>
                      <span className={styles.optionText}>{question[6]}</span>
                    </div>
                    <div className={styles.optionItem}>
                      <span className={styles.optionLabel}>D.</span>
                      <span className={styles.optionText}>{question[7]}</span>
                    </div>
                  </div>
                </td>
                <td className={styles.correctColumn}>
                  <span className={styles.correctAnswer}>{question[8]}</span>
                </td>
                <td className={styles.pointColumn}>
                  <span className={styles.pointValue}>{question[3]}</span>
                </td>
                <td className={styles.solutionColumn}>
                  <div className={styles.solutionText}>{question[9]}</div>
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
                      onClick={() => handleDelete(question[0])}
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
