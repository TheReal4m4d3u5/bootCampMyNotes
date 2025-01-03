import { Schema, model } from 'mongoose';
const genreSchema = new Schema({
    name: { type: String, required: true },
    lastAccessed: { type: Date, default: Date.now },
});
const Genre = model('Genre', genreSchema);
// Will add data only if collection is empty to prevent duplicates
// More than one document can have the same name value
Genre.find({})
    .exec()
    .then(collection => {
    if (collection.length === 0) {
        Genre
            .insertMany([
            { name: 'Kids' },
            { name: 'Kids' },
            { name: 'Kids' },
            { name: 'Romance' },
            { name: 'Mystery' },
            { name: 'Contemporary' },
            { name: 'Biography' },
        ])
            .catch(err => console.log(err));
    }
});
export default Genre;
