import React, { useState } from "react";
import "../Header/Header.css";
import Button from "../common/Button";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [openExam, setOpenExam] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false); // sidebar state

  return (
    <header className="header">
      {/* Logo + toggle menu */}
      <div className="logo-section" onClick={() => setOpenSidebar(!openSidebar)}>
        <i className="bx bx-menu" /> {/* đổi thành icon menu bx-menu */}
        <span className="logo-text">K-Wave</span>
      </div>

      {/* Menu mặc định (desktop) */}
      <nav className="menu-section">
        <Button type="textgreen" size="medium"><NavLink to="/home">Trang chủ</NavLink></Button>
        <Button type="textgreen" size="medium"><NavLink to="/roadmap">Lộ trình</NavLink></Button>
        <div className="dropdown">
          <Button type="textgreen" size="medium" onClick={() => setOpenExam(!openExam)}>
            Đề thi
          </Button>
          {openExam && (
            <div className="dropdown-menu">
              <Button type="textgreen" size="medium"><NavLink to="/examType?examMode=practice">Thi thử</NavLink></Button>
              <Button type="textgreen" size="medium"><NavLink to="/examType?examMode=real">Thi Thật</NavLink></Button>
            </div>
          )}
        </div>
        <Button type="textgreen" size="medium">Tin tức</Button>
        <Button type="textgreen" size="medium"><NavLink to="/culture">Văn hóa</NavLink></Button>
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
              <Button type="textgreen" size="medium"><NavLink to="/update">Nâng cấp</NavLink></Button>
              <Button type="textgreen" size="medium">Thoát</Button>
            </div>
          )}
        </div>
      </nav>

      {/* Sidebar menu (mobile) */}
      <div className={`sidebar ${openSidebar ? "open" : ""}`}>
        <Button type="textgreen" size="medium" onClick={() => setOpenSidebar(false)}>✖ Đóng</Button>
        <Button type="textgreen" size="medium"><NavLink to="/home">Trang chủ</NavLink></Button>
        <Button type="textgreen" size="medium"><NavLink to="/roadmap">Lộ trình</NavLink></Button>
        <Button type="textgreen" size="medium"><NavLink to="/examType?examMode=practice">Thi thử</NavLink></Button>
        <Button type="textgreen" size="medium"><NavLink to="/examType?examMode=real">Thi Thật</NavLink></Button>
        <Button type="textgreen" size="medium">Tin tức</Button>
        <Button type="textgreen" size="medium"><NavLink to="/culture">Văn hóa</NavLink></Button>
        <Button type="textgreen" size="medium">Hồ sơ</Button>
        <Button type="textgreen" size="medium"><NavLink to="/update">Nâng cấp</NavLink></Button>
        <Button type="textgreen" size="medium">Thoát</Button>
      </div>
    </header>
  );
};

export default Header;
