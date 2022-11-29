import React from "react";
import {Clock} from "./Clock";
import {ComponentMeta} from "@storybook/react";

export default {
    title: 'Clock',
    component: Clock
} as ComponentMeta<typeof Clock>

export const baseExample = () => <Clock/>