import { Theme as BaseTheme } from '../../types';
export default function useTheme<Theme extends BaseTheme = BaseTheme>(theme?: Theme): Theme;
