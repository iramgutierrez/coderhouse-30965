const redis = require('redis')

const client = redis.createClient({
  url: 'redis://default:zXLhTfJ8dbnXWBNgqvpORbljy240epzr@redis-11740.c82.us-east-1-2.ec2.cloud.redislabs.com:11740', 
  legacyMode: true
})

client.connect()

client.get('producto1', (err, value) => {
  if (err) {
    throw new Error(err.message)
  }

  const valueObject = JSON.parse(value)

  console.log(valueObject.name, valueObject.price)
})

