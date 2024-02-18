import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { JCssProps, Theme } from '../types';
import { SelectProps, SelectRef } from './Select';
declare const DISPLAY_NAME: string;
export interface LocaleSelectorProps extends Omit<SelectProps, 'children'> {
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The name of the variant to apply on the LocaleSelector element
     */
    variant?: 'root' | string;
}
export declare const LocaleSelector: ForwardRefExoticComponent<LocaleSelectorProps & RefAttributes<SelectRef>>;
export default LocaleSelector;
