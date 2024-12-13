import { Schema, model, Document } from 'mongoose';

// TODO: Create an interface for the bookSchema

interface IBook extends Document {
    title: string;
    author: string;
    price: number;
    getDiscount: () => void;
  }

// TODO: Define a new schema named `bookSchema`
const bookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
  });

// TODO: Create a custom instance method named `getDiscount`
//arrow methods not allowed
// If you use an arrow function it defines the scope to global bookSchema.methods.getDiscount
// and will no longer point to the schema this. Arrow functions are not used in 3 places.  
bookSchema.methods.getDiscount = function () {
    const discountedPrice = this.price * 0.5;
    console.log(`The discounted price of "${this.title}" is $${discountedPrice.toFixed(2)}`);
  };

// TODO: Create a model named `Book`
const Book = model<IBook>('Book', bookSchema);

// TODO: Create a new instance of the model
const discountedBook = new Book({
    title: 'Learning Mongoose',
    author: 'Avery Jacobson',
    price: 20.0,
  });

// TODO: Call the custom instance method on the in
discountedBook.getDiscount();

export default Book;
