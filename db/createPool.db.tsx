import { Pool } from 'pg'

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: 'localhost',
  port: 5432,
})

export default pool
