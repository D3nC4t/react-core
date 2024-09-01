import React, { ForwardRefExoticComponent, ReactElement, RefAttributes } from 'react';
import Actions from './Accordion/Actions';
import Details from './Accordion/Details';
import Summary from './Accordion/Summary';
import { BoxProps } from './Box';
import { ColorVariants, JCssProps, Theme } from '../types';
declare const DISPLAY_NAME: string;
export { default as Actions } from './Accordion/Actions';
export { default as Details } from './Accordion/Details';
export { default as Group } from './Accordion/Group';
export { default as Summary } from './Accordion/Summary';
export type AccordionContextType = {
    disabled: boolean;
    expanded: boolean;
    toggleExpanded: () => void;
};
export declare const AccordionContext: React.Context<AccordionContextType>;
export type AccordionChildren = [
    ReactElement<typeof Summary>,
    ...(ReactElement<typeof Details | typeof Actions> | undefined)[]
];
export interface AccordionProps extends Omit<BoxProps, 'onChange'> {
    /**
     * The value to be shown as content of the div
     */
    children: AccordionChildren;
    /**
     * The name of the color to apply on the html element, it can be also a static color(rgb, hex, etc)
     */
    color?: keyof Theme['color'] | string;
    /**
     * The name of the color variant to apply on the html element
     */
    colorVariant?: keyof ColorVariants;
    /**
     * Use true if you wish to disable the Accordion element
     */
    disabled?: boolean;
    /**
     * Use true if you wish to expand the Accordion element
     */
    expanded?: boolean;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The callback to trigger when the Accordion element is expanded or collapsed
     */
    onChange?: (expanded: boolean) => void;
    /**
     * The name of the variant to apply on the Accordion element
     */
    variant?: string;
}
export declare const Box: ForwardRefExoticComponent<AccordionProps & RefAttributes<HTMLDivElement>>;
export default Box;
