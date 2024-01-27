import { CreateC4tStyled, CreateStyledOptions, C4tStyledFnOptions, Theme as BaseTheme } from '../../../types';
export default function createStyled<C4tProps extends object = Record<string, any>, Options extends object = C4tStyledFnOptions, Theme extends BaseTheme = BaseTheme>(options?: CreateStyledOptions): CreateC4tStyled<C4tProps, Options, Theme>;
