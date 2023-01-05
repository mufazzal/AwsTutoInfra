const config = {
    tmpFile: 'RoutingComponents.yaml',

    key_VPCID: 'VPCID',
    value_VPCID: 'vpc-020597b52e08b1b62',

    key_publicSubnet1: 'PublicSubnet1',
    value_publicSubnet1: 'subnet-04bab3ad212c64ea6',

    key_publicSubnet2: 'PublicSubnet2',
    value_publicSubnet2: 'subnet-045968d5282246c93',

}

const buildParamPairForStackCreation = (args) => {

    const [stackName] = args;

    const paramsJson = [
    
        { ParameterKey: config.key_VPCID, ParameterValue: config.value_VPCID},
        { ParameterKey: config.key_publicSubnet1, ParameterValue: config.value_publicSubnet1},
        { ParameterKey: config.key_publicSubnet2, ParameterValue: config.value_publicSubnet2},
    ]
    return `--parameters ` + JSON.stringify(paramsJson);
}

const getStackName = (args) => {

    const [stackName] = args;
    return stackName;

}

module.exports = {config, buildParamPairForStackCreation, getStackName};