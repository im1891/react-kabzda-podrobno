import { Rating } from "./Rating";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "react-kabzda-podrobno/Rating",
  component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
  value: 0,
  onClick: action("click"),
};

export const Rating1 = Template.bind({});
Rating1.args = {
  value: 1,
  onClick: action("click"),
};

export const Rating2 = Template.bind({});
Rating2.args = {
  value: 2,
  onClick: action("click"),
};

export const Rating3 = Template.bind({});
Rating3.args = {
  value: 3,
  onClick: action("click"),
};

export const Rating4 = Template.bind({});
Rating4.args = {
  value: 4,
  onClick: action("click"),
};

export const Rating5 = Template.bind({});
Rating5.args = {
  value: 5,
  onClick: action("click"),
};
