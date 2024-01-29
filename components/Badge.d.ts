import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { ChildElement, JCssProps, Theme } from '../types';
export interface BadgeProps extends BoxProps {
    /**
     * The name of the color to apply on the badge, it can be also a static color(rgb, hex, etc)
     */
    color?: keyof Theme['color'] | string;
    /**
    * The value to be shown as content of the div
    */
    children: ChildElement;
    /**
    * The extra css in js
    */
    jCss?: JCssProps<Theme>;
    /**
    * The name for this element
    */
    name?: string | 'C4tBadge';
    /**
     * The position of the badge, by default it is top-right
     */
    position?: 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right';
    /**
     * The text to be shown on the badge
     */
    text?: number | string;
    /**
    * The name of the variant to apply on the html element
    */
    variant?: string;
}
export declare const Badge: ForwardRefExoticComponent<BadgeProps & RefAttributes<HTMLDivElement>>;
export default Badge;
