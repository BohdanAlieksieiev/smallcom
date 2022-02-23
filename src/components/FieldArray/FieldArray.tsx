import React from "react";
import "./FieldArray.css";
import { FieldArrayPropsTypes } from "./types";
import { Field } from "..";

export const FieldArray: React.FC<FieldArrayPropsTypes> = ({
  fields,
  cssSection,
  cssBetweenField,
}) => {
  return (
    <section className={`${cssSection && cssSection}`}>
      {fields.length > 0 && (
        <>
          {fields.map((item, index) => {
            return (
              <div
                className={`${cssBetweenField && cssBetweenField}`}
                key={index}
              >
                <Field {...item} />
              </div>
            );
          })}
        </>
      )}
    </section>
  );
};
