import React from 'react';
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<import("../../components/Box").BoxProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<import("../../components/Box").BoxProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
export declare const AutoFit: Story;
export declare const AutoFitNoPadding: Story;
export declare const Centered: Story;
export declare const FlexColumn: Story;
export declare const FlexRow: Story;
export declare const Bordered: Story;
export declare const NoPadding: Story;
