import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { ChildElement, JCssProps, Theme } from '../types';
declare const DISPLAY_NAME: string;
export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The alternative text to be shown when the image is not available
     */
    alt?: string;
    /**
     * The props for the box component
     */
    boxProps?: BoxProps;
    /**
     * The value to be shown as content of the div
     */
    children?: ChildElement;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The source url for the image to be shown
     */
    src?: string;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'contained' | 'dashed' | 'dotted' | 'outlined' | 'root' | 'shadowed' | 'round-contained' | 'round-dashed' | 'round-dotted' | 'round-outlined' | 'round-root' | 'round-shadowed' | 'square-contained' | 'square-dashed' | 'square-dotted' | 'square-outlined' | 'square-root' | 'square-shadowed' | string;
}
export declare const Avatar: ForwardRefExoticComponent<AvatarProps & RefAttributes<HTMLDivElement>>;
export default Avatar;
