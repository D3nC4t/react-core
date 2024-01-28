import { ColorVariants, CSSBorderShape, Theme } from '../../types';
export declare const makeBorder: (theme: Theme, shape: CSSBorderShape, color: string, colorVariant?: keyof ColorVariants) => string;
declare const Button: (theme: Theme) => Theme['components'];
export default Button;
