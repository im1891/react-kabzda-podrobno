import Accordion from "./Accordion";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

export default {
  title: "react-kabzda-podrobno/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Collapsed = Template.bind({});
Collapsed.args = {
  title: "Menu",
  collapsed: true,
  setCollapsed: action("accordion mode change event fired"),
  items: [
    { title: "Dimych", value: 1 },
    { title: "Valera", value: 2 },
    { title: "Artem", value: 3 },
    {
      title: "Viktor",
      value: 4,
    },
  ],
  onClick: action("some item was clicked"),
};

export const Uncollapsed = Template.bind({});
Uncollapsed.args = {
  title: "Menu",
  collapsed: false,
  setCollapsed: action("accordion mode change event fired"),
  items: [
    { title: "Dimych", value: 1 },
    { title: "Valera", value: 2 },
    { title: "Artem", value: 3 },
    {
      title: "Viktor",
      value: 4,
    },
  ],
  onClick: action("some item was clicked"),
};

export const ModeChange: ComponentStory<typeof Accordion> = (args) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Accordion {...args} collapsed={collapsed} setCollapsed={setCollapsed} />
  );
};
ModeChange.args = {
  title: "Users",
  items: [
    { title: "Dimych", value: 1 },
    { title: "Valera", value: 2 },
    { title: "Artem", value: 3 },
    {
      title: "Viktor",
      value: 4,
    },
  ],
  onClick: action("some item was clicked"),
};
