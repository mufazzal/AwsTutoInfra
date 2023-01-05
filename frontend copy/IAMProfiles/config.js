const config = {
    tmpFile: 'frontEndIAMCFT.yaml',
}

const buildParamPairForStackCreation = (args) => {

    const [stackName] = args;

    const paramsJson = [
    ]
    return ``;
}

const getStackName = (args) => {

    const [stackName] = args;
    return stackName;

}

module.exports = {config, buildParamPairForStackCreation, getStackName};