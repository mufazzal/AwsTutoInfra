#!/usr/bin/env node
const { spawnSync} = require('child_process');
const {config, getStackName} = require('../config');

const describe = (args) => {

    return new Promise((resolve, reject)=>{

        const describeComand = `cloudformation describe-stacks ` + 
                            `--stack-name ${getStackName(args)} `;

        console.log('describe command -> aws ', describeComand)
        console.log('Getting info..')

        const describeProcess = spawnSync('aws', describeComand.split(' '));

        if (describeProcess.error && describeProcess.error.toString('utf8')) {
            reject({sucess: false, error: describeProcess.error.toString('utf8')})
        }
        if (describeProcess.stderr && describeProcess.stderr.toString('utf8')) {
            reject({sucess: false, error: describeProcess.stderr.toString('utf8')})
        }
        if (describeProcess.stdout && describeProcess.stdout.toString('utf8')) {
            console.log(describeProcess.stdout.toString('utf8'))
            console.log('---describe Successful---')
            resolve({sucess: true, message: describeProcess.stdout.toString('utf8')})
        }
    });

}
module.exports = describe; 