import React from 'react';
import type { StoryObj } from '@storybook/react';
import { CheckboxProps } from '../../components/Checkbox';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<import("../..").RadioRef>>;
    tags: string[];
    argTypes: {
        color: {
            control: {
                type: string;
            };
        };
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
export declare const ContainedPlus: Story;
export declare const ContainedCheckmark: Story;
export declare const ContainedCross: Story;
export declare const ContainedMinus: Story;
export declare const OutlinedPlus: Story;
export declare const OutlinedCheckmark: Story;
export declare const OutlinedMinus: Story;
