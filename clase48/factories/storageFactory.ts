import * as memory from '../db/users.ts'
import * as mongo from '../mongo/users.ts'

export default () => {
  const map = {
    memory,
    mongo
  }

  const storage = Deno.env.get('STORAGE') || 'memory'

  if (storage === 'mongo') {
    return map.mongo
  }

  return map.memory 
}