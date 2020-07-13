#!/usr/bin/env node
const { spawnSync} = require('child_process');
const {config, getStackName} = require('../config');

let pollTimer = null;

const pollEvent = (args) => {

    return new Promise((resolve, reject)=>{

        const stackName = getStackName(args);
        const pollComand = `cloudformation describe-stack-events ` + 
                            `--stack-name ${stackName} `;
        
        console.log('polling command -> aws ', pollComand)
        console.log('polling..')

        const eventArray = [];

        runPollCommand(pollComand, eventArray, stackName, resolve, reject);
        pollTimer = setInterval(() => {
            runPollCommand(pollComand, eventArray, stackName, resolve, reject);
        }, 10 * 1000);
    });
};

function runPollCommand(pollComand, eventArray, stackName, resolve, reject) {
    console.log('requesting for latest events..')

    const pollProcess = spawnSync('aws', pollComand.split(' '));
    if (pollProcess.error && pollProcess.error.toString('utf8')) {
        console.error('error', pollProcess.error.toString('utf8'));
        reject({sucess: false, error: pollProcess.error.toString('utf8')})
    }
    if (pollProcess.stderr && pollProcess.stderr.toString('utf8')) {
        console.error('stderr', pollProcess.stderr.toString('utf8'));
        reject({sucess: false, error: pollProcess.stderr.toString('utf8')})
    }
    if (pollProcess.stdout && pollProcess.stdout.toString('utf8')) {
        updateEventArray(JSON.parse(pollProcess.stdout.toString('utf8')), 
            eventArray, stackName, resolve, reject)
    }
}

function updateEventArray({StackEvents: events}, eventArray, stackName, resolve, reject) {
    for(var i = events.length-1;i>=0;i--){
        const ev = events[i];
        const eventStr = `${ev.ResourceType} <> ${ev.LogicalResourceId} <> ${ev.ResourceStatus}`
        if(!eventArray.includes(eventStr)) {
            eventArray.push(eventStr)
            console.log(eventStr)
            if(isLastEvent(ev, stackName, resolve, reject) && pollTimer) {
                clearInterval(pollTimer);
            }
        }
    }
}
function isLastEvent(ev, stackName, resolve, reject) {
    if(ev.ResourceType === 'AWS::CloudFormation::Stack' && 
        ev.LogicalResourceId === stackName && 
            (ev.ResourceStatus === 'ROLLBACK_COMPLETE' || ev.ResourceStatus === 'CREATE_COMPLETE')) {
            if(ev.ResourceStatus === 'ROLLBACK_COMPLETE') {
                console.log('---------Deployment unsuccessful! Rollback finished--------------')
                reject({sucess: false, error: "Some Error occure"});
            }
            else if(ev.ResourceStatus === 'CREATE_COMPLETE') {
                console.log('---------Deployment Successful--------------')
                resolve({sucess: true, message: "Deployment successful"});
            }
        return true;
    }
    return false;
}

module.exports = pollEvent; 

