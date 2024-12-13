import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';

const writeToAfile = (data) => {
    fs.writeFile(`text.txt`, data, (err) => {
        err ? console.error(err) : console.info("Written to file.")
    });
}

inquirer
  .prompt([
    {
        message: colors.bgBrightMagenta('What is your name'),
        name: 'yourName',
        type: 'input',
    },    
    {
        message: colors.bgBrightMagenta('What languages do you know?'),
        name: 'languages',
        type: 'input',
    },
    {
        message: colors.bgBrightMagenta('What is your preferred method of communication?'),
        name: 'communication',
        type: 'input',
    },

  ])
  .then(({yourName, languages, communication}) => {

    const data = `my name is ${yourName}, the languages I know are ${languages} and 
    my preferred method of communication is ${communication}`;
    
    writeToAfile(data);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




    
