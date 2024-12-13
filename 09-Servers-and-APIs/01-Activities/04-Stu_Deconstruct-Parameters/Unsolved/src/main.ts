import './style.css';

// Explain each parameter in comments below.
const REQUEST_URL =
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'; // we want to use match the endpoint to the closest in documentation 

fetch(REQUEST_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });



   // path parameters
  // Code samples for "List repository issues"
// "List repository issues"

// /repos/{owner}/{repo}/issues

// https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-issues-assigned-to-the-authenticated-user

//what is the goal of per_page

// what is the goal of state? - if has a default value does not need to be declared  Default: open
// what is the goal of sort - 
// sort string
// What to sort results by.

// Default: created

// Can be one of: created, updated, comments


// what is the goal of direction 

// direction string
// The direction to sort the results by.

// Default: desc

// Can be one of: asc, desc