import React from 'react';
import type { StoryObj } from '@storybook/react';
import { ButtonGroupProps } from '../../components/ButtonGroup';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<ButtonGroupProps & React.RefAttributes<HTMLDivElement>>;
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
export declare const Contained: Story;
export declare const Dashed: Story;
export declare const Dotted: Story;
export declare const Outlined: Story;
export declare const Text: Story;
export declare const Icon: Story;
