import React from "react";
import { UncontrolledOnOff } from "./UncontrolledOnOff";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "react-kabzda-podrobno/UncontrolledOnOff",
  component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => (
  <UncontrolledOnOff {...args} />
);

export const ModeChanging = Template.bind({});
ModeChanging.args = {
  onChange: action("on or off clicked"),
};
