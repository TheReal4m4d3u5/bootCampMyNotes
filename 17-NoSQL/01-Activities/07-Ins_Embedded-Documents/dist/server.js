import express from 'express';
import { MongoClient } from 'mongodb';
import data from './models/data.js';
const app = express();
const PORT = process.env.PORT || 3001;
const connectionStringURI = `mongodb://127.0.0.1:27017`;
const client = new MongoClient(connectionStringURI);
const dbName = 'groceryListDB';
await client.connect()
    .catch(err => { console.log(err); });
const db = client.db(dbName);
async function seedDB() {
    try {
        // Drops any documents, if they exist
        await db.collection('groceryList').deleteMany({});
        // Adds data to database
        const res = await db.collection('groceryList').insertMany(data);
        console.log(res);
    }
    catch (err) {
        const MongoClientError = err;
        console.error('Mongo connection error: ', MongoClientError.message);
    }
}
await seedDB();
app.use(express.json());
app.get('/groceries', async (_req, res) => {
    try {
        const results = await db.collection('groceryList').find({}).toArray();
        res.status(200).json(results);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch groceries' });
    }
});
// This will return any documents with embedded documents that match
app.get('/groceries/sale-over-30', async (_req, res) => {
    try {
        const results = await db.collection('groceryList')
            // Use dot notation for embedded document
            // $gte specifies we want percentage discounts greater than 30
            .find({ 'promotion.percentage_discount': { $gte: 30 } })
            .toArray();
        res.status(200).json(results);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
