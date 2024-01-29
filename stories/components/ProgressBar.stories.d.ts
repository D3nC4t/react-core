import React from 'react';
import type { StoryObj } from '@storybook/react';
import { ProgressBarProps } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<ProgressBarProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
export declare const Contained: Story;
export declare const Dashed: Story;
export declare const Dotted: Story;
export declare const Outlined: Story;
