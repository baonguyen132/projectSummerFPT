import React from "react";
import styles from "./FloatingButton.module.scss";

function FloatingButton({ handleClick, title, icon = "bx bx-plus" }) {
  
  return (
    <>
      <div className={styles.enhancedFloatingCreate}>
        <div className={styles.floatingTooltip}>{title}</div>
        <button 
          className={styles.floatingCreateMain} 
          onClick={handleClick}
          type="button"
          aria-label={title || "Tạo mới"}
        >
          <i className={icon}></i>
        </button>
      </div>

      
    </>
  );
}

export default FloatingButton;