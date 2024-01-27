import React from 'react';
import type { StoryObj } from '@storybook/react';
import { FadeProps } from '../../components/Fade';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<FadeProps<undefined> & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Root: Story;
