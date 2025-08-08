import { tasks } from '~~/server/db/schema'
import db from '~~/server/db'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const taskId = Number(getRouterParam(event, 'id'))

  const task = await db.query.tasks.findFirst({
    where: eq(tasks.id, taskId),
  })

  return task
})
