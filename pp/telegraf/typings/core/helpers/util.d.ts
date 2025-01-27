/// <reference types="node" />
import { FmtString } from './formatting';
import { Deunionize, UnionKeys } from './deunionize';
export declare const env: NodeJS.ProcessEnv;
export type Any = {} | undefined | null;
export type Expand<T> = T extends object ? T extends infer O ? {
    [K in keyof O]: O[K];
} : never : T;
export type MaybeArray<T> = T | T[];
export type MaybePromise<T> = T | Promise<T>;
export type NonemptyReadonlyArray<T> = readonly [T, ...T[]];
export type ExclusiveKeys<A extends object, B extends object> = keyof Omit<A, keyof B>;
export declare function fmtCaption<Extra extends {
    caption?: string | FmtString;
} | undefined>(extra?: Extra): Extra extends undefined ? undefined : Omit<Extra, 'caption'> & {
    caption?: string;
};
export type DistinctKeys<T extends object> = Exclude<UnionKeys<T>, keyof T>;
export type KeyedDistinct<T extends object, K extends DistinctKeys<T>> = Record<K, {}> & Deunionize<Record<K, {}>, T>;
export type Keyed<T extends object, K extends UnionKeys<T>> = Record<K, {}> & Deunionize<Record<K, {}>, T>;
/** Construct a generic type guard */
export type Guard<X = unknown, Y extends X = X> = (x: X) => x is Y;
/** Extract the guarded type from a type guard, defaults to never. */
export type Guarded<F> = F extends (x: any) => x is infer T ? T : never;
export declare function zip<X, Y>(xs: Iterable<X>, ys: Iterable<Y>): Iterable<X | Y>;
export declare function indexed<T extends object, U>(target: T, indexer: (index: number) => U): T;
//# sourceMappingURL=util.d.ts.map