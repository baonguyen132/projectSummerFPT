import React, { useState } from "react";
import './PracticeExam.css'
import ExamType from '../../components/ExamType/ExamType'
import ExamList from '../../components/ExamList/ExamList'

const PracticeExam = () => {
  const [selectedType, setSelectedType] = useState(null); // lưu loại đề thi được chọn

  return (
    <div className='practice-exam-container'>
      <h2>Thi thử</h2>
      <ExamType onSelectType={setSelectedType} />

      {selectedType && (
        <>
          <ExamList examType={selectedType} />
        </>
      )}
    </div>
  )
}

export default PracticeExam