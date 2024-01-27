import * as CSS from 'csstype';
import { InputProps, Theme as BaseTheme } from '../../theme';
export type StandardCSSProperties = CSS.PropertiesFallback<number | string>;
export interface AliasesCSSProperties {
}
export type CSSBorderShape = 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none' | 'hidden';
export type CSSPosition = 'absolute' | 'fixed' | 'inherit' | 'initial' | 'relative' | 'static';
export type CSSUnit = 'px' | 'cm' | 'mm' | 'in' | 'pt' | 'pc' | 'ex' | 'ch' | 'rem' | 'em' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
export interface OverwriteCSSProperties {
    border?: CSS.Property.Border | number;
    boxShadow?: CSS.Property.BoxShadow | number;
    fontWeight?: CSS.Property.FontWeight | string;
    zIndex?: CSS.Property.ZIndex | string;
}
export type ResponsiveStyleValue<T> = T | (T | null)[] | {
    [key: string]: T | null;
};
export type CSSPseudoSelectorProps<Theme extends BaseTheme = BaseTheme> = {
    [K in CSS.Pseudos]?: ((theme: Theme) => StyleObject<Theme>) | StyleObject<Theme>;
};
export interface CSSSelectorObject<Theme extends BaseTheme = BaseTheme> {
    [cssSelector: string]: ((theme: Theme) => StyleObject<Theme>) | StyleObject<Theme>;
}
type CssVariableType = string | number;
export interface CSSSelectorObjectOrCssVariables<Theme extends BaseTheme = BaseTheme> {
    [cssSelectorOrVariable: string]: ((theme: Theme) => StyleObject<Theme> | string | number) | StyleObject<Theme> | CssVariableType;
}
export interface CoreCSSProperties extends Omit<StandardCSSProperties, keyof OverwriteCSSProperties>, OverwriteCSSProperties, AliasesCSSProperties {
}
export type SystemCssProperties<Theme extends BaseTheme = BaseTheme> = {
    [Key in keyof CoreCSSProperties]: ResponsiveStyleValue<CoreCSSProperties[Key]> | ((theme: Theme) => ResponsiveStyleValue<CoreCSSProperties[Key]>) | StyleObject<Theme>;
};
export type StyleObject<Theme extends BaseTheme = BaseTheme> = SystemCssProperties<Theme> | CSSPseudoSelectorProps<Theme> | CSSSelectorObjectOrCssVariables<Theme> | null;
export type ThemeStyledFunction<Theme extends BaseTheme = BaseTheme, Props extends object = any> = (theme: Theme, props?: Props) => StyleObject<Theme>;
export type JCssProps<Theme extends BaseTheme = BaseTheme, Props extends object = any> = StyleObject<Theme> | ThemeStyledFunction<Theme, Props> | ReadonlyArray<boolean | StyleObject<Theme> | ((theme: Theme, props?: Props) => StyleObject<Theme>)>;
export type JCssFunction<Props extends object = InputProps, Theme extends BaseTheme = BaseTheme> = (props: Props & {
    theme: Theme;
}) => JCssProps<Theme>;
export type StyledValue<Theme extends BaseTheme = BaseTheme, Props extends object = Record<string, any>> = number | string | JCssProps<Theme> | ((theme: Theme, props?: Props) => number | string | JCssProps<Theme>);
export {};
