import React from 'react';
import type { StoryObj } from '@storybook/react';
import { AvatarGroupProps } from '../../components/AvatarGroup';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<AvatarGroupProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: {
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
export declare const CustomSurplus: Story;
export declare const Root: Story;
export declare const Contained: Story;
export declare const Dashed: Story;
export declare const Dotted: Story;
export declare const Outlined: Story;
export declare const Shadowed: Story;
export declare const RoundRoot: Story;
export declare const RoundContained: Story;
export declare const RoundDashed: Story;
export declare const RoundDotted: Story;
export declare const RoundOutlined: Story;
export declare const RoundShadowed: Story;
export declare const SquareRoot: Story;
export declare const SquareContained: Story;
export declare const SquareDashed: Story;
export declare const SquareDotted: Story;
export declare const SquareOutlined: Story;
export declare const SquareShadowed: Story;
