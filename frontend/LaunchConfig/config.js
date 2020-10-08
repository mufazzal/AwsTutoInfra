const config = {
    tmpFile: 'frontEndLCGCFT.yaml',

    key_MufVPCID: 'MufVPCID',
    key_instanceType: 'MufInstanceType',
    key_keyPair: 'MufKeyName',
    key_EC2SG: 'EC2SG',
    
    value_MufVPCID: 'vpc-020597b52e08b1b62',
    value_instanceType: 't2.micro',
    value_keyPair: 'My_Office_Key_1',
    value_EC2SG: 'sg-05feb05fca2055ca6',

}

const buildParamPairForStackCreation = (args) => {

    const [stackName] = args;

    const paramsJson = [
        { ParameterKey: config.key_MufVPCID, ParameterValue: config.value_MufVPCID},
        { ParameterKey: config.key_instanceType, ParameterValue: config.value_instanceType},
        { ParameterKey: config.key_keyPair, ParameterValue: config.value_keyPair},
        { ParameterKey: config.key_EC2SG, ParameterValue: config.value_EC2SG},
    ]
    return `--parameters ` + JSON.stringify(paramsJson);
}

const getStackName = (args) => {

    const [stackName] = args;
    return stackName;

}

module.exports = {config, buildParamPairForStackCreation, getStackName};