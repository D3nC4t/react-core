import React from 'react';
import type { StoryObj } from '@storybook/react';
import { BackdropProps } from '../../components/Backdrop';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<BackdropProps & React.RefAttributes<HTMLDivElement>>;
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
export declare const AutoFit: Story;
export declare const FlexColumn: Story;
export declare const FlexRow: Story;
