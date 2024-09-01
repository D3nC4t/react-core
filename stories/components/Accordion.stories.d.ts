import React from 'react';
import type { StoryObj } from '@storybook/react';
import * as Accordion from '../../components/Accordion';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<Accordion.AccordionProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<Accordion.AccordionProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Root: Story;
