import { Thought } from '../models/index.js';
const cleanDB = async () => {
    try {
        await Thought.deleteMany({});
        console.log('Thought collection cleaned.');
    }
    catch (err) {
        console.error('Error cleaning collections:', err);
        process.exit(1);
    }
};
export default cleanDB;
