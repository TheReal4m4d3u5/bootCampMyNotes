import mongoose from 'mongoose';
// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://localhost:27017/departmentsDB');
// Export connection 
export default mongoose.connection;
