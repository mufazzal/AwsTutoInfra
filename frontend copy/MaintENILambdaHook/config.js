const cloudConfig = require("./cloudConfig")

const config = {
    outDir: "output",
    iamProfile: "Mufazzal_Hussain",
    stackName: "frontEnd-ATS-hook-Lambda-Stack",
    maintENISG: "sg-028510e7f332db858",   
}

const buildArgsString = (args) => {

    return ` --stage ${cloudConfig.stage} --region ${cloudConfig.region} --iamProfile ${config.iamProfile} --stackName ${config.stackName} --maintENISG ${config.maintENISG}`;
}

const buildRunFunEnvString = (args) => {

    const [functionName] = args

    switch (functionName) {
        default:
            return ''
    }

}
module.exports = {config, buildArgsString, buildRunFunEnvString};