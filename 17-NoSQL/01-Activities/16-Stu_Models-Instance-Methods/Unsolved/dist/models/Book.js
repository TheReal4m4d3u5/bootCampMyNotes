import { Schema, model } from 'mongoose';
// TODO: Define a new schema named `bookSchema`
const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
});
// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
    const discountedPrice = this.price * 0.5;
    console.log(`The discounted price of "${this.title}" is $${discountedPrice.toFixed(2)}`);
};
// TODO: Create a model named `Book`
const Book = model('Book', bookSchema);
// TODO: Create a new instance of the model
const discountedBook = new Book({
    title: 'Learning Mongoose',
    author: 'Avery Jacobson',
    price: 20.0,
});
// TODO: Call the custom instance method on the in
discountedBook.getDiscount();
export default Book;
