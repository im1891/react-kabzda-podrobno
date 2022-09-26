import { Select } from "./Select";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "react-kabzda-podrobno/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const OpenSelect = Template.bind({});

OpenSelect.args = {
  value: "none",
  items: [
    { title: "Pavel", value: 1 },
    { title: "Sasha", value: 2 },
    { title: "Viktor", value: 3 },
  ],
  onChange: action("click"),
};
