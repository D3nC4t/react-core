import React from 'react';
import type { StoryObj } from '@storybook/react';
import { ScrollRef } from '../../components/ScrollBox';
import { ScrollBoxProps } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<ScrollBoxProps & React.RefAttributes<ScrollRef>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<ScrollBoxProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
