import React from 'react';
import type { StoryObj } from '@storybook/react';
import { RadioProps } from '../../components/Radio';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<import("../../components/Radio").RadioRef>>;
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
export declare const Contained: Story;
export declare const ContainedCheckmark: Story;
export declare const ContainedCross: Story;
export declare const Outlined: Story;
export declare const OutlinedCheckmark: Story;
export declare const OutlinedCross: Story;
