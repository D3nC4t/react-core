import React from 'react';
import type { StoryObj } from '@storybook/react';
import { TooltipProps } from '../../components/Tooltip';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;
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
export declare const Dashed: Story;
export declare const Dotted: Story;
export declare const Outlined: Story;
