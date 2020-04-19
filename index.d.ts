// Type definitions for a-promise-wrapper v1.1.0
// Project: Promise Wrapper
// Definitions by: Carlos Adan Cortes https://www.carlosadan.com

declare module 'a-promise-wrapper' {
    export default function<T>(promise:Promise<T>):Promise<{ data: T, error: unknown }>;
    export default function<T1>(promise:readonly [Promise<T1>]):Promise<{ data: [T1], error: unknown }>;
    export default function<T1, T2>(promise:readonly [Promise<T1>, Promise<T2>]):Promise<{ data: [T1, T2], error: unknown }>;
    export default function<T1, T2, T3>(promise:readonly [Promise<T1>, Promise<T2>, Promise<T3>]):Promise<{ data: [T1, T2, T3], error: unknown }>;
    export default function<T1, T2, T3, T4>(promise:readonly [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>]):Promise<{ data: [T1, T2, T3, T4], error: unknown }>;
    export default function<T1, T2, T3, T4, T5>(promise:readonly [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>]):Promise<{ data: [T1, T2, T3, T4, T5], error: unknown }>;
    export default function<T1, T2, T3, T4, T5, T6>(promise:readonly [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>]):Promise<{ data: [T1, T2, T3, T4, T5, T6], error: unknown }>;
    export default function<T1, T2, T3, T4, T5, T6, T7>(promise:readonly [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>, Promise<T7>]):Promise<{ data: [T1, T2, T3, T4, T5, T6, T7], error: unknown }>;
    export default function<T1, T2, T3, T4, T5, T6, T7, T8>(promise:readonly [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>, Promise<T7>, Promise<T8>]):Promise<{ data: [T1, T2, T3, T4, T5, T6, T7, T8], error: unknown }>;
    export default function<T1, T2, T3, T4, T5, T6, T7, T8, T9>(promise:readonly [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>, Promise<T7>, Promise<T8>, Promise<T9>]):Promise<{ data: [T1, T2, T3, T4, T5, T6, T7, T8, T9], error: unknown }>;
}