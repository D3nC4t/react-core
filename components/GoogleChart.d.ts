import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Chart, ReactGoogleChartProps } from 'react-google-charts';
import { ColorVariants, Theme } from '../types';
export type GoogleChartProps = Omit<ReactGoogleChartProps, 'chartType'> & {
    /**
     * The name of the color to apply on the html element, it can be also a static color(rgb, hex, etc)
     */
    color?: keyof Theme['color'];
    /**
     * The name of the color variant to apply on the html element
     */
    colorVariant?: keyof ColorVariants;
    /**
     * The name for this element
     */
    name?: string;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'area-chart' | 'bar' | 'bar-chart' | 'bubble-chart' | 'calendar' | 'candlestick-chart' | 'column-chart' | 'combo-chart' | 'gantt-chart' | 'gauge-chart' | 'geo-chart' | 'histogram' | 'line' | 'line-chart' | 'org-chart' | 'pie-chart' | 'sankey' | 'scatter' | 'scatter-chart' | 'stepped-area-chart' | 'table' | 'timeline' | 'tree-map' | 'word-tree';
};
declare const GoogleChart: ForwardRefExoticComponent<GoogleChartProps & RefAttributes<Chart>>;
export default GoogleChart;
