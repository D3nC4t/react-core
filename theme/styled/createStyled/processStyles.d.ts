import { InputProps, JCssProps, StyledValue, Theme as BaseTheme } from '../../../types';
export default function processStyles<Props extends object = Record<string, any>, Theme extends BaseTheme = BaseTheme>(props: InputProps<Props, Theme>, styles: StyledValue): JCssProps | StyledValue;
