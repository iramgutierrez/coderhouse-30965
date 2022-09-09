const UserService = require('../../Services/UserService')

test('return get all', async () => {
  const repositoryMock = {
    getAll: () => {
      return [
        {
          name: 'Iram'
        },
        {
          name: 'Angel'
        }
      ]
    }
  }

  const userService = new UserService(repositoryMock)

  const items = await userService.getAll()

  expect(items.length).toBe(2)
})

test('return get all fails', async () => {
  const repositoryMock = {
    getAll: () => {
      throw new Error('No hay conexión a la base de datos')
    }
  }

  const userService = new UserService(repositoryMock)

  let error = null

  try {
    const items = await userService.getAll()
  } catch (e) {
    error = e
  }

  expect(error).toBeInstanceOf(Error)
  expect(error.message).toBe('No hay conexión a la base de datos')
})