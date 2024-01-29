import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { JCssProps, Theme } from '../types';
export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
    /**
     * The props for the box component
     */
    boxProps?: BoxProps;
    /**
     * Use true to disable the textarea
     */
    disabled?: boolean;
    /**
     * The name for the hidden textarea element
     */
    inputName?: string;
    /**
     * Use true to mark the textarea as invalid
     */
    invalid?: boolean;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: string | 'C4tTextArea';
    /**
     * The orientation of the textarea resize feature
     */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    /**
     * The number of visible rows
     */
    rows?: number;
    /**
     * The value for the textarea
     */
    value?: string;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'contained' | 'dashed' | 'dotted' | 'outlined' | 'root' | 'round-contained' | 'round-outlined' | 'rounded' | 'shadowed' | string;
    /**
     * The width of the textarea
     */
    width?: number;
}
export declare const TextArea: ForwardRefExoticComponent<TextAreaProps & RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
