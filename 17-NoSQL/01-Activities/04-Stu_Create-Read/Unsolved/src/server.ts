import express from 'express';
// Run npm install mongodb and require mongodb and MongoClient class
import { MongoClient } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 3001;

// Connection string to local instance of MongoDB
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);

// Create variable to hold our database name
const dbName = 'inventoryDB';

// Use connect method to connect to the mongo server
await client.connect()
.catch(err => {console.log(err)});

const db = client.db(dbName);

// Built in Express function that parses incoming requests to JSON
app.use(express.json());

// Post request to create a single document to collection
app.post('/books', async (req, res) => {
  try {
    // TODO: Explain what the following MongoDB method does

    // insertOne book into bookCollection with a title and author
    const results = await db.collection('bookCollection').insertOne(
      { title: req.body.title, author: req.body.author }
    )
    
    // Sends results
    res.status(201).json(results);
  }
  catch (error) {
    // Handles error
    res.status(500).json({ error });
  }
});

// Post request to add multiple sample documents to collection
app.post('/books/seed', async (_req, res) => {
  try {
    // TODO: Explain what the following MongoDB method does

    // insert two books into bookCollection with a title and author
    const results = await db.collection('bookCollection').insertMany(
      [
        { "title": "Oh the Places We Will Go!" },
        { "title": "Diary of Anne Frank" }
      ]
    )

    // Sends results
    res.status(201).json(results);
  } catch (error) {
    // Handles error
    res.status(500).json({ error });
  }
});

// Get request to read all the documents in a collection


/*
db.collection('bookCollection'):

This specifies the MongoDB collection you want to work with, in this case, bookCollection. A collection is similar to a table in a relational database, and it stores multiple documents.
.find({}):

The find method is used to retrieve documents from the collection. The empty object {} passed as an argument means "no filter," so it will match and retrieve all documents in the bookCollection.
If you wanted to filter documents based on specific criteria, you could pass a filter object here, like { author: "John Doe" } to only get books by "John Doe."
.toArray():

toArray converts the results from the find query into an array. Since find returns a cursor (a pointer to the results), calling toArray ensures that all matching documents are retrieved and stored in an array format, which is easier to work with in JavaScript.
Putting it Together
This code retrieves all documents in the bookCollection collection and converts them into an array of objects (results). The array of documents is then sent as a JSON response to the client with a status of 200 (OK).

Error Handling
If an error occurs during the database operation, it will be caught by the catch block, and a 500 (Internal Server Error) response will be sent to the client, along with the error details in JSON format.

Let me know if you have any further questions!
*/

app.get('/books', async (_req, res) => {
  try {
    // TODO: Explain what the following MongoDB methods do
    // retrieves all documents from the bookCollection collection in MongoDB,
    // converts them into an array (results) making it easy to work with in JavaScript.
    const results = await db.collection('bookCollection')
      .find({})
      .toArray()

    // Sends results
    res.status(200).json(results);
  }
  catch (error) {
    // Handles error
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
