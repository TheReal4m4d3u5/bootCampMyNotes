import mongoose from 'mongoose';

// Wrap Mongoose around local connection to MongoDB
export default mongoose.connect('mongodb://localhost:27017/libraryDB');

