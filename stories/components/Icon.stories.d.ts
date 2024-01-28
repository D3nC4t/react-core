import type { StoryObj } from '@storybook/react';
import React from 'react';
import { IconProps } from '../../components/Icon';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Solid: Story;
export declare const Regular: Story;
export declare const Brand: Story;
