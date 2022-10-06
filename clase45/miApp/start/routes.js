'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')

Route
  .get('/', () => 'Hola desde Adonis')
  .middleware((ctx, next) => {
    console.log(`Entrando a la ruta ${ctx.request.url()}`)
    return next()
  })

const Cupcake = use('App/Models/Cupcake')

Route
  .get('api/cupcakes', async () => {
    return await Cupcake.all()
  })

Route
  .post('api/cupcakes', async ({ request }) => {
    const body = request.all()
    const cupcake = new Cupcake()
    cupcake.name = body.name
    cupcake.description = body.description
    cupcake.price = body.price

    return await cupcake.save()
  })


Route
  .get('cupcakes', 'CupcakeController.index')