import React from 'react';
import type { StoryObj } from '@storybook/react';
import { RadioProps } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<import("../../components").RadioRef>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<RadioProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
export declare const Contained: Story;
export declare const ContainedCheckmark: Story;
export declare const ContainedCross: Story;
export declare const Outlined: Story;
export declare const OutlinedCheckmark: Story;
export declare const OutlinedCross: Story;
