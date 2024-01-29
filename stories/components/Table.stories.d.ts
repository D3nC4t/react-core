import React from 'react';
import type { StoryObj } from '@storybook/react';
import { TableProps } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<TableProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Bordered: Story;
