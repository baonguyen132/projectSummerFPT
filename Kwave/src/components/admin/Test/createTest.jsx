import React from "react";
import styles from "./createTest.module.scss";
import InputGroup from "../../common/admin/inputGroup/inputGroup";

function CreateTest({ formData, handleInputChange }) {
  return (
    <>
      {/* Row 1: Tên bài test */}
      <InputGroup
        formData={formData}
        handleChange={handleInputChange}
        name="name"
        icon="bx bx-edit"
        label="Tên bài test"
        placeholder="Nhập tên bài test..."
        required
      />

      {/* Row 2: Số câu hỏi và Thời gian */}
      <div className={styles.formRow}>
        <InputGroup
          formData={formData}
          handleChange={handleInputChange}
          name="time"
          icon="bxr  bx-alarm"
          type="number"
          label="Thời gian (phút)"
          placeholder="Nhập thời gian làm bài..."
          min="1"
          max="180"
          required
        />
      </div>

      {/* Row 3: Mô tả */}
      <InputGroup
        formData={formData}
        handleChange={handleInputChange}
        name="description"
        icon="bxr  bx-message-minus"
        type="textarea"
        label="Mô tả bài test"
        placeholder="Nhập mô tả chi tiết về bài test..."
        required
      />

      {/* Row 4: URL hình ảnh */}
      <InputGroup
        formData={formData}
        handleChange={handleInputChange}
        name="image"
        icon="bx bx-image"
        label="URL hình ảnh"
        placeholder="Nhập URL hình ảnh đại diện..."
      />
    </>
  );
}

export default CreateTest;