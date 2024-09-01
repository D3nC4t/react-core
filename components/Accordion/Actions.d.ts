import { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { BoxProps } from '../Box';
import type { ChildElement, ColorVariants, JCssProps, Theme } from '../../types';
declare const DISPLAY_NAME: string;
export interface ActionsProps extends BoxProps {
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
     * Use true to force the expansion of the AccordionActions element
     */
    forceExpand?: boolean;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The name of the variant to apply on the AccordionActions element
     */
    variant?: string;
}
export declare const Actions: ForwardRefExoticComponent<ActionsProps & RefAttributes<HTMLDivElement>>;
export default Actions;
