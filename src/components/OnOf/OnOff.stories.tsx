import React from "react";
import { OnOff } from "./OnOff";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "react-kabzda-podrobno/OnOff",
  component: OnOff,
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const onMode = Template.bind({});
onMode.args = {
  onOff: true,
  setOnOff: action("clicked"),
};

export const offMode = Template.bind({});
offMode.args = {
  onOff: false,
  setOnOff: action("clicked"),
};
