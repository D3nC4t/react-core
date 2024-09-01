import React from 'react';
import type { StoryObj } from '@storybook/react';
import { StepperModalProps } from '../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<StepperModalProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<StepperModalProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
