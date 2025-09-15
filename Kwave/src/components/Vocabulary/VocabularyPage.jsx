import React from "react";
import Flashcard from "./Flashcard";
import SearchBar from "../common/SearchBar";
import VocabularyItem from "./VocabularyItem";
import "./Vocabulary.css";
import Button from "../common/Button";

const VocabularyPage = () => {
  return (
    <div className="vocabulary-page">
      <Flashcard />
      <SearchBar />
      <p style={{color:'#484848ff', fontSize:'18px', padding:'0 20px'}}>Tổng 6</p>

      {/* Render 5 item tĩnh */}
      <VocabularyItem />
      <VocabularyItem />
      <VocabularyItem />
      <VocabularyItem />
      <VocabularyItem />

      <Button type="white" size="large" style={{width:'fit-content'}}>Kiểm tra từ vựng</Button>

    </div>
  );
};

export default VocabularyPage;
