import { CSSUnit, Theme } from '../../../../types';
declare const rem: (theme: Theme) => (size: number | string, unit?: CSSUnit) => string;
export default rem;
