import React, { useState } from "react";
import './RealExam.css'
import ExamType from '../../components/ExamType/ExamType'
import ExamList from '../../components/ExamList/ExamList'

const RealExam = () => {
  const [selectedType, setSelectedType] = useState(null); // lưu loại đề thi được chọn

  return (
    <div className='real-exam-container'>
      <h2>Thi thật</h2>
      <ExamType onSelectType={setSelectedType} />

      {selectedType && (
        <>
          <ExamList examType={selectedType} />
        </>
      )}
    </div>
  )
}

export default RealExam