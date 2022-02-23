import React from "react";
import { storiesOf } from "@storybook/react";
import { propsButton } from "./storiesProps/Button";
import { ButtonCyberpunk } from "../components";

const stories = storiesOf("Button", module);

stories.add("Button cyberpunk", () => {
  return <ButtonCyberpunk {...propsButton} />;
});
