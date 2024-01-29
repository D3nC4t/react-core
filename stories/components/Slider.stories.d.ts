import React from 'react';
import type { StoryObj } from '@storybook/react';
import { SliderProps } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<SliderProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
export declare const Contained: Story;
export declare const Dashed: Story;
export declare const Dotted: Story;
export declare const Outlined: Story;
export declare const Shadowed: Story;
