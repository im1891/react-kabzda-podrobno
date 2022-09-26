import UncontrolledAccordion from "./UncontrolledAccordion";
import { ComponentMeta, ComponentStory } from "@storybook/react";

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
