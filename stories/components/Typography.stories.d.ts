/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("../../components/Typography").TypographyProps & import("react").RefAttributes<HTMLDivElement>>;
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
export declare const Root: Story;
export declare const H1: Story;
export declare const H2: Story;
export declare const H3: Story;
export declare const H4: Story;
export declare const H5: Story;
export declare const Bold: Story;
export declare const Small: Story;
export declare const Caption: Story;
export declare const Roboto: Story;
