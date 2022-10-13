const jwt = require('jsonwebtoken')

class AuthMiddleware {
  constructor(privateKey) {
    this.privateKey = privateKey
  }

  verifyToken (req, res, next) {
    const authHeader = req.headers.authorization
   
    if (!authHeader) {
      return res.status(401).json({
        error: 'Necesitas enviar un token válido'
      })
    }
   
    const token = authHeader.split(' ')[1]
   
    jwt.verify(token, this.privateKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          error: 'Necesitas un token válido'
        })
      }
      req.user = decoded.data
      next()
    })

  }

  verifySession (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
      return res.redirect('/auth/login')
  }
}

module.exports = AuthMiddleware