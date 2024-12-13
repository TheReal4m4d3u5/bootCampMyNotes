// Import schema and model from mongoose
import { Schema, model } from 'mongoose';
// TODO: Add a comment describing the functionality of the code below
// Defines a Mongoose schema called `bookSchema` for the `IBook` interface, specifying the structure of a book document in the MongoDB database.
// Each field is defined with its type and any additional requirements or default values, such as `title` (required), `author` (optional),
// and `lastAccessed` (defaults to the current date and time).
const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: false },
    publisher: String,
    stockCount: Number,
    price: Number,
    inStock: Boolean,
    lastAccessed: { type: Date, default: Date.now },
});
// TODO: This code defines a Mongoose model named 'Book' based on the bookSchema, which represents the structure of a Book document in the MongoDB database.
// This model will be used to create, read, update, and delete Book documents in the database.
const Book = model('Book', bookSchema);
// TODO: This code creates a new Book document in the database with specified fields for title, author, publisher, stock count, price, and stock availability. 
// If the creation is successful, it logs the created document; otherwise, it logs any errors that occur.
Book
    .create({
    title: 'Diary of Anne Frank',
    author: 'Anne Frank',
    publisher: 'Scholastic',
    stockCount: 10,
    price: 10,
    inStock: true,
})
    .then(result => console.log('Created new document', result))
    .catch(err => console.log(err));
// TODO: Add a comment describing the difference between this instance being created and the instance that was created above
// This code creates a new document in the `Book` collection using the `Book` model, inserting a book titled 'Oh the Places You Will Go!' by 'Dr. Seuss'.
// Unlike defining the `Book` model instance earlier, which sets up the structure of the collection, this code actually inserts an individual document into the database.
Book
    .create({
    title: 'Oh the Places You Will Go!',
    author: 'Dr. Seuss'
})
    .then(result => console.log('Created new document', result))
    .catch(err => console.log(err));
// TODO: Add a comment describing the difference between this instance being created and the instance that was created above
// This code creates another new document in the `Book` collection, this time with only the `title` field specified as 'Harold and the Purple Crayon'.
// Unlike the previous instance where both `title` and `author` were provided, this document only includes the `title`, allowing optional fields like `author` to be left undefined.
Book
    .create({ title: 'Harold and the Purple Crayon' })
    .then(result => console.log('Created new document', result))
    .catch(err => console.log(err));
export default Book;
