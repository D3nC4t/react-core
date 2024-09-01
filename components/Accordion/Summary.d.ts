import { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { BoxProps } from '../Box';
import type { IconProps } from "../Icon";
import type { ChildElement, ColorVariants, JCssProps, Theme } from '../../types';
declare const DISPLAY_NAME: string;
export interface SummaryProps extends BoxProps {
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
     * The icon to be shown on the right side of the content
     */
    icon?: ChildElement;
    /**
     * The size of the default icon
     */
    iconSize?: IconProps['size'];
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The name of the variant to apply on the AccordionSummary element
     */
    variant?: string;
}
export declare const Summary: ForwardRefExoticComponent<SummaryProps & RefAttributes<HTMLDivElement>>;
export default Summary;
