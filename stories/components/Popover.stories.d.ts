import React from 'react';
import type { StoryObj } from '@storybook/react';
import { PopoverProps, PopoverRef } from '../../components/Popover';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<PopoverRef>>;
    tags: string[];
    argTypes: {
        $bgColor: {
            control: {
                type: string;
            };
        };
        $bColor: {
            control: {
                type: string;
            };
        };
        $bRadius: {
            control: {
                type: string;
            };
        };
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
export declare const Bordered: Story;
export declare const RoundBordered: Story;
export declare const RoundShadowed: Story;
export declare const Rounded: Story;
export declare const Shadowed: Story;
