import React from 'react'
import Button from '../common/Button'
import './ExamType.css'

const ExamType = () => {
  return (
    <div className="examtype">
      <Button type="card" layout="vertical" className="btn exam-I"
        icon="/exam.png">
        Thi TOPIK I
      </Button>

      <Button type="card" layout="vertical" className="btn exam-II"
        icon="/exam.png">
        Thi TOPIK II
      </Button>

      <Button type="card" layout="vertical" className="btn exam-ESP"
        icon="/exam.png">
        Thi ESP
      </Button>

    </div>
  )
}

export default ExamType