const config = {
    tmpFile: 'mainVPCMoniteringCFT.yaml',

    key_VPCID: 'VPCID',
    value_VPCID: 'vpc-020597b52e08b1b62',
    
    key_S3BucketNameMainVPCLog: 'S3BucketNameMainVPCLog',
    value_S3BucketNameMainVPCLog: 'main-vpc-log-bucket-mufa',
      
    key_LogFormat: 'LogFormat',
    value_LogFormate: '${version}-${vpc-id}-${subnet-id}-${instance-id}-${srcaddr}-${dstaddr}-${srcport}-${dstport}-${protocol}-${tcp-flags}-${type}-${pkt-srcaddr}-${pkt-dstaddr}',

    key_PublicSubnet1: 'PublicSubnet1',
    value_PublicSubnet1: 'subnet-04bab3ad212c64ea6',

    key_PublicSubnet2: 'PublicSubnet2',
    value_PublicSubnet2: 'subnet-045968d5282246c93',

    key_PrivateSubnet1: 'PrivateSubnet1',
    value_PrivateSubnet1: 'subnet-04c5a4d0f2f9617c4',

    key_PrivateSubnet2: 'PrivateSubnet2',
    value_PrivateSubnet2: 'subnet-0a14da4d0ac69741e'

}

const buildParamPairForStackCreation = (args) => {

    const [stackName] = args;

    const paramsJson = [
    
        { ParameterKey: config.key_VPCID, ParameterValue: config.value_VPCID},
        { ParameterKey: config.key_S3BucketNameMainVPCLog, ParameterValue: config.value_S3BucketNameMainVPCLog},
    
        { ParameterKey: config.key_PublicSubnet1, ParameterValue: config.value_PublicSubnet1},
        { ParameterKey: config.key_PublicSubnet2, ParameterValue: config.value_PublicSubnet2},
    
        { ParameterKey: config.key_PrivateSubnet1, ParameterValue: config.value_PrivateSubnet1},
        { ParameterKey: config.key_PrivateSubnet2, ParameterValue: config.value_PrivateSubnet2},

        { ParameterKey: config.key_LogFormat, ParameterValue: config.value_LogFormate}

    ]
    return `--parameters ` + JSON.stringify(paramsJson);
}

const getStackName = (args) => {

    const [stackName] = args;
    return stackName;

}

module.exports = {config, buildParamPairForStackCreation, getStackName};