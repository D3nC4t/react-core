import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { JCssProps, Theme } from '../types';
declare const DISPLAY_NAME: string;
export interface CircularLoadingProps extends Omit<BoxProps, 'children' | 'variant'> {
    /**
     * The variant for the box component
     */
    boxVariant?: BoxProps['variant'];
    /**
     * The name of the color to apply on the html element, it can be also a static color(rgb, hex, etc)
     */
    color?: keyof Theme['color'] | string;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The extra css in js for the lines, the key is the line index
     */
    linesJCss?: Record<number, JCssProps<Theme>>;
    /**
     * The specific element for the lines, the key is the line index
     */
    lines$el?: Record<number, React.JSX.Element>;
    /**
     * The name for the Box element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The number of lines to display
     */
    nLines?: number;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'rainbow' | 'root' | 'svg' | string;
}
export declare const CircularLoading: ForwardRefExoticComponent<CircularLoadingProps & RefAttributes<HTMLDivElement>>;
export default CircularLoading;
