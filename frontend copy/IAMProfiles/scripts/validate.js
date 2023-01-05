#!/usr/bin/env node
const { spawnSync} = require('child_process');
const {config} = require('../config');

const validate = () => {

    return new Promise((resolve, reject)=>{
    
        const validateComand = `cloudformation validate-template ` + 
            `--template-body file://${config.tmpFile} `;

        console.log('validation command -> aws ', validateComand)
        console.log('validating..')
    
        const validateProcess = spawnSync('aws', validateComand.split(' '));
        if (validateProcess.error && validateProcess.error.toString('utf8')) {
            reject({sucess: false, error: validateProcess.error.toString('utf8')})
        }
        if (validateProcess.stderr && validateProcess.stderr.toString('utf8')) {
            reject({sucess: false, error: validateProcess.stderr.toString('utf8')})
        }
        if (validateProcess.stdout && validateProcess.stdout.toString('utf8')) {
            console.log(validateProcess.stdout.toString('utf8'))
            console.log('----------Validation successful----------')
            resolve({sucess: true, message: validateProcess.stdout.toString('utf8')})
        }

    })

}

module.exports = validate; 