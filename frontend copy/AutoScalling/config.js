const config = {
    tmpFile: 'frontEndATSCFT.yaml',

    key_MufVPCID: 'MufVPCID',
    key_EC2LAunchConfig: 'EC2LAunchConfig',
    key_MufSubnetIdForWebServers: 'MufSubnetIdForWebServers',
    key_LBTRG: 'LBTRG',
    
    value_MufVPCID: 'vpc-020597b52e08b1b62',
    value_EC2LAunchConfig: 'frontEnd-LCG-Stack-EC2LAunchConfig-SU4CHUX3NSFD',
    value_MufSubnetIdForWebServers: 'subnet-045968d5282246c93,subnet-04bab3ad212c64ea6',
    value_LBTRG: 'arn:aws:elasticloadbalancing:us-east-1:388412347424:targetgroup/front-LBTRG-1TVVBOUHUM13S/d87b4ef50e7b44dd',

}

const buildParamPairForStackCreation = (args) => {

    const [stackName] = args;

    const paramsJson = [
        { ParameterKey: config.key_MufVPCID, ParameterValue: config.value_MufVPCID},
        { ParameterKey: config.key_EC2LAunchConfig, ParameterValue: config.value_EC2LAunchConfig},
        { ParameterKey: config.key_MufSubnetIdForWebServers, ParameterValue: config.value_MufSubnetIdForWebServers},
        { ParameterKey: config.key_LBTRG, ParameterValue: config.value_LBTRG},
    ]
    return `--parameters ` + JSON.stringify(paramsJson);
}

const getStackName = (args) => {

    const [stackName] = args;
    return stackName;

}

module.exports = {config, buildParamPairForStackCreation, getStackName};