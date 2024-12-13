import Thought from '../models/Thought.js';
export const getAllThoughts = async (_req, res) => {
    try {
        const thoughts = await Thought.find().sort({ createdAt: -1 });
        res.json(thoughts);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
export const getSingleThought = async (req, res) => {
    const { id } = req.params;
    try {
        const thought = await Thought.findOne({ _id: id });
        if (thought) {
            res.json(thought);
        }
        else {
            res.status(404).json({ message: 'Thought not found' });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
export const createThought = async (req, res) => {
    const { thoughtText, thoughtAuthor } = req.body;
    try {
        const newThought = await Thought.create({
            thoughtText,
            thoughtAuthor
        });
        res.status(201).json(newThought);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
