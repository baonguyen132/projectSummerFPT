import React, { useState } from "react";
import Lesson from "../../components/Lesson/Lesson";
import RoadMap from "../../components/RoadMap/RoadMap";
import UpgradeButton from "../../components/common/UpgradeButton";
import './Roadmap.css'

const Roadmap = () => {
    const [selectedStep, setSelectedStep] = useState({ step: 0, text: "0 - 알파벳 Bảng chữ cái" });

  return (
      <div className="home-body">
        <div className="roadmap-container">
          <h2>Lộ trình</h2>
          <RoadMap
            onSelectStep={(step, text) =>
              setSelectedStep({ step, text })
            }
          />
        </div>

        <div className="lesson-container">
          <h2>{selectedStep.text}</h2>
          <Lesson step={selectedStep.step} />
          
          <div style={{ marginTop: '30px' }}>
            <UpgradeButton
              variant="default"
              size="medium"
              message="🚀 Mở khóa toàn bộ lộ trình học và bài tập nâng cao"
              buttonText="Nâng cấp ngay"
            />
          </div>
        </div>
      </div>
  )
}

export default Roadmap