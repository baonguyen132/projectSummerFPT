import React, { useState } from "react";
import styles from "./test.module.scss";
import FloatingButton from "../../../components/common/floatingButton/floatingButton";
import ItemTest from "../../../components/Test/ItemTest";
import TestDetail from "./testDetail";
import DialogCustome from "../../../components/common/Dialog/DialogCustome";
import CreateTest from "../../../components/Test/createTest";
function Test() {
  const [isOpenDetail, setIsOpenDetail] = useState(0);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const data = [
    {
      id: 1,
      name: "Tổng hợp câu hỏi",
      count: 200,
      time: 1000,
      description: "Đề thi tổng hợp các câu hỏi",
      image: "https://example.com/image1.jpg",
      createdAt: "2023-10-01",
    },
    {
      id: 2,
      name: "Topik 1 - Đề 46",
      count: 200,
      time: 2,
      description: "Đề thi Topik 1 - Đề 46",
      image: "https://example.com/image1.jpg",
      createdAt: "2023-10-01",
    },
    {
      id: 3,
      name: "Topik 1 - Đề 47",
      count: 200,
      time: 2,
      description: "Đề thi Topik 1 - Đề 47",
      image: "https://example.com/image1.jpg",
      createdAt: "2023-10-01",
    },
    {
      id: 4,
      name: "Topik 1 - Đề 48",
      count: 200,
      time: 2,
      description: "Đề thi Topik 1 - Đề 48",
      image: "https://example.com/image1.jpg",
      createdAt: "2023-10-01",
    },
    {
      id: 5,
      name: "Topik 1 - Đề 49",
      count: 200,
      time: 2,
      description: "Đề thi Topik 1 - Đề 49",
      image: "https://example.com/image1.jpg",
      createdAt: "2023-10-01",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    count: 0,
    time: 0,
    description: "",
    image: "",
    createdAt: new Date().toISOString().split("T")[0],
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  if (isOpenDetail !== 0) {
    return (
      <>
      <TestDetail id={isOpenDetail} />
      <FloatingButton
          handleClick={() => {
            if (isOpenDetail != 0) {
              setIsOpenDetail(0);
            }
          }}
          icon="bxr  bx-arrow-in-left-square-half"
          title="Quay lại"
        />
    </>
    )
    ;
  } else {
    return (
      <div className={styles.testContainer}>
        {data.map((item) => (
          <ItemTest
            key={item.id}
            item={item}
            handleViewDetails={() => {
              setIsOpenDetail(item.id);
            }}
          />
        ))}

        <FloatingButton
          handleClick={() => {
            setIsOpenDialog(true);
          }}
          title="Thêm bài kiểm tra mới"
        />
        <DialogCustome 
          isOpen={isOpenDialog}
          onClose={() => setIsOpenDialog(false)}
          title="Thêm bài kiểm tra mới"
          handleSubmit={handleFormSubmit}
        >
          <CreateTest formData={formData} handleInputChange={handleFormChange}  />
        </DialogCustome>
      </div>
    );
  }
}

export default Test;
