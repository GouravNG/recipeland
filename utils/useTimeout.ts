export const createTimeout = <T>(promiseFn: () => Promise<T>, ms: number): Promise<T> => {
  return Promise.race([
    promiseFn(),
    new Promise<T>((_, reject) => {
      setTimeout(() => reject(new Error('TimeoutError')), ms)
    }),
  ])
}
