import { Context, helpers } from '../deps.ts'
import { User } from '../types/users.ts'
import getStorage from '../factories/storageFactory.ts'

const db = getStorage()


export const getUsers = async (ctx: Context) => {
  const users: User[] = await db.getUsers()
  ctx.response.body = users
}

export const getUser = async (ctx: Context) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true })

  try {
    const user: User = await db.getUser(userId)
    ctx.response.body = user
  } catch (e) {
    ctx.response.status = 404
    ctx.response.body = {
      error: e.message
    }
  }
}

export const createUser = async (ctx: Context) => {
  const { name, birthDate } = await ctx.request.body().value

  const createdUser: User = await db.createUser(name, birthDate)

  ctx.response.status = 201
  ctx.response.body = createdUser
}