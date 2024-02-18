import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { ColorVariants, JCssProps, Theme } from '../types';
declare const DISPLAY_NAME: string;
export interface CircularProgressProps extends Omit<BoxProps, 'children' | 'variant'> {
    /**
     * The name of the color to apply on the html element, it can be also a static color(rgb, hex, etc)
     */
    color?: keyof Theme['color'] | string;
    /**
     * The name of the color variant to apply on the html element
     */
    colorVariant?: keyof ColorVariants;
    /**
     * If true, the percentage will be hidden
     */
    hidePercentage?: boolean;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The max value for the progress
     */
    max?: number;
    /**
     * The min value for the progress
     */
    min?: number;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The percentage to force on the progress
     */
    percentage?: number;
    /**
     * If true, the range will be shown on the percentage
     */
    showRangeOnPercentage?: boolean;
    /**
     * The value for the progress
     */
    value?: number;
    /**
     * The name of the variant to apply on the CircularProgress element
     */
    variant?: 'root' | string;
}
export declare const CircularProgress: ForwardRefExoticComponent<CircularProgressProps & RefAttributes<HTMLDivElement>>;
export default CircularProgress;
