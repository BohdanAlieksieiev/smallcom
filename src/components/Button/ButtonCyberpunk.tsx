import React from "react";
import "./Button.css";
import { ButtonPropsTypes } from "./types";

export const ButtonCyberpunk: React.FC<ButtonPropsTypes> = ({
  onClick,
  cssBtn,
  text,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`smallcom_button_cyberpunk ${cssBtn && cssBtn}`}
      >
        {text}
      </button>
    </>
  );
};
