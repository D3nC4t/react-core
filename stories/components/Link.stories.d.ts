import React from 'react';
import type { StoryObj } from '@storybook/react';
import { LinkProps } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<LinkProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
