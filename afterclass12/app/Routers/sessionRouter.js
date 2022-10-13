const { Router } = require('express')

const UsersRepository = require('../Repositories/UsersRepository')
const UsersService = require('../Services/UsersService')
const SessionController = require('../Controllers/SessionController')
const AuthMiddleware = require('../Middleware/AuthMiddleware')

const sessionRouterFn = (passport) => {
  const usersRepository = new UsersRepository()
  const usersService = new UsersService(usersRepository)
  const sessionController = new SessionController(usersService)
  const authMiddleware = new AuthMiddleware(process.env.JWT_SECRET)

  passport.use('login', sessionController.loginStrategy())
  
  passport.use('signup', sessionController.signUpStrategy())
  
  passport.serializeUser((user, done) => {
    console.log('serializeUser', user)
    done(null, user.id)
  })
   
  passport.deserializeUser((id, done) => {
    console.log('deserializeUser', id)
    usersService.getOne(id)
      .then(user => {
        done(null, user)
      })
      .catch(err => {
        done(err, null)
      })
  })

  const sessionRouter = Router()

  sessionRouter.get('/login', (req, res) => {
    return res.render('login.ejs', { message: req.flash('error') })
   })
  
  sessionRouter.post('/login',
    passport.authenticate('login', { successRedirect: '/auth/profile',
                                     failureRedirect: '/auth/login',
                                     failureFlash: true }))
  
  sessionRouter.get('/signup', (req, res) => {
    return res.render('signup.ejs', { message: req.flash('error') })
   })
  
  sessionRouter.post('/signup',
    passport.authenticate('signup', { successRedirect: '/auth/profile',
                                     failureRedirect: '/auth/signup',
                                     failureFlash: true }))

  sessionRouter.get('/profile', authMiddleware.verifySession.bind(authMiddleware), (req, res) => {
    return res.json({
      user: req.user,
      session: req.sesion
    })
  })

  return sessionRouter
}

module.exports = sessionRouterFn
