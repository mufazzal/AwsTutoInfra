const config = {
    tmpFile: 'frontEndCFT.yaml',

    key_MufVPCID: 'MufVPCID',
    key_subnetIds: 'MufSubnetIdForWebServers',
    key_instanceType: 'MufInstanceType',
    key_keyPair: 'MufKeyName',

    value_MufVPCID: 'vpc-090c310a62c24512d',
    value_subnetIds: 'subnet-046e0d238cf1d9657,subnet-09640bc766b56f7c9',
    value_instanceType: 't2.micro',
    value_keyPair: 'My_Office_Key_1',

}

const buildParamPairForStackCreation = (args) => {

    const [stackName] = args;

    const paramsJson = [
        { ParameterKey: config.key_MufVPCID, ParameterValue: config.value_MufVPCID},
        { ParameterKey: config.key_subnetIds, ParameterValue: config.value_subnetIds},
        { ParameterKey: config.key_instanceType, ParameterValue: config.value_instanceType},
        { ParameterKey: config.key_keyPair, ParameterValue: config.value_keyPair},
    ]
    return `--parameters ` + JSON.stringify(paramsJson);
}

const getStackName = (args) => {

    const [stackName] = args;
    return stackName;

}

module.exports = {config, buildParamPairForStackCreation, getStackName};