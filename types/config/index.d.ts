import I18n from '../../config/locales.json';
export type Config = Record<string, any> & {
    defaultLocale: I18nLocale;
    enabledLocales: I18nLocale[] | -1;
    locale: I18nLocale;
};
export type ConfigContextValue = Config & {
    setLocale: (locale: I18nLocale) => void;
};
export type ConfigSubscriptionFnKey = number;
export type ConfigSubscriptionFn = <T extends keyof Config>(newValue: Config[T], oldValue: any) => void;
export type ConfigSubscriptions = Record<keyof Config, Record<ConfigSubscriptionFnKey, ConfigSubscriptionFn>>;
export type UnsubscribeConfigCallback = () => void;
export type I18nLocale = keyof typeof I18n;
export type I18nLocaleInfo = {
    language: string;
    location: string | null;
    id: number;
    tag: string;
    version: string;
};
