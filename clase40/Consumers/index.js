const { Kafka } = require('kafkajs')

const userModel = require('../Models/userModel')
const UserRepository = require('../Repositories/UserRepository')
const UserService = require('../Services/UserService')
const UserConsumer = require('./UserConsumer')



const initConsumers = async (config) => {
  console.log({ config })
  const kafka = new Kafka({
    clientId: config.clientId,
    brokers: ['localhost:9092']
  })
  
  const consumer = kafka.consumer({ groupId: 'local-30965' })
  await consumer.connect()
  await consumer.subscribe({ topic: 'create-user-30965' })

  const consumersFn = {
    'create-user-30965': async (message) => {
      const userRepository = UserRepository.getInstance(userModel)
      const userService = new UserService(userRepository)
      const userConsumer = new UserConsumer(userService)

      const data = JSON.parse(message)
      await userConsumer.createUser(data)
    }
  }

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      console.log({
        topic,
        message: message.value.toString()
      })

      const messageValue = message.value.toString()

      const consumerFn = consumersFn[topic]

      if (consumerFn) {
        await consumerFn(messageValue)
      }
    }
  })
}

module.exports = initConsumers
