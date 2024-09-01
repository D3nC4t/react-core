import React from 'react';
import type { StoryObj } from '@storybook/react';
import { DateInputProps } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<DateInputProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<DateInputProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithTime: Story;
