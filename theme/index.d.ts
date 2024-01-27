import React from 'react';
import { Theme } from '../types';
declare const theme: Theme;
export default theme;
export { default as createTheme } from './styled/createTheme';
export { default as useDefaultProps } from './hooks/useDefaultProps';
export { default as useTheme } from './hooks/useTheme';
export { default as useVariantJCss } from './hooks/useVariantJCss';
export type ThemeCustomizationProps = {
    $el?: HTMLElement;
    children: React.JSX.Element;
    theme?: Theme;
};
export declare function ThemeCustomization({ $el, children, theme: otherTheme }: ThemeCustomizationProps): React.JSX.Element;
export declare let appTheme: Theme;
export declare function applyTheme<T extends Theme>(theme: T): T;
