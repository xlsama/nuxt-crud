import { tasks } from '~~/server/db/schema'
import db from '~~/server/db'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const taskId = Number(getRouterParam(event, 'id'))

  const deletedTask = await db
    .delete(tasks)
    .where(eq(tasks.id, taskId))
    .returning()

  return deletedTask[0]
})
