import mongoose from 'mongoose';

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://localhost:27017/employeeManagersDB');

// Export connection 
export default mongoose.connection;
