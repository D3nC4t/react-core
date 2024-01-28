import { ColorVariants, Theme } from '../../../../types';
declare const rgba: (theme: Theme) => (color: string, opacity?: number, colorVariant?: keyof ColorVariants) => string;
export default rgba;
