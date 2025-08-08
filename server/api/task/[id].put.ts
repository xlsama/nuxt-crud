import { tasks } from '~~/server/db/schema'
import db from '~~/server/db'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const taskId = Number(getRouterParam(event, 'id'))
  const body = await readBody(event)

  const updatedTask = await db
    .update(tasks)
    .set({
      content: body.content,
      done: body.done,
    })
    .where(eq(tasks.id, taskId))
    .returning()

  return updatedTask[0]
})
