import React, { useMemo } from "react";
import styles from "./navigation.module.scss";
import { NavLink, useLocation } from "react-router-dom";

function Navigation() {
  const menuItems = [
    { icon: "bx-home", label: "Dashboard", link: "/" },
    { icon: "bx-user", label: "User", link: "/user" },
    { icon: "bx-checks", label: "Test", link: "/test" },
    { icon: "bx-education", label: "Lesson", link: "/lesson" },
    { icon: "bx-globe-europe", label: "Culture", link: "/culture" },
    { icon: "bx-news", label: "News", link: "/news" },
    { icon: "bxr  bx-coins", label: "Finance", link: "/finance" },
  ];
  const menuItemsOther = [
    { icon: "bx-user-circle", label: "Profile", link: "/profile" },
    { icon: "bx-arrow-big-left", label: "Logout", link: "/logout" },
  ];
  const location = useLocation();

  // Tính toán vị trí của liquid_glass dựa trên route hiện tại
  const activeIndex = menuItems.findIndex(
    (item) => item.link === location.pathname
  );
  let activeTop = 0;

  if (activeIndex !== -1) {
    activeTop = activeIndex * 58;
  } 

  return (
    <nav className={styles.navigation}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <h2>Kwave</h2>
          <p>Nền tảng học tiếng Hàn</p>
        </div>
        <div className={styles.menu}>
          <ul>
            <li
              className={styles.liquid_glass}
              style={{ top: `${activeTop}px` }}
            ></li>
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  <i className={`bx ${item.icon}`}></i>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <h3>Account pages</h3>
          <ul>
            {menuItemsOther.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  <i className={`bx ${item.icon}`}></i>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.user}>
          <div className={styles.userProfile}>
            <div className={styles.userAvatar}>
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
                alt="User Avatar"
              />
            </div>
            <div className={styles.userInfo}>
              <h4>Anita Cruz</h4>
              <p>anita@commerce.com</p>
            </div>
            <div className={styles.userActions}>
              <button className={styles.menuBtn}>
                <i className="bx bx-dots-horizontal-rounded"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Navigation);
