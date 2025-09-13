import React from "react";
import styles from "./FloatingButton.module.scss";

function FloatingButton({ handleClick }) { // Sửa destructuring props
  return (
    <div className={styles.enhancedFloatingCreate}>
      <div className={styles.floatingTooltip}>Tạo nhân viên mới</div>
      <button 
        className={styles.floatingCreateMain} 
        onClick={handleClick} // Sửa onClick handler
        type="button"
        aria-label="Tạo nhân viên mới"
      >
        <i className="bx bx-plus"></i>
      </button>
    </div>
  );
}

export default FloatingButton;