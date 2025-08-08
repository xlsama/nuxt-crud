import db from '~~/server/db'
import { tasks } from '~~/server/db/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const insertedTask = await db.insert(tasks).values({
    content: body.content,
  }).returning()

  return insertedTask[0]
})
