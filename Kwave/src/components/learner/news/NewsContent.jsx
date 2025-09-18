import React, { useState, useEffect } from 'react'

const NewsContent = () => {
  const [selectedText, setSelectedText] = useState('')
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 })
  const [showPopup, setShowPopup] = useState(false)

  // Mock data for selected word lookup
  const getWordInfo = (word) => {
    const wordDatabase = {
      '미식의': {
        korean: '미식의',
        phonetic: '/maeryeok/',
        meaning: 'Sức hấp dẫn, sự lôi cuốn, sự thu hút',
        topik: 'TOPIK II',
        category: 'danh từ'
      },
      '나라': {
        korean: '나라',
        phonetic: '/nara/',
        meaning: 'Đất nước, quốc gia',
        topik: 'TOPIK I',
        category: 'danh từ'
      },
      '프랑스': {
        korean: '프랑스',
        phonetic: '/peurangseu/',
        meaning: 'Pháp (quốc gia)',
        topik: 'TOPIK I',
        category: 'danh từ riêng'
      },
      '매력적인': {
        korean: '매력적인',
        phonetic: '/maeryeokjeogin/',
        meaning: 'Quyến rũ, hấp dẫn',
        topik: 'TOPIK II',
        category: 'tính từ'
      }
    }
    return wordDatabase[word] || {
      korean: word,
      phonetic: `/${word}/`,
      meaning: 'Tra cứu từ điển',
      topik: 'TOPIK',
      category: 'từ'
    }
  }

  useEffect(() => {
    let currentRange = null

    const updatePopupPosition = () => {
      if (currentRange) {
        const rect = currentRange.getBoundingClientRect()
        setPopupPosition({
          x: rect.left + rect.width / 2,  
          y: rect.bottom + window.scrollY - 10
        })
      }
    }

    const handleMouseUp = () => {
      const selection = window.getSelection()
      const text = selection.toString().trim()
      
      if (text && text.length > 0) {
        currentRange = selection.getRangeAt(0)
        updatePopupPosition()
        setSelectedText(text)
        setShowPopup(true)
      } else {
        setShowPopup(false)
        currentRange = null
      }
    }

    const handleMouseDown = () => {
      setShowPopup(false)
      currentRange = null
    }

    const handleScroll = () => {
      if (showPopup && currentRange) {
        updatePopupPosition()
      }
    }

    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showPopup])

  const wordInfo = selectedText ? getWordInfo(selectedText) : null

  return (
    <div className="flex-1 space-y-6 relative">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>Nguồn: Kids Donga</span>
        <span>·</span>
        <span>2025-07-24 08:00:00</span>
      </div>

      <h1 className="text-3xl font-bold">
        미식의 나라 프랑스도 '꼬북칩'에 푹 빠졌네
      </h1>

      <img
        src="https://dbnd.1cdn.vn/thumbs/1200x630/2024/12/30/images-4503789e48f18972563c8c5a560db4232246e69ea26ad1cd773db2250bfebf516093a4695276b7e8f07d1a8dcc61e45893202bf75346e796c7b93d381311208f-_img-5688.jpg"
        alt="News main"
        className="w-full max-h-[500px] object-cover rounded-lg"
      />

      <div className="space-y-4 text-lg leading-relaxed select-text">
        <h1>미식의 나라 프랑스도 ‘꼬북칩’에 푹 빠졌네</h1>
        <p>
          네 발로 걷는 동물과 인간의 큰 차이는 뭘까요? 바로 두 손! 인간은 손을 자유자재로 움직여 도구를 만드는 등 동물 중에서 가장 똑똑한 존재로 진화했어요
          앞발과 뒷발이 비슷하게 생긴 동물과 달리 인간의 두 손은 엄지와 네 손가락이 마주해 있어 물건을 쉽게 집을 수 있기 때문이지요
          최근 앙증맞은 다람쥐가 손처럼 활용하는 앞발에 엄지발톱이 있다는 연구결과가 나와 큰 화제예요
          지난 5일(현지시간) 국제학술지 사이언스에 ‘다람쥐에게 엄지발톱이 있었기에 단단한 씨앗과 견과류를 먹을 수 있었다’는 논문이 실린 것
          미국 노스웨스턴대 연구팀은 포유류(새끼를 낳아 젖을 먹여 기르는 동물) 중 쥐와 비버와 같은 설치류가 40%를 차지하고 그 종류가 무려 2500종에 달한다는 점에 주목했어요
          수많은 동물 중 설치류가 현재까지 전 세계에 어떻게 번성할 수 있었는지에 집중한 것
          연구팀은 미국 시카고필드 박물관, 영국 자연사 박물관 등 5개 대륙에 걸친 설치류 표본을 모아 분석했어요
          530개 이상의 설치류 표본 중 433개를 살펴본 결과 86%는 앞발에 엄지발톱이 있었지요
          길고 뾰족한 갈고리 모양의 발톱 네 개와, 그것들을 맞잡을 수 있는 짧고 뭉툭한 엄지발톱 한 개가 확인된 것
          연구팀은 “수천 년 동안 쥐, 생쥐, 다람쥐 등과 같은 설치류는 앞발의 엄지발톱을 활용해 음식을 잡아 입으로 가져갔을 것”이라고 설명했어요{' '}
        </p>
        <p>
          처음 외국에선 다화려가 조하된 물결하는 일명에 있지많들이 있다는
          되고있다가 나와 와 사레에여도
        </p>
        <p>
          지난 3월8일(화)시간 조완벽에 시작(암산),식 다짐되었제 있지만들이
          있었기때 먼진한 베면서 "브로음한 맥 름 수 있었다"는 논틀이 임한 것
        </p>
      </div>

      {/* Word Lookup Popup */}
      {showPopup && wordInfo && (
        <div 
          className="absolute z-50 bg-gray-800 text-white rounded-lg shadow-xl p-4 min-w-80"
          style={{
            left: `${popupPosition.x}px`,
            top: `${popupPosition.y}px`
          }}
        >
          {/* Language flags */}
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-red-600 text-white px-2 py-1 text-xs rounded">🇻🇳 VI</span>
            <span className="bg-white text-black px-2 py-1 text-xs rounded">🏴󠁧󠁢󠁥󠁮󠁧󠁿 EN</span>
          </div>

          {/* Word and phonetic */}
          <div className="mb-3">
            <div className="text-orange-400 text-lg font-medium flex items-center gap-2">
              {wordInfo.korean}
              <span className="text-sm text-gray-300">{wordInfo.phonetic}</span>
              <button className="text-white hover:text-orange-400">
                🔊
              </button>
            </div>
            <div className="text-xs text-gray-400">
              [{wordInfo.category}] • {wordInfo.topik}
            </div>
          </div>

          {/* Category badge */}
          <div className="mb-3">
            <span className="text-yellow-400 text-sm">⭐ {wordInfo.category}</span>
          </div>

          {/* Meaning */}
          <div className="mb-4">
            <div className="text-orange-400 text-sm font-medium">{wordInfo.meaning}</div>
          </div>

          {/* Note section */}
          <div className="mb-4">
            <div className="text-xs text-gray-400">📝 Thêm ghi chú</div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-between items-center border-t border-gray-600 pt-3">
            <button className="text-sm text-gray-300 hover:text-white">Xem thêm</button>
            <button className="text-sm text-gray-300 hover:text-white">Sao chép</button>
            <button 
              className="bg-orange-500 text-white px-4 py-1 rounded text-sm hover:bg-orange-600"
              onClick={() => setShowPopup(false)}
            >
              Đóng
            </button>
          </div>

          {/* Example sentence */}
          <div className="mt-3 text-xs text-gray-400">
            <div>검증을 거치는데요</div>
            <div>일부 매장에만 제품을 넣은 뒤 판매의 추이를 보</div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-green-600 hover:text-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          Yêu thích
        </button>
        <button className="flex items-center gap-2 text-green-600 hover:text-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
          Chia sẻ
        </button>
      </div>

      <hr className="border-t border-gray-200" />

      <div className="bg-[#E8FFF1] px-4 py-3 flex items-center justify-between rounded-lg mb-6">
        <span className="text-[#00A551] font-medium">
          Nâng cấp ngay để sử dụng tính năng dịch bài
        </span>
        <button className="bg-[#00A551] text-white px-6 py-2 rounded-full hover:bg-[#008543] transition-colors duration-200 text-sm font-medium">
          Nâng cấp ngay
        </button>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Bài báo khác</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <RelatedNewsCard key={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

const RelatedNewsCard = () => {
  return (
    <div className="space-y-2">
      <img
        src="https://dbnd.1cdn.vn/thumbs/1200x630/2024/12/30/images-4503789e48f18972563c8c5a560db4232246e69ea26ad1cd773db2250bfebf516093a4695276b7e8f07d1a8dcc61e45893202bf75346e796c7b93d381311208f-_img-5688.jpg"
        alt="Related news"
        className="w-full aspect-video object-cover rounded-lg"
      />
      <h3 className="font-medium line-clamp-2">
        미식의 나라 프랑스도 '꼬북칩'에 푹 빠졌네
      </h3>
      <div className="text-sm text-gray-500">
        Nguồn: Kids Donga · 2025-07-24 08:00:00
      </div>
    </div>
  )
}

export default NewsContent
