'use server'

import pool from '@/db/createPool.db'
import { PingResponseType } from '@/types/actions.types'

export const pingDatabase = async (): Promise<PingResponseType> => {
  try {
    const res = await pool.query('SELECT 1')
    if (res.rowCount && res?.rowCount > 0) {
      return {
        responseCode: 200,
        message: 'Successfully connected to db',
      }
    }
  } catch (error) {
    return {
      responseCode: 500,
      message: 'unable to connect to db',
    }
  }
}

export const runQuery = async (formData: FormData) => {
  const myQuery = formData.get('myQuery') as string
  console.log(myQuery)
  try {
    const queryResponse = await pool.query(myQuery)
    console.log(queryResponse)
    return {
      responseCode: 201,
      message: 'Successfully created the table',
    }
  } catch (error) {
    console.log(error)
    return {
      responseCode: 500,
      message: 'unable to connect to db',
    }
  }
}
