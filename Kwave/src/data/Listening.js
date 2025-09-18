// src/data/Listening.js
const listeningData = [
  {
    id: 1,
    image: "/bus.jpg",
    script: "안녕하세요? 오늘 날씨가 참 좋습니다.",
    question: "Người nói đang nói về điều gì?",
    answers: ["Thời tiết", "Trường học", "Đồ ăn", "Bạn bè"],
    correctIndex: 0,
    explanation: "Trong đoạn script, người nói nhắc đến thời tiết đẹp.",
  },
  {
    id: 2,
    image: "/bus.jpg",
    script: "저는 주말에 친구랑 공원에 갔습니다.",
    question: "Người nói đã đi đâu vào cuối tuần?",
    answers: ["Công viên", "Nhà hàng", "Thư viện", "Trường học"],
    correctIndex: 0,
    explanation: "Script nói '공원에 갔습니다' nghĩa là đi công viên.",
  },
  {
    id: 3,
    image: "/bus.jpg",
    script: "내일은 학교에 시험이 있습니다.",
    question: "Ngày mai ở trường có gì?",
    answers: ["Kỳ thi", "Biểu diễn", "Thể thao", "Tham quan"],
    correctIndex: 0,
    explanation: "Script nói '시험이 있습니다' tức là có kỳ thi.",
  },
];

export default listeningData;
