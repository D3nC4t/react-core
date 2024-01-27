import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { ChildElement, JCssProps, Theme } from '../types';
export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    /**
     * The props for the box component
     */
    boxProps?: BoxProps;
    /**
     * The JSX to be placed after the input
     */
    endAdornment?: ChildElement;
    /**
     * The name of the color to apply on the input
     */
    color?: keyof Theme['color'] | string;
    /**
     * Use true to disable the input (it won't affect the adornments)
     */
    disabled?: boolean;
    /**
     * The name for the real/hidden input element
     */
    inputName?: string;
    /**
     * Use true to mark the input as invalid
     */
    invalid?: boolean;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for the div element
     */
    name?: string;
    /**
     * The pattern to apply on the input
     */
    pattern?: string;
    /**
     * The JSX to be placed before the input
     */
    startAdornment?: ChildElement;
    /**
     * The value for the input
     */
    value?: string | number;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'contained' | 'dashed' | 'dotted' | 'outlined' | 'root' | 'round-contained' | 'round-outlined' | 'rounded' | 'shadowed' | string;
    /**
     * The value for the width of the input
     */
    width?: number;
}
export interface InputRef extends HTMLInputElement {
    endAdornmentRef: HTMLDivElement | null;
    outerRef: HTMLDivElement | null;
    startAdornmentRef: HTMLDivElement | null;
}
export declare const Input: ForwardRefExoticComponent<InputProps & RefAttributes<InputRef>>;
export default Input;