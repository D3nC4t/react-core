import { Theme as BaseTheme } from '../../../types';
export declare function createTheme<Theme extends BaseTheme = BaseTheme>(theme?: Theme, ...slices: Theme[]): Theme;
export default createTheme;
