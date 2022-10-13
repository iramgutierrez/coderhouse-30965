const { Strategy: LocalStrategy } = require('passport-local')

class SessionController {
  constructor (service) {
    this.service = service
  }

  loginStrategy () {
    console.log(this.service)
    return new LocalStrategy((username, password, done) => {
      console.log({ username })
      return this.service.login({ username })
        .then(user => {
          if (!user) {
            return done(null, false, { message: 'Nombre de usuario incorrecto' })
          }
          if (user.password === password) {
            return done(null, false, { message: 'Contraseña incorrecta' })
          }
          return done(null, user)
        })
        .catch(err => done(err))
    })
  }

  signUpStrategy () {
    return new LocalStrategy({
      passReqToCallback: true
     }, (req, username, password, done) => {
      return this.service.verifyIfExists({ username })
        .then(user => {
          if (user) {
            return done(null, false, { message: 'El nombre de usuario ya existe' })
          }
          const body = {
            name: req.body.name,
            username,
            password,
          }
          return this.service.signUp(body)
        })
        .then(user => {
          return done(null, user)
        })
        .catch(err => {
          return done(err)
        })
    })
  }
}

module.exports = SessionController