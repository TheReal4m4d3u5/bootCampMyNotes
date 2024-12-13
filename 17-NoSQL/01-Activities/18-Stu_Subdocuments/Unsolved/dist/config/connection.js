import mongoose from 'mongoose';
// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://localhost:27017/libraryDB');
// Export connection
export default mongoose.connection;
