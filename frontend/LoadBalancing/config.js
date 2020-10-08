const config = {
    tmpFile: 'frontEndALBCFT.yaml',

    key_MufVPCID: 'MufVPCID',
    key_MufSubnetIdForWebServers: 'MufSubnetIdForWebServers',
    key_ALBSG: 'ALBSG',
    
    value_MufVPCID: 'vpc-020597b52e08b1b62',
    value_MufSubnetIdForWebServers: 'subnet-045968d5282246c93,subnet-04bab3ad212c64ea6',
    value_ALBSG: 'sg-03048f229bc251daa',

}

const buildParamPairForStackCreation = (args) => {

    const [stackName] = args;

    const paramsJson = [
        { ParameterKey: config.key_MufVPCID, ParameterValue: config.value_MufVPCID},
        { ParameterKey: config.key_MufSubnetIdForWebServers, ParameterValue: config.value_MufSubnetIdForWebServers},
        { ParameterKey: config.key_ALBSG, ParameterValue: config.value_ALBSG},
    ]
    return `--parameters ` + JSON.stringify(paramsJson);
}

const getStackName = (args) => {

    const [stackName] = args;
    return stackName;

}

module.exports = {config, buildParamPairForStackCreation, getStackName};