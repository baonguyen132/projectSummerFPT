import React from "react";
import styles from "./buttonDefault.module.scss";

function ButtonDefault({ children, onClick, type = "button", disabled = false }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={styles.loginButton}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonDefault;
