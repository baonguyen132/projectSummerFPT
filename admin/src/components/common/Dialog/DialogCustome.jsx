import React, { useEffect, useState } from "react";
import styles from "./DialogCustome.module.scss";

function DialogCustome({isOpen, onClose, title, handleSubmit, children}) {
  // Close dialog khi nhấn ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.dialogOverlay} onClick={onClose}>
      <div
        className={styles.dialogContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bỏ phần backgroundElements */}

        <div className={styles.dialogHeader}>
          <div className={styles.headerIcon}>
            <i className="bx bx-plus-circle"></i>
          </div>
          <div className={styles.headerText}>
            <h2 className={styles.dialogTitle}>{title || "Tạo mới"}</h2>
            <p className={styles.dialogSubtitle}>Điền thông tin để tạo mới</p>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <i className="bx bx-x"></i>
          </button>
        </div>

        <div className={styles.dialogBody}>
          <form className={styles.createForm} onSubmit={handleSubmit}>
            {children}
            <div className={styles.formActions}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={onClose}
              >
                <i className="bx bx-x"></i>
                <span>Hủy bỏ</span>
              </button>
              <button type="submit" className={styles.saveButton}>
                <i className="bx bx-check"></i>
                <span>{title || "Tạo mới"}</span>
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default DialogCustome;
