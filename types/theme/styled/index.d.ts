import React, { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import { PropsOf } from '@emotion/react';
import { StyledComponent as EmotionStyledComponent, StyledOptions } from '@emotion/styled';
import { Interpolation, JCssProps, JCssFunction, Theme as BaseTheme } from '../../theme';
export * from './cssInterpolation';
export * from './jCss';
export interface CreateC4tStyled<MUIStyledCommonProps extends object = C4tStyledCommonProps, MuiStyledOptions extends object = C4tStyledFnOptions, Theme extends BaseTheme = BaseTheme> {
    <Component extends React.ComponentClass<React.ComponentProps<Component>>, ForwardedProps extends keyof React.ComponentProps<Component> = keyof React.ComponentProps<Component>>(component: Component, options: FilteringStyledOptions<React.ComponentProps<Component>, ForwardedProps> & MuiStyledOptions): CreateStyledComponent<Pick<PropsOf<Component>, ForwardedProps> & MUIStyledCommonProps, Record<string, any>, {
        ref?: React.Ref<InstanceType<Component>>;
    }, Theme>;
    <C extends React.ComponentClass<React.ComponentProps<C>>>(component: C, options?: StyledOptions<PropsOf<C> & MUIStyledCommonProps> & MuiStyledOptions): CreateStyledComponent<PropsOf<C> & MUIStyledCommonProps, Record<string, any>, {
        ref?: React.Ref<InstanceType<C>>;
    }, Theme>;
    <C extends React.JSXElementConstructor<React.ComponentProps<C>>, ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>>(component: C, options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps> & MuiStyledOptions): CreateStyledComponent<Pick<PropsOf<C>, ForwardedProps> & MUIStyledCommonProps, Record<string, any>, Record<string, any>, Theme>;
    <C extends React.JSXElementConstructor<React.ComponentProps<C>>>(component: C, options?: StyledOptions<PropsOf<C> & MUIStyledCommonProps> & MuiStyledOptions): CreateStyledComponent<PropsOf<C> & MUIStyledCommonProps, Record<string, any>, Record<string, any>, Theme>;
    <Tag extends keyof React.JSX.IntrinsicElements, ForwardedProps extends keyof React.JSX.IntrinsicElements[Tag] = keyof React.JSX.IntrinsicElements[Tag]>(tag: Tag, options: FilteringStyledOptions<React.JSX.IntrinsicElements[Tag], ForwardedProps> & MuiStyledOptions): CreateStyledComponent<MUIStyledCommonProps, Pick<React.JSX.IntrinsicElements[Tag], ForwardedProps>, Record<string, any>, Theme>;
    <Tag extends keyof React.JSX.IntrinsicElements>(tag: Tag, options?: StyledOptions<MUIStyledCommonProps> & MuiStyledOptions): CreateStyledComponent<MUIStyledCommonProps, React.JSX.IntrinsicElements[Tag], Record<string, any>, Theme>;
}
export interface CreateStyledComponent<ComponentProps extends object, SpecificComponentProps extends object = Record<string, any>, JSXProps extends object = Record<string, any>, Theme extends BaseTheme = BaseTheme> {
    (...styles: Array<Interpolation<ComponentProps & SpecificComponentProps & {
        theme: Theme;
    }>> | JCssFunction<ComponentProps & SpecificComponentProps & {
        theme: Theme;
    }>[] | JCssProps<Theme>[]): StyledComponent<ComponentProps, SpecificComponentProps, JSXProps>;
    <AdditionalProps extends object>(...styles: Array<Interpolation<ComponentProps & SpecificComponentProps & AdditionalProps & {
        theme: Theme;
    }>> | JCssFunction<ComponentProps & SpecificComponentProps & AdditionalProps & {
        theme: Theme;
    }>[] | JCssProps<Theme>[]): StyledComponent<ComponentProps & AdditionalProps, SpecificComponentProps, JSXProps>;
    (template: JCssFunction<ComponentProps & SpecificComponentProps & {
        theme: Theme;
    }> | JCssProps<Theme>, ...styles: Array<Interpolation<ComponentProps & SpecificComponentProps & {
        theme: Theme;
    }>> | JCssFunction<ComponentProps & SpecificComponentProps & {
        theme: Theme;
    }>[] | JCssProps<Theme>[]): StyledComponent<ComponentProps, SpecificComponentProps, JSXProps>;
    <AdditionalProps extends object>(template: JCssFunction<ComponentProps & SpecificComponentProps & {
        theme: Theme;
    }> | JCssProps<Theme>, ...styles: Array<Interpolation<ComponentProps & SpecificComponentProps & AdditionalProps & {
        theme: Theme;
    }>> | JCssFunction<ComponentProps & SpecificComponentProps & {
        theme: Theme;
    }>[] | JCssProps<Theme>[]): StyledComponent<ComponentProps & AdditionalProps, SpecificComponentProps, JSXProps>;
}
export type CreateStylesOptions = (FilteringStyledOptions<React.ComponentProps<any>, any> & C4tStyledFnOptions) | (StyledOptions<PropsOf<any> & object> & C4tStyledFnOptions) | (FilteringStyledOptions<JSX.IntrinsicElements, any> & C4tStyledFnOptions);
export interface CreateStyledOptions<Theme extends BaseTheme = BaseTheme> {
    theme?: Theme;
    jCssFunction?: (props: InputProps) => JCssProps<Theme>;
}
export type C4tStyledFnOptions = {
    name?: string;
    slot?: string;
    skipJCss?: boolean;
    dontForwardProp?: string[];
    forwardProps?: string[];
};
export interface C4tStyledCommonProps<Theme extends BaseTheme = BaseTheme> {
    jCss?: JCssProps<Theme>;
    name?: string;
    variant?: string;
}
export interface FilteringStyledOptions<Props, ForwardedProps extends keyof Props = keyof Props> {
    label?: string;
    shouldForwardProp?(propName: PropertyKey): propName is ForwardedProps;
    target?: string;
}
export type InputProps<SpecificProps extends object = Record<string, any>, Theme extends BaseTheme = BaseTheme> = {
    [prop: string]: any;
    theme: Theme;
} & SpecificProps;
export interface StyledComponent<Props extends object, SpecificProps extends object = Record<string, any>, JSXProps extends object = Record<string, any>> extends EmotionStyledComponent<Omit<Props, 'theme'> & C4tStyledCommonProps, SpecificProps, JSXProps> {
}
export interface StyledFunction<SpecificProps extends object = any, Theme extends BaseTheme = BaseTheme, Props extends InputProps = InputProps<SpecificProps, Theme>> {
    (props: Props): JCssProps<Theme, SpecificProps>;
}
export interface StylesFunction<Props extends object = Record<string, any>, Theme extends BaseTheme = BaseTheme> extends StyledFunction<Props, Theme> {
    filterProps: string[];
}
export interface SystemStyleFunction<Theme extends BaseTheme = BaseTheme> {
    (props: InputProps): JCssProps<Theme>;
    __c4t_systemJCss: boolean;
}
export type TagOrComponent = React.ComponentClass | React.JSXElementConstructor<React.ComponentProps<any>> | keyof React.JSX.IntrinsicElements;
export type ChildElement = React.JSX.Element | string | number | boolean | null | undefined | (React.JSX.Element | string | number | boolean | null | undefined)[];
export interface ThemeDefinition<Props extends object, Element extends HTMLElement> {
    componentName: string;
    Component: ForwardRefExoticComponent<Props & RefAttributes<Element>> | StyledComponent<Props, DetailedHTMLProps<HTMLAttributes<Element>, Element>>;
    displayName?: string;
}
