const Joi = require('joi')

class NewsValidator {
  constructor () {
  }

  get schema () {
    return Joi.object({
      title: Joi.string()
        .min(3)
        .max(30)
        .required(),

      author: Joi.string()
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

module.exports = NewsValidator