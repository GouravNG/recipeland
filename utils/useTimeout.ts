export const createTimeout = <T>(
  promiseFn: () => Promise<T>,
  timeInMiliseconds: number = +process.env.TIMEOUT_MS!
): Promise<T> => {
  return Promise.race([
    promiseFn(),
    new Promise<T>((_, reject) => {
      setTimeout(() => reject(new Error('Timeout Error !!!')), timeInMiliseconds)
    }),
  ])
}
