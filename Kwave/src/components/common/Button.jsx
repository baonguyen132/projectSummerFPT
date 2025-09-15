import React from "react";
import "./css/Button.css";

const Button = ({
  type = "fullgreen",      
  size = "medium",       // small, medium, large
  children,
  onClick,
  disabled = false,
  icon = null,           // string (url) hoặc JSX
  layout = "vertical",   // vertical | horizontal (chỉ áp dụng cho card)
  className = "",
  ...props
}) => {
  // Nếu icon là string → coi như ảnh
  const isImageUrl = typeof icon === "string" && icon.length > 0;
  const iconElement = isImageUrl ? (
    <img src={icon} alt="" className="button-img" />
  ) : (
    icon
  );

  const classes = `button ${type} ${size} ${disabled ? "disabled" : ""} ${className}`.trim();

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
