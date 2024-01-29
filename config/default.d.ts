import { Config, ConfigSubscriptionFn, UnsubscribeConfigCallback } from '../types';
export declare const CONFIG_KEY: string;
export declare const deleteConfig: <T extends string>(prop: T) => void;
export declare const getConfig: <T extends string>(prop: T) => Config[T] | undefined;
export declare const persistConfig: () => Config;
export declare const setConfig: <T extends string>(prop: T, value: Config[T]) => void;
export declare const watchConfig: <T extends string>(prop: T, callback: ConfigSubscriptionFn) => UnsubscribeConfigCallback;
declare const _default: Config;
export default _default;
