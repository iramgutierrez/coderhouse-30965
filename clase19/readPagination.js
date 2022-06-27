const db = require('./db')
const estudianteModel = require('./models/estudiante')

const ITEMS_BY_PAGE = 3

/**
 * 
 * @param {*} pageNumber 
 * @returns 
 * 
 * Si me piden la página 1, el skip deberia ser 0 = (1 - 1) * 3
 * Si me piden la página 2, el skip deberia ser 3 = (2 - 1) * 3 
 * Si me piden la página 3, el skip deberia ser 6 = (3 - 1) * 3 
 * Si me piden la página 4, el skip deberia ser 9 = (4 - 1) * 3
 */
const getPageParams = (pageNumber = 1) => {
  return {
    limit: ITEMS_BY_PAGE,
    skip: (pageNumber - 1) * ITEMS_BY_PAGE
  }
}

// GET http://localhost:3000/api/users?page=2

;(async () => {

  await db

  const firstPageParams = getPageParams(1)

  const secondPageParams = getPageParams(2)

  const thirdPageParams = getPageParams(5)

  const firstPage = await estudianteModel.find({}, { nombre: 1, dni: 1, _id: 0 }).limit(firstPageParams.limit).skip(firstPageParams.skip)

  const secondPage = await estudianteModel.find({}, { nombre: 1, dni: 1, _id: 0 }).limit(secondPageParams.limit).skip(secondPageParams.skip)

  const thirdPage = await estudianteModel.find({}, { nombre: 1, dni: 1, _id: 0 }).limit(thirdPageParams.limit).skip(thirdPageParams.skip)

  console.log({
    firstPage,
    secondPage,
    thirdPage
  })

  process.exit()
})()