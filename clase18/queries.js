const products = [
  {
    name: 'Coca Cola'
  },
  {
    name: 'Fanta'
  },
  {
    name: 'Sprinte'
  }
]

db.clientes.find({ edad: { $gt: 34 }  })

db.clientes.find({ edad: { $gte: 34 }  })

db.clientes.find({ $or: [ { name: 'Jaime' }, { edad: 40 } ]  } )

db.clientes.find({ edad: { $exists: true } })

db.clientes.find({ edad: { $exists: false } })

db.clientes.find({ name: { $in: ['Jaime', 'Carlos'] } })

db.clientes.find({ name: { $nin: ['Jaime', 'Carlos'] } })

const newClients = [
  {
    name: 'Joaquin',
    edad: 23,
    cursos: [
      'Desarrollo Web',
      'React JS',
      'Programación Backend'
    ]
  },
  {
    name: 'Alma',
    edad: 23,
    cursos: [
      'Desarrollo Web',
      'Programación Backend'
    ]
  },
  {
    name: 'Sofia',
    edad: 23,
    cursos: [
      'React JS',
      'Programación Backend'
    ]
  },

  {
    name: 'Jorge',
    edad: 23,
    cursos: [
      'Desarrollo Web',
      'React JS',
      'Programación Backend'
    ]
  }
]

const newClient = {
  name: 'Aaron',
  edad: 23,
  cursos: []
}

db.clientes.insertMany(newClients)

db.clientes.find({ cursos: { $size: 3 }})

db.clientes.find({ cursos: { $all: [ 'Desarrollo Web', 'React JS', 'Programación Backend' ] } })

db.clientes.find({ cursos: { $elemMatch: { $eq: 'React JS' } } })

const benjamin = {
  name: 'Benjamin',
  edad: 25,
  cursos: ['Desarrollo Web'],
  address: {
    calle: 'XXXX',
    numero: 10,
    ciudad: 'Buenos Aires'
  }
}

db.clientes.insertOne(benjamin)