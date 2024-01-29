import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { JCssProps, Theme } from '../types';
export interface ProgressBarProps extends Omit<BoxProps, 'children' | 'variant'> {
    /**
     * The variant for the box component
     */
    boxVariant?: BoxProps['variant'];
    /**
     * The name of the color to apply on the html element, it can also be a static color(rgb, hex, etc)
     */
    color?: keyof Theme['color'] | string;
    /**
     * Use true to hide the progress text
     */
    hideProgress?: boolean;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The maximum value for the progress bar, by default it is 100
     */
    max?: number;
    /**
     * The minimum value for the progress bar, by default it is 0
     */
    min?: number;
    /**
     * The name for this element
     */
    name?: string | 'C4tProgressBar';
    /**
     * The distance between steps in the progress bar
     */
    step?: number;
    /**
     * The symbol for the progress bar text
     */
    symbol?: string;
    /**
     * The title for the progress bar
     */
    title?: string;
    /**
     * The value for the progress bar
     */
    value?: number;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'root' | 'contained' | 'dashed' | 'dotted' | 'outlined' | string;
}
export declare const ProgressBar: ForwardRefExoticComponent<ProgressBarProps & RefAttributes<HTMLDivElement>>;
export default ProgressBar;
