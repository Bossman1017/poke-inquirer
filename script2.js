var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: `input`,
        message:`Hi Trainer! What is your name?`,
        name:`trainerName`,
    },

    {
        type: `password`,
        message: `What is your password young tamer:`,
        name:`trainerPassword`,
    },

    {
        type: `list`,
        message: `Choose your partner Pokemon?`,
        choices: [`Charmander` , `Bulbasaur` , `Squirtle` , `Pikachu`, `Eevee`],
        name: `trainerChoice`,
    },
    
    {
        type: `confirm`,
        message: `Are you sure?`,
        default: true,
        name: `trainerConfirm`,
    },
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    if (answers.trainerConfirm) {
        console.log(`Hello ${answers.trainerName}, your ${answers.trainerChoice} is ready for an adventure!`)

    } else {
        console.log(`Thats ok ${answers.trainerName} come back when you're sure!`)

    }
  })
  .catch(error => {
      console.log(`Oops Dev.spider you broke something`)
    // if(error.isTtyError) {
    //   // Prompt couldn't be rendered in the current environment
    // } else {
    //   // Something else when wrong
    // }
  });

//   let login = () => {
//       console.log(`Logging in`);
//   };

//   login();