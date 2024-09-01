import React from 'react';
import type { StoryObj } from '@storybook/react';
import { ButtonProps } from '../../components/Button';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<ButtonProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BasicEvent: Story;
export declare const BasicEventWithArgs: Story;
