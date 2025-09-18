import React from "react";
import styles from "./lesson.module.scss";
import ItemLesson from "../../../../components/admin/lesson/itemLesson";
import FloatingButton from "../../../../components/common/admin/floatingButton/FloatingButton";
function Lesson() {
  const data = [
    {
      id: 1,
      name: "Lesson 1: 소개",
      description: "Basic Introduction",
      createdAt: "2023-10-01",
      updatedAt: "2023-10-05",
    },
    {
      id: 2,
      name: "Lesson 2: 친구",
      description: "Talking about Friends",
      createdAt: "2023-10-02",
      updatedAt: "2023-10-06",
    },
    {
      id: 3,
      name: "Lesson 3: 취미",
      description: "Talking about Hobbies",
      createdAt: "2023-10-03",
      updatedAt: "2023-10-07",
    },
    {
      id: 4,
      name: "Lesson 4: 가족",
      description: "Talking about Family",
      createdAt: "2023-10-04",
      updatedAt: "2023-10-08",
    },
  ];
  return (
    <div className={styles.lesson}>
      {data.map((item) => (
        <ItemLesson
          key={item.id}
          item={item}
          handleViewDetails={() => console.log(item.id)}
        />
      ))}
      <FloatingButton
        handleClick={() => {
          console.log("Clicked1");
        }}
        title="Thêm bài học mới"
      />
    </div>
  );
}

export default Lesson;
