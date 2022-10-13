const Joi = require('joi')

class UsersValidator {
  constructor () {
  }

  get schema () {
    return Joi.object({
      name: Joi.string()
        .min(3)
        .max(30)
        .required(),

      username: Joi.string()
        .min(3)
        .max(30)
        .required(),

      password: Joi.string()
        .min(3)
        .max(30)
        .required(),

      createdAt: Joi.date()
        .required()
    })
  }

  validate (data) {
    return this.schema.validateAsync(data)
  }
}

module.exports = UsersValidator