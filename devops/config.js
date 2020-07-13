const config = {
    tmpFile: 'devopsCFT.yaml',
    key_bundleObjectKey: 'BuildObjecKey',
    key_asg: 'FrontEndAutoScalingGroup',
    key_lb: 'FrontEndELBTG',
    value_bundleObjectKey: '',
    value_asg: '',
    value_lb: '',
}

const buildParamPairForStackCreation = (args) => {

    const [stackName, value_bundleObjectKey, asg, lb] = args;

    return `--parameters ` +
                `ParameterKey=${config.key_bundleObjectKey},ParameterValue=${value_bundleObjectKey} ` + 
                `ParameterKey=${config.key_asg},ParameterValue=${asg} ` + 
                `ParameterKey=${config.key_lb},ParameterValue=${lb}`;
}

const getStackName = (args) => {

    const [stackName, value_bundleObjectKey, asg, lb] = args;
    return stackName;

}

module.exports = {config, buildParamPairForStackCreation, getStackName};