const express = require('express')
const AWS = require('aws-sdk')

const app = express()
app.use(express.json())

AWS.config.update({
  region: 'us-east-1'
})

// AWS SNS
const sns = new AWS.SNS()
const SNS_TOPIC_ARN = 'arn:aws:sns:us-east-1:339724252992:notificaciones'

// AWS DynamoDB
const dynamodb = new AWS.DynamoDB.DocumentClient()
const TABLE_NAME = 'product-inventory'

const scanDynamoRecords = async scanParams => {
  try {
    let dynamoData = await dynamodb.scan(scanParams).promise()

    /**
     * 
     
      {
        Items: [],
        LastEvaluatedKey: 10
      } 
      {
        Items: [],
        LastEvaluatedKey: 20
      }

      {
        Items: []
      }

     */
    const items = dynamoData.Items

    while (dynamoData.LastEvaluatedKey) {
      scanParams.ExclusiveStartKey = dynamoData.LastEvaluatedKey
      dynamoData = await dynamodb.scan(scanParams).promise()
      items.push(...dynamoData.Items)
    }

    return items
  } catch (error) {
    throw new Error(error)
  }
}

app.get('/', (req, res) => {
  return res.json({
    status: 'ok'
  })
})

app.get('/api/products', async (req, res) => {
  const params = {
    TableName: TABLE_NAME
  }

  try {
    const products = await scanDynamoRecords(params)

    return res.json(products)
  } catch (error) {
    console.error('Ocurrio un error', error)
    return res.status(500).json({
      error: error.message
    })
  }
})

app.post('/api/products', (req, res) => {
  const params = {
    TableName: TABLE_NAME,
    Item: req.body
  }

  return dynamodb.put(params).promise()
    .then(() => {
      console.log('Producto guardado')
      const productString = JSON.stringify(req.body)
      return sns.publish({
        Message: `Producto agregado ${productString}`,
        Subject: 'Producto agregado',
        TopicArn: SNS_TOPIC_ARN
      }).promise()
    })
    .then(_ => {
      console.log('Producto notificado')
      return res.status(201).json(req.body)
    })
    .catch(error => {
      console.error('Ocurrio un error', error)
      return res.status(500).json({
        error: error.message
      })
    })
})

app.put('/api/products/:id', (req, res) => {
  const product = {
    ...req.body,
    productId: req.params.id
  }

  const params = {
    TableName: TABLE_NAME,
    Item: product
  }

  return dynamodb.put(params).promise()
    .then(() => {
      console.log('Producto actualizdo')
      const productString = JSON.stringify(product)
      return sns.publish({
        Message: `Producto actualizdo ${productString}`,
        Subject: 'Producto actualizdo',
        TopicArn: SNS_TOPIC_ARN
      }).promise()
    })
    .then(_ => {
      console.log('Producto notificado')
      return res.json(req.body)
    })
    .catch(error => {
      console.error('Ocurrio un error', error)
      return res.status(500).json({
        error: error.message
      })
    })
})

app.delete('/api/products/:id', (req, res) => {

  const params = {
    TableName: TABLE_NAME,
    Key: {
      productId: req.params.id
    },
    ReturnValues: 'ALL_OLD'
  }

  return dynamodb.delete(params).promise()
    .then(response => {
      console.log('Producto eliminado')
      const productString = JSON.stringify(response)
      return sns.publish({
        Message: `Producto eliminado ${productString}`,
        Subject: 'Producto eliminado',
        TopicArn: SNS_TOPIC_ARN
      }).promise()
    })
    .then(_ => {
      console.log('Producto notificado')
      return res.status(204).json({})
    })
    .catch(error => {
      console.error('Ocurrio un error', error)
      return res.status(500).json({
        error: error.message
      })
    })
})

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))

server.on('error', error => console.log(error))
