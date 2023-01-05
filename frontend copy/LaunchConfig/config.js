const config = {
    tmpFile: 'frontEndLCGCFT.yaml',

    key_MufVPCID: 'MufVPCID',
    key_instanceType: 'MufInstanceType',
    key_keyPair: 'MufKeyName',
    key_EC2SG: 'EC2SG',
    key_EC2WebServerIAMRole: 'EC2WebServerIAMRole',
    key_EC2WebServerIAMRoleName: 'EC2WebServerIAMRoleName',
    
    value_MufVPCID: 'vpc-020597b52e08b1b62',
    value_instanceType: 't2.micro',
    value_keyPair: 'My_Office_Key',
    value_EC2SG: 'sg-05feb05fca2055ca6',
    value_EC2WebServerIAMRole: 'arn:aws:iam::388412347424:instance-profile/FrontEnd-IAM-Stack-EC2WebServerIAMRoleInstanceProfile-4AMMMDZNEHD2',
    value_EC2WebServerIAMRoleName: "FrontEnd-IAM-Stack-EC2WebServerIAMRole-1V7TFJ937M6VU"
}

const buildParamPairForStackCreation = (args) => {

    const [stackName] = args;

    const paramsJson = [
        { ParameterKey: config.key_MufVPCID, ParameterValue: config.value_MufVPCID},
        { ParameterKey: config.key_instanceType, ParameterValue: config.value_instanceType},
        { ParameterKey: config.key_keyPair, ParameterValue: config.value_keyPair},
        { ParameterKey: config.key_EC2SG, ParameterValue: config.value_EC2SG},
        { ParameterKey: config.key_EC2WebServerIAMRole, ParameterValue: config.value_EC2WebServerIAMRole},
        { ParameterKey: config.key_EC2WebServerIAMRoleName, ParameterValue: config.value_EC2WebServerIAMRoleName},
    ]
    return `--parameters ` + JSON.stringify(paramsJson);
}

const getStackName = (args) => {

    const [stackName] = args;
    return stackName;

}

module.exports = {config, buildParamPairForStackCreation, getStackName};