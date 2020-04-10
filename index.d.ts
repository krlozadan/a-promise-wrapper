// Type definitions for a-promise-wrapper v1.1.0
// Project: Promise Wrapper
// Definitions by: Carlos Adan Cortes https://www.carlosadan.com

declare module 'a-promise-wrapper' {
    export default function<T>(promise:Promise<T|T[]>):Promise<{ data: T|T[], error: any }>;
}