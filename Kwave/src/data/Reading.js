// src/data/Reading.js
const readingData = [
  {
    question: "1. 다음 중 올바른 문장은 무엇인가요?",
    answers: [
      "나는 학교에 갑니다.",
      "나는 학교에 가요.",
      "나는 학교 가요.",
      "나는 학교 갑니다."
    ],
    correctIndex: 1,
    explanation: "정답은 '나는 학교에 가요.'입니다. 존댓말로 자연스럽게 표현합니다."
  },
  {
    question: "2. '친구와 함께 영화를 봤다' 문장에서 올바른 표현은?",
    answers: [
      "친구와 같이 영화를 봤어요.",
      "친구와 영화 봤다.",
      "친구 영화 같이 봤어요.",
      "친구와 함께 영화 본다."
    ],
    correctIndex: 0,
    explanation: "'같이'와 '-어요' 존댓말 표현이 자연스럽습니다."
  },
  {
    question: "3. 다음 중 질문으로 올바른 문장은?",
    answers: [
      "오늘 날씨가 어때요?",
      "오늘 날씨 어때요.",
      "오늘 날씨 어때?",
      "오늘 날씨가 어때."
    ],
    correctIndex: 0,
    explanation: "존댓말 질문으로 '오늘 날씨가 어때요?'가 맞습니다."
  },
  {
    question: "4. '저는 사과를 먹습니다.' 문장을 반말로 바꾸면?",
    answers: [
      "나는 사과를 먹어.",
      "저는 사과를 먹어.",
      "나는 사과를 먹습니다.",
      "나는 사과 먹습니다."
    ],
    correctIndex: 0,
    explanation: "반말로는 '나는 사과를 먹어.'가 자연스럽습니다."
  },
  {
    question: "5. '학교에 갔어요.' 문장을 미래형으로 바꾸면?",
    answers: [
      "학교에 가겠다.",
      "학교에 갈 거예요.",
      "학교에 갔다.",
      "학교에 간다."
    ],
    correctIndex: 1,
    explanation: "'-을 거예요'를 사용해 미래형으로 표현합니다."
  }
];

export default readingData;
