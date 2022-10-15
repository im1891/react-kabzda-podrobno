import { Select02 } from "./Select02";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

export default {
  title: "react-kabzda-podrobno/Select02",
  component: Select02,
} as ComponentMeta<typeof Select02>;

const Template: ComponentStory<typeof Select02> = (args) => {
  const [value, setValue] = useState(1);

  return <Select02 {...args} value={value} onChange={setValue} />;
};

export const withValue = Template.bind({});

withValue.args = {
  items: [
    { title: "Dimych", value: 1 },
    { title: "Valera", value: 2 },
    { title: "Artem", value: 3 },
    {
      title: "Viktor",
      value: 4,
    },
  ],
};

const Template2: ComponentStory<typeof Select02> = (args) => {
  const [value, setValue] = useState(null);
  return <Select02 {...args} value={value} onChange={setValue} />;
};
export const WithoutValue = Template2.bind({});

WithoutValue.args = {
  items: [
    { title: "Dimych", value: 1 },
    { title: "Valera", value: 2 },
    { title: "Artem", value: 3 },
    {
      title: "Viktor",
      value: 4,
    },
  ],
};
