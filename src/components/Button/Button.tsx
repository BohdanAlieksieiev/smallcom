import React from "react";
import "./Button.css";
import { ButtonPropsTypes } from "./types";

export const Button: React.FC<ButtonPropsTypes> = ({
  onClick,
  cssBtn,
  text,
}) => {
  return (
    <>
      <button onClick={onClick} className={`button ${cssBtn && cssBtn}`}>
        {text}
      </button>
    </>
  );
};
