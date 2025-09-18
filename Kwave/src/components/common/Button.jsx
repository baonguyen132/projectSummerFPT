import React, { useState } from "react";
import "./css/Button.css";

const Button = ({
  type = "fullgreen",      
  size = "medium",
  children,
  onClick,
  disabled = false,
  icon = null,
  layout = "vertical",
  className = "",
  options = [],          // cho segmented
  defaultValue,
  onChange,
  ...props
}) => {
  const [segmentedValue, setSegmentedValue] = useState(defaultValue || options[0]);

  const isImageUrl = typeof icon === "string" && icon.length > 0;
  const iconElement = isImageUrl ? (
    <img src={icon} alt="" className="button-img" />
  ) : (
    icon
  );

  const classes = `button ${type} ${size} ${disabled ? "disabled" : ""} ${className}`.trim();

  if (type === "segmented") {
    return (
      <div className={classes}>
        {options.map((option) => (
          <button
            key={option}
            className={`segmented-item ${segmentedValue === option ? "active" : ""}`}
            onClick={() => {
              setSegmentedValue(option);
              onChange && onChange(option);
            }}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {type === "card" ? (
        <div className={`card-${layout}`}>
          {iconElement && <span className="button-icon">{iconElement}</span>}
          {children && <span className="button-text">{children}</span>}
        </div>
      ) : (
        <div className="button-content">
          {iconElement && <span className="button-icon">{iconElement}</span>}
          {children && <span className="button-text">{children}</span>}
        </div>
      )}
    </button>
  );
};

export default Button;
