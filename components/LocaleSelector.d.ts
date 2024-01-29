import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { JCssProps, Theme } from '../types';
import { SelectProps, SelectRef } from './Select';
export interface LocaleSelectorProps extends Omit<SelectProps, 'children'> {
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: string | 'C4tLocaleSelector';
    /**
     * The name of the variant to apply on the LocaleSelector element
     */
    variant?: 'root' | string;
}
export declare const LocaleSelector: ForwardRefExoticComponent<LocaleSelectorProps & RefAttributes<SelectRef>>;
export default LocaleSelector;
