import React from 'react';
import type { StoryObj } from '@storybook/react';
import { SwitchProps } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<SwitchProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
export declare const Contained: Story;
export declare const Rounded: Story;
export declare const RoundContained: Story;
