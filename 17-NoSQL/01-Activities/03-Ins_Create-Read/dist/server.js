import express from 'express';
// Run npm install mongodb and require mongodb and MongoClient class
import { MongoClient, ObjectId } from 'mongodb';
const app = express();
const PORT = process.env.PORT || 3001;
// Connection string to local instance of MongoDB
const connectionStringURI = `mongodb://127.0.0.1:27017`;
// Initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);
// Create variable to hold our database name
const dbName = 'shelterDB';
// Use connect method to connect to the mongo server
await client.connect()
    .catch(err => { console.log(err); });
const db = client.db(dbName);
// Built in Express function that parses incoming requests to JSON
app.use(express.json());
app.post('/pets', async (req, res) => {
    try {
        // Use db connection to add a document
        const results = await db.collection('petCollection').insertOne({ name: req.body.name, breed: req.body.breed });
        res.status(201).json(results);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
app.get('/pets', async (_req, res) => {
    try {
        // Use db connection to find all documents in collection
        const results = await db.collection('petCollection')
            .find()
            .toArray();
        res.status(200).json(results);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
app.delete('/pets/:id', async (req, res) => {
    try {
        const petId = new ObjectId(req.params.id);
        // Validate if `id` is a valid ObjectId
        if (!ObjectId.isValid(petId)) {
            return res.status(400).json({ error: 'Invalid pet ID' });
        }
        const result = await db.collection('petCollection').deleteOne({ _id: petId });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Pet not found' });
        }
        else {
            return res.status(200).json({ message: 'Pet deleted successfully' });
        }
    }
    catch (error) {
        return res.status(500).json({ error: 'Failed to delete pet', details: error });
    }
});
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
