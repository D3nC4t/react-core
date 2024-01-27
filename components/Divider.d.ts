import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { ChildElement, ColorVariants, JCssProps, Theme } from '../types';
export interface DividerProps extends BoxProps {
    /**
     * The value to be shown as content of the div
     */
    children: ChildElement;
    /**
     * The name of the color to apply on the html element, it can be also a static color(rgb, hex, etc)
     */
    color?: keyof Theme['color'] | string;
    /**
     * The name of the color variant to apply on the html element
     */
    colorVariant?: keyof ColorVariants;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: string;
    /**
     * The text alignment
     */
    textAlignment?: 'left' | 'center' | 'right';
    /**
     * The name of the variant to apply on the Divider element
     */
    variant?: string;
}
export declare const Divider: ForwardRefExoticComponent<DividerProps & RefAttributes<HTMLDivElement>>;
export default Divider;
