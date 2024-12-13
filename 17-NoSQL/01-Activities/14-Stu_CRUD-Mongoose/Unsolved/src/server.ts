import express from 'express';
import db from './config/connection.js';
// Require model
import { Genre } from './models/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates a new document
app.post('/genres', (req, res) => {
  const newGenre = new Genre({ name: req.body.name });
  newGenre.save();
  if (newGenre) {
    res.status(200).json(newGenre);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

// Finds all documents
app.get('/genres', async (_req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await Genre.find({});
    res.status(200).json(result);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

// Find the first document that matches and return it.
app.get('/genres/:name', async (req, res) => {
  try {
    const result = await Genre.findOne({ name: req.params.name });
    res.status(200).json(result);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

// Finds the first document that matches and deletes it.
app.delete('/genres/:name', async (req, res) => {
  try {
    const result = await Genre.findOneAndDelete({ name: req.params.name });
    res.status(200).json(result);
    console.log(`Deleted: ${result}`);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

app.put('/genres/:name', async (req, res) => {
  // TODO: Write a route that finds the first document that matches the specified route parameter
  // and updates it using the name provided in the request body.
  // Return the updated document

  /*
    findOneAndUpdate is used to find the first document that matches the name parameter in the URL.
    The { new: true } option returns the updated document in the response.
    If the update is successful, the updated document is returned with a 200 status; otherwise, a 500 error is returned.
  */

  try {
    const updatedGenre = await Genre.findOneAndUpdate(

      //This part looks for a genre where the "name" field matches the name in the URL (like /genres/rock would use "rock" as the name).
      { name: req.params.name },
      //This part tells MongoDB to update that genre's name with the new name provided in the request body (req.body.name).
      { name: req.body.name },
      //This tells MongoDB to give back the updated version of the document, not the old one.
      { new: true } // Return the updated document
    );
    res.status(200).json(updatedGenre);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }


});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
