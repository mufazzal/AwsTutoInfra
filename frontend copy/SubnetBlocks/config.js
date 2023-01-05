const config = {
    tmpFile: 'subnetCFT.yaml',

    key_VpcCIDRBlock: 'VpcCIDRBlock',
    value_VpcCIDRBlock: '10.0.0.0/16',


    key_publicSubnet1AZ: 'publicSubnet1AZ',
    value_publicSubnet1AZ: 'us-east-1a',
    key_publicSubnet1CIDRBlock: 'publicSubnet1CIDRBlock',
    value_publicSubnet1CIDRBlock: '10.0.1.0/24',  

    key_publicSubnet2AZ: 'publicSubnet2AZ',
    value_publicSubnet2AZ: 'us-east-1b',
    key_publicSubnet2CIDRBlock: 'publicSubnet2CIDRBlock',
    value_publicSubnet2CIDRBlock: '10.0.2.0/24',            


    key_privateSubnet1AZ: 'privateSubnet1AZ',
    value_privateSubnet1AZ: 'us-east-1a',
    key_privateSubnet1CIDRBlock: 'privateSubnet1CIDRBlock',
    value_privateSubnet1CIDRBlock: '10.0.3.0/24',  

    key_privateSubnet2AZ: 'privateSubnet2AZ',
    value_privateSubnet2AZ: 'us-east-1b',
    key_privateSubnet2CIDRBlock: 'privateSubnet2CIDRBlock',
    value_privateSubnet2CIDRBlock: '10.0.4.0/24',      


    key_internallyIsolatedSubnetAZ: 'internallyIsolatedSubnetAZ',
    value_internallyIsolatedSubnetAZ: 'us-east-1a',
    key_internallyIsolatedSubnetCIDRBlock: 'internallyIsolatedSubnetCIDRBlock',
    value_internallyIsolatedSubnetCIDRBlock: '10.0.5.0/24',      

}

const buildParamPairForStackCreation = (args) => {

    const [stackName] = args;

    const paramsJson = [
        { ParameterKey: config.key_VpcCIDRBlock, ParameterValue: config.value_VpcCIDRBlock},
    
        { ParameterKey: config.key_publicSubnet1AZ, ParameterValue: config.value_publicSubnet1AZ},
        { ParameterKey: config.key_publicSubnet1CIDRBlock, ParameterValue: config.value_publicSubnet1CIDRBlock},
        { ParameterKey: config.key_publicSubnet2AZ, ParameterValue: config.value_publicSubnet2AZ},
        { ParameterKey: config.key_publicSubnet2CIDRBlock, ParameterValue: config.value_publicSubnet2CIDRBlock},
    
        { ParameterKey: config.key_privateSubnet1AZ, ParameterValue: config.value_privateSubnet1AZ},
        { ParameterKey: config.key_privateSubnet1CIDRBlock, ParameterValue: config.value_privateSubnet1CIDRBlock},
        { ParameterKey: config.key_privateSubnet2AZ, ParameterValue: config.value_privateSubnet2AZ},
        { ParameterKey: config.key_privateSubnet2CIDRBlock, ParameterValue: config.value_privateSubnet2CIDRBlock},
    
        { ParameterKey: config.key_internallyIsolatedSubnetAZ, ParameterValue: config.value_internallyIsolatedSubnetAZ},
        { ParameterKey: config.key_internallyIsolatedSubnetCIDRBlock, ParameterValue: config.value_internallyIsolatedSubnetCIDRBlock},

    ]
    return `--parameters ` + JSON.stringify(paramsJson);
}

const getStackName = (args) => {

    const [stackName] = args;
    return stackName;

}

module.exports = {config, buildParamPairForStackCreation, getStackName};