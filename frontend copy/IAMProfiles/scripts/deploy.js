#!/usr/bin/env node
const { spawnSync} = require('child_process');
const {config, buildParamPairForStackCreation, getStackName} = require('../config');

const deploy = (args) => {

    return new Promise((resolve, reject)=>{

        const deployComand = `cloudformation create-stack ` + 
                            `--stack-name ${getStackName(args)} ` +
                            `--template-body file://${config.tmpFile} ` +
                            `--capabilities CAPABILITY_NAMED_IAM`;


        console.log('deployment command -> aws ', deployComand)
        console.log('deploying..')

        const deployProcess = spawnSync('aws', deployComand.split(' '));
        if (deployProcess.error && deployProcess.error.toString('utf8')) {
            reject({sucess: false, error: deployProcess.error.toString('utf8')})
        }
        if (deployProcess.stderr && deployProcess.stderr.toString('utf8')) {
            reject({sucess: false, error: deployProcess.stderr.toString('utf8')})
        }
        if (deployProcess.stdout && deployProcess.stdout.toString('utf8')) {
            console.log(deployProcess.stdout.toString('utf8'))
            console.log('----Deployment Initiated----')
            resolve({sucess: true, message: deployProcess.stdout.toString('utf8')})
        }
    });

}
module.exports = deploy; 