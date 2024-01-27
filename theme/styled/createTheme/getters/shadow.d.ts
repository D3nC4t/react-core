import { Shadow, Theme } from '../../../../types';
declare const shadow: (theme: Theme) => (bShadow?: string | keyof Theme['shadow'] | Shadow) => string;
export default shadow;
