import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { JCssProps, Theme } from '../types';
export interface SwitchProps extends Omit<BoxProps, 'children'> {
    /**
     * The name for the hidden input element
     */
    inputName?: string;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for the div element
     */
    name?: string;
    /**
     * The value to be shown, if true, the thumb will have the checked class
     */
    value?: boolean;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'contained' | 'root' | 'rounded' | 'round-contained' | string;
}
export declare const Switch: ForwardRefExoticComponent<SwitchProps & RefAttributes<HTMLDivElement>>;
export default Switch;
