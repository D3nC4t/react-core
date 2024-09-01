/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
import { GoogleChartProps } from '../../components/GoogleChart';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<Omit<import("react-google-charts").ReactGoogleChartProps, "chartType"> & {
        color?: string | undefined;
        colorVariant?: keyof import("../../types").ColorVariants | undefined;
        name?: string | undefined;
        variant?: "bar" | "table" | "line" | "area-chart" | "bar-chart" | "pie-chart" | "line-chart" | "timeline" | "calendar" | "bubble-chart" | "candlestick-chart" | "column-chart" | "combo-chart" | "gantt-chart" | "gauge-chart" | "geo-chart" | "histogram" | "org-chart" | "sankey" | "scatter" | "scatter-chart" | "stepped-area-chart" | "tree-map" | "word-tree" | undefined;
    } & import("react").RefAttributes<import("react-google-charts").Chart>>;
    tags: string[];
    argTypes: Partial<import("@storybook/types").ArgTypes<GoogleChartProps>> | undefined;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
