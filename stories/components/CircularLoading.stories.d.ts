import React from 'react';
import type { StoryObj } from '@storybook/react';
import { CircularLoadingProps } from '../../components/CircularLoading';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<CircularLoadingProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<CircularLoadingProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
export declare const Rainbow: Story;
export declare const Svg: Story;
