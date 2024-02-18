import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { RadioProps, RadioRef } from './Radio';
declare const DISPLAY_NAME: string;
export interface CheckboxProps extends Omit<RadioProps, 'variant'> {
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'contained-plus' | 'contained-checkmark' | 'contained-cross' | 'contained-minus' | 'outlined-plus' | 'outlined-checkmark' | 'outlined-minus' | 'root' | string;
}
export declare const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<RadioRef>>;
export default Checkbox;
