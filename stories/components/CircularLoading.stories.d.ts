import React from 'react';
import type { StoryObj } from '@storybook/react';
import { CircularLoadingProps } from '../../components/CircularLoading';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<CircularLoadingProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: {
        variant: {
            options: string[];
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
export declare const Rainbow: Story;
export declare const Svg: Story;
