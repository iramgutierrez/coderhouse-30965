class AuthController {
  constructor (service) {
    this.service = service
  }

  login (req, res) {
    const body = req.body

    return this.service.login(body)
      .then(user => res.json(user))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }

  signUp (req, res) {
    const body = req.body

    return this.service.signUp(body)
      .then(user => res.status(201).json(user))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }
}

module.exports = AuthController