import React from 'react'
import './css/EvaluateCard.css'
import user from '../../asset/image/user.png'; 

const Evaluate = () => {
  return (
    <div className='evalute-card'>
      <img src={user} className='evaluate-img'/>
      <div className='evaluate-section'>
        <label className='evaluate-content'>
          “Mình đã học trên app được 3 tháng rồi và thật sự thấy rất hiệu quả. Giao diện 
          dễ sử dụng, bài học chia theo cấp độ rõ ràng. Đặc biệt phần luyện phát âm với AI 
          giúp mình cải thiện giọng nhanh hơn nhiều. Trước đây học mãi không nhớ từ vựng, 
          giờ thì app có hệ thống nhắc lại nên nhớ lâu hơn hẳn. 
        </label>
        <label className='evaluate-rate'> ⭐ ⭐ ⭐ ⭐ ⭐</label>
      </div>
    </div>
  )
}

export default Evaluate