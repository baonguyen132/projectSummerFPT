import React from "react";
import styles from "./itemUser.module.scss";

function ItemUser({ itemUser }) {
  return (
    <div className={styles.itemUser}>
      <div className={styles.userImage}>
        <div className={styles.imageFrame}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${itemUser.image})` }}
          ></div>
          <div className={styles.status}>
            <i className="bx bx-check-circle"></i>
          </div>
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.header}>
          <h5 className={styles.employeeName}>{itemUser.name}</h5>
          <div className={styles.employeeRole}>
            <i className="bx bx-badge"></i>
            <span>Đã xác nhận</span>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <i className="bx bx-credit-card"></i>
            <span className={styles.detailLabel}>CCCD:</span>
            <span className={styles.detailValue}>{itemUser.cid}</span>
          </div>
          <div className={styles.detailItem}>
            <i className="bx bx-calendar"></i>
            <span className={styles.detailLabel}>Ngày sinh:</span>
            <span className={styles.detailValue}>{itemUser.dob}</span>
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
