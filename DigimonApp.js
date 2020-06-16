var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: `input`,
        message:`What's your name young tamer?`,
        name:`tamerName`,
    },
    {
        type: `confirm`,
        message: `Are you sure?`,
        default: false,
        name: `tamerNameConfirm`,
    },
    
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });