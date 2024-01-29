import React from 'react';
import type { StoryObj } from '@storybook/react';
import { ModalProps, PortalRef } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<PortalRef>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<ModalProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
export declare const Bordered: Story;
export declare const RoundBordered: Story;
export declare const Rounded: Story;
