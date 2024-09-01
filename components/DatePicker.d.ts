import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { DateTime } from 'luxon';
import { DatePickerContextProviderProps } from '../context/date-picker';
import type { BoxProps } from './Box';
import type { ColorVariants, JCssProps, Theme } from '../types';
declare const DISPLAY_NAME: string;
export interface DatePickerProps extends Omit<BoxProps, 'children' | 'onChange'> {
    /**
     * The name of the color to apply on the html element
     */
    boxVariant?: BoxProps['variant'];
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
     * The method that will be triggered every time the date gets changed
     */
    onChange: DatePickerContextProviderProps['onChange'];
    /**
     * The method that will be triggered every time the toDate gets changed
     */
    onToDateChange?: DatePickerContextProviderProps['onChangeToDate'];
    /**
     * The type of picker
     */
    pickType?: DatePickerContextProviderProps['pickType'];
    /**
     * The date to be selected
     */
    selectedDate?: DateTime | Date;
    /**
     * The to date to be selected
     */
    toDate?: DateTime | Date;
    /**
     * Set to true to pick a range
     */
    useRange?: boolean;
    /**
     * The name of the variant to apply on the DatePicker element
     */
    variant?: string;
    /**
     * If true will show the time picker
     */
    withTime?: boolean;
}
export declare const DatePicker: ForwardRefExoticComponent<DatePickerProps & RefAttributes<HTMLDivElement>>;
export default DatePicker;
