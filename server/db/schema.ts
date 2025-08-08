import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const tasks = sqliteTable('tasks', {
  id: int().primaryKey({ autoIncrement: true }),
  content: text().notNull(),
  done: int().notNull().default(0),
})
