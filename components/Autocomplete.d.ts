import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { InputRef } from './Input';
import { JCssProps, Theme } from '../types';
import { SelectProps, SelectRef } from './Select';
export interface AutocompleteProps extends SelectProps {
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: string | 'C4tAutocomplete';
    /**
     * An alternative theme name of the select component
     */
    selectName?: string;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: SelectProps['variant'] | string;
}
export interface AutocompleteRef extends SelectRef {
    searchRef: InputRef;
}
export declare const Autocomplete: ForwardRefExoticComponent<AutocompleteProps & RefAttributes<HTMLDivElement>>;
export default Autocomplete;
