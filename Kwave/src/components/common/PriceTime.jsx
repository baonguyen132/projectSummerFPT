import React, { useEffect, useState } from "react";
import "./css/PriceTime.css";
import Button from './Button'
import { NavLink } from "react-router-dom";

const PriceTime = () => {
  // thời gian đếm ngược ban đầu (ví dụ: 24h)
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // giây

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // chuyển giây thành giờ:phút:giây
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return { h, m, s };
  };

  const { h, m, s } = formatTime(timeLeft);

  return (
    <div className="price-time-container">
      <div className="price-time">
        <span>{h}</span> : <span>{m}</span> : <span>{s}</span>
      </div>
      <p className="price-time-note">
        Đảm bảo sự hài lòng – Hoàn tiền 100% trong vòng 7 ngày
      </p>
      <Button type="orange" size="large"><NavLink to="/update">Nhận quyền truy cập trọn đời</NavLink></Button>
    </div>
  );
};

export default PriceTime;
