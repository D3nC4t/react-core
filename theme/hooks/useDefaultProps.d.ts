import { Theme as BaseTheme } from '../../types';
export default function useDefaultProps<Props extends {
    variant?: string;
} = Record<string, any>, Theme extends BaseTheme = BaseTheme>(inputProps: Omit<Props, 'children'>, componentName: string, defaultVariant?: string, forceTheme?: Theme): Props;
