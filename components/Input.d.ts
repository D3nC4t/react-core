import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { ChildElement, JCssProps, Theme } from '../types';
declare const DISPLAY_NAME: string;
export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    /**
     * The props for the box component
     */
    boxProps?: Omit<BoxProps, 'children'>;
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
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The pattern to apply on the input
     */
    pattern?: string;
    /**
     * The text to be used as placeholder for the input
     */
    placeholder?: string;
    /**
     * The JSX to be placed before the input
     */
    startAdornment?: ChildElement;
    /**
     * The type of the input
     */
    type?: 'text' | 'email' | 'password' | 'number';
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
