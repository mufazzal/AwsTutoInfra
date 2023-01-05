const config = {
    tmpFile: 'assosiateComps.yaml',

    key_publicSubnet1: 'PublicSubnet1',
    value_publicSubnet1: 'subnet-04bab3ad212c64ea6',

    key_publicSubnet2: 'PublicSubnet2',
    value_publicSubnet2: 'subnet-045968d5282246c93',

    key_PrivateSubnet1: 'PrivateSubnet1',
    value_PrivateSubnet1: 'subnet-0a14da4d0ac69741e',

    key_PrivateSubnet2: 'PrivateSubnet2',
    value_PrivateSubnet2: 'subnet-04c5a4d0f2f9617c4',
    
    key_RouteTableForPublicSubnets: 'RouteTableForPublicSubnets',
    value_RouteTableForPublicSubnets: 'rtb-05a0420e3d84a48de',    

    key_RouteTableForPrivateSubnet1: 'RouteTableForPrivateSubnet1',
    value_RouteTableForPrivateSubnet1: 'rtb-0b92c184c2a880565',     

    key_RouteTableForPrivateSubnet2: 'RouteTableForPrivateSubnet2',
    value_RouteTableForPrivateSubnet2: 'rtb-0f311d28f10f983dd',    
}

const buildParamPairForStackCreation = (args) => {

    const [stackName] = args;

    const paramsJson = [
    
        { ParameterKey: config.key_VPCID, ParameterValue: config.value_VPCID},
        { ParameterKey: config.key_publicSubnet1, ParameterValue: config.value_publicSubnet1},
        { ParameterKey: config.key_publicSubnet2, ParameterValue: config.value_publicSubnet2},

        { ParameterKey: config.key_PrivateSubnet1, ParameterValue: config.value_PrivateSubnet1},
        { ParameterKey: config.key_PrivateSubnet2, ParameterValue: config.value_PrivateSubnet2},

        { ParameterKey: config.key_RouteTableForPublicSubnets, ParameterValue: config.value_RouteTableForPublicSubnets},
        { ParameterKey: config.key_RouteTableForPrivateSubnet1, ParameterValue: config.value_RouteTableForPrivateSubnet1},
        { ParameterKey: config.key_RouteTableForPrivateSubnet2, ParameterValue: config.value_RouteTableForPrivateSubnet2},
    
    ]
    return `--parameters ` + JSON.stringify(paramsJson);
}

const getStackName = (args) => {

    const [stackName] = args;
    return stackName;

}

module.exports = {config, buildParamPairForStackCreation, getStackName};