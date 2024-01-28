import { C4tStyledCommonProps, JCssProps, Theme as BaseTheme } from '../../types';
export default function useVariantJCss<Props extends C4tStyledCommonProps, Theme extends BaseTheme>(props: Props | undefined, name: string, variant?: string, extraJCss?: JCssProps<Theme, Props>): JCssProps<Theme, Props>;
