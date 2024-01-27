import React from 'react';
import type { StoryObj } from '@storybook/react';
import { AutocompleteProps } from '../../components/Autocomplete';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<AutocompleteProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: {
        paperVariant: {
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
export declare const Contained: Story;
export declare const Dashed: Story;
export declare const Dotted: Story;
export declare const Outlined: Story;
export declare const OutlinedSandwich: Story;
export declare const Rounded: Story;
export declare const RoundContained: Story;
export declare const RoundOutlined: Story;
export declare const Sandwich: Story;
export declare const Shadowed: Story;
