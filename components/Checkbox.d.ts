import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { RadioProps, RadioRef } from './Radio';
export interface CheckboxProps extends Omit<RadioProps, 'variant'> {
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'contained-plus' | 'contained-checkmark' | 'contained-cross' | 'contained-minus' | 'outlined-plus' | 'outlined-checkmark' | 'outlined-minus' | 'root' | string;
}
export declare const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<RadioRef>>;
export default Checkbox;
