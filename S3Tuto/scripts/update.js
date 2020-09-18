#!/usr/bin/env node
const { spawnSync} = require('child_process');
const {config, buildParamPairForStackCreation, getStackName} = require('../config');

const update = (args) => {

    return new Promise((resolve, reject)=>{

        const updateComand = `cloudformation update-stack` + 
                            ` --stack-name ${getStackName(args)}` +
                            ` --template-body file://${config.tmpFile}` +
                            ` --capabilities CAPABILITY_NAMED_IAM` +
                            buildParamPairForStackCreation(args ? args : process.argv.slice(2));


        console.log('update command -> aws ', updateComand)
        console.log('updating..')

        const updateProcess = spawnSync('aws', updateComand.split(' '));
        if (updateProcess.error && updateProcess.error.toString('utf8')) {
            reject({sucess: false, error: updateProcess.error.toString('utf8')})
        }
        if (updateProcess.stderr && updateProcess.stderr.toString('utf8')) {
            reject({sucess: false, error: updateProcess.stderr.toString('utf8')})
        }
        if (updateProcess.stdout && updateProcess.stdout.toString('utf8')) {
            console.log(updateProcess.stdout.toString('utf8'))
            console.log('----update Initiated----')
            resolve({sucess: true, message: updateProcess.stdout.toString('utf8')})
        }
    });

}
module.exports = update; 