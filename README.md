# a demo tutorial repo for sqs and serverless, lambda


# how to use it:

set your env

export QUEUE_URL=https://sqs.us-east-1.amazonaws.com/xxxxxx/awsome-test-queue
export QUEUE_ARN=arn:aws:sqs:us-east-1:xxxxx:awsome-test-queue

# how to run it

sls deploy
sls invoke --function hello

