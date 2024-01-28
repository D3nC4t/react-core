import React from 'react';
import type { StoryObj } from '@storybook/react';
import { AlertProps } from '../../components/Alert';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: {
        color: {
            options: string[];
            control: {
                type: string;
            };
        };
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
export declare const DifferentCloseIcon: Story;
export declare const WithCustomButton: Story;
export declare const Severities: Story;
export declare const Root: Story;
export declare const Contained: Story;
export declare const Outlined: Story;
export declare const Shadowed: Story;
