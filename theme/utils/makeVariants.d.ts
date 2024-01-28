import { JCssProps, Theme } from '../../types';
declare function makeVariants<VariantName = string, InputProps extends object = Record<string, any>>(variants: VariantName[], generator: (variant: VariantName) => JCssProps<Theme, InputProps>): JCssProps<Theme, InputProps>;
export default makeVariants;
