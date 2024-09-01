import React from 'react';
import type { StoryObj } from '@storybook/react';
import { ConfirmModalProps, PortalRef } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<ConfirmModalProps & React.RefAttributes<PortalRef>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<ConfirmModalProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
