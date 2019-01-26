'use strict'
const AWS = require('aws-sdk')
// Set the region
AWS.config.update({
  region: 'us-east-1'
})
const sqs = new AWS.SQS({
  apiVersion: '2012-11-05'
})

async function hello (event, context) {
  const params = {
    DelaySeconds: 10,
    QueueUrl: process.env.QUEUE_URL
  }

  const response = await sqs.sendMessage({
    ...params,
    MessageBody: 'hello world'
  }).promise()

  console.log(response)

  return {
    statusCode: 200
  }
}

module.exports = {
  hello
}
