import express, { type Request, type Response } from 'express';

const app = express();
const PORT = 3001;

// res.routing 

// We can send a body parameter to the client using the res.send() method. This body parameter can be a string, buffer, or even an array.
app.get('/', (_req: Request, res: Response) => {
  res.send(
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
  );
});


// This method sends a JSON response with the correct content type.
app.get('/api', (_req: Request, res: Response) => {  // /api/term - expexting term data express route handler 
  return res.json({ //returng the responce to client (json object as responce)
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});

// go over this???????????

app.get('/api/terms', (_req: Request, res: Response) => {  // /api/term - expexting term data express route handler 
  return res.json({ //returng the responce to client (json object as responce)
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});



// look at recording ??????????????????????????????
// // - get back htm
// app.get('/terms'); 
// app.get('/')

// //gets back json 
// app.get('/api')


// ./src/terms.json 
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





app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
