const { Strategy: LocalStrategy } = require('passport-local')

module.exports = passport => {
  passport.use('login', new LocalStrategy((username, password, done) => {
    return User.findOne({ username })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'Nombre de usuario incorrecto' })
        }
        if (!isValidPassword(user.password, password)) {
          return done(null, false, { message: 'Contraseña incorrecta' })
        }
        return done(null, user)
      })
      .catch(err => done(err))
  }))
  
  
  passport.use('signup', new LocalStrategy({
    passReqToCallback: true
   }, (req, username, password, done) => {
    return User.findOne({ username })
      .then(user => {
        if (user) {
          return done(null, false, { message: 'El nombre de usuario ya existe' })
        }
        let newUser = new User()
        newUser.username = username
        newUser.password = createHash(password)
        newUser.email = req.body.email
        return newUser.save()
      })
      .then(user => {
        return done(null, user)
      })
      .catch(err => {
        return done(err)
      })
  }))
  
  passport.serializeUser((user, done) => {
    console.log('serializeUser', user)
    done(null, user.id)
  })
   
  passport.deserializeUser((id, done) => {
    console.log('deserializeUser', id)
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })

  return passport
}