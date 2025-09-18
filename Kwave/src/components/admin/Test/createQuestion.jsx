import React from "react";
import styles from "./createQuestion.module.scss";
import InputGroup from "../../common/admin/inputGroup/inputGroup";

function CreateQuestion({ formData, handleInputChange }) {
  return (
    <>
      {/* Row 1: Thể loại và Điểm */}
      <div className={styles.formRow}>
        <InputGroup
          formData={formData}
          handleChange={handleInputChange}
          name="category"
          icon="bxr  bx-tabs"
          type="select"
          options={[
            { value: "", label: "Chọn thể loại" },
            { value: "듣기", label: "Nghe (듣기)" },
            { value: "읽기", label: "Đọc (읽기)" },
          ]}
          label="Thể loại câu hỏi"
          required
        />

        <InputGroup
          formData={formData}
          handleChange={handleInputChange}
          name="score"
          icon="bx bx-star"
          type="number"
          label="Điểm số"
          min="0.5"
          max="10"
          step="0.5"
          required
        />
      </div>

      {/* Row 2: Nội dung câu hỏi */}
      <InputGroup
        formData={formData}
        handleChange={handleInputChange}
        name="content"
        icon="bx-message-question-mark"
        type="textarea"
        label="Nội dung câu hỏi"
        placeholder="Nhập nội dung câu hỏi..."
        required
      />
      {/* Row 3: Đáp án A và B */}
      <div className={styles.formRow}>
        <InputGroup
          formData={formData}
          handleChange={handleInputChange}
          name="optionA"
          icon="bxr  bx-check-square"
          label="Đáp án A"
          placeholder="Nhập đáp án A..."
          required
        />

        <InputGroup
          formData={formData}
          handleChange={handleInputChange}
          name="optionB"
          icon="bxr  bx-check-square"
          label="Đáp án B"
          placeholder="Nhập đáp án B..."
          required
        />
      </div>

      {/* Row 4: Đáp án C và D */}
      <div className={styles.formRow}>
        <InputGroup
          formData={formData}
          handleChange={handleInputChange}
          name="optionC"
          icon="bxr  bx-check-square"
          label="Đáp án C"
          placeholder="Nhập đáp án C..."
          required
        />

        <InputGroup
          formData={formData}
          handleChange={handleInputChange}
          name="optionD"
          icon="bxr  bx-check-square"
          label="Đáp án D"
          placeholder="Nhập đáp án D..."
          required
        />
      </div>

      {/* Row 5: Đáp án đúng */}
      <InputGroup
        formData={formData}
        handleChange={handleInputChange}
        name="correctAnswer"
        icon="bx bx-check-circle"
        type="select"
        options={[
          { value: "", label: "Chọn đáp án đúng" },
          { value: "A", label: "A" },
          { value: "B", label: "B" },
          { value: "C", label: "C" },
          { value: "D", label: "D" },
        ]}
        label="Đáp án đúng"
        required
      />
      {/* Row 6: Lời giải */}
      <InputGroup
        formData={formData}
        handleChange={handleInputChange}
        name="explanation"
        icon="bxr  bx-light-bulb-on"
        type="textarea"
        label="Lời giải"
        placeholder="Nhập lời giải chi tiết..."
        required
      />
    </>
  );
}

export default CreateQuestion;
