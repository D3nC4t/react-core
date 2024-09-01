import { ForwardRefExoticComponent, RefAttributes, RefObject } from 'react';
import type { BoxProps } from './Box';
import type { ChildElement, ColorVariants, JCssProps, Theme } from '../types';
declare const DISPLAY_NAME: string;
export interface ScrollBoxProps extends BoxProps {
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
     * Use true to hide the scroll bar
     */
    hideScroll?: boolean;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The maximum size to activate the scroll, by default is 300
     */
    maxBoxSize?: number;
    /**
     * The minimum size for the thumb
     */
    minThumbSize?: number;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The scroll direction, by default is vertical
     */
    scrollDirection?: 'horizontal' | 'vertical';
    /**
     * The name of the variant to apply on the ScrollBox element
     */
    variant?: string;
}
export type ScrollRef = {
    container: RefObject<HTMLDivElement>;
    scrollBox: RefObject<HTMLDivElement>;
    thumb: RefObject<HTMLDivElement>;
    track: RefObject<HTMLDivElement>;
    scrollTo$el: ($el: HTMLElement) => void;
};
export declare const ScrollBox: ForwardRefExoticComponent<ScrollBoxProps & RefAttributes<ScrollRef>>;
export default ScrollBox;
