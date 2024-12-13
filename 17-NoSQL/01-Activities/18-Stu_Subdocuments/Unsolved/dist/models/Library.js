import { Schema, model } from 'mongoose';
// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
});
const librarySchema = new Schema({
    name: { type: String, required: true },
    //
    // TODO: Add the `books` subdocument to the parent document as an array
    books: { type: [bookSchema], required: true }, // Embed the bookSchema as an array
    //
    lastAccessed: { type: Date, default: Date.now },
});
// TODO: Create a model named `Library`
const Library = model('Library', librarySchema);
// TODO: Create a new instance of the model including the subdocuments
const newLibrary = new Library({
    name: "City Library",
    books: [
        { title: "Book 1", price: 10.99 },
        { title: "Book 2", price: 15.99 },
        { title: "Book 3", price: 8.99 },
    ],
});
newLibrary.save()
    .then(() => console.log("Library with books saved successfully!"))
    .catch((error) => console.error("Error saving library:", error));
export default Library;
