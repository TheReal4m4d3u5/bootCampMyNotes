import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';

const writeToAfile = (data) => {
    fs.writeFile(`index.html`, data, (err) => {
        err ? console.error(err) : console.info("Written to file.")
    });
}

inquirer
  .prompt([
    {
        message: 'What is your name',
        name: 'yourName',
        type: 'input',
    },    
    {
        message: 'What is your location?',
        name: 'location',
        type: 'input',
    },
    {
        message: 'bio',
        name: 'bio',
        type: 'input',
    },
    {
        message: 'LinkedIn URL',
        name: 'linkedInURL',
        type: 'input',
    },
    {
        message: 'Github URL',
        name: 'githubURL',
        type: 'input',
    },
  ])
  .then(({yourName, location, bio, linkedInURL, githubURL}) => {

    const data = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="description" content="Webpage description goes here" />
  <meta charset="utf-8">
  <title>Change_me</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>





</body>
</html>`;
    
    writeToAfile(data);

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });