import React from 'react';
import type { StoryObj } from '@storybook/react';
import { AccordionActionsProps } from '../../../components';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<AccordionActionsProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<AccordionActionsProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
