import React, { useState } from "react";
import './PracticeExam.css'
import ExamType from '../../components/ExamType/ExamType'
import ExamList from '../../components/ExamList/ExamList'
import UpgradeButton from '../../components/common/UpgradeButton'

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

      <div style={{ marginTop: '40px' }}>
        <UpgradeButton
          variant="default"
          size="large"
          message="📝 Mở khóa kho đề thi thử không giới hạn và chấm điểm tự động"
          buttonText="Nâng cấp ngay"
        />
      </div>
    </div>
  )
}

export default PracticeExam