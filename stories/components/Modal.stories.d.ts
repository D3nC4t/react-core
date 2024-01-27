import React from 'react';
import type { StoryObj } from '@storybook/react';
import { ModalProps } from '../../components/Modal';
import { PortalRef } from '../../components/Portal';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<PortalRef>>;
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
        portalVariant: {
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
export declare const Root: Story;
export declare const Bordered: Story;
export declare const RoundBordered: Story;
export declare const Rounded: Story;
