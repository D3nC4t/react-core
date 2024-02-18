import React from 'react';
import type { StoryObj } from '@storybook/react';
import * as T from '../../components/Table';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<T.TableProps & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<T.TableProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Bordered: Story;
