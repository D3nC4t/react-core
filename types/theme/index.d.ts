import { CSSBorderShape, CSSUnit, JCssProps, StyledFunction } from './styled';
export * from './styled';
export type Breakpoints = {
    unit: Omit<CSSUnit, '%'>;
    keys: string[];
    between?: (fromSize: TShirtSize | number, toSize: TShirtSize | number) => string;
    down: (size: TShirtSize | number) => string;
    not: (size: TShirtSize) => string;
    only: (size: TShirtSize) => string;
    up: (size: TShirtSize | number) => string;
    values: Record<TShirtSize, number>;
};
export type BreakpointAsArray = {
    key: keyof Breakpoints['values'];
    val: number;
};
export type Color = string;
export type ColorVariants = {
    lighter: Color;
    light: Color;
    main: Color;
    dark: Color;
    darker: Color;
    text: Color;
};
export type Colors = Record<string, ColorVariants> & {
    black: ColorVariants;
    error: ColorVariants;
    grey: ColorVariants;
    info: ColorVariants;
    primary: ColorVariants;
    secondary: ColorVariants;
    success: ColorVariants;
    warning: ColorVariants;
    white: ColorVariants;
};
export interface Component {
    defaultProps?: Record<string, any>;
    variants?: Record<string, ComponentVariant>;
}
export type ComponentName = string;
export interface ComponentVariant<Props extends Record<string, any> = any, _Theme extends Theme = Theme> {
    props?: Props;
    styles: ComponentVariantStyles<_Theme>;
}
export type ComponentVariantStyles<_Theme extends Theme = Theme, Props extends object = Record<string, any>> = JCssProps<_Theme, Props> | StyledFunction<Props, _Theme>;
export interface Drawer {
    [key: string]: DrawerSpecs;
    corner: DrawerSpecs;
    horizontal: DrawerSpecs;
    vertical: DrawerSpecs;
}
export interface DrawerSpecs {
    width: number | string;
    height: number | string;
    unit: CSSUnit;
}
export interface Shadow {
    unit: CSSUnit;
    color: string;
    offset: {
        x: number;
        y: number;
    };
    blur: number;
    spread: number;
}
export type Shadows = Record<string, Shadow> & {
    bottom: Shadow;
    bottomLeft: Shadow;
    bottomRight: Shadow;
    left: Shadow;
    right: Shadow;
    top: Shadow;
    topLeft: Shadow;
    topRight: Shadow;
};
export interface Shape {
    bodyFontSize: number;
    border: {
        color: string | keyof Theme['color'];
        colorVariant?: keyof ColorVariants;
        radius: number;
        shape: CSSBorderShape;
        size: number;
        unit: CSSUnit;
    };
    drawer: Drawer;
    shadow: Shadow;
    unit: CSSUnit;
}
export interface Theme {
    breakpoints: Breakpoints;
    color: Colors;
    components: Record<ComponentName, Component>;
    get: Record<string, (...args: any[]) => string> & {
        border: (bSize?: number | ((theme: Theme) => number), bUnit?: CSSUnit, bShape?: CSSBorderShape, bColor?: ThemeColor, bVariant?: keyof ColorVariants) => string;
        color: (color: ThemeColor, variant?: keyof ColorVariants) => string;
        rem: (size: number | string, unit?: CSSUnit) => string;
        rgba: (color: string, opacity?: number, colorVariant?: keyof ColorVariants) => string;
        shadow: (bShadow?: string | keyof Theme['shadow'] | Shadow) => string;
    };
    shadow: Shadows;
    shape: Shape;
    spacing: Record<TShirtSize, number>;
    typography: Typography;
}
export type ThemeColor = keyof Theme['color'] | ((theme: Theme) => string) | string;
export declare enum TShirtSize {
    xxs = "xxs",
    xs = "xs",
    s = "s",
    sm = "sm",
    m = "m",
    ml = "ml",
    l = "l",
    xl = "xl",
    xxl = "xxl"
}
export interface Typography {
    fontFamily: string;
    variants: Record<string, TypographyVariant> & {
        root: TypographyVariant;
        h1: TypographyVariant;
        h2: TypographyVariant;
        h3: TypographyVariant;
        h4: TypographyVariant;
        h5: TypographyVariant;
        p: TypographyVariant;
        bold: TypographyVariant;
        small: TypographyVariant;
        caption: TypographyVariant;
    };
}
export interface TypographyVariant {
    defaultStyles: JCssProps<Theme>;
    defaultTag: TypographyHTMLTags;
}
export type BoxHTMLTags = 'div' | 'ul' | 'li' | 'table' | 'header' | 'i' | 'section' | 'tr' | 'td' | 'th' | 'thead' | 'tbody';
export type TypographyHTMLTags = 'a' | 'em' | 'b' | 'del' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'i' | 'ins' | 'mark' | 'p' | 'small' | 'span' | 'sub' | 'sup';
