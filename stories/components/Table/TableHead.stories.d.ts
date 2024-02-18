import React from 'react';
import type { StoryObj } from '@storybook/react';
import { TableHeadProps } from '../../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<TableHeadProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<TableHeadProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
