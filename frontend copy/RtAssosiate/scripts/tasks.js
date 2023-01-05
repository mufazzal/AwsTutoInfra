const validate = require('./validate');
const deploy = require('./deploy');
const pollEvent = require('./pollEvent');
const deleteStack = require('./delete');
const listResource = require('./listResources');
const describe = require('./describe');
const update = require('./update');



const args = process.argv.slice(2); 
doTask(args[0], args.slice(1));

function doTask (todo, taskArgs) {
    switch (todo) {
        case 'validate':
            validate(taskArgs);
        break;
        case 'deploy':
            validate(taskArgs)
            .then( res => deploy(taskArgs))
            .then( res => pollEvent(taskArgs))
            .then( res => describe(taskArgs))
            .catch( err => console.log(err))
        break;
        case 'update':
            validate(taskArgs)
            .then( res => update(taskArgs))
            .then( res => pollEvent(taskArgs))
            .then( res => describe(taskArgs))
            .catch( err => console.log(err))
        break;         
        case 'pollEvent':
            pollEvent(taskArgs)
            .then(res => console.log(res))
            .catch( err => console.log(err))
        break;        
        case 'delete':
            deleteStack(taskArgs)
            .then(res => console.log(res))
            .catch( err => console.log(err))
        break;            
        case 'listResource':
            listResource(taskArgs)
            .then(res => console.log(res))
            .catch( err => console.log(err))
        break;  
        case 'describe':
            describe(taskArgs)
            .then(res => console.log(res))
            .catch( err => console.log(err))
        break;            
            
        
        default:
            break;
    }
    
}

