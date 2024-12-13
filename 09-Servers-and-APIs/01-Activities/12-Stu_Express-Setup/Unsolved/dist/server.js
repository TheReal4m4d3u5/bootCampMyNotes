import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// TODO: Create an instance of the Express.js server and assign it to a variable called 'app'
const app = express();
const PORT = 3001;
// TODO: Invoke app.use() to serve static files from the 'public' folder
app.use(express.static('public'));
app.get('/', (_req, res) => res.send('Navigate to /send or /paths')); //not needed
app.get('/send', (_req, res) => res.sendFile(path.join(__dirname, '../public/send.html')));
// TODO: Create a new route for the '/paths' endpoint that sends the 'paths.html' file
app.get('/paths', (_req, res) => //_req the _ says we are not going to use it
 res.sendFile(path.join(__dirname, '../public/paths.html')));
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));



