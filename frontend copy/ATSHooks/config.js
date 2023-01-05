const config = {
    tmpFile: 'frontEndATSHookCFT.yaml',

    key_MufVPCID: 'MufVPCID',
    key_ASG: 'ASG',
    key_CreateAndAttachMaintENILambdaArn: 'CreateAndAttachMaintENILambdaArn',
    key_DeleteMaintENILambdaArn: 'DeleteMaintENILambdaArn',
    
    value_MufVPCID: 'vpc-020597b52e08b1b62',
    value_ASG: 'ASG_for_EC2',
    value_CreateAndAttachMaintENILambdaArn: 'arn:aws:lambda:us-east-1:388412347424:function:ASGHookLambda-prod-ASGLaunchHookLambda',
    value_DeleteMaintENILambdaArn: 'arn:aws:lambda:us-east-1:388412347424:function:ASGHookLambda-prod-ASGTerminateHookLambda',

}

const buildParamPairForStackCreation = (args) => {

    const [stackName] = args;

    const paramsJson = [
        { ParameterKey: config.key_MufVPCID, ParameterValue: config.value_MufVPCID},
        { ParameterKey: config.key_ASG, ParameterValue: config.value_ASG},
        { ParameterKey: config.key_CreateAndAttachMaintENILambdaArn, ParameterValue: config.value_CreateAndAttachMaintENILambdaArn},
        { ParameterKey: config.key_DeleteMaintENILambdaArn, ParameterValue: config.value_DeleteMaintENILambdaArn},
    ]
    return `--parameters ` + JSON.stringify(paramsJson);
}

const getStackName = (args) => {

    const [stackName] = args;
    return stackName;

}

module.exports = {config, buildParamPairForStackCreation, getStackName};