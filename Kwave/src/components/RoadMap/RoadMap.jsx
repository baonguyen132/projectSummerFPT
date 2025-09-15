import React from "react";
import Button from "../common/Button";
import "../RoadMap/RoadMap.css";

const Roadmap = () => {
  return (
    <div className="roadmap">
      {/* Nút ở giữa */}
      <Button type="yellow" size="large" className="center-btn">
        Sơ cấp 1
      </Button>

      {/* Các chặng */}
      <Button type="card" layout="horizontal-on" className="btn step-0"
        icon="/alphabet.png">
        0 - 알파벳<br/>Bảng chữ cái
      </Button>

      <Button type="card" layout="horizontal-on" className="btn step-1"
        icon="/datnuoc.png">
        1 - 소개<br/>Giới thiệu
      </Button>

      <Button type="card" layout="horizontal-off" className="btn step-2"
        icon="/truong.png">
        2 - 학교<br/>Trường học
      </Button>

      <Button type="card" layout="horizontal-off" className="btn step-3"
        icon="/vandong.png">
        3 - 일상생활<br/>Sinh hoạt hằng ngày
      </Button>

      <Button type="card" layout="horizontal-off" className="btn step-4"
        icon="/ngayvathu.png">
        4 - 날짜와 요일<br/>Ngày và thứ
      </Button>

      <Button type="card" layout="horizontal-off" className="btn step-5"
        icon="/sinhhoat.png">
        5 - 하루 일과<br/>Công việc trong ngày
      </Button>

      <Button type="card" layout="horizontal-locked" className="btn step-6"
        icon="/cuoituan.png">
        6 - 주말<br/>Cuối tuần
      </Button>

      <Button type="card" layout="horizontal-locked" className="btn step-7"
        icon="/muasam.png">
        7 - 물건 사기<br/>Mua sắm (1)
      </Button>

      <Button type="card" layout="horizontal-locked" className="btn step-8"
        icon="/thucan.png">
        8 - 음식<br/>Thức ăn
      </Button>

      <Button type="card" layout="horizontal-locked" className="btn step-9"
        icon="/nha.png">
        9 - 가족<br/>Nhà cửa
      </Button>

      <Button type="card" layout="horizontal-locked" className="btn step-10"
        icon="/giadinh.png">
        10 - 날씨<br/>Gia đình
      </Button>

      <Button type="card" layout="horizontal-locked" className="btn step-11"
        icon="/thoitiet.png">
        11 - 하루 일과<br/>Thời tiết
      </Button>

      <Button type="card" layout="horizontal-locked" className="btn step-12"
        icon="/dienthoai.png">
        12 - 전화 (1)<br/>Điện thoại (1)
      </Button>

      <Button type="card" layout="horizontal-locked" className="btn step-13"
        icon="/sinhnhat.png">
        13 - 생일<br/>Sinh nhật
      </Button>

      <Button type="card" layout="horizontal-locked" className="btn step-14"
        icon="/sothich.png">
        14 - 취미<br/>Sở thích
      </Button>

      <Button type="card" layout="horizontal-locked" className="btn step-15"
        icon="/giaothong.png">
        15 - 교통 (1)<br/>Giao thông(1)
      </Button>
    </div>
  );
};

export default Roadmap;
