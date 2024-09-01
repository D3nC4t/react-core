import { JCssProps, Theme } from '../theme';
import { TextProps } from '@storybook/blocks';
import { BoxProps, SelectProps } from '../../components';
export type FormTextInput = {
    initialValue?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    props?: TextProps;
    type: 'text' | 'password' | 'email' | 'url';
    validation?: (value: string) => boolean;
    value?: string;
};
export type FormNumberInput = {
    initialValue?: number;
    max?: number;
    min?: number;
    onChange: (value: number) => void;
    placeholder?: string;
    props?: TextProps;
    type: 'number' | 'tel';
    value?: number;
};
export type FormSelectInput = {
    initialValue?: string;
    onChange: (value: string | undefined) => void;
    options: string[];
    props: SelectProps;
    type: 'select';
    value?: string;
};
export type FormMultiSelectInput = {
    initialValue?: string[];
    onChange: (value: string[] | undefined) => void;
    options: string[];
    props: SelectProps;
    type: 'multi-select';
    value?: string[];
};
export type FormCheckboxInput = {
    initialValue?: boolean;
    onChange: (value: boolean) => void;
    type: 'checkbox' | 'radio';
    value?: boolean;
};
export type FormButton = {
    onClick: () => void;
    type: 'button' | 'submit' | 'reset';
};
export type FormHidden = {
    type: 'hidden';
    value?: boolean;
};
export type FormInput = (FormTextInput | FormNumberInput | FormSelectInput | FormMultiSelectInput | FormCheckboxInput | FormButton | FormHidden) & {
    boxProps?: Omit<BoxProps, 'children'>;
    key: string;
    label: string;
    jCss?: JCssProps<Theme>;
};
export type FormRow = {
    type: 'row';
    boxProps?: Omit<BoxProps, 'children'>;
    key: string;
    label?: string;
    inputs: FormInput[];
    jCss?: JCssProps<Theme>;
};
export type FormInputOrRow = FormInput | FormRow;
