// src/components/Button/Button.jsx
import React from "react";
import "./button.css";

const Button = ({ text, styleType = "primary", onClick, disabled }) => {
  return (
    <button
      className={`btn ${styleType}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
