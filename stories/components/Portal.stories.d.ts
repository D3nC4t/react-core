import React from 'react';
import type { StoryObj } from '@storybook/react';
import { PortalProps } from '../../components/Portal';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<PortalProps & React.RefAttributes<import("../../components/Portal").PortalRef>>;
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
export declare const Bottom: Story;
export declare const BottomRight: Story;
export declare const BottomLeft: Story;
export declare const Center: Story;
export declare const CenterRight: Story;
export declare const CenterLeft: Story;
export declare const Top: Story;
export declare const TopRight: Story;
export declare const TopLeft: Story;
