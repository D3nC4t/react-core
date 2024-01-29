import React from 'react';
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<import("../../components/Paper").PaperProps>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<import("../../components/Paper").PaperProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Root: Story;
export declare const Bordered: Story;
export declare const RoundBordered: Story;
export declare const Rounded: Story;
export declare const RoundShadowed: Story;
export declare const Shadowed: Story;
