# serverless-cake-ordering-system

#Services used:
#aws, serverless, lambda, kinesis, dynamodb, sqs

- **AWS Kinesis:**
  1. Primary objective is collecting, storing and processing real-time data streams.
  2. Provides streaming capabilities for events.
  3. There can be multiple data producers and consumers.
  4. Each consumer can have their own progress of reading events and can also go back in time and can read old events as well, as many times as they want.
  5. Ordering of records, Ability to replay records, support for batch processing of records.
- **AWS SQS:** 
  1. Fully managed queueing service. 2. Decouple and scale serverless applications. 3. Send, Store and receive messages between components without losing messages. 4. Sender sends the message to SQS, receiver has to pull messages from the SQS Service. 5. Messages can be received by multiple receivers. 6. Whenever one receives a messages, processes it is not available for other receivers to receive. 7. Message replay ability is not present as message once processed is not available to replayed. 8. Might have some latency.
  , single consumer.
- **AWS SNS:**
  1. It's a fully managed pub/sub messaging service.
  2. Messages are pushed to the consumers immediately.
  3. Publisher can fan out messages to a large number of subscribers for parallel processing.
  4. Can be used to trigger notification to end users using SMS or emails.

#Steps to run

1. Clone the repo
2. Run `npm i`
3. Run `sls deploy` or `serverless deploy`
4. Download `postman collection` to hit the api's.( change the url's with your's generated one.)
5. To view logs locally:
   `sls logs -f notifyExternalParties`

- To run function locally:
  - `sls invoke --function createOrder`
  - `sls invoke local --function createOrder`

- To delete Resources created:
  - `sls remove`

#### Checkout serverless commands to checkout some serverless commands.
