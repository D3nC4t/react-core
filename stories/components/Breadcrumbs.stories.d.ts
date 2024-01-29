import React from 'react';
import type { StoryObj } from '@storybook/react';
import { BreadcrumbsProps } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<BreadcrumbsProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
