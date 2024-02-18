import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import { ChildElement, ColorVariants, JCssProps, Theme, TypographyHTMLTags } from '../types';
declare const DISPLAY_NAME: string;
export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
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
     * The font-Family to be forced
     */
    fontFamily?: string;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme, TypographyProps>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The tag element to use
     */
    tag?: TypographyHTMLTags;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'root' | keyof Theme['typography']['variants'] | string;
}
export declare const Typography: ForwardRefExoticComponent<TypographyProps & RefAttributes<HTMLDivElement>>;
export default Typography;
