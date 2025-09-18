import React from "react";
import Flashcard from "./Flashcard";
import SearchBar from "../common/SearchBar";
import VocabularyItem from "./VocabularyItem";
import "./Vocabulary.css";
import Button from "../common/Button";
import { ToastContainer } from "react-toastify";

const VocabularyPage = () => {
  const words = [
    { korean: "운동복", vietnamese: "quần áo vận động", date: "01/07/2025" },
    { korean: "학교", vietnamese: "trường học", date: "02/07/2025" },
    { korean: "친구", vietnamese: "bạn bè", date: "03/07/2025" },
    { korean: "음식", vietnamese: "đồ ăn", date: "04/07/2025" },
    { korean: "공원", vietnamese: "công viên", date: "05/07/2025" },
    { korean: "버스", vietnamese: "xe buýt", date: "06/07/2025" },
  ];

  return (
    <div className="vocabulary-page">
      <Flashcard words={words} />
      <SearchBar />
      <p style={{ color: "#484848ff", fontSize: "18px", padding: "0 20px" }}>
        Tổng {words.length}
      </p>

      {/* Render danh sách từ vựng từ dữ liệu */}
      {words.map((word, idx) => (
        <VocabularyItem key={idx} index={idx} word={word} />
      ))}

      <Button type="white" size="large" style={{ width: "fit-content" }}>
        Kiểm tra từ vựng
      </Button>

      <ToastContainer />
    </div>
  );
};

export default VocabularyPage;
