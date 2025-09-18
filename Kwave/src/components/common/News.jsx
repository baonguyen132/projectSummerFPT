import React from "react";
import "../common/css/News.css";
import img1 from "../../asset/image/news-img.png";

const newsList = [
  {
    id: 1,
    img: img1,
    title: "미식의 나라 프랑스도 ‘꼬북칩’에 푹 빠졌네",
    content:
      "22일(현지시간) 미국 캘리포니아 주 로스앤젤레스(LA)에 휴머노이드(사람을 닮은 로봇)가 팝콘을 파는 신기한 휴게소가 문을 열었어요...",
    origin: "Nguồn: Kids Donga",
    time: "2025-07-24 08:00:00",
  },
  {
    id: 2,
    img: img1,
    title: "AI 로봇이 만든 팝콘, 아이들 인기 폭발!",
    content:
      "최근 미국에서 AI 로봇이 직접 팝콘을 만들어 판매하는 휴게소가 생겨 화제가 되고 있습니다...",
    origin: "Nguồn: Yonhap News",
    time: "2025-07-25 09:30:00",
  },
  {
    id: 1,
    img: img1,
    title: "미식의 나라 프랑스도 ‘꼬북칩’에 푹 빠졌네",
    content:
      "22일(현지시간) 미국 캘리포니아 주 로스앤젤레스(LA)에 휴머노이드(사람을 닮은 로봇)가 팝콘을 파는 신기한 휴게소가 문을 열었어요...",
    origin: "Nguồn: Kids Donga",
    time: "2025-07-24 08:00:00",
  },
  {
    id: 2,
    img: img1,
    title: "AI 로봇이 만든 팝콘, 아이들 인기 폭발!",
    content:
      "최근 미국에서 AI 로봇이 직접 팝콘을 만들어 판매하는 휴게소가 생겨 화제가 되고 있습니다...",
    origin: "Nguồn: Yonhap News",
    time: "2025-07-25 09:30:00",
  },
  {
    id: 1,
    img: img1,
    title: "미식의 나라 프랑스도 ‘꼬북칩’에 푹 빠졌네",
    content:
      "22일(현지시간) 미국 캘리포니아 주 로스앤젤레스(LA)에 휴머노이드(사람을 닮은 로봇)가 팝콘을 파는 신기한 휴게소가 문을 열었어요...",
    origin: "Nguồn: Kids Donga",
    time: "2025-07-24 08:00:00",
  },
  {
    id: 2,
    img: img1,
    title: "AI 로봇이 만든 팝콘, 아이들 인기 폭발!",
    content:
      "최근 미국에서 AI 로봇이 직접 팝콘을 만들어 판매하는 휴게소가 생겨 화제가 되고 있습니다...",
    origin: "Nguồn: Yonhap News",
    time: "2025-07-25 09:30:00",
  },
];

const News = () => {
  return (
    <div className="news-container-list">
      {newsList.map((item) => (
        <div key={item.id} className="news-container">
          <img src={item.img} alt="" className="news-img" />
          <div className="news-section">
            <h4 className="news-title">{item.title}</h4>
            <label className="news-content">{item.content}</label>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label className="news-origin">{item.origin}</label>
              <label className="news-time">{item.time}</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
