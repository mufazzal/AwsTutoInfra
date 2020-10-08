#!/usr/bin/env node
const { spawnSync} = require('child_process');
const {config, getStackName} = require('../config');

const deleteStack = (args) => {

    return new Promise((resolve, reject)=>{

        const deleteComand = `cloudformation delete-stack ` + 
                            `--stack-name ${getStackName(args)} `;

        console.log('delete command -> aws ', deleteComand)
        console.log('deleteing..')

        const deleteProcess = spawnSync('aws', deleteComand.split(' '));

        if (deleteProcess.error && deleteProcess.error.toString('utf8')) {
            reject({sucess: false, error: deleteProcess.error.toString('utf8')})
        }
        if (deleteProcess.stderr && deleteProcess.stderr.toString('utf8')) {
            reject({sucess: false, error: deleteProcess.stderr.toString('utf8')})
        }
        if (deleteProcess.stdout && deleteProcess.stdout.toString('utf8')) {
            console.log(deleteProcess.stdout.toString('utf8'))
            console.log('---Delete Successful---')
            resolve({sucess: true, message: deleteProcess.stdout.toString('utf8')})
        }
    });

}
module.exports = deleteStack; 