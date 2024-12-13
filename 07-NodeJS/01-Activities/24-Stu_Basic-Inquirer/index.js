import inquirer from 'inquirer';

inquirer
  .prompt([
   
    {
        message: 'What text would you like to log?',
        name: 'whatText',
        type: 'input'
    },
    {
        message: 'What color would you like to use?',
        name: 'color',
        type: 'list',
        choices: [
            {
                name: 'Red',
                value: 'red'
            },
            {
                name: 'Blue',
                value: 'blue'
            },
            {
                name: 'Green',
                value: 'green'
            },
            {
                name: 'Yellow',
                value: 'yellow'
            },
            {
                name: 'Cyan',
                value: 'cyan'
            },
            {
                name: 'Magenta',
                value: 'magenta'
            }

        ]
    }

  ])
  .then((answers) => {
     console.log('here ' + colors[answers.color](answers.whatText))
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });