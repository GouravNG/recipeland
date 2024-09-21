// // import pool from '@/db/createPool.db'
// import { createTimeout } from './useTimeout'
// import { errorlogger } from './logger'
// import { RunQueryParam, RunQueryResponse } from '@/types/actions.types'

// export const runQueryV2 = async <T>(query: string, param?: RunQueryParam[]): Promise<RunQueryResponse<T>> => {
//   try {
//     const queryResponse: T[] = await createTimeout(async () => {
//       return (await pool.query(query, param)).rows
//     })
//     return {
//       status: 'success',
//       queryResponse: queryResponse,
//     }
//   } catch (error) {
//     if (error instanceof AggregateError) {
//       if (error.errors[0]?.code === 'ECONNREFUSED') {
//         return {
//           status: 'fail',
//           errorResponse: 'Error connecting to the database',
//         }
//       }
//       errorlogger(error)
//       return {
//         status: 'fail',
//         errorResponse: 'Multiple Error occurred !!',
//       }
//     } else if (error instanceof Error) {
//       return {
//         status: 'fail',
//         errorResponse: error.message,
//       }
//     } else {
//       console.log(error)
//       return {
//         status: 'fail',
//         errorResponse: 'Unknown Error',
//       }
//     }
//   }
// }
