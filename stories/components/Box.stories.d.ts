import type { StoryObj } from '@storybook/react';
import React from 'react';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<import("../../components/Box").BoxProps & React.RefAttributes<HTMLDivElement>>;
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
export declare const Root: Story;
export declare const AutoFit: Story;
export declare const AutoFitNoPadding: Story;
export declare const Centered: Story;
export declare const FlexColumn: Story;
export declare const FlexRow: Story;
export declare const Bordered: Story;
export declare const NoPadding: Story;
