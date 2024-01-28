import React from 'react';
import type { StoryObj } from '@storybook/react';
import { DrawerProps } from '../../components/Drawer';
import { PortalRef } from '../../components/Portal';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<PortalRef>>;
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
        modalVariant: {
            options: string[];
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
export declare const Bottom: Story;
export declare const BottomLeft: Story;
export declare const BottomRight: Story;
export declare const BottomRightWithAutoFit: Story;
export declare const Center: Story;
export declare const Left: Story;
export declare const Right: Story;
export declare const Top: Story;
export declare const TopRight: Story;
export declare const TopLeft: Story;
