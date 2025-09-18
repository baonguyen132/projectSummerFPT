import React from 'react'
import './Update.css'
import EvaluateCard from '../../components/common/EvaluateCard'
import PriceModal from '../../components/Price/PriceModal';
import PriceTime from '../../components/common/PriceTime';

import koreanFlag from "../../asset/image/korean-flag.png";
import vietnamFlag from "../../asset/image/vietnam-flag.png";

const Update = ({ showPriceModal = true }) => {
  return (
    <div className='update-body'>
      <h2>Nâng cấp</h2>
      <div className='update-container'>
        <h2 style={{color:'white', textShadow:'-1px -1px 0 #000000ff, 1px -1px 0 #000000ff, -1px 1px 0 #000000ff, 1px 1px 0 #000000ff'}}>
          🌸 Học tiếng Hàn dễ dàng 🌸<br />
          Trải nghiệm Seoul ngay trong tay!
        </h2>
        
        <h2 
          style={{color:'red', textShadow:'-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff'}}>
          Bạn mê K-Drama, K-Pop hay muốn đạt TOPIK cao?
        </h2>

        <EvaluateCard/>

        <div className='flag-container'>
          <img src={vietnamFlag} alt="" /> &nbsp;
          <img src={koreanFlag} alt="" />
        </div>  

        <div className='update-note'>
          <label>
             ✅ Tiết kiệm chi phí - chỉ bằng 1/5 so với học tại trung tâm. <br />
             ✅ Học mọi lúc, mọi nơi - chỉ cần điện thoại, không lo lệch lịch.<br />
             ✅ Tiến bộ nhanh - lộ trình cá nhân hóa, phù hợp từng trình độ.<br />
             ✅ Phát âm chuẩn bản xứ - luyện với công nghệ AI nhận diện giọng nói.<br />
             ✅ Đầy đủ kỹ năng - nghe, nói, đọc, viết từ sơ cấp đến TOPIK 6.
          </label>
        </div>

        {/* Chỉ hiện khi showPriceModal = true */}
        {showPriceModal && <PriceModal show={true} />}

        <PriceTime/>
      </div>
    </div>
  )
}

export default Update
