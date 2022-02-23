import React from "react";
import { storiesOf } from "@storybook/react";
import { propsFieldArray, propsField } from "./storiesProps/FieldArray";
import { FieldArray, Field } from "../components";
import "./storiesCss/storiesCss.css"; // fix
const stories = storiesOf("Form", module);

stories.add("Field array", () => {
  return <FieldArray {...propsFieldArray} />;
});

stories.add("Field", () => {
  return <Field {...propsField} type="text" />;
});
