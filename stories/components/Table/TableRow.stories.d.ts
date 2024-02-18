import React from 'react';
import type { StoryObj } from '@storybook/react';
import { TableRowProps } from '../../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<TableRowProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
