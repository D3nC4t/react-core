import { ColorVariants, CSSBorderShape, CSSUnit, Theme, ThemeColor } from '../../../../types';
declare const border: (theme: Theme) => (bSize?: number | ((theme: Theme) => number) | undefined, bUnit?: CSSUnit | ((theme: Theme) => CSSUnit) | undefined, bShape?: CSSBorderShape | ((theme: Theme) => CSSBorderShape) | undefined, bColor?: ThemeColor, bVariant?: keyof ColorVariants) => string;
export default border;
