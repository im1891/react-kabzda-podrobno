import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UncontrolledAccordion } from "./UncontrolledAccordion";

export default {
  title: "react-kabzda-podrobno/UncontrolledAccordion",
  component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;

const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => (
  <UncontrolledAccordion {...args} />
);

export const ModeChanging = Template.bind({});
ModeChanging.args = {
  title: "--Books--",
};
