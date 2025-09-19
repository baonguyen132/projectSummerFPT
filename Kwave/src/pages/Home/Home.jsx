import React from "react";
import "./Home.css";
import RoadMap from '../../components/RoadMap/RoadMap';
import News from '../../components/common/News';
import EvaluateCard from '../../components/common/EvaluateCard';
import ModalCulture from '../../components/common/ModalCulture';
import PriceTime from '../../components/common/PriceTime';
import PriceModal from '../../components/Price/PriceModal';
import UpgradeButton from '../../components/common/UpgradeButton';
import img1 from '../../asset/image/cheer/img16.png'; 
import img2 from '../../asset/image/cheer/img17.png'; 
import { NavLink } from "react-router-dom";

import flowerIcon from "../../asset/image/flower.png";
import da3 from "../../asset/image/culture/da3.png";
import at5 from "../../asset/image/culture/at5.png";

import Update from '../Update/Update'
function Home() {
  return (
    <div className="home-container">

      <div className="home-title-card">
        <div className="home-title-text">
          💌 “Đừng chỉ dừng lại ở một câu ‘Saranghaeyo’ – với trang web học tiếng Hàn này, 
          bạn sẽ nói trọn vẹn từng câu chuyện, hiểu hết K-drama và giao tiếp tự nhiên như 
          người bản xứ! 🌸✨ <br />
          🐥 Học mà vui, vui mà học! App học tiếng Hàn siêu đáng yêu này sẽ khiến bạn quên 
          mất mình đang học thật sự. Mỗi ngày chỉ cần 10 phút là vừa chơi vừa cười, mà vẫn 
          giỏi tiếng Hàn vèo vèo 🎀📚
          </div>
        <img src={img1} alt="cheer" />
      </div>

      <div className="home-title-card">
        <img src={img2} alt="cheer" />
        <div className="home-title-text">
          🎶 Từ gà mờ → Idol tiếng Hàn trong tích tắc! Dù bắt đầu từ con số 0, bạn vẫn có 
          thể tự tin trò chuyện, hát theo nhạc Hàn và viết caption siêu ngầu như một fan cứng 
          chính hiệu 💫✨ <br />
          👉 Tải app ngay hôm nay – Hành trình tiếng Hàn cute đang chờ bạn!
        </div>
      </div>

      <div className='home-title'>
        <h2>Lộ trình</h2>
        <p><NavLink to="/roadmap">Xem thêm</NavLink></p>
      </div>
      <RoadMap />

      <div className='home-title'>
        <h2>Tin tức</h2>
        <p>Xem thêm</p>
      </div>
      <News/>

      <div className='home-title'>
        <h2>Văn hóa</h2>
        <p><NavLink to="/culture">Xem thêm</NavLink></p>
      </div>
      
      <div className="culture-title-card">
        <ModalCulture
          image={da3}
          icon={flowerIcon}
          title="Webtoon (웹툰) chuyển thể"
          subtitle="Điện ảnh Hàn Quốc"
        />
        <div className="culture-title-text"><i>
          Bạn có biết những siêu phẩm như Itaewon Class hay Sweet Home đều bắt nguồn 
          từ Webtoon không? 😲 Từ những nét vẽ đầy cảm xúc, chắc chắn bạn sẽ bất ngờ 
          khi biết bộ phim mình thích từng là… truyện tranh mạng đấy! Hãy khám phá ngay 
          để thấy vì sao Webtoon đã và đang “làm mưa làm gió” khắp châu Á nhé 🌟</i>
        </div>
      </div>

      <div className="culture-title-card">
        <div className="culture-title-text"><i>
          Ngày xưa, đồ ăn đường phố chỉ đơn giản để no bụng: tteokbokki cay nồng, odeng 
          nóng hổi, hay hotteok ngọt lịm cho người đi làm vội. ❄️ Mùa hè có bingsu mát lạnh, 
          mùa đông thì hotteok ấm áp. Thế nhưng giờ đây, các món ăn truyền thống ấy còn được 
          “remix” với đủ vị matcha, socola, phô mai… vừa quen vừa lạ, khiến ai ăn thử một lần 
          cũng phải xuýt xoa! 😍 <br />
          👉 Nếu bạn tò mò muốn khám phá street food Hàn Quốc phiên bản hiện đại – thì đây chính 
          là nơi dành cho bạn!🍴</i>
        </div>
        <ModalCulture
          image={at5}
          icon={flowerIcon}
          title="Street food và seasonal food"
          subtitle="Từ mưu sinh đến lifestyle"
        />
      </div>

      <div style={{ margin: '40px 0' }}>
        <UpgradeButton
          variant="premium"
          size="large"
          message="🌟 Mở khóa toàn bộ nội dung văn hóa và tính năng premium"
          buttonText="Nâng cấp Premium"
          className="mx-auto max-w-4xl"
        />
      </div>

      <Update showPriceModal={false} />

    </div>
  );
}

export default Home;
