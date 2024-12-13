import Thought from '../models/Thought.js';
export const addComment = async (req, res) => {
    const { id } = req.params;
    const { commentText } = req.body;
    try {
        const newComment = await Thought.findOneAndUpdate({ _id: id }, {
            $addToSet: { comments: { commentText } },
        }, {
            new: true,
            runValidators: true
        });
        res.status(200).json(newComment);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
