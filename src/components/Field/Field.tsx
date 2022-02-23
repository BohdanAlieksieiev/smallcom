import React from "react";
import "./Field.css";
import { FieldPropsTypes } from "./types";

export const Field: React.FC<FieldPropsTypes> = ({
  label,
  value,
  onChange,
  type = "text",
  name,
  cssInput,
  cssLabel,
  cssField,
}) => {
  return (
    <div className={`smallcom_field ${cssField}`}>
      <label className={`${cssLabel && cssLabel}`} htmlFor={name}>
        {label}
      </label>
      <input
        className={`smallcom_field__input ${cssInput && cssInput}`}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
      />
    </div>
  );
};
