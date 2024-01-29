import { ReactNode } from 'react';
import { I18nLocale, I18nModules } from '../types';
export interface LocaleProviderProps {
    children: ReactNode;
    module?: keyof I18nModules;
    forceLocale?: I18nLocale;
}
declare const LocaleProvider: ({ children, module, forceLocale }: LocaleProviderProps) => import("react/jsx-runtime").JSX.Element;
export default LocaleProvider;
