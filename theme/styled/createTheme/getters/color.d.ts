import { ColorVariants, Theme, ThemeColor } from '../../../../types';
declare const color: (theme: Theme) => (color: ThemeColor | string, variant?: keyof ColorVariants) => string;
export default color;
