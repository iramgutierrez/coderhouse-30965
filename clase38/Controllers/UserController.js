class UserController {
  constructor(service) {
    this.service = service
  }

  async get(req, res) {
    try {
      const items = await this.service.getAll()
      return res.json(items)
    } catch (e) {
      console.log(e)
      return res.status(500).json({
        error: e.message
      })
    }
  }
  
  async post (req, res) {
    const data = req.body
  try {
    const itemCreated = await this.service.create(data)
    return res.status(201).json(itemCreated)
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      error: e.message
    })
  }
  }
}

module.exports = UserController