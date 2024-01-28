import React from 'react';
import type { StoryObj } from '@storybook/react';
import { TextAreaProps } from '../../components/TextArea';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
    tags: string[];
    argTypes: {
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
export declare const Contained: Story;
export declare const Dashed: Story;
export declare const Dotted: Story;
export declare const Outlined: Story;
export declare const RoundContained: Story;
export declare const RoundOutlined: Story;
export declare const Rounded: Story;
export declare const Shadowed: Story;
