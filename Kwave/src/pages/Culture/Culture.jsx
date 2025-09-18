import React, { useState } from "react";
import Header from "../../components/Header/Header";
import CultureSlide from "../../components/CultureSlide/CultureSlide";
import ModalCulture from "../../components/common/ModalCulture";
import UpgradeButton from "../../components/common/UpgradeButton";

import img1 from "../../asset/image/img1.png";
import img2 from "../../asset/image/img2.png";
import "./Culture.css";
import cultureData from "../../data/Culture";

function Culture() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  // Hàm lấy ngẫu nhiên n phần tử từ mảng
  const getRandomItems = (arr, n) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  const filteredData =
    selectedCategory === "Tất cả"
      ? getRandomItems(cultureData, 9) // chỉ lấy 3 phần tử random
      : cultureData.filter((item) => item.category === selectedCategory);

    return (
    <div className="culture-container">
      <h2>Văn hóa</h2>

      {/* Thanh chọn category */}
      <CultureSlide
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Danh sách card */}
      <div className="culture-body">
        {filteredData.map((item, idx) => (
          <div key={idx} onClick={() => setSelectedItem(item)}>
            <ModalCulture
              image={item.image}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
            />
          </div>
        ))}
      </div>

      <div style={{ margin: '40px 0' }}>
        <UpgradeButton
          variant="premium"
          size="large"
          message="🎎 Khám phá thêm 100+ nội dung văn hóa Hàn Quốc độc đáo"
          buttonText="Nâng cấp để xem thêm"
        />
      </div>

      {/* Overlay chi tiết */}
      {selectedItem && (
        <div className="overlay" onClick={() => setSelectedItem(null)}>
          <div
            className="overlay-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedItem.title}</h2>
            <img src={img1} alt="" />
            <p>
              Ở Hàn Quốc có một văn hóa rất đặc trưng gọi là sunbae-hoobae
              (선배-후배).
            </p>
            <p>
              Sunbae có nghĩa là “tiền bối” – tức là những anh chị đi trước, có
              nhiều kinh nghiệm hơn. Hoobae là “hậu bối” – những người mới hơn,
              nhỏ tuổi hơn hoặc ít thâm niên hơn.
            </p>
            <img src={img2} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Culture;
