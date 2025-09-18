import React, { useState } from "react";
import "../../Header/Header.css";
import Button from "../../common/Button";
import { NavLink } from "react-router-dom";
import NewsFilterBar from "./NewsFilterBar";

const NewsHeader = () => {
  const [openExam, setOpenExam] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  return (
    <>
      <header className="header">
        {/* Logo */}
        <div className="logo-section">
          <i className="bxr bx-dashboard" />
          <span className="logo-text">K-Wave</span>
        </div>

        {/* Menu */}
        <nav className="menu-section">
          <Button type="textgreen" size="medium"><NavLink to="/home">Trang chủ</NavLink></Button>
          <Button type="textgreen" size="medium"><NavLink to="/roadmap">Lộ trình</NavLink></Button>

          {/* Đề thi có dropdown */}
          <div className="dropdown">
            <Button
              type="textgreen"
              size="medium"
              onClick={() => setOpenExam(!openExam)}
            >
              Đề thi
            </Button>
            {openExam && (
              <div className="dropdown-menu">
                <Button type="textgreen" size="medium"><NavLink to="/practiceExam">Thi thử</NavLink></Button>
                <Button type="textgreen" size="medium"><NavLink to="/RealExam">Thi Thật</NavLink></Button>
              </div>
            )}
          </div>

          <Button type="textgreen" size="medium"><NavLink to="/learner/news">Tin tức</NavLink></Button>
          <Button type="textgreen" size="medium"><NavLink to="/culture">Văn hóa</NavLink></Button>

          {/* User icon có dropdown */}
          <div className="dropdown">
            <Button
              type="user-btn"
              size="medium"
              icon={<i className="bx bx-user"></i>}
              onClick={() => setOpenUser(!openUser)}
            />
            {openUser && (
              <div className="dropdown-menu">
                <Button type="textgreen" size="medium"><NavLink to="/profile">Hồ sơ</NavLink></Button>
                <Button type="textgreen" size="medium"><NavLink to="/update">Nâng cấp</NavLink></Button>
                <Button type="textgreen" size="medium">Thoát</Button>
              </div>
            )}
          </div>
        </nav>
      </header>
      
      {/* News Filter Bar - giữ lại các chức năng chọn ngày, thể loại, hiện tại, yêu thích, nguồn và xem video */}
      <div style={{ paddingTop: '80px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '10px' }}>
        <NewsFilterBar />
      </div>
    </>
  );
};

export default NewsHeader;


