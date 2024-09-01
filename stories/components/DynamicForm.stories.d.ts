/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
import { DynamicFormProps } from '../../components';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<DynamicFormProps & import("react").RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<DynamicFormProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
