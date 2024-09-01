import React, { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import { PaperProps } from './Paper';
import { BoxProps } from './Box';
import { JCssProps, Theme } from '../types';
import { PopoverRef } from './Popover';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
declare const DISPLAY_NAME: string;
export interface SelectProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange' | 'color'> {
    /**
     * The props for the box component
     */
    boxProps?: BoxProps;
    /**
     * The value to be shown as content of the div
     */
    children: React.JSX.Element[];
    /**
     * The icon to show at the end of the input when the options are open
     */
    closeIcon?: IconDefinition;
    /**
     * The name of the color to apply on the html element, it can be also a static color(rgb, hex, etc)
     */
    color?: keyof Theme['color'] | string;
    /**
     * The name of the color variant to apply on the html element
     */
    colorVariant?: keyof Theme['color']['colorVariants'];
    /**
     * Use true to disable the select
     */
    disabled?: boolean;
    /**
     * The list of keys to exclude while triggering the selection events
     */
    excludeKeys?: string[];
    /**
     * The name of the hidden form input
     */
    inputName?: string;
    /**
     * The name of the module to use for the translations
     */
    intlModule?: string;
    /**
     * Use true to mark the select as invalid
     */
    invalid?: boolean;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * Use true to allow multiple selection
     */
    multiple?: boolean;
    /**
     * The event triggered every time the selection status changes
     */
    onChange?: (selected: undefined | string | string[]) => void;
    /**
     * The icon to show at the end of the input when the options are closed
     */
    openIcon?: IconDefinition;
    /**
     * The extra css in js
     */
    optionsJCss?: JCssProps<Theme>;
    /**
     * The variant to apply on the paper component (select options)
     */
    paperVariant?: PaperProps['variant'];
    /**
     * The max height in pixels for the select options box
     */
    maxHeight?: number;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * Use true to use a popover instead of an attached floating element
     */
    usePopover?: boolean;
    /**
     * The initial value for the select
     */
    value?: string | string[];
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'contained' | 'dashed' | 'dotted' | 'rounded' | 'round-contained' | 'round-outlined' | 'outlined' | 'outlined-sandwich' | 'root' | 'sandwich' | 'shadowed' | string;
    /**
     * The width in pixels for the select
     */
    width?: number;
}
export interface SelectRef extends HTMLDivElement {
    innerRef?: HTMLElement | null;
    inputRef?: HTMLInputElement | null;
    optionsRef?: HTMLElement | null;
    popoverRef?: PopoverRef | null;
}
export declare const Select: ForwardRefExoticComponent<SelectProps & RefAttributes<SelectRef>>;
export default Select;
