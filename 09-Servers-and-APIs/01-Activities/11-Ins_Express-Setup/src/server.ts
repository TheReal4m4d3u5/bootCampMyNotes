// Import Express.js
import express, { type Request, type Response } from 'express';

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize an instance of Express.js
const app = express(); // gives us access to app.get or app.put methods

// Specify on which port the Express.js server will run
const PORT = 3001;


// Static middleware pointing to the public folder
app.use(express.static('public')); // runs between client request and its passed along to the route handle 
//we can then work with the req and res objects to modify and read the customized them as needed

//app.use(express.static('public')); first fofills the request and gets a responce to app.get('/', (_req: Request, res: Response) => res.send('Navigate to /send or /routes')) is never executed

// Create Express.js routes for default '/', '/send' and '/routes' endpoints
//get route
app.get('/', (_req: Request, res: Response) => res.send('Navigate to /send or /routes'));

//get route
app.get('/send', (_req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, '../public/sendFile.html'))
);

//routes route
app.get('/routes', (_req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, '../public/routes.html'))
);

// listen() method is responsible for listening for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
