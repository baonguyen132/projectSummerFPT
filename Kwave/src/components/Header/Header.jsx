import React, { useState } from "react";
import "../Header/Header.css";
import Button from "../common/Button";

const Header = () => {
  const [openExam, setOpenExam] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-section">
        <i class="bxr bx-dashboard" />
        <span className="logo-text">K-Wave</span>
      </div>

      {/* Menu */}
      <nav className="menu-section">
        <Button type="textgreen" size="medium">Trang chủ</Button>
        <Button type="textgreen" size="medium">Lộ trình</Button>

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
              <Button type="textgreen" size="medium">Thi thử</Button>
              <Button type="textgreen" size="medium">Thi thật</Button>
            </div>
          )}
        </div>

        <Button type="textgreen" size="medium">Tin tức</Button>
        <Button type="textgreen" size="medium">Văn hóa</Button>

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
              <Button type="textgreen" size="medium">Hồ sơ</Button>
              <Button type="textgreen" size="medium">Nâng cấp</Button>
              <Button type="textgreen" size="medium">Thoát</Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
