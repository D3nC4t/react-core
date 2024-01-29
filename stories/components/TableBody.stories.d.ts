import React from 'react';
import type { StoryObj } from '@storybook/react';
import { TableBodyProps } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<TableBodyProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<TableBodyProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
