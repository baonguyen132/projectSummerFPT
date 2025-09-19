const questionsData = {
  "TOPIK I": {
    practice: {  // Thi thử
      1: [
        {
          question: "Câu 1: Học sinh gọi gì khi gặp thầy giáo?",
          answers: ["안녕하세요", "안녕히 가세요", "감사합니다", "죄송합니다"],
          correctIndex: 0,
          image: "/bus.jpg",
          explanation: "Chào hỏi lịch sự là '안녕하세요'.",
          script: "Tôi đi học bằng xe buýt."
        },
        {
          question: "Câu 2: Tôi là học sinh.",
          answers: ["저는 학생입니다.", "저는 선생님입니다.", "저는 의사입니다.", "저는 회사원입니다."],
          correctIndex: 0,
          explanation: "Câu đúng theo ngữ pháp TOPIK I."
        }
      ],
      2: [
        {
          question: "Câu 1: Tôi muốn uống nước.",
          answers: ["저는 물을 마시고 싶습니다.", "저는 밥을 먹고 싶습니다.", "저는 커피를 마십니다.", "저는 차를 마십니다."],
          correctIndex: 0,
          explanation: "Câu đúng: Tôi muốn uống nước."
        }
      ]
    },
    real: {  // Thi thật
      1: [
        {
          question: "Câu 1: Học sinh gọi gì khi gặp thầy giáo?",
          answers: ["안녕하세요", "안녕히 가세요", "감사합니다", "죄송합니다"],
          correctIndex: 0,
          image: "/bus.jpg",
          explanation: "Chào hỏi lịch sự là '안녕하세요'.",
          script: "Tôi đi học bằng xe buýt."
        },
        {
          question: "Câu 2: Tôi là học sinh.",
          answers: ["저는 학생입니다.", "저는 선생님입니다.", "저는 의사입니다.", "저는 회사원입니다."],
          correctIndex: 0,
          explanation: "Câu đúng theo ngữ pháp TOPIK I."
        },
        {
          question: "Câu 3: Tôi thích ăn kimchi.",
          answers: ["저는 김치를 좋아합니다.", "저는 밥을 싫어합니다.", "저는 물을 마십니다.", "저는 커피를 마십니다."],
          correctIndex: 0,
          explanation: "Câu đúng theo ngữ pháp TOPIK I."
        }
      ],
      2: [
        {
          question: "Câu 1: Tôi muốn uống nước.",
          answers: ["저는 물을 마시고 싶습니다.", "저는 밥을 먹고 싶습니다.", "저는 커피를 마십니다.", "저는 차를 마십니다."],
          correctIndex: 0,
          explanation: "Câu đúng: Tôi muốn uống nước."
        },
        {
          question: "Câu 2: Bạn tên gì?",
          answers: ["이름이 뭐예요?", "몇 살이에요?", "어디에 살아요?", "무슨 일을 해요?"],
          correctIndex: 0,
          explanation: "Câu đúng: Bạn tên gì?"
        }
      ]
    }
  },
  "TOPIK II": {
    practice: {
      1: [
        {
          question: "Câu 1: Hôm nay thời tiết thế nào?",
          answers: ["맑아요", "비 와요", "눈 와요", "바람 불어요"],
          correctIndex: 0,
          explanation: "Hôm nay trời nắng: '맑아요'."
        }
      ]
    },
    real: {
      1: [
        {
          question: "Câu 1: Hôm nay thời tiết thế nào?",
          answers: ["맑아요", "비 와요", "눈 와요", "바람 불어요"],
          correctIndex: 0,
          explanation: "Hôm nay trời nắng: '맑아요'."
        },
        {
          question: "Câu 2: Bạn đi du lịch ở đâu?",
          answers: ["어디로 여행 가요?", "무슨 일을 해요?", "몇 시에 일어나요?", "무엇을 먹어요?"],
          correctIndex: 0,
          explanation: "Câu đúng: Bạn đi du lịch ở đâu?"
        }
      ]
    }
  }, 
    "ESP": {
    practice: {
      1: [
        {
          question: "Câu 1: Hôm nay thời tiết thế nào?",
          answers: ["맑아요", "비 와요", "눈 와요", "바람 불어요"],
          correctIndex: 0,
          explanation: "Hôm nay trời nắng: '맑아요'."
        }
      ]
    },
    real: {
      1: [
        {
          question: "Câu 1: Hôm nay thời tiết thế nào?",
          answers: ["맑아요", "비 와요", "눈 와요", "바람 불어요"],
          correctIndex: 0,
          explanation: "Hôm nay trời nắng: '맑아요'."
        },
        {
          question: "Câu 2: Bạn đi du lịch ở đâu?",
          answers: ["어디로 여행 가요?", "무슨 일을 해요?", "몇 시에 일어나요?", "무엇을 먹어요?"],
          correctIndex: 0,
          explanation: "Câu đúng: Bạn đi du lịch ở đâu?"
        }
      ]
    }
  }

};

export default questionsData;
