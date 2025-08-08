import 'dotenv/config'
import { drizzle } from 'drizzle-orm/libsql'
import { tasks } from './schema'

const db = drizzle(process.env.DB_FILE_NAME!, {
  schema: {
    tasks: tasks,
  },
})

export default db
