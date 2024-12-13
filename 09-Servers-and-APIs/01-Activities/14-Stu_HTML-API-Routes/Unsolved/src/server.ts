// TODO: import express
import express, { type Request, type Response } from 'express';
// Import the JSON data

import { readFileSync } from 'node:fs';
const termData = JSON.parse(readFileSync('src/terms.json', 'utf8'));

// TODO: initialize app variable
const app = express();
const PORT = 3001;

// TODO: Create a route for a GET request that will return the content of our `terms.json` file


interface Term{

  term: string,
  definition: string,
  url: string,

}



app.get('/api/terms/:termsName?', (req: Request, res: Response) => {  // /api/term - expexting term data express route handler  /api/terms/:termsName? makes optional

  //if you cannot find a term then return the entire array
  if(!req.params.termsName){
    return res.json(termData);
  }

  const requestedTerm = req.params.termsName.toLowerCase();

  const term = termData.find((term: Term) => term.term.toLowerCase() === requestedTerm )

  if (term){
    return res.json(term);
  }

  return res.json('No match found');

});


// ./src/terms.json finds all terms
// [
//   {
//     "term": "SEO",
//     "definition": "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic.",
//     "url": "https://en.wikipedia.org/wiki/Search_engine_optimization"
//   },
//   {
//     "term": "API",
//     "definition": "An application programming interface, is a computing interface that defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc",
//     "url": "https://en.wikipedia.org/wiki/API"
//   },
//   {
//     "term": "REST",
//     "definition": "Stands for Representational State Transfer. This term is usually used in the context of describing an API where requests are made to a URI and a response is given in the form of HTML, XML, JSON, or some other format",
//     "url": "https://en.wikipedia.org/wiki/Representational_state_transfer"
//   }
// ]


app.get('*', (req: Request, res: Response) => {  

  return res.send("<a href='/api/term'>Click here to view the list of terms. </a>")
})


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


// http://localhost:3001/api/terms