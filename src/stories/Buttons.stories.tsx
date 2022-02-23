import React from "react";
import { storiesOf } from "@storybook/react";
import { propsButton, propsButtonWithIcon } from "./storiesProps/Button";
import { Button, ButtonWithIcon, ButtonCyberpunk } from "../components";

const stories = storiesOf("Buttons", module);

stories.add("Button", () => {
  return <Button {...propsButton} />;
});

stories.add("Button with icon", () => {
  return <ButtonWithIcon {...propsButtonWithIcon} />;
});

stories.add("Button cyberpunk", () => {
  return <ButtonCyberpunk {...propsButton} />;
});
