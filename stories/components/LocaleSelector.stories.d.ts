/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
import { LocaleSelectorProps } from '../../components';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<LocaleSelectorProps & import("react").RefAttributes<import("../../components").SelectRef>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<LocaleSelectorProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
