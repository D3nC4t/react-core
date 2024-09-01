import { ForwardRefExoticComponent, ReactElement, RefAttributes } from 'react';
import Accordion, { Actions, Details, Summary } from "../Accordion";
import type { BoxProps } from '../Box';
import type { ColorVariants, JCssProps, Theme } from '../../types';
declare const DISPLAY_NAME: string;
export type AccordionGroupItem = {
    groupName: string;
    actions?: ReactElement<typeof Actions>;
    details?: ReactElement<typeof Details>;
    summary: ReactElement<typeof Summary>;
};
export interface GroupProps extends Omit<BoxProps, 'children'> {
    /**
     * The value to be shown as content of the div
     */
    children?: ReactElement<typeof Accordion>[];
    /**
     * The name of the color to apply on the html element, it can be also a static color(rgb, hex, etc)
     */
    color?: keyof Theme['color'] | string;
    /**
     * The name of the color variant to apply on the html element
     */
    colorVariant?: keyof ColorVariants;
    /**
     * The AccordionGroup items
     */
    items?: AccordionGroupItem[];
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The name of the variant to apply on the AccordionGroup element
     */
    variant?: string;
}
export declare const Group: ForwardRefExoticComponent<GroupProps & RefAttributes<HTMLDivElement>>;
export default Group;
