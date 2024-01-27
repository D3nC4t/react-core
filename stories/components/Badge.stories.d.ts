import React from 'react';
import type { StoryObj } from '@storybook/react';
import { BadgeProps } from '../../components/Badge';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
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
        text: {
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
export declare const BottomRight: Story;
export declare const BottomLeft: Story;
export declare const TopRight: Story;
export declare const TopLeft: Story;
