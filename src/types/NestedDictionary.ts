export type NestedDictionary<T> = { [key: string]: T | NestedDictionary<T> };
