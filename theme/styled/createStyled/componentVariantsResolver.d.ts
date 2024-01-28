import { ComponentVariantStyles, C4tStyledCommonProps, InputProps, Theme as BaseTheme } from '../../../types';
export default function componentVariantsResolver<Theme extends BaseTheme = BaseTheme, CommonProps extends C4tStyledCommonProps = C4tStyledCommonProps>(props: InputProps & CommonProps): ComponentVariantStyles<Theme>[];
