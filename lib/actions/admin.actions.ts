'use server'

import pool from '@/db/createPool.db'
import { createTableQuery } from '@/db/createTable.query'
import { createTimeout } from '@/utils/useTimeout'

export const pingDatabase = async () => {
  try {
    const res = await pool.query('SELECT 1')
    if (res.rowCount && res?.rowCount > 0) return
  } catch (error) {
    if (error instanceof Error) throw new Error('Database Connection Failed,: ' + error.message)
    throw new Error('Random unknow Error')
  }
}

export const runQuery = async (formData: FormData) => {
  try {
    await createTimeout(pingDatabase, +process.env.TIMEOUT_MS!)
    const myQuery = formData.get('myQuery') as string
    console.log('Query is', myQuery)
    const queryResponse = await pool.query(myQuery)
    console.log('Query Response is ', JSON.stringify(queryResponse.rows))
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    else console.log('Unknown Error Occurred')
  }
}

export const createTables = () => {
  createTableQuery.map(async (query) => {
    const queryRespose = await pool.query(query)
    console.log(queryRespose.command)
  })
}
