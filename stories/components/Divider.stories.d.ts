import React from 'react';
import type { StoryObj } from '@storybook/react';
import { DividerProps } from '../../components/Divider';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
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
export declare const Lighter: Story;
export declare const Light: Story;
export declare const Main: Story;
export declare const Dark: Story;
export declare const Darker: Story;
export declare const Text: Story;
