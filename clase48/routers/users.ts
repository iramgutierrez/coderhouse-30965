import { Router } from '../deps.ts'
import {
  getUsers,
  getUser,
  createUser
} from '../controllers/users.ts'

export const router = new Router()
  .get('/api/users', getUsers)
  .get('/api/users/:userId', getUser)
  .post('/api/users', createUser)