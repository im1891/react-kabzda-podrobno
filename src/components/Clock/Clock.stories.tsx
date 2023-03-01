import React from "react";
import {Clock} from "./Clock";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Clock',
    component: Clock
} as ComponentMeta<typeof Clock>

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args}/>

export const BaseAnalogClockExample = Template.bind({})

BaseAnalogClockExample.args = {
    mode: 'analog'
}
export const BaseDigitalClockExample = Template.bind({})

BaseDigitalClockExample.args = {
    mode: 'digital'
}

