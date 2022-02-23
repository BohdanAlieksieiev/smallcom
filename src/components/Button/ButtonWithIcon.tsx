import React from "react";
import "./Button.css";
import { ButtonWithIconPropsTypes } from "./types";

export const ButtonWithIcon: React.FC<ButtonWithIconPropsTypes> = ({
  onClick,
  cssBtn,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`smallcom_button_icon ${cssBtn && cssBtn}`}
      >
        <div className="smallcom_button_icon__image"></div>
      </button>
    </>
  );
};
