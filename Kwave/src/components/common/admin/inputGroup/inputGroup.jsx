import React from "react";
import styles from "./inputGroup.module.scss";
function InputGroup({
  formData,
  handleChange,
  name,
  label,
  icon,
  type = "text",
  options = [],
}) {
  function getInputType() {
    switch (type) {
      case "text":
        return (
          <div className={styles.formGroup}>
            <label htmlFor={name} className={styles.formLabel}>
              <i className={icon}></i>
              {label}
            </label>
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
      case "password":
        return (
          <div className={styles.formGroup}>
            <label htmlFor={name} className={styles.formLabel}>
              <i className={icon}></i>
              {label}
            </label>
            <div className={styles.inputWrapper}>
              <i className={icon}></i>
              <input
                type="password"
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
      case "textarea":
        return (
          <div className={styles.formGroup}>
            <label htmlFor={name} className={styles.formLabel}>
              <i className={icon}></i>
              {label}
            </label>
            <textarea
              id={name}
              name={name}
              className={styles.formTextarea}
              placeholder={`Enter your ${name}`}
              rows="3"
              value={formData[name] }
              onChange={handleChange}
              required
            ></textarea>
          </div>
        );
      case "date":
        return (
          <div className={styles.formGroup}>
            <label htmlFor={name} className={styles.formLabel}>
              <i className={icon}></i>
              {label}
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className={styles.formDate}
              value={formData.dob || ""}
              onChange={handleChange}
              required
            />
          </div>
        );
      case "select":
      
        if (options.length === 0) {
          return (
            <div className={styles.formGroup}>
              <label htmlFor={name} className={styles.formLabel}>
                <i className={icon}></i>
                {label}
              </label>
              <select
                id={name}
                name={name}
                className={styles.formSelect}
                value={formData[name]}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Chọn vai trò...
                </option>
              </select>
            </div>
          );
        }
        else {
          return (
          <div className={styles.formGroup}>
            <label htmlFor={name} className={styles.formLabel}>
              <i className={icon}></i>
              {label}
            </label>
            <select
              id={name}
              name={name}
              className={styles.formSelect}
              value={formData[name] }
              onChange={handleChange}
              required
            >
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        );
        }
    
      case "number":
        return (
          <div className={styles.formGroup}>
            <label htmlFor={name} className={styles.formLabel}>
              <i className={icon}></i>
              {label}
            </label>
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
        )
            
          
             
      default:
        return type;
    }
  }

  return getInputType();
}

export default InputGroup;
