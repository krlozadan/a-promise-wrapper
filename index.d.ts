// Type definitions for a-promise-wrapper v1.1.3
// Project: Promise Wrapper
// Definitions by: Carlos Adan Cortes https://www.carlosadan.com

declare module 'a-promise-wrapper' {
    export default function <T, E = any>(promise: Promise<T>): Promise<{ data: T, error: E }>;
    export default function <T1, E = any>(promise: readonly [Promise<T1>]): Promise<{ data: [T1], error: E }>;
    export default function <T1, T2, E = any>(promise: readonly [Promise<T1>, Promise<T2>]): Promise<{ data: [T1, T2], error: E }>;
    export default function <T1, T2, T3, E = any>(promise: readonly [Promise<T1>, Promise<T2>, Promise<T3>]): Promise<{ data: [T1, T2, T3], error: E }>;
    export default function <T1, T2, T3, T4, E = any>(promise: readonly [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>]): Promise<{ data: [T1, T2, T3, T4], error: E }>;
    export default function <T1, T2, T3, T4, T5, E = any>(promise: readonly [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>]): Promise<{ data: [T1, T2, T3, T4, T5], error: E }>;
    export default function <T1, T2, T3, T4, T5, T6, E = any>(promise: readonly [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>]): Promise<{ data: [T1, T2, T3, T4, T5, T6], error: E }>;
    export default function <T1, T2, T3, T4, T5, T6, T7, E = any>(promise: readonly [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>, Promise<T7>]): Promise<{ data: [T1, T2, T3, T4, T5, T6, T7], error: E }>;
    export default function <T1, T2, T3, T4, T5, T6, T7, T8, E = any>(promise: readonly [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>, Promise<T7>, Promise<T8>]): Promise<{ data: [T1, T2, T3, T4, T5, T6, T7, T8], error: E }>;
    export default function <T1, T2, T3, T4, T5, T6, T7, T8, T9, E = any>(promise: readonly [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>, Promise<T7>, Promise<T8>, Promise<T9>]): Promise<{ data: [T1, T2, T3, T4, T5, T6, T7, T8, T9], error: E }>;
}