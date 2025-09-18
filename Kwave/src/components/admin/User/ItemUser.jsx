import React from "react";
import styles from "./itemUser.module.scss";

function ItemUser({ itemUser }) {
  return (
    <div className={styles.itemUser}>
      <div className={styles.userImage}>
        <div className={styles.imageFrame}>
          <div
            className={styles.image}
            style={itemUser[6] === "Male" ? { backgroundImage: `url(https://randomuser.me/api/portraits/men/2.jpg)` } : { backgroundImage: `url(https://randomuser.me/api/portraits/women/2.jpg)` }}
          ></div>
          <div className={styles.status}>
            <i className="bx bx-check-circle"></i>
          </div>
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.header}>
          <h5 className={styles.employeeName}>{itemUser[1]}</h5>
          <div className={styles.employeeRole}>
            <i className="bx bx-badge"></i>
            <span>Đã xác nhận</span>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <i className="bx bx-credit-card"></i>
            <span className={styles.detailLabel}>CCCD:</span>
            <span className={styles.detailValue}>{itemUser[4]}</span>
          </div>
          <div className={styles.detailItem}>
            <i className="bx bx-calendar"></i>
            <span className={styles.detailLabel}>Ngày sinh:</span>
            <span className={styles.detailValue}>{itemUser[5]}</span>
          </div>
        </div>
        <div className={styles.actionSection}>
          <a href="" className={styles.viewDetails}>
            <i className="bx bx-show"></i>
            <span>Xem chi tiết</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ItemUser;
