import { InputProps, JCssProps, Theme as BaseTheme } from '../../../types';
export default function getAndProcessVariantStyles<Props extends object = Record<string, any>, Theme extends BaseTheme = BaseTheme>(props: InputProps<Props, Theme>): JCssProps<Theme, Props>;
