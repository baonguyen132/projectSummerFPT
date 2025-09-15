import React from "react";

const Input = ({ type="text", placeholder="", value, onChange, icon, readOnly=false, ...props }) => {
  return (
    <div className="flex items-center border rounded px-3 py-2">
      {icon && <span className="mr-2">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className="flex-1 outline-none"
        {...props}
      />
    </div>
  );
};

export default Input;
