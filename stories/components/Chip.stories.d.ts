import React from 'react';
import type { StoryObj } from '@storybook/react';
import { ChipProps } from '../../components/Chip';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<ChipProps<"button" | "a" | "div"> & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
