import { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { BoxProps } from './Box';
import type { ColorVariants, JCssProps, Theme } from '../types';
import { FormInputOrRow } from '../types/components/form';
declare const DISPLAY_NAME: string;
export interface DynamicFormProps extends Omit<BoxProps, 'children'> {
    /**
    * The name of the color to apply on the html element, it can be also a static color(rgb, hex, etc)
    */
    color?: keyof Theme['color'] | string;
    /**
    * The name of the color variant to apply on the html element
    */
    colorVariant?: keyof ColorVariants;
    /**
     * The form inputs to be shown
     */
    form: FormInputOrRow[];
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The name of the variant to apply on the DynamicForm element
     */
    variant?: string;
}
export declare const DynamicForm: ForwardRefExoticComponent<DynamicFormProps & RefAttributes<HTMLDivElement>>;
export default DynamicForm;
