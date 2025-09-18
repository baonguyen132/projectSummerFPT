import React, { use, useMemo } from "react";
import styles from "./navigation.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { handleLogout } from "../../services/admin/loginService";

function Navigation({user}) {
  const menuItems = [
    { icon: "bx-home", label: "Dashboard", link: "/dashboard" },
    { icon: "bx-user", label: "User", link: "/dashboard/user" },
    { icon: "bx-checks", label: "Test", link: "/dashboard/test" },
    { icon: "bx-education", label: "Lesson", link: "/dashboard/lesson" },
    { icon: "bx-globe-europe", label: "Culture", link: "/dashboard/culture" },
    { icon: "bx-news", label: "News", link: "/dashboard/news" },
    { icon: "bxr  bx-coins", label: "Finance", link: "/dashboard/finance" },
  ];
  const menuItemsOther = [];
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
            <li>
              <NavLink to="/dashboard/profile">
                <i className={`bx bx-user-circle`}></i>
                <span>Profile</span>
              </NavLink>
            </li>
            <li
              className={styles.logout}
              onClick={() => {
                handleLogout();
              }}
            >
              <i className={`bx-arrow-big-left`}></i>
              <span>Logout</span>
            </li>
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
              <h4>{user ? user[1] : "Unknown User"}</h4>
              <p>{user ? user[2] : "Unknown Email"}</p>
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
