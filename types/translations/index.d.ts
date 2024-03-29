import { I18nLocale } from '../config';
export type I18nModule = Record<string, any>;
export type I18nModuleLoaderFn = (locale: I18nLocale, module?: string, skipDefault?: boolean) => Promise<I18nModule | undefined>;
export type I18nModuleLoaderMap = {
    loader: I18nModuleLoaderFn;
    priority: number;
};
export type I18nModuleLocales = Record<I18nLocale, I18nModule>;
export type I18nModules = Record<string, I18nModuleLocales>;
export type I18nModuleSubscriptionFn = (messages: I18nModule) => void;
export type I18nModuleSubscriptionFnKey = number;
export type I18nModuleSubscriptionFnMap = Record<I18nModuleSubscriptionFnKey, I18nModuleSubscriptionFn>;
export type I18nModuleSubscriptions = Record<string, Record<I18nLocale, I18nModuleSubscriptionFnMap>>;
export type UnsubscribeI18nModuleCallback = () => void;
