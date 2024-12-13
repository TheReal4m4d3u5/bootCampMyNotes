import { Schema, model, Document } from 'mongoose';

// TODO: Define an interface for the `bookSchema` subdocument 
interface IBook {
  title: string;
  price: number;
}

interface ILibrary extends Document {
  name: string;
  books: IBook[];
  lastAccessed?: Date;
}

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
});


const librarySchema = new Schema<ILibrary>({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  books: { type: [bookSchema], required: true },  // Embed the bookSchema as an array
  //
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = model('Library', librarySchema);

// TODO: Create a new instance of the model including the subdocuments
const newLibrary = new Library({
  name: {type: String, required: true},
  books: [bookSchema],
  lastAccessed: {type: DataTransfer, default: Date.now}
});

newLibrary.save()
  .then(() => console.log("Library with books saved successfully!"))
  .catch((error) => console.error("Error saving library:", error));

export default Library;
