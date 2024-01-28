import React from 'react';
import type { StoryObj } from '@storybook/react';
import { SwitchProps } from '../../components/Switch';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: {
        color: {
            options: string[];
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
export declare const Rounded: Story;
export declare const RoundContained: Story;
