import React, { useState } from "react";
import Lesson from "../../components/Lesson/Lesson";
import RoadMap from "../../components/RoadMap/RoadMap";
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
        </div>
      </div>
  )
}

export default Roadmap