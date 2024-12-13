// TODO: What are we importing?
// importing fs from module
import fs from 'fs';

// TODO: Add comments to explain each of the three arguments of appendFile()
// log.txt is the file being appened to, if doesn't exist create the file
// `${process.argv[2]}\n` what arguments we are taking from the user to append
// last argument is a call back funtion 
  // (err) if the file system sees an error
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // if an error message is shown console log error else log commit 
  err ? console.error(err) : console.log('Commit logged!')
);
