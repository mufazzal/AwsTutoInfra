#!/usr/bin/env node
const { spawnSync} = require('child_process');
const config = require('../config');



let listResourceTimer = null;

const listResource = (args) => {


    return new Promise((resolve, reject)=>{

        const [stackName] = args ? args : process.argv.slice(2) 
        const listResourceComand = `cloudformation list-stack-resources ` + 
                            `--stack-name ${stackName} `;
        
        console.log('List Resource command -> aws', listResourceComand)
        console.log('Getting Resources..')


        const listResourceProcess = spawnSync('aws', listResourceComand.split(' '));
        if (listResourceProcess.error && listResourceProcess.error.toString('utf8')) {
            console.error('error', listResourceProcess.error.toString('utf8'));
            reject({sucess: false, error: listResourceProcess.error.toString('utf8')})
        }
        if (listResourceProcess.stderr && listResourceProcess.stderr.toString('utf8')) {
            console.error('stderr', listResourceProcess.stderr.toString('utf8'));
            reject({sucess: false, error: listResourceProcess.stderr.toString('utf8')})
        }
        if (listResourceProcess.stdout && listResourceProcess.stdout.toString('utf8')) {
            resolve({sucess: true, message: listResourceProcess.stdout.toString('utf8')})
            updateEventArray(JSON.parse(listResourceProcess.stdout.toString('utf8')))
        }
    });

};
function updateEventArray({StackResourceSummaries: resList}) {
    for(var i = resList.length-1;i>=0;i--){
        const res = resList[i];
        const resListtr = `${res.ResourceType} <> ${res.LogicalResourceId} <> ${res.ResourceStatus} <> ${res.PhysicalResourceId}`
        console.log(resListtr)
    }
}

module.exports = listResource; 

