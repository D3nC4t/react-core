export default function useDebouncedCallback<Params extends any[], Callback extends (...args: Params) => void>(callback: Callback, deps: any[], delay?: number): Callback;
