'use strict'

const Cupcake = use('App/Models/Cupcake')

class CupcakeController {
  async index({ view }) {
    const cupcakes = (await Cupcake.all()).toJSON()

    return view.render('listCupcakes', { cupcakes })
  }
}

module.exports = CupcakeController
