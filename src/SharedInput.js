import React from "react";

const SharedInput = ({ label, name, type, value, onChange, options }) => {
  switch (type) {
    case "textarea":
      return (
        <div>
          <label>{label}</label>
          <textarea name={name} value={value} onChange={onChange} />
        </div>
      );
    case "checkbox":
      return (
        <div>
          <label>
            <input type="checkbox" name={name} checked={value} onChange={onChange} />
            {label}
          </label>
        </div>
      );
    case "radio":
      return (
        <div>
          <label>{label}</label>
          {options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      );
    default:
      return (
        <div>
          <label>{label}</label>
          <input type={type} name={name} value={value} onChange={onChange} />
        </div>
      );
  }
};

export default SharedInput;
