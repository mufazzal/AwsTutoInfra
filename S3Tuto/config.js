const config = {
    tmpFile: 'S3TutoStackCFT.yaml',

    key_BucketPrefix: 'BucketPrefix',
    value_BucketPrefix: 'muf-aws-tuto',

    // key_SNSTopic: 'SNSTopic',
    // value_SNSTopic: 'arn:aws:sns:us-east-1:388412347424:SNSFeed-dev',

    // key_SQSQeue: 'SQSQeue',
    // value_SQSQeue: 'arn:aws:sqs:us-east-1:388412347424:MufSQS-dev',

    // key_SQSQeueUrl: 'SQSQeueUrl',
    // value_SQSQeueUrl: 'https://sqs.us-east-1.amazonaws.com/388412347424/MufSQS-dev',

}

const buildParamPairForStackCreation = (args) => {

    const [stackName] = args;

    const paramsJson = [
        { ParameterKey: config.key_BucketPrefix, ParameterValue: config.value_BucketPrefix},
        // { ParameterKey: config.key_SNSTopic, ParameterValue: config.value_SNSTopic},
        // { ParameterKey: config.key_SQSQeue, ParameterValue: config.value_SQSQeue},
        // { ParameterKey: config.key_SQSQeueUrl, ParameterValue: config.value_SQSQeueUrl},
        
    ]
    return ` --parameters ` + JSON.stringify(paramsJson);
}

const getStackName = (args) => {

    const [stackName] = args;
    return stackName;

}

module.exports = {config, buildParamPairForStackCreation, getStackName};