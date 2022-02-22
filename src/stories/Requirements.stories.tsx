import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../components";

const stories = storiesOf("App Test", module);

const propsRequirements = {
  text: "Hello Anvil",
  onClick: () => console.log("ok"),
};

stories.add("App", () => {
  return <Button {...propsRequirements} />;
});
