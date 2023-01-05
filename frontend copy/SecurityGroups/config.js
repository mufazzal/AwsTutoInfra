const config = {
    tmpFile: 'frontEndSGCFT.yaml',

    key_MufVPCID: 'MufVPCID',

    value_MufVPCID: 'vpc-020597b52e08b1b62'

}

const buildParamPairForStackCreation = (args) => {

    const [stackName] = args;

    const paramsJson = [
        { ParameterKey: config.key_MufVPCID, ParameterValue: config.value_MufVPCID},
    ]
    return `--parameters ` + JSON.stringify(paramsJson);
}

const getStackName = (args) => {

    const [stackName] = args;
    return stackName;

}

module.exports = {config, buildParamPairForStackCreation, getStackName};