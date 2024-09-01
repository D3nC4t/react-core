import React from 'react';
import type { StoryObj } from '@storybook/react';
import { DatePickerProps } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<DatePickerProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithTime: Story;
export declare const UseRange: Story;
export declare const UseRangeWithTime: Story;
