import { Select } from "./Select";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

export default {
  title: "react-kabzda-podrobno/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  {
    const [selectValue, setSelectValue] = useState<any>(1);

    return <Select {...args} value={selectValue} onChange={setSelectValue} />;
  }
};

export const Primary = Template.bind({});

Primary.args = {
  items: [
    { title: "Pavel", value: 1 },
    { title: "Sasha", value: 2 },
    { title: "Viktor", value: 3 },
    { title: "Vasil", value: 4 },
    { title: "Andrew", value: 5 },
    { title: "Mariya", value: 6 },
    { title: "Ket", value: 7 },
    { title: "Diana", value: 8 },
  ],
  onChange: action("click"),
};
