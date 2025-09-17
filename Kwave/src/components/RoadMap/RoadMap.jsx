import React, { useState, useRef, useEffect } from "react";
import Button from "../common/Button";
import "../RoadMap/RoadMap.css";

const Roadmap = ({ onSelectStep }) => {
  const [activeStep, setActiveStep] = useState(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [level, setLevel] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const cardRefs = useRef({});

  const handleClick = (s) => {
    if (s.layout === "horizontal-locked") {
      setActiveStep(s.step);
      if (cardRefs.current[s.step]) {
        setCardWidth(cardRefs.current[s.step].offsetWidth);
      }
    } else {
      onSelectStep(s.step, s.text.replace("\n", " "));
    }
  };

  useEffect(() => {
    if (activeStep !== null) {
      const timer = setTimeout(() => {
        setActiveStep(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [activeStep]);

  const stepsByLevel = {
    1: [
    { step: 0, text: "0 - 알파벳\nBảng chữ cái", layout: "horizontal-on", icon: "/alphabet.png" },
    { step: 1, text: "1 - 소개\nGiới thiệu", layout: "horizontal-on", icon: "/datnuoc.png" },
    { step: 2, text: "2 - 학교\nTrường học", layout: "horizontal-off", icon: "/truong.png" },
    { step: 3, text: "3 - 일상생활\nSinh hoạt hằng ngày", layout: "horizontal-off", icon: "/vandong.png" },
    { step: 4, text: "4 - 날짜와 요일\nNgày và thứ", layout: "horizontal-off", icon: "/ngayvathu.png" },
    { step: 5, text: "5 - 하루 일과\nCông việc trong ngày", layout: "horizontal-off", icon: "/sinhhoat.png" },
    { step: 6, text: "6 - 주말\nCuối tuần", layout: "horizontal-locked", icon: "/cuoituan.png" },
    { step: 7, text: "7 - 물건 사기\nMua sắm (1)", layout: "horizontal-locked", icon: "/muasam.png" },
    { step: 8, text: "8 - 음식\nThức ăn", layout: "horizontal-locked", icon: "/thucan.png" },
    { step: 9, text: "9 - 가족\nNhà cửa", layout: "horizontal-locked", icon: "/nha.png" },
    { step: 10, text: "10 - 날씨\nGia đình", layout: "horizontal-locked", icon: "/giadinh.png" },
    { step: 11, text: "11 - 하루 일과\nThời tiết", layout: "horizontal-locked", icon: "/thoitiet.png" },
    { step: 12, text: "12 - 전화 (1)\nĐiện thoại (1)", layout: "horizontal-locked", icon: "/dienthoai.png" },
    { step: 13, text: "13 - 생일\nSinh nhật", layout: "horizontal-locked", icon: "/sinhnhat.png" },
    { step: 14, text: "14 - 취미\nSở thích", layout: "horizontal-locked", icon: "/sothich.png" },
    { step: 15, text: "15 - 교통 (1)\nGiao thông (1)", layout: "horizontal-locked", icon: "/giaothong.png" },
    ],
    2: [
      { step: 0, text: "0 - 복습\nÔn tập", layout: "horizontal-on", icon: "/review.png" },
      { step: 1, text: "1 - 직업\nNghề nghiệp", layout: "horizontal-off", icon: "/job.png" },
      { step: 2, text: "2 - 여행\nDu lịch", layout: "horizontal-locked", icon: "/travel.png" },
    ],
    3: [
      { step: 0, text: "0 - 쇼핑\nMua sắm", layout: "horizontal-on", icon: "/shop.png" },
      { step: 1, text: "1 - 음식점\nNhà hàng", layout: "horizontal-off", icon: "/restaurant.png" },
    ],
    4: [
      { step: 0, text: "0 - 병원\nBệnh viện", layout: "horizontal-on", icon: "/hospital.png" },
    ],
    5: [
      { step: 0, text: "0 - 은행\nNgân hàng", layout: "horizontal-on", icon: "/bank.png" },
    ],
    6: [
      { step: 0, text: "0 - 회사\nCông ty", layout: "horizontal-on", icon: "/company.png" },
    ],
  };

  const steps = stepsByLevel[level] || [];

  // Map nhãn cấp độ
  const levelLabels = {
    1: "Sơ cấp 1",
    2: "Sơ cấp 2",
    3: "Trung cấp 3",
    4: "Trung cấp 4",
    5: "Cao cấp 5",
    6: "Cao cấp 6",
  };

  return (
    <div className="roadmap">
      <div className="center-btn-wrapper">
        <Button
          type="yellow"
          size="large"
          className="center-btn"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {levelLabels[level]}
        </Button>

        {showMenu && (
          <div className="dropdown-menu">
            {[1, 2, 3, 4, 5 ,6].map((lv) => (
              <div
                key={lv}
                className="dropdown-item"
                onClick={() => {
                  setLevel(lv);
                  setShowMenu(false);
                  setActiveStep(null);
                }}
              >
                {levelLabels[lv]}
              </div>
            ))}
          </div>
        )}
      </div>

      {steps.map((s) => (
        <div
          key={s.step}
          className={`step-wrapper step-${s.step}`}
          ref={(el) => (cardRefs.current[s.step] = el)}
          style={{ position: "absolute" }}
          onClick={() => handleClick(s)}
        >
          <Button
            type="card"
            layout={s.layout}
            className="btn"
            icon={s.icon}
          >
            {s.text.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Button>

          {activeStep === s.step && (
            <div
              className="upgrade-wrapper"
              style={{ width: cardWidth }}
            >
              Nhận gói <b style={{ color: "red" }}>Premium</b> để mở khóa tất cả các chương!
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Roadmap;
