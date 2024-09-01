import { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { BoxProps } from './Box';
import type { ColorVariants, JCssProps, Theme } from '../types';
declare const DISPLAY_NAME: string;
export interface DateInputProps extends Omit<BoxProps, 'children' | 'onChange'> {
    /**
    * The name of the color to apply on the html element, it can be also a static color(rgb, hex, etc)
    */
    color?: keyof Theme['color'] | string;
    /**
    * The name of the color variant to apply on the html element
    */
    colorVariant?: keyof ColorVariants;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The callback to be called when the date changes
     */
    onChange: (date: string) => void;
    /**
     * The value to be shown on the Input element
     */
    value?: string;
    /**
     * The name of the variant to apply on the DateInput element
     */
    variant?: string;
    /**
     * Use true to show the time picker
     */
    withTime?: boolean;
}
export declare const DateRegex: RegExp;
export declare const DateInput: ForwardRefExoticComponent<DateInputProps & RefAttributes<HTMLDivElement>>;
export default DateInput;
