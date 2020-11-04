const { add } = require('./add')
const { subtract } = require('./subtract')

const args = process.argv.slice(2)
const arg1 = parseInt(args[0])
const arg2 = parseInt(args[1])

const inquirer = require('inquirer')
const question = [
    {
        type:'input',
        name:'operations',
        message:"add | subtract"
    }
]

inquirer.prompt(question)
.then(ans => {
    switch (ans.operations) {
        case "add":
            add(arg1, arg2)
            break;

        case "subtract":
            subtract(arg1, arg2)
            break;
    
        default:
            console.log("Unknow operator");
            break;
    }
})