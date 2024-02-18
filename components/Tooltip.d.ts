import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { ChildElement, JCssProps, Theme } from '../types';
import { TypographyProps } from './Typography';
declare const DISPLAY_NAME: string;
export interface TooltipProps extends BoxProps {
    /**
     * The value to be shown as content of the div
     */
    children: ChildElement;
    /**
     * The container for the tooltip portal
     */
    container?: HTMLElement;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The left offset in pixels for the tooltip, used to push the tooltip to the right, or left if negative
     */
    leftOffset?: number;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The element or text to be shown as tooltip
     */
    tooltip: ChildElement;
    /**
     * The css for the tooltip element
     */
    tooltipJCss?: JCssProps<Theme, TypographyProps>;
    /**
     * The top offset in pixels for the tooltip, used to get more space between the tooltip and the element
     */
    topOffset?: number;
    /**
     * The name of the variant to apply on the Typography/tooltip element
     */
    typographyVariant?: TypographyProps['variant'];
    /**
     * The name of the variant to apply on the Tooltip element
     */
    variant?: 'root' | 'contained' | 'dashed' | 'dotted' | 'outlined' | string;
}
export declare const Tooltip: ForwardRefExoticComponent<TooltipProps & RefAttributes<HTMLDivElement>>;
export default Tooltip;
