import React from "react";
import styles from "./formGroup.module.scss";
function FormGroup({ formData, handleChange, name , icon}) {
  return (
    <div className={styles.formGroup}>
      <div className={styles.inputWrapper}>
        <i className={icon}></i>
        <input
          type="text"
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder={`Enter your ${name}`}
          required
          autoComplete={name}
        />
      </div>
    </div>
  );
}

export default FormGroup;
