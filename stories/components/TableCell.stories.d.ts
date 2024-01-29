import React from 'react';
import type { StoryObj } from '@storybook/react';
import { TableCellProps } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<TableCellProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
