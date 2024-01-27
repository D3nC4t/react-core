import React from 'react';
import type { StoryObj } from '@storybook/react';
import { LinkProps } from '../../components/Link';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: {
        color: {
            options: string[];
            control: {
                type: string;
            };
        };
        colorVariant: {
            options: string[];
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
export declare const Root: Story;
