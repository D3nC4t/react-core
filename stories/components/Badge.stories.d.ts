import React from 'react';
import type { StoryObj } from '@storybook/react';
import { BadgeProps } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<BadgeProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
export declare const BottomRight: Story;
export declare const BottomLeft: Story;
export declare const TopRight: Story;
export declare const TopLeft: Story;
