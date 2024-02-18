import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import { ChildElement, JCssProps, Theme, BoxHTMLTags, ColorVariants, CSSUnit, CSSBorderShape, ThemeColor } from '../types';
declare const DISPLAY_NAME: string;
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The color to use as background of Box elements
     */
    $bgColor?: ThemeColor;
    /**
     * The color variant to be used on the background
     */
    $bgColorVariant?: keyof ColorVariants;
    /**
     * The color for the border
     */
    $bColor?: ThemeColor;
    /**
     * The variant of the theme bColor chosen
     */
    $bColorVariant?: keyof ColorVariants;
    /**
     * The gap to apply on the flex variants
     */
    $gap?: number;
    /**
     * The value for the border radius of the div element
     */
    $bRadius?: string | ((theme: Theme) => string);
    /**
     * The shape of the border for the Box div element
     */
    $bShape?: CSSBorderShape;
    /**
     * The size of the border to apply on the div element
     */
    $bSize?: number | ((theme: Theme) => number);
    /**
     * The unit for the border to apply on the div element
     */
    $bUnit?: CSSUnit;
    /**
     * The value to be shown as content of the div
     */
    children: ChildElement;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme, BoxProps>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The tag element to use
     */
    tag?: BoxHTMLTags;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'auto-fit' | 'auto-fit-no-padding' | 'bordered' | 'centered' | 'flex-column' | 'flex-column-no-padding' | 'flex-grow' | 'flex-grow-no-padding' | 'flex-row' | 'flex-row-no-padding' | 'invisible' | 'no-padding' | 'root' | string;
}
export declare const Box: ForwardRefExoticComponent<BoxProps & RefAttributes<HTMLDivElement>>;
export default Box;
