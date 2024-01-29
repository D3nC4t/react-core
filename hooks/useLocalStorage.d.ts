export default function useLocalStorage<T>(key: string, defaultValue: T, ttl?: number | null): [T | undefined, (newValue: T) => void];
