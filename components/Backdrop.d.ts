import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { FadeProps } from './Fade';
import { ChildElement, ColorVariants, CSSPosition, JCssProps, Theme } from '../types';
declare const DISPLAY_NAME: string;
export interface BackdropProps {
    /**
     * The props for the box component
     */
    boxProps?: Omit<BoxProps, 'children'>;
    /**
     * The value to be shown as content of the div
     */
    children?: ChildElement;
    /**
     * The color for the backdrop
     */
    color?: keyof Theme['color'] | string;
    /**
     * The name of the color variant to apply on the backdrop shadow
     */
    colorVariant?: keyof ColorVariants;
    /**
     * The props to parse to the fade component
     */
    $fadeProps?: FadeProps;
    /**
     * Use false for a fade out, and true for a fade in
     */
    in?: boolean;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme, BackdropProps>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'auto-fit' | 'flex-column' | 'flex-row' | 'root' | string;
    /**
     * The bottom positioning
     */
    $bottom?: string;
    /**
     * The duration for the fade event
     */
    $fadeDuration?: number;
    /**
     * The height for the backdrop, if both $top & $bottom is set will be ignored
     */
    $height?: string;
    /**
     * If true will set the backdrop background to be transparent
     */
    $invisible?: boolean;
    /**
     * The left positioning
     */
    $left?: number | string;
    /**
     * The opacity to apply on the backdrop
     */
    $opacity?: number;
    /**
     * The type of positioning on the screen
     */
    $position?: CSSPosition;
    /**
     * The right positioning
     */
    $right?: string;
    /**
     * The top positioning
     */
    $top?: string;
    /**
     * The width for the backdrop, if both $left & $right is set will be ignored
     */
    $width?: string;
}
export declare const Backdrop: ForwardRefExoticComponent<BackdropProps & RefAttributes<HTMLDivElement>>;
export default Backdrop;
