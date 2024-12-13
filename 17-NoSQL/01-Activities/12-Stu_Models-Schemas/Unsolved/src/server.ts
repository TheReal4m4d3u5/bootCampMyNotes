import express from 'express';
import db from './config/connection.js';
// TODO: Add a comment describing the functionality of the code below
import { Book } from './models/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/books', async (_req, res) => {
  try {
     // TODO: This code queries all documents in the Book collection using Book.find({}),
    // retrieves an array of all books, and sends it back as a JSON response with an HTTP 200 status to the client.
    const result = await Book.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

await db;

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});

